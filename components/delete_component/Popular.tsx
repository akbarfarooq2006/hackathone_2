'use client'
import React from 'react'
import CategoryHeader from '../header/CategoryHeader';
import { client } from '@/sanity/lib/client';
import { products } from '@/types/products';
import Cards from '../mini/Cards';
import { useState,useEffect } from 'react';

// async  function getData() {
//   const query = `*[_type =='products' && "popular" in tags ] {
//    name,
//    id,
//    _id,
//    name,
//    islike,
//    description,
//    available,
//    type,
//    fuelCapacity,
//    transmission,
//    seatingCapacity,
//    pricePerDay,
//    image,
//    tags,
//  }`;

//  const res:products[] = await client.fetch(query)
//  return res
// }


const Popular =  () => {
 

  const [data, setData] = useState([]);//here popular tag data will be stored
  const [error, setError] = useState("");
  const [islike, setislike] = useState<boolean>(false);

  async function fetchData() {
    try {
      const res = await fetch("/api/popularData");
      const result = await res.json();
      setData(result.data);
      console.log(result.data,'useeffect data received');
    } catch (err) {
      setError("Failed to fetch data");
    }
  }
  useEffect(() => {
    fetchData();
  }, [islike]);

  if (error) return <p>{error}</p>;


  const handlecallfunction = (value: boolean) => {
    setislike(value);
    fetchData();
  };


  

  // const data:products[] = await getData()
  // console.log(data, 'data')

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
              <Cards key={items._id}  item={items}  update={handlecallfunction}/>
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
