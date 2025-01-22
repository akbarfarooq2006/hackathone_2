'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { PiLifebuoy } from "react-icons/pi";
import { products } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { useState,useEffect } from "react";// Importing Font Awesome heart icons
import { likeHandle } from "@/action/like";

  

 
// Utility function for formatting price
const formatPrice = (price: number | string): string => {
  const numericPrice = typeof price === "string" ? parseFloat(price.replace(/[^0-9.]/g, "")) : price;
  return `${numericPrice.toLocaleString("en-US")}`;
};

const Cards = ({item,data}:{item:products,data?:()=>void}) => {


  // const [isActive, setIsActive] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(item.islike); // Initialize with item.islike



  // useEffect(() => {
  //   const fetchData = async () => {
  //    getData()
  //    getData2()
  //   };
  //   fetchData(); // Calling the async function inside useEffect
  // }, []); // Only re-run if data changes


  // const toggleHeart = () => {
  //   setIsActive(!isActive);
  //   console.log(!isActive,'hello world')
  // }
  const toggleHeart = async () => {
    const newLikeState = !isActive;
    console.log(item.islike ,'helo')
    setIsActive(newLikeState); // Toggle the like state locally
    await likeHandle(item._id, newLikeState); // Update like status in the backend (Sanity)
  };


 

  return (
    <>
  
      <div key={item.id} className={`sm:inline-block hover:scale-105 down`} >
        <div className="bg-secondary h-full p-4 rounded-[10px] flex flex-col justify-center gap-y-12">
          {/* card head outer */}
          <div className="flex flex-col ">
              {/* head up side  car name*/}
            <div className="flex items-center justify-between ">
              <h2 className="capitalize text-xl text-black font-bold">{item.name}{item.islike}</h2>
              <div className="flex">
                {/* <AiOutlineHeart className={`text-button3 text-xl `} /> i hae commit outline */}
                {/* <AiFillHeart className={`text-button2  text-xl `} /> */}
                <button
                  //  onClick={async()=>{  

                  //   toggleHeart()
                  //   await likeHandle(item._id , !isActive) // Uncomment to enable like/dislike functionality
                  //  }}
                  onClick={toggleHeart}
                   className={`text-lg cursor-pointer  ${isActive ||item.islike ? 'text-red-600' : 'text-gray-700'}`}
                  >
                    { isActive || item.islike ? (<AiFillHeart className="text-red-600 down"/> ) : (<AiOutlineHeart className="text-gray-700 down" />)}  {/* Filled or outline heart */}
                </button>
              </div>
            </div>
              {/* model name */}
             
            <p className="text-button3 text-sm font-bold block no-select capitalize">{item.type}</p>
          </div>
          {/* image of car */}
          <div className="flex justify-center px-8">
            <Image
              src={urlFor(item.image).url()}
              alt={item.id}
              width={500}
              height={400}
              // style={{ width: 'auto', height: 'auto' }} // CSS se adjust karo
            />
          </div>
          {/* all details */}
          <div className="flex flex-col gap-y-4">
              {/* 3 icons */} 
            <div className="flex flex-row justify-between items-center flex-wrap text-button3 capitalize gap-y-1">
              <span className="flex items-center ">
                <BsFuelPumpFill />
                <p>{item.fuelCapacity}</p>
              </span>
              <span className="flex items-center ">
                <PiLifebuoy />
                <p>{item.transmission}</p>
              </span>
              <span className="flex items-center ">
                <IoMdContacts />
                <p>{item.seatingCapacity}</p>
              </span>
            </div>
            {/* price and rent button */}
            <div className="flex items-center gap-y-2 flex-wrap justify-between">
              <div>
                <p className="text-xl font-bold">{formatPrice(item.pricePerDay)}  <span className="text-sm text-button3 font-semibold">PKR/day</span></p>
              </div>
              <Link href={`/rent_detail/${item.id}`}>
              {/* //here we will  that id which is being from api sanity ok */}
                <button className="capitalize bg-button1   px-4 py-2 rounded text-secondary font-semibold text-sm hover:scale-[1.01] down grid place-items-center hover:bg-button1/85 transform-gpu  overflow-hidden">
                   rent now 
                </button>
              </Link>
            </div>
          </div>
         {/* all detail ends */}

        </div>
      </div>
    </>
  );
};

export default Cards;
