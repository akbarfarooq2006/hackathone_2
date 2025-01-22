'use client'
import { Suspense } from 'react';

import Header1 from '@/components/header/Header1'
import Rent_now_copy from '@/components/rent_final/Rent_now copy'
import { useSearchParams } from 'next/navigation'
import React, {useEffect, useState} from 'react'


const page = () => {
  
const searchParams = useSearchParams()
  const [carId, setCarId] = useState<string | undefined |any>();

  useEffect(() => {
    // Get 'cars' query parameter from URL
    const cars = searchParams.get('cars');
    if (cars) {
      setCarId(cars); // Update state only if 'cars' exists
    }
  }, [searchParams]); // Re-run if searchParams changes
console.log(carId)

  return (
 <>
<div>

  <Header1/>
  {/* <Rent_now/> */}
  <Suspense fallback={<div>Loading...</div>}>
          {/* Only render Rent_now if carId exists, otherwise show Rent_now_copy */}
          {carId ? <Rent_now_copy carId={carId} /> : "loading..."}
        </Suspense>

  
</div>
 </> 
)}

export default page;