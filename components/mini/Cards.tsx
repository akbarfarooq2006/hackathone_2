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
import { useLikeContext } from "@/app/context/LikeContext";
  

 
// Utility function for formatting price
const formatPrice = (price: number | string): string => {
  const numericPrice = typeof price === "string" ? parseFloat(price.replace(/[^0-9.]/g, "")) : price;
  return `${numericPrice.toLocaleString("en-US")}`;
};

const Cards = ({item}:{item:products}) => {


const {setliked,setcount,setvalue} = useLikeContext();


  const [isActive, setIsActive] = useState<boolean>(item.islike); // Initialize with item.islike


  useEffect(() => {
    // Update the state whenever the "islike" prop changes
    // console.log(item.islike,"❤️❤️❤️❤️❤️❤️❤️");
    setIsActive(item.islike);
  }, [item.islike]);

  const toggleHeart = async () => { 
   
    setIsActive((prev) => !prev);
    
    //update number
    if (!isActive) {
      setcount((prev) => prev + 1)
    } else {
      setcount((prev) => prev - 1)
    }
    //update context always
    try {
      const returnValue = await likeHandle(item._id, !isActive); // Wait for the backend response
      if (returnValue) {
        console.log("Successfully updated backend:👍👍👍👍🏻👍🏻👍🏻👍🏻👍🏻", returnValue);
        setliked((prev) => prev + 1); // Update context after backend confirmation
        return returnValue;
      }
    } catch (error) {
      console.error("Failed to update like status:", error);
      // Optionally revert the local state if backend update fails
      setIsActive((prev) => !prev);
    }

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
                <button
                  onClick={toggleHeart}
                   className={`text-lg cursor-pointer  ${isActive  ? 'text-red-600' : 'text-gray-700'}`}
                  >
                    { isActive  ? (<AiFillHeart className="text-red-600 down"/> ) : (<AiOutlineHeart className="text-gray-700 down" />)}  {/* Filled or outline heart */}
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

