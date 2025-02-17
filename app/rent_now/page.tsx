

'use client'
import { Suspense } from 'react'
import Header1 from '@/components/header/Header1'
import Rent_now_copy from '@/components/rent_final/Rent_now copy'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PageLoader from '@/components/loader/PageLoader'
import { client } from '@/sanity/lib/client'
import calculateRentalDays from '@/action/calculate'

const RentNowPage = () => {
  const searchParams = useSearchParams()
  const [carId, setCarId] = useState<string | undefined | null>(null)
  

  useEffect(() => {
    // Get 'cars' query parameter from URL
    const cars = searchParams.get('cars')
    if (cars) {
      setCarId(cars) // Update state only if 'cars' exists
    }
  }, [searchParams]) // Only rerun if searchParams changes
  

 
    


 
  return (
    <div>
      {/* <Header1 /> */}
      {/* Suspense boundary for conditional rendering */}
      {carId ? <Rent_now_copy carId={carId} /> : <div className='h-[90vh] grid place-items-center '><span className=''><PageLoader/></span></div>} 
    </div> 
  )
}

export default function Page() {
  return (
    // Suspense boundary for the whole page
    <Suspense fallback={<div className=" ">loading...</div>}>
      <RentNowPage />
    </Suspense>
  )
}
