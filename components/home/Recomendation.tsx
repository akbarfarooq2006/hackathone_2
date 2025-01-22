import React from 'react'
import CategoryHeader from '../header/CategoryHeader'
import Card from '../delete_component/Card'
import Link from 'next/link'
import { client } from '@/sanity/lib/client';
import Cards from '../mini/Cards';
import { products } from '@/types/products';



export async  function getData() {
   const query = `*[_type =='products' && "recommended" in tags ] {
   name,
    id,
    _id,
    name,
    description,
    available,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    image,
    tags,
  }`;
  const res = await client.fetch(query)
  return res
}

const Recomendation = async() => {

const data:products[] = await getData();


  return (
<>
<div className='w-full mt-7 mb-10'>
    <div className='container flex flex-col gap-y-5'>
    <CategoryHeader 
        head='recomendation car' 
        className='hidden'
        />

        
        {/* all cards */}
        <div className='grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4   gap-5 '>
            {
                data.map((item:products)=>{
                    return(
                        <Cards key={item._id} item={item}/>
                    )
                })
            }
        </div>


    <div className='w-full flex items-center justify-center mt-4'>
        <Link href={'/categories'} className='bg-button1 capitalize text-secondary font-semibold sm:px-4 sm:py-2 px-3 py-1.5 rounded md:text-base text-sm  hover:scale-105 down grid place-items-center hover:bg-button1/85 transform-gpu  overflow-hidden'>
        Show more cars
        </Link>
    </div>




    </div>
</div>
</>
)
}

export default Recomendation;
