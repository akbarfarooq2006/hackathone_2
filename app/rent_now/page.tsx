
// 'use client'
// import { Suspense } from 'react'
// import Header1 from '@/components/header/Header1'
// import Rent_now_copy from '@/components/rent_final/Rent_now copy'
// import { useSearchParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

//  const Page = () => {
//   const searchParams = useSearchParams()
//   const [carId, setCarId] = useState<string | undefined | any>()

//   useEffect(() => {
//     // Get 'cars' query parameter from URL
//     const cars = searchParams.get('cars')
//     if (cars) {
//       setCarId(cars) // Update state only if 'cars' exists
//     }
//   }, [searchParams]) // Re-run if searchParams changes

//   console.log(carId,'car id phey ye')

//   return (
//     <>
//       <div>
//         <Header1 />
//         {/* Suspense boundary for conditional rendering */}
        
//           {/* Only render Rent_now_copy if carId exists */}
//           <Rent_now_copy carId={carId} /> 
      
//       </div>
//     </>
//   )
// }

// export function RentNowPageWrapper() {
//   return (
//     // Suspense boundary ke andar wrap kiya gaya hai
//     <Suspense fallback={<div>Loading...</div>}>
//       <page />
//     </Suspense>
//   )
// }

'use client'
import { Suspense } from 'react'
import Header1 from '@/components/header/Header1'
import Rent_now_copy from '@/components/rent_final/Rent_now copy'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

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

  console.log(carId, 'car id phey ye')

  return (
    <div>
      {/* <Header1 /> */}
      {/* Suspense boundary for conditional rendering */}
      {carId ? <Rent_now_copy carId={carId} /> : <div className='h-[90vh] grid place-items-center '><span className='spinner'></span></div>} 
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
