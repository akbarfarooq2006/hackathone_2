'use client'
import { Suspense } from 'react';

import Header1 from '@/components/header/Header1'
import Rent_now from '@/components/rent_final/Rent_now'
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
      
  <Rent_now_copy/>
    </Suspense>
  
</div>
 </> 
)}

export default page;