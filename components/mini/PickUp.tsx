import React from 'react'


type gg ={
  title:string,
}


const PickUp:React.FC<gg> = ({title}) => {
  return (
<>
<div className='bg-secondary rounded-lg flex flex-col gap-y-3 p-6'>
    {/* buller pick up */}
    <div className='flex flex-row items-center gap-2'>
      <span className='bg-ad1/20  -z-0 h-4 w-4 rounded-full   grid place-items-center'>
        <span className='bg-button1 z-10 h-2 w-2 rounded-full'></span>
      </span>
      <h2 className='text-base font-semibold text-black'>{title}</h2>
    </div>
    {/* context */}
    <div className='flex flex-row items-center justify-between '>
      {/* 1 */}
      <div className='flex flex-col items-start justify-between'>
        <h2 className='capitalize text-base font-bold'>location</h2>
        <div>
          <label htmlFor="lo"></label>
          <select name="" id="" className='focus:outline-none pr-0.5 text-xs text-button3 capitalize' >
          <option value="volvo" className='capitalize text-xs text-button3'>Select city</option>
          <option value="volvo" className='capitalize text-xs text-button3'>karachi </option>
          <option value="volvo" className='capitalize text-xs text-button3'>hyderabaad</option>
          <option value="volvo" className='capitalize text-xs text-button3'>lahore</option>
          </select>
        </div>
      </div>
       {/* line */}
      <div className='h-full w-5  py-1 flex'>
      <span className=' h-full w-[0.1px] bg-button3'></span>  
      </div> 
      {/* 2 */}
      <div>
        <h2 className='capitalize text-base font-bold'>date</h2>
        <div>
          <label htmlFor="lo"></label>
          <select name="" id="" className='focus:outline-none pr-0.5 text-xs text-button3 capitalize' >
          <option value="volvo" className='capitalize text-xs text-button3'>Select date</option>
          </select>
        </div>
      </div>
       {/* line */}
      <div className='h-full w-5  py-1 flex'>
      <span className=' h-full w-[0.1px] bg-button3'></span>  
      </div> 
      {/* 3 */}
      <div>
        <h2 className='capitalize text-base font-bold'>time</h2>
        <div>
          <label htmlFor="lo"></label>
          <select name="" id="" className='focus:outline-none pr-0.5 text-xs text-button3 capitalize' >
          <option value="volvo" className='capitalize text-xs text-button3'>Select time</option>
          </select>
        </div>
      </div>

      
    
    </div>


</div>
</>

)
}

export default PickUp;