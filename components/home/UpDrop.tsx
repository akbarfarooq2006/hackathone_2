import React from 'react'
import PickUp from '../mini/PickUp'
import { MoveUp,MoveDown } from 'lucide-react'

const UpDrop = () => {
  return (
<>
<div className='mt-5'>
    <div className='container relative'>
        <div className='grid bd:grid-cols-2 bd:grid-rows-1  bd:gap-36 grid-rows-2 grid-cols-1 gap-y-10'>
            <PickUp title="Pick-Up"/>
            <PickUp title="Drop-Off"/>
        </div>
        <div className='bg-button1 py-4 px-2 shad rounded-xl inline-block absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <span className='text-white flex '>
                <MoveUp />
                <MoveDown className='-ml-3'/>
            </span>
        </div>
    </div>
</div>
</>
)
}

export default UpDrop