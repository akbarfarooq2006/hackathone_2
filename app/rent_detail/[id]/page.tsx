import SideBar from '@/components/mini/SideBar'
import Header2 from '@/components/header/Header2'
import Rent_detail from '@/components/rent_detail/Rent_detail'
import React from 'react'
import { client } from '@/sanity/lib/client';
import { products } from '@/types/products';


async function getData(id: string){ // ye raha function jo nicche call howa jis me hum ne wo id daali he 
  //yaha wo id receive hogi
  try{
  const query = `*[_type == "products" && id == "${id}"][0] {
    name,
    id,
    description,
    available,
    islike,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    image,
    tags,
  }`;
  const res = await client.fetch(query);// yaha hume wo object data mile ge jo us id se match kri sirf matlab agr product_1 pr click he tu yaha product one ki object return hogi
   return res 

  }catch(error){
    console.error(error)
    throw error;
  }

}


const page = async({
  params,
}: {
  params: Promise<{ id: string }>
}) => {

const id = (await params).id  
// is id me wo aye ga jo link me pase kya he id matlab jis bi product pr click hoga uski id yaha aa jaye gi 
// product_1




const data:products  = await getData(id) // upar wali id kois function me paas kre ge jo dynaimc aa rahi he
// console.log(data,'data helo') // yaha hum wo mile dekho


  return (
    <div className='h-full'>
<Header2/>

{

    <Rent_detail item={data}/>
}

    </div>
  )
}

export default page