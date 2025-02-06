'use client'
import React from 'react'
import CategoryHeader from '../header/CategoryHeader';
import { client } from '@/sanity/lib/client';
import { products } from '@/types/products';
import Cards from '../mini/Cards';
import { useState,useEffect } from 'react';
import { useLikeContext } from '@/app/context/LikeContext';

const Popular =  () => {
 const {liked,count} =useLikeContext();
 

  const [data, setdata] = useState([]);//here popular tag data will be stored
  const [error, setError] = useState("");
  // const [islike, setislike] = useState<boolean>(false);

  async function fetchData() {
    try {
      const res = await fetch("/api/popularData");
      const result = await res.json();
      if(result.data){
        setdata(result.data)
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
  }, [liked,count]);
if (error) return <p>{error}</p>;


  return (
<>
 <div className='mt-7 w-full'>
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
 </div>

</>
)

}

export default Popular;
