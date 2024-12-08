import React from 'react'
import CategoryHeader from '../header/CategoryHeader';
import Card from '../mini/Card';

const Popular = () => {
  return (
<>
 <div className='mt-7'>
    <div className='container'>
        <CategoryHeader 
        head='popular' 
        link='view all'
        />
        {/* all cards */}
        <div className='grid grid-cols-4 grid-rows-1 gap-x-3 '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>





    </div>
 </div>

</>

)
}

export default Popular;