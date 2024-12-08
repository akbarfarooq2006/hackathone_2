import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

type bg = {
    bg?:string,
    btn?:string,
    scrc:string
    className?:string,
    heading:string,
    para:string,
}



const Ad:React.FC<bg>= ({bg="ad1", btn,scrc,className,heading,para}) => {
  return (
<>
<div className={`bd:inline-block ${className} h-full`}>
    <div className={`${bg} w-full  rounded-[10px] py-8 px-5 h-full`}>
        {/* content */}
        <div className='sm:w-[60%] w-[90%] flex flex-col gap-y-3'>
            <h2 className='text-secondary text-3xl font-semibold'>{heading}</h2>
            <p className='font-medium text-secondary text-base font-jarka'>{para}</p>
            <Link href={'/'}>
            <button className={`cursor-pointer ${btn} text-secondary text-base font-semibold py-2 px-3 rounded-md capitalize  ` }>
                rental car
            </button>
            </Link>
        </div>
        {/* image */}
        <div className='w-full grid place-items-center'>
            <Image
            src={scrc}
            alt='/'
            width={280}
            height={300}
            />
        </div>

    </div>
</div>
</>    
)
}

export default Ad;

