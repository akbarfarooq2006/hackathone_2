import React from 'react'
import Image from 'next/image'
const PageLoader = () => {
  return (
    
<div className='animate-bounce'>
 <div className="border-4 inline-block border-t-transparent border-button1 rounded-full animate-spin  ">
        {/* Logo in the center */}
        {/* <div className="  flex items-center justify-center"> */}
          <Image
            src={'/favicon/ic.png'}
            alt="Rotating logo"
            width={60}
            height={60}
            className="rounded-full anim "
          />
        {/* </div> */}
    </div>    
</div>


    // {/* Logo Animation */}
//     <div className="relative ml-3 mb-14">
//     <Image
//       src={'/favicon/ic.png'}
//       alt="Loading logo"
//       width={80}
//       height={80}
//       className="animate-bounce"
//     />
//     {/* Spinner */}
//     <div className="absolute -left-10 top-1/2 transform -translate-y-1/2">
//       <div className="w-10 h-10 border-4 border-button1 border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   </div>
  )
}

export default PageLoader