import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
<>
<div className='bg-secondary py-10 '>
    <div className='container flex flex-col gap-y-8 '>

        {/* upside */}
        <div className='mid:grid mid:grid-rows-1 mid:grid-cols-2 flex flex-col gap-y-7 '>
        {/* heading */}
            <div className='flex flex-col gap-y-3  max-w-[280px]'>
                <h2 className='uppercase text-button1 text-[28px] sm:text-[32px] font-bold'>
                    <Link href={'/'}> morent</Link>
                </h2>
                <p className='text-base text-black/60 font-medium'>
                    Our vision is to provide convenience and help increase your sales business.
                </p>
            </div>
         {/*lists  */}
         <div className='flex flex-row justify-between items-start flex-wrap gap-x-8 gap-y-8'>
            {/* list1 */}
            <div>
                <ul className='flex flex-col gap-y-5'>
                    <h4 className='text-seconday3 capitalize text-xl sm:mb-6 mb-1'>About</h4>
                    <li className='text-base font-medium capitalize cursor-pointer text-black/60'>How it works</li>
                    <li className='text-base font-medium capitalize cursor-pointer text-black/60'>Featured</li>
                    <li className='text-base font-medium capitalize cursor-pointer text-black/60'>Partnership</li>
                    <li className='text-base font-medium capitalize cursor-pointer text-black/60'>Bussiness Relation</li>
                </ul>
            </div>
            {/* list 2 */}
            <div>
                <ul className='flex flex-col gap-y-5'>
                    <h4 className='text-seconday3 capitalize text-xl sm:mb-6 mb-1'>socials</h4>
                    <li className='text-base font-medium cursor-pointer capitalize text-black/60'>Discord</li>
                    <li className='text-base font-medium cursor-pointer capitalize text-black/60'>Instagram</li>
                    <li className='text-base font-medium cursor-pointer capitalize text-black/60'>Twitter</li>
                    <li className='text-base font-medium cursor-pointer capitalize text-black/60'>Facebook </li>
                </ul>
            </div>
            {/* list3 */}
            <div>
                <ul className='flex flex-col gap-y-5'>
                    <h4 className='text-seconday3 capitalize text-xl sm:mb-6 mb-1'>community</h4>
                    <li className='text-base cursor-pointer font-medium capitalize text-black/60'>Events</li>
                    <li className='text-base cursor-pointer font-medium capitalize text-black/60'>Blog</li>
                    <li className='text-base cursor-pointer font-medium capitalize text-black/60'>Podcast</li>
                    <li className='text-base cursor-pointer font-medium capitalize text-black/60'>Invite a friend </li>
                </ul>
            </div>
         </div>
        </div> 

        <hr />
        {/* down side */}
        <div className='text-seconday3 w-full flex md:flex-row flex-col-reverse  md:items-center md:justify-between md:gap-y-0 gap-y-8'>
            <p className='font-semibold md:text-base text-sm'>©2022 MORENT. All rights reserved</p>
            <div className='text-seconday3 md:text-base text-sm font-semibold flex flex-row items-center md:justify-start justify-between sm:gap-x-4 md:w-auto w-full'>
                <p className='cursor-pointer'>Privacy & Policy</p>
                <p className='cursor-pointer'>Terms & Condition</p>
            </div>
        </div>

    </div>
</div>
</>
)
}

export default Footer;