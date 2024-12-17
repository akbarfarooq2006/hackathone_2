import React from 'react'
import CategoryHeader from '../header/CategoryHeader'
import Card from '../mini/Card'
import Link from 'next/link'



const Recomendation = () => {
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
            card='hidden'
            />
            {/* 4 */}
            <Card
            outline='hidden'
            src='/images/home/recomendation/Car4.png'
            carName={'CR  - V'}
            modelName='SUV'
            rent='80'
            offPrice='100'
            card='hidden'
            />
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
            card='hidden'
            />
            {/* 8 */}
            <Card
            outline='hidden'
            src='/images/home/recomendation/Car8.png'
            carName={'New MG ZS'}
            modelName='SUV'
            rent='74'
            offPrice='100'
            card='hidden'
            />

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

export default Recomendation