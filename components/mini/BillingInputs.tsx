import React from 'react'
type rr={
    label: string,
    placeholder: string,
    bg_color?:string

}
const BillingInputs:React.FC<rr> = ({label,placeholder,bg_color='bg-primary'}) => {
  return (
    <div className='flex flex-col gap-y-3'>
        <label htmlFor="aa" className='capitalize md:text-base text-sm font-semibold text-seconday3'>{label}</label>
        <input type="text" id='aa' className={`${bg_color} placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-7 px-5 py-3 focus:outline-none border-[1px] border-button1/0 focus:border-button1/100`} placeholder={placeholder}/>
    </div>
  )
}

export default BillingInputs