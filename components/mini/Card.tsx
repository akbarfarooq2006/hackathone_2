import React from 'react'
import Image from 'next/image';
import Link from 'next/link';





const Card = () => {
  return (
<>
<div>
    <div className='bg-secondary'>
        <div>
            <Image
            src={'/images/home/ad/car1.png'}
            alt='/'
            width={200}
            height={200}
            />
        </div>
    </div>
</div>
</>
)
}

export default Card;