import React,{useContext, useEffect,useState} from 'react'
import client from '../../Sanity/sanity';
import moment from 'moment';
import Link from 'next/link';
import { GlobalData } from '../_app';

function TopNews() {
    const [News, setNews] = useState([])
    const {Article, setArticle} = useContext(GlobalData)

    useEffect(() => {
        client.fetch(`
        *[_type == 'news']{
          _id,
            excerpt,
            categories,
            "imageUrl": mainImage.asset->url,
            
            publishedAt,
           author,
            title,
            slug
          }
        `).then((data)=>{
         console.log(data)
         setNews(data)
        })
       }, [])
       
  return (
    <>
   <div className='  flex flex-col gap-2 w-full '>

   {News.slice(0,4).map((f)=>{

const displayText = f.title.substring(0, 90) + "...";
const ElId = f._id


     return(
       
   <Link onClick={()=>{setArticle(f._id)}}  href="/cnews"  as={`/cnews/${ElId}`} >
<div className='h-auto '>


       <div className='  h-auto bg-white  shadow-md hover:shadow-xl hover:transform hover:scale-100 duration-300 rounded-md w-full px-2 flex justify-between flex-row md:px-10 py-4 relative'>

<div className='w-full flex flex-col justify-between h-full '>
<h1 className='text-[#212121] text-base  Hd sm:text-[15px] md:text-lg  md:Laato'>{displayText}</h1>
<p className=" text-[10px] lg:text-[14px]  w-full     font-semibold  text-gray-400  absolute bottom-1 ">Updated on {moment(f.publishedAt).format('dddd, MMMM Do YYYY')}</p>

</div>
<img className='h-[84px] w-[113px] rounded-md' src={f.imageUrl} />

      




      </div>
      
     
      </div>

   </Link>

    )
  })}
  </div>
    </>
  )
}

export default TopNews