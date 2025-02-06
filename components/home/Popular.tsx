'use client'
import React from 'react'
import CategoryHeader from '../header/CategoryHeader';
import { client } from '@/sanity/lib/client';
import { products } from '@/types/products';
import Cards from '../mini/Cards';
import { useState,useEffect } from 'react';
import { useLikeContext } from '@/app/context/LikeContext';
import PageLoader from '../loader/PageLoader';

const Popular =  () => {
 const {liked,count} =useLikeContext();
 

  const [data, setdata] = useState([]);//here popular tag data will be stored
  const [error, setError] = useState("");
  const [loading, setloading] = useState<boolean>(true);

  async function fetchData() {
    try {
      // setloading(true);
      const res = await fetch("/api/popularData");
      const result = await res.json();
      if(result.data){
        setdata(result.data)
      }
      if(data){

        setloading(false);
      }
      // setdata(result.data);
      if (data) {
        console.log(data,"🎉🎉");
      }
    } catch (err) {
      setError("Failed to fetch data");
    }
  }

  useEffect(() => {
    fetchData();
    console.log('popular ka render check😜😜')
  }, [liked]);
if (error) return <p>{error}</p>;


  return (
<>
<div className={`mt-7 w-full relative ${loading?("min-h-[40vh] "):""}  `}>
    <div className='container flex flex-col gap-y-5'>
        <CategoryHeader 
        head='popular' 
        link='view all'
        />
        {/* all cards */}
        <div className='grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2  gap-5  '>
           {data.map((items:products) =>{
            return(
              <Cards key={items._id}  item={items} />
            )
           }
           )}
        </div>

    </div>
    {
      loading ?(<div className={`set `}>
          <PageLoader/>
      </div>):""
    } 
  
 </div>

</>
)

}

export default Popular;
