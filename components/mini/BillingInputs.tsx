'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input"


  
type rr={
    label?: string,
    placeholder?: string,
    bg_color?:string,
    name?: string,
    type?: string,
    min?:string,
    change?:(e:any)=>void,
    pattern?:string,
    value?:string,
}

const BillingInputs:React.FC<rr> = ({value,pattern,change, min,label,type='text', placeholder,name,bg_color='bg-primary'}) => {

  const [minDate, setMinDate] = useState<string>(''); // Minimum date store karenge

  useEffect(() => {
    const today = new Date(); // Aaj ki date lein
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (01-12)
    const dd = String(today.getDate()).padStart(2, '0'); // Day (01-31)
    const formattedDate = `${yyyy}-${mm}-${dd}`; // Format: YYYY-MM-DD
    setMinDate(formattedDate); // Minimum date set karein
  }, []);



  return (
    <div className='flex flex-col gap-y-3'>
        <label htmlFor={name} className='capitalize md:text-base text-sm font-semibold text-seconday3'>{label}</label>
        <input min={min} type={type} id={name} name={name} className={`${bg_color} placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-7 px-5 py-3 focus:outline-none border-[1px] border-button1/0 focus:border-button1/100`} placeholder={placeholder}
        onChange={change}
        pattern={pattern}
        value={value}
        required
        />
    </div>
  )
}

export default BillingInputs