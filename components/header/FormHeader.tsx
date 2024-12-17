import React from 'react'
type rr={
    headings: string,
    title: string, 
    pages?: string,
    className?: string,
}
const FormHeader:React.FC<rr> = ({headings,title,pages,className}) => {
  return (
    <div>
        <h4 className='md:text-xl text-base text-seconday3 font-bold tracking-tighter capitalize'>
            {headings}
        </h4>
        <div className='flex flex-row items-center justify-between'>
            <p className='text-button3 md:text-sm text-xs font-medium tracking-tight'>{title}</p>
            <p className={`text-button3 md:text-sm text-xs font-medium tracking-wide ${className}`}>Step{pages}of4</p>
        </div>
    </div>
  )
}

export default FormHeader;