import React from 'react'
import Ad from '../mini/Ad'

const FrontAds = () => {
  return (
 <>
 <div className='sm:mt-8 mt-5'>
    <div className='container grid  bd:grid-cols-2 grid-cols-1 gap-x-8'>
        <Ad
        bg="bg-ad1"
        btn='bg-button1'
        scrc="/images/home/ad/car1.png"
        className='hidden'
        heading='The Best Platform for Car Rental'
        para='Ease of doing a car rental safely and reliably. Of course at a low price.'
        />
        <Ad
        bg="bg-button1"
        btn='bg-ad1'
        scrc="/images/home/ad/car2.png"
        heading='Easy way to rent a car at a low price'
        para='Providing cheap car rental services and safe and comfortable facilities.'

        />
    </div>
 </div>
 </>
  )
}

export default FrontAds