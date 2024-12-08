import React from 'react'
import Link from 'next/link';

type ff={
  head:string,
  className?:string,
  link?:string
}



const CategoryHeader:React.FC<ff> = ({head,className,link}) => {
  return (
<div className='bg-transparent flex items-center justify-between'>
  <h2 className='text-base text-button3 font-semibold capitalize'>{head}</h2>
  <Link href={'/'} className={`text-button1 text-base font-semibold capitalize ${className}`}>{link}</Link>
</div>
)
}

export default CategoryHeader;