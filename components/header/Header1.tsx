import React from 'react'
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";
import { BiSolidBell } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';




const Header1 = () => {
  return (
<>
<div>
    <div className='bg-secondary px-5 py-2 flex items-center  justify-between w-full '>

     {/* head and search outer  & side1*/}
     <div className='flex items-center md:gap-x-16 gap-x-9'>
        <Link href={'/'}><h1 className='text-[32px] font-bold uppercase text-button1'>morent</h1></Link>
        {/* search outer */}
        <div className='sm:flex hidden items-center border-[1px] border-secondary2/40 rounded-full h-auto px-3 py-1'>
            <CiSearch/>
            <input type="search" name="search" id="search" placeholder='search something here'
            className='cencel px-2 flex items-center text-sm focus:outline-none placeholder:text-sm   '/>
            <div>
            <HiOutlineAdjustmentsHorizontal
            style={{strokeWidth:1}}/>
            </div>
        </div>
      </div>

      {/* side 2 */}
      <div className='flex items-center gap-x-3'>
        {/* 3--icon */}
        <div className='sm:flex hidden items-center gap-x-3'>
            <div className='border-[1px] border-secondary2/40 rounded-full p-1'><FaHeart      className='text-button4 text-xl bg-secondary'/></div>
            <div className='border-[1px] border-secondary2/40 rounded-full p-1'><BiSolidBell  className='text-button4 text-xl bg-secondary'/></div>
            <div className='border-[1px] border-secondary2/40 rounded-full p-1'><IoMdSettings className='text-button4 text-xl bg-secondary'/></div>
        </div >
        {/* profile */}
        <div className='overflow-hidden rounded-full'>
            <Image
            src={'/images/header/profile.png'}
            alt='/'
            width={35}
            height={35}
            />
        </div>
      </div>
    </div>
    {/* in mbile search outer  */}
    <div className='flex sm:hidden items-center justify-center gap-x-4 bg-secondary  rounded-full h-auto w-full pb-2 px-5'>
        <div className='flex w-full items-center gap-x-2'>
        <div className=' flex items-center border-[1px] border-secondary2/40 w-full rounded-md px-2 py-1'>
            <CiSearch/>
            <input type="search" name="search" id="search" placeholder='search something here'
            className='cencel px-2 w-full flex items-center text-sm focus:outline-none placeholder:text-sm   '/>
        </div>    
        <div className='border-[1px] border-secondary2/40  rounded-md h-auto w-auto py-1.5 px-2  '>
            <HiOutlineAdjustmentsHorizontal
            style={{strokeWidth:1}}/>
        </div>
        </div>
     </div>




</div>
</>

)
}

export default Header1