import React from 'react'
import Link from 'next/link'
const Carsbutton = () => {
  return (
    <>
    <div className='w-full mt-7 mb-10 flex items-center justify-center  text-center'>
    <Link href={'/categories'} className='bg-button1 capitalize text-secondary font-semibold sm:px-4 sm:py-2 px-3 py-1.5 rounded md:text-base text-sm  hover:scale-105 down grid place-items-center hover:bg-button1/85 transform-gpu  overflow-hidden'>
    Show more cars
    </Link>
</div>

</>
  )
}

export default Carsbutton;