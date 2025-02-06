'use client'
import React,{useState,useEffect} from 'react'
import CategoryHeader from '../header/CategoryHeader'
import Card from '../delete_component/Card'
import Link from 'next/link'
import { client } from '@/sanity/lib/client';
import Cards from '../mini/Cards';
import { products } from '@/types/products';
import { useLikeContext } from '@/app/context/LikeContext';

const Recomendation = () => {
    
  const {liked} =useLikeContext();
  const [data, setData] = useState([]);//here popular tag data will be stored
  const [error, setError] = useState("");
  const [islike, setislike] = useState<boolean>(false);

  async function fetchData() {
    try {
      const res = await fetch("/api/recomendationData");
      const result = await res.json();
      setData(result.data);
      // console.log(result.data,'useeffect data received');
    } catch (err) {
      setError("Failed to fetch data");
    }
  }
  useEffect(() => {
    fetchData();
  }, [liked]);

  if (error) return <p>{error}</p>;


  const handlecallfunction = (value: boolean) => {
    setislike(value);
    fetchData();
  };



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
