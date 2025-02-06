"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { PiLifebuoy } from "react-icons/pi";
import { products } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect } from "react"; // Importing Font Awesome heart icons
import { likeHandle } from "@/action/like";
import { RxCrossCircled } from "react-icons/rx";
import { useLikeContext } from "@/app/context/LikeContext";

// Utility function for formatting price
const formatPrice = (price: number | string): string => {
  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace(/[^0-9.]/g, ""))
      : price;
  return `${numericPrice.toLocaleString("en-US")}`;
};

const Cardslike = ({ item }: { item: products }) => {
  const { liked, setliked, setcount, setvalue } = useLikeContext();

  const [hidden, sethidden] = useState<boolean>(false); // Initialize with item.islike


  async function handlelikedelete(){
    try {
      sethidden(true);
      setcount((prev)=> prev-1)
      const returnValue = await likeHandle(item._id, false); // Wait for the backend response
      if (returnValue) {
        setTimeout(() => {
          sethidden(false);
        }, 2000);
        // console.log("Successfully updated backend:", returnValue);
        setliked((prev) => prev + 1); // Update context after backend confirmation
      }
    } catch (error) {
      console.error("Failed to update like status:", error);
      // Optionally revert the local state if backend update fails
    
    }
  }

  return (
    <>
      <div key={item.id} className={` inline-block down relative ${hidden ? "hidden" : "inline-block"} `}>
        <div className="bg-secondary h-full bd:p-4 p-7 rounded-[10px] flex bd:flex-row flex-col justify-between gap-y-7">
          {/* first split */}
          <div className="flex sm:gap-4 gap-3 bd:mr-5  bd:flex-row flex-col ">
            {/* heiding car name for mobile */}
            <div className="bd:hidden inline-block">
              {/* car name */}
              <h2 className="capitalize text-2xl  text-black font-bold">
                  {item.name}
                </h2>
                {/* model name */}
                <p className="text-button3 text-sm font-bold capitalize">
                  {item.type}
                </p>
            </div>
            {/* image of car */}
            <div className="bd:px-10 bd:py-16 rounded-md bd:bg-button1 grid place-items-center">
              <Image
                src={urlFor(item.image).url()}
                alt="/"
                width={250}
                height={480}
              />
            </div>
            {/* card head outer */}
            <div className="flex flex-col bd:justify-between sm:gap-4 gap-3 ">
              {/* head up side  car name heading,type,description*/}
              <div className="flex flex-col gap-y-1">
                {/* car name */}
                <h2 className="capitalize text-2xl bd:inline-block hidden text-black font-bold">
                  {item.name}
                </h2>
                {/* model name */}
                <p className="text-button3 bd:inline-block hidden text-sm font-bold capitalize">
                  {item.type}
                </p>
                <p className="text-button3 bd:mt-0 mt-2  text-base"> {item.description}</p>
              </div>
              {/* 3 icons */}
              <div className="mb-2 flex flex-row gap-x-5 items-center flex-wrap text-button3 capitalize gap-y-1">
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
            </div>
          </div>

          {/* 2nd split */}
          <div className="bd:flex bd:flex-col bd:justify-end bd:items-end  gap-y-4">
            {/* 3 icons */}

            {/* price and rent button */}
            <div className="flex bd:items-end items-center flex-row gap-2 flex-wrap bd:justify-end justify-between">
              <div>
                <p className="text-xl font-bold">
                  {formatPrice(item.pricePerDay)}{" "}
                  <span className="text-sm text-button3 font-semibold">
                    PKR/day
                  </span>
                </p>
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
        {/* heart icon */}
        <button
        onClick={handlelikedelete} 
         className="absolute cursor-pointer -top-2 -right-2">
         <RxCrossCircled className=" text-red-500 cursor-pointer font-bold hover:scale-110 down text-2xl"/>
        </button>
      </div>
    </>
  );
};

export default Cardslike;
