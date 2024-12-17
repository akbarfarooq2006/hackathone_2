import React from 'react'
type ee={
  dot1?: string,
  dot2?: string,
}
const DotBluePoints:React.FC<ee> = ({dot1,dot2}) => {
  return (
  <>
  <span className={`bg-ad1/40  -z-0 h-4 w-4 rounded-full   grid place-items-center ${dot1}`}>
        <span className='bg-button1 z-10 h-2 w-2 rounded-full'></span>
    </span>
  <span className={`bg-button1/30  -z-0 h-4 w-4 rounded-full   grid place-items-center ${dot2}`}>
        <span className='bg-ad1 z-10 h-2 w-2 rounded-full'></span>
    </span>
  </>
  )
}

export default DotBluePoints