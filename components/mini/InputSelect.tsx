import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
type rr={
    label: string,
    placeholder: string,
    bg_color?:string

}
const InputSelect:React.FC<rr> = ({label,placeholder,bg_color='bg-primary'}) => {
  return (
    <div className='flex flex-col gap-y-3 '>
        <label htmlFor="aa" className='capitalize md:text-base  text-sm font-semibold text-seconday3 '>{label}</label>
       <div className='cursor-pointer relative'> 
    <select name="nn"id="aa"
      className="bg-primary text-button3 md:text-sm text-xs relative sm:px-7 px-5 py-3 w-full appearance-none rounded-lg focus:outline-none border-[1px] border-button1/0 focus:border-button1/100">
      <option value={placeholder} className="sm:px-7 px-5 py-3">
        {placeholder}
      </option>
    </select>
        <RiArrowDownSLine
        className='absolute top-[50%] -translate-y-[50%] right-3 text-xl cursor-pointer' />
    </div>
    
    {/* Custom arrow */}
    </div>
  )
}

export default InputSelect;