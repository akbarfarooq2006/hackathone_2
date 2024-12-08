import React from 'react'

const Select = ({label,num}:{label:string,num:string}) => {
  return (
    <div className='flex gap-1.5 items-center'>
        <input type="checkbox" name={label} id={label} />
        <label htmlFor={label} className='text-base font-semibold text-button4'>{label}<span className='text-button4/60 text-base'>{`(${num})`}</span></label>
    </div>
  )
}

export default Select