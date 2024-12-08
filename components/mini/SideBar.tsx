import React from 'react'
import Select from './Select'
import Header2 from '../header/Header2'

const SideBar = ({className}:{className?:string}) => {
  return (
<>

<div className={`bg-secondary  w-56   max-h-full ${className}`}>
    <div className='py-8 px-3 h-full '>
    <div className='flex flex-col  h-full gap-y-8'>
        {/* type all */}
        {/* 1 */}
        <div className='flex flex-col gap-y-2'>
            <h3 className='uppercase text-xs text-button3 font-semibold tracking-widest mb-2'> type</h3>
            <Select
            label='Sport'
            num='10'
            />
            <Select
            label='SUV'
            num='12'
            />
            <Select
            label='MPV'
            num='16'
            />
            <Select
            label='Sedan'
            num='20'
            />
            <Select
            label='Coupe'
            num='14'
            />
            <Select
            label='Hatchback'
            num='14'
            />
        </div>
        {/* 2 */}
        <div className='flex flex-col gap-y-3'>
            <h3 className='uppercase text-xs text-button3 font-semibold tracking-widest mb-2'> capacity</h3>
            <Select
            label='2 Person'
            num='10'
            />
            <Select
            label='4 Person'
            num='12'
            />
            <Select
            label='6 Person'
            num='12'
            />
            <Select
            label='8 Person'
            num='20'
            />
        </div>
        {/* 3 price */}
        <div>
        <h3 className='uppercase text-xs text-button3 font-semibold tracking-widest mb-2'> price</h3>
        <div className='mr-5'>
            <input type="range" name="price" id="range"
            className='w-full' />
            <label htmlFor="range"
             className='text-base font-semibold text-button4'
            >Max. $100.00</label>
        </div>
        </div>
    </div>
    </div>
</div>
</>


)
}

export default SideBar