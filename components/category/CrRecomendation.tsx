'use client'
import React,{useState,useEffect} from 'react'
import CategoryHeader from '../header/CategoryHeader'
import Card from '../delete_component/Card'
import Link from 'next/link'
import { client } from '@/sanity/lib/client';
import Cards from '../mini/Cards';
import { products } from '@/types/products';
import { useLikeContext } from '@/app/context/LikeContext';
import PageLoader from '../loader/PageLoader'

const CrRecomendation = () => {
    
  const {liked} =useLikeContext();
  const [data, setData] = useState([]);//here popular tag data will be stored
  const [error, setError] = useState("");
  const [loading, setloading] = useState<boolean>(true);

  async function fetchData() {
    try {
      setloading(true);
      const res = await fetch("/api/recomendationData");
      const result = await res.json();
      setData(result.data);
       setloading(false);
      // if(data.length > 0){
      //   setloading(false);
      // }
    } catch (err) {
      setError("Failed to fetch data");
    }
  }
  useEffect(() => {
    fetchData();
  }, [liked]);

  if (error) return <p>{error}</p>;



  return (
<>
<div className='w-full  mb-10 relative'>
    <div className='container pt-5 flex flex-col gap-y-5 relative'>
        <CategoryHeader
        head='Categories'
        />
        {/* all cards */}
        <div className='grid lg:grid-cols-3  mid:grid-cols-2 md:grid-cols-1  sm:grid-cols-2 gap-5 '>
            {
                data.map((item:products)=>{
                    return(
                        <Cards key={item._id} item={item}/>
                    )
                })
            }
        </div>


    <div className={`w-full flex items-center justify-center mt-4  `}>
        <Link href={'/categories'} className={`bg-button1 capitalize text-secondary font-semibold sm:px-4 sm:py-2 px-3 py-1.5 rounded md:text-base text-sm  hover:scale-105 down grid place-items-center hover:bg-button1/85 transform-gpu  overflow-hidden
           ${loading ? "hidden" : "inline-block"}`}>
        Show more cars
        </Link>
    </div>
  
 
  </div>
  {/* loader */}
  <div className='h-[90vh] absolute top-0 w-full grid place-items-center -z-50'>
  {
    loading?<PageLoader/>:""
  }
  </div>


  
</div>
</>
)
}

export default CrRecomendation;
