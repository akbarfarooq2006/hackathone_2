import React from 'react'
import CategoryHeader from '../header/CategoryHeader';
import Card from '../mini/Card';

const Popular = () => {
  return (
<>
 <div className='mt-7 w-full'>
    <div className='container flex flex-col gap-y-5'>
        <CategoryHeader 
        head='popular' 
        link='view all'
        />
        {/* all cards */}
        <div className='grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2  gap-3 '>
            {/* 1 */}
            <Card
            red='hidden'
            src='/images/home/popular/car1.png'
            carName={'Koenigsegg'}
            modelName='sport'
            rent='99'
            offPrice=''
            isdiscount='hidden'
            />
            {/* 2 */}
            <Card
            outline='hidden'
            src='/images/home/popular/car2.png'
            carName={'Nissan GT-R'}
            modelName='sport'
            rent='80'
            offPrice='100'
            />
            {/* 3 */}
            <Card
            red='hidden'
            src='/images/home/popular/car1.png'
            carName={'Rolls - Royce'}
            modelName='sedan'
            rent='99'
            isdiscount='hidden'
            card='hidden'
            />
            {/* 4 */}
            <Card
            outline='hidden'
            src='/images/home/popular/car4.png'
            carName={'Nissan GT - R'}
            modelName='sport'
            rent='99'
            offPrice='100'
            card='hidden'
            />
            
        </div>





    </div>
 </div>

</>

)
}

export default Popular;