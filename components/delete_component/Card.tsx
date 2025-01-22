import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { PiLifebuoy } from "react-icons/pi";

type tt = {
  red?: string,
  outline?: string,
  card?:string,
  carName:String,
  modelName:string,
  rent:string,
  src:string,
  isdiscount?:string,
  offPrice?:string,

};

const Card: React.FC<tt> = ({ red, outline,card,carName,modelName,rent,src,offPrice,isdiscount}) => {
  return (
    <>
      <div className={`sm:inline-block ${card} hover:scale-105 down`} >
        <div className="bg-secondary h-full p-4 rounded-[10px] flex flex-col justify-center gap-y-12">
          {/* card head outer */}
          <div className="flex flex-col ">
            {/* head up side  car name*/}
            <div className="flex items-center justify-between ">
              <h2 className="capitalize text-xl font-bold">{carName}</h2>
              <div className="flex">
                <AiOutlineHeart className={`text-button3 text-xl ${outline}`} />
                <AiFillHeart className={`text-button2  text-xl ${red}`} />
              </div>
            </div>
            {/* model name */}
            <p className="text-button3 text-sm font-bold capitalize">{modelName}</p>
          </div>
          {/* image of car */}
          <div className="flex justify-center">
            <Image
              src={src}
              alt="/"
              width={200}
              height={200}
              style={{ width: 'auto', height: 'auto' }} // CSS se adjust karo
            />
          </div>
          {/* all details */}
          <div className="flex flex-col gap-y-4">
            {/* 3 icons */} 
            <div className="flex flex-row justify-between items-center flex-wrap text-button3 capitalize">
              <span className="flex items-center ">
                <BsFuelPumpFill />
                <p>90L</p>
              </span>
              <span className="flex items-center ">
                <PiLifebuoy />
                <p> manual</p>
              </span>
              <span className="flex items-center ">
                <IoMdContacts />
                <p>2 people</p>
              </span>
            </div>
            {/* price and rent button */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">${rent}.00/<span className="text-sm text-button3 font-bold">day</span></p>
                <p className={`text-xs text-button3 line-through font-medium ${isdiscount}`}>${offPrice}.00</p>
              </div>
              <Link href={"/rent_detail"}>
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

export default Card;
