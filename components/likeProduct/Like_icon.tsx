'use client'
import React,{useState , useEffect} from 'react'
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';
import { useLikeContext } from '@/app/context/LikeContext';
import { dataset } from '@/sanity/env';




const Like_icon = () => {

const {liked,setliked} =useLikeContext();

  const [idata, setIdata] = useState([]);//here popular tag data will be stored
  const [error, setError] = useState("");
  const [length, setlength] = useState(idata.length);

  async function fetchData() {
    try {
      const res = await fetch("/api/allData");
      const {data} = await res.json();
      setIdata(data);
      setlength(data.length);
      console.log(data.length, data,'result data like useeffet data received');

    } catch (err) {
      setError("Failed to fetch data");
      throw err;
    }
  }
  useEffect(() => {
    fetchData();
    console.log(liked,'ye he like ok')
  }, [liked]);

  return (
    <div>
      <Link href={'/like-products'} className='cursor-pointer   '>
          <div before-dynamic-value={length} className={ `border-[1px] border-secondary2/40 rounded-full p-1 relative 
             before:absolute  before:-top-2 before:-right-2 before:rounded-full  before:text-xs before before:content-[attr(before-dynamic-value)] 
             before:font-bold before:text-button4  `} >
            <FaHeart className='text-button4 text-xl bg-secondary'/>
          </div>
      </Link>
    </div>
  )
}

export default Like_icon;