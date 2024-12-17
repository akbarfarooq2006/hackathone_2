import React from 'react'
import SideBar from '../mini/SideBar'
import Image from 'next/image'
import Link from 'next/link'
import { FaStar,FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import CategoryHeader from '../header/CategoryHeader'
import Card from '../mini/Card'



const Rent_detail = () => {
  return (
<>
<div className='h-full'>
    <div className=' h-full relative flex flex-row'>

    {/* side 1 */}
      <SideBar className='md:inline-block hidden'/>
    {/*side 2  */}
    <div className='flex-1 px-4 py-4'>
      <div className='w-full flex flex-col gap-y-4'>
        {/* file--1 */}
        <div className='grid bd:grid-cols-2 bd:grid-rows-1 grid-rows-2 grid-cols-1  gap-3 relative mt-4'>
            {/* ads */}
            <div className='flex flex-col gap-y-3'>
              {/* big image */}
              <div className='bg-button1 rounded-[10px] px-5 py-5 flex flex-col gap-y-3'>
                {/* content */}
                <div className='w-[90%] flex flex-col gap-y-4'>
                  <h3 className='text-[32px] leading-[40px] font-semibold text-secondary'>Sports car with the best design and acceleration</h3>
                  <p className=' max-w-[250px] text-base  text-secondary font-medium '>Safety and comfort while driving a 
                  futuristic and elegant sports car</p>
                </div>
                {/* image */}
                <div className='grid place-items-center'>
                  <Image
                  src={'/images/home/recomendation/Car6.png'}
                  alt='/'
                  width={300}
                  height={300}
                  />
                </div>  
              </div>
              {/* 3 image */}
               <div className=' grid grid-cols-3 gap-3'>
                  <div className={`h-32 w-full rounded-[10px] grid place-items-center bg-button1`}>
                    <Image
                    src={'/images/home/recomendation/Car6.png'}
                    alt='/'
                    width={300}
                    height={300}
                    />
                  </div>
                  <div className="h-32 bg-cover bg-center bg-[url('/images/rent/car1.png')] rounded-[10px]">
                  </div>
                  <div className="h-32 bg-cover bg-center bg-[url('/images/rent/car2.png')] rounded-[10px]">
                  </div>
               
               </div>
            </div>
            {/* ratings and details */}
            <div className='bg-secondary py-3 px-4 rounded-[10px]'>
                <div className=' flex flex-col justify-around h-full'>
                  {/* head */}
                  <div>
                  <h1 className='text-[32px] font-bold'>Nissan GT - R</h1>
                  {/* rating stars */}
                  <div className='flex items-center gap-x-2'>
                    <span className='flex items-center gap-x-0.5'>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaRegStar className='text-button3 text-sm'/>
                    </span>
                    <p className='text-sm text-button3'>44+Reviews</p>

                  </div>
                  </div>
                  {/* paragarph */}
                  <div>
                    <p className='text-button3 text-lg'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                  </div>
                  {/*  capacity*/}
                  <div className='grid grid-cols-2 gap-x-10'>
                    <div className='flex flex-col gap-y-3'>
                      <span className='flex items-center justify-between'>
                        <h2 className='text-button3 capitalize'>type car</h2>
                        <p className='text-black font-medium/70'>Sport</p>
                      </span>
                      <span className='flex items-center justify-between'>
                        <h2 className='text-button3 capitalize'>steering</h2>
                        <p className='text-black/70 font-medium'>Manual</p>
                      </span>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                      <span className='flex items-center justify-between'>
                        <h2 className='text-button3 capitalize'>capacity</h2>
                        <p className='text-black font-medium/70'>2Person</p>
                      </span>
                      <span className='flex items-center justify-between'>
                        <h2 className='text-button3 capitalize'>gasoline</h2>
                        <p className='text-black/70 font-medium'>70L</p>
                      </span>
                    </div>
                  </div> 
                  {/* rates amd rent */}
                  <div className='flex justify-between items-center'>
                    <h4 className=' flex items-center text-[28px] font-semibold'>
                      $80.00/ 
                      <span className='text-button3 text-lg '>days</span>
                    </h4>
                    <Link href={'/rent_detail'} className='text-sm font-semibold text-secondary bg-button1 px-4 py-2 rounded'>Rent Now</Link>      
                  </div>

              </div>  
            </div>
            <FaHeart className='text-button2 text-xl absolute top-4 right-4'/>

        </div>
        {/* message */}
        <div className='bg-secondary flex flex-col gap-y-4 px-4 py-3 rounded-[10px] w-full mt-4 '>
            <div className='flex items-center gap-x-2'>
              <h1 className='text-xl font-semibold'>Review</h1>
              <span className='text-secondary bg-button1 rounded py-0.5 px-3'>13</span>
            </div>


            {/* part 1 */}
            <div className='flex flex-row gap-x-3'>
                {/* pro1 */}
                <div className='bg-[url("/images/rent/pro1.jpg")] bg-cover h-12 w-12 rounded-full'>
                </div>
                {/*content */}
                <div className='flex-1'>
                  {/* person 1 */}
                  <div className='flex flex-col gap-y-0'>
                  <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>Alex Stanton</h1>
                    <p className='text-sm text-button3'>21/4/2021</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='text-sm text-button3'>CEO at Bukalapak</p>
                    <div className='flex items-center gap-x-2'>
                    <span className='flex items-center gap-x-0.5'>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaRegStar className='text-button3 text-sm'/>
                    </span>
                    <p className='text-sm text-button3'>44+Reviews</p>

                    </div>
                  </div>
                  <div className='text-sm mt-3 text-button3'>
                    <p>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                  </div>
                  </div>
                </div>
            </div>

                  
            {/* part 2 */}
            <div className='flex flex-row gap-x-3'>
                {/* pro1 */}
                <div className='bg-[url("/images/rent/pro2.jpg")] bg-cover h-12 w-12 rounded-full'>
                </div>
                {/*content */}
                <div className='flex-1'>
                  {/* person 1 */}
                  <div className='flex flex-col gap-y-0'>
                  <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>Skylar Dias</h1>
                    <p className='text-sm text-button3'>24/4/2023</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='text-sm text-button3'>CEO at Amazon</p>
                    <div className='flex items-center gap-x-2'>
                    <span className='flex items-center gap-x-0.5'>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaStar className='text-yellow-500 text-sm'/>
                      <FaRegStar className='text-button3 text-sm'/>
                    </span>
                    <p className='text-sm text-button3'>44+Reviews</p>

                    </div>
                  </div>
                  <div className='text-sm mt-3 text-button3'>
                    <p>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                  </div>
                  </div>
                </div>
            </div>



        </div>

        {/* popular */}
        <div className='mt-5 mb-5'>
          <div className='mb-5'>
          <CategoryHeader
          head='Recent Car'
          link='view all'
          />
          </div>
          <div className='grid lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3 gap-3'>
            {/* 1 */}
             <Card
            red='hidden'
            src='/images/home/recomendation/Car1.png'
            carName={'All New Rush'}
            modelName='SUV'
            rent='72'
            offPrice='80'
            
            />
            {/* 2 */}
            <Card
            outline='hidden'
            src='/images/home/recomendation/Car2.png'
            carName={'CR  - V'}
            modelName='SUV'
            rent='80'
            offPrice='100'
            />
            {/* 3 */}
            <Card
            red='hidden'
            src='/images/home/recomendation/Car3.png'
            carName={'All New Terios'}
            modelName='SUV'
            rent='72'
            isdiscount='hidden'
            />
          </div>
      
        </div>


        {/* recomnedation */}
        <div className='mt-5 mb-5'>
          <div className='mb-5'>
          <CategoryHeader
          head='Recomendation Car'
          link='view all'
          />
          </div>
          <div className='grid lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3 gap-3'>
             {/* 5 */}
             <Card
            red='hidden'
            src='/images/home/recomendation/Car5.png'
            carName={'MG ZX Exclusice'}
            modelName='Hatchback'
            rent='76'
            offPrice='80'
            
            />
            {/* 6 */}
            <Card
            outline='hidden'
            src='/images/home/recomendation/Car6.png'
            carName={'New MG ZS'}
            modelName='SUV'
            rent='80'
            offPrice='100'
            />
            {/* 7 */}
            <Card
            red='hidden'
            src='/images/home/recomendation/Car7.png'
            carName={'Rolls - Royce'}
            modelName='Hatchback'
            rent='99'
            isdiscount='hidden'
            
            />
          </div>
      
        </div>




      </div>
      </div>



    </div>
</div>
</>
  )
}

export default Rent_detail