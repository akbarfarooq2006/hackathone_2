'use client'
import React,{useState,useEffect} from 'react'
import CategoryHeader from '../header/CategoryHeader'
import Cards from '../mini/Cards';
import { products } from '@/types/products';
import { useLikeContext } from '@/app/context/LikeContext';
import PageLoader from '../loader/PageLoader'

const Recomendation = () => {
    
  const {liked} =useLikeContext();
  const [data, setData] = useState([]);//here popular tag data will be stored
  const [error, setError] = useState("");
  const [loading, setloading] = useState<boolean>(true);



  
  async function fetchData() {
    try {
      // setloading(true);
      const res = await fetch("/api/recomendationData");
      const result = await res.json();
      setData(result.data);
      
      if(data){

        setloading(false);
      }
      // console.log(result.data,'useeffect data received');
    } catch (err) {
      setError("Failed to fetch data");
    }
  }
  useEffect(() => {
    fetchData();
  }, [liked]);

  if (error) return <p>{error}</p>;




  return (
 
<>
{/* <div className={`mt-7 w-full mb-10`}> */}
<div className={`mt-7 w-full relative ${loading?("min-h-[40vh] "):""}  `}>
    <div className={`container flex flex-col gap-y-5 `}>
    <CategoryHeader 
        head='recomendation car' 
        className='hidden'
        />

        
        {/* all cards */}
        <div className='grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4   gap-5 '>
            {
                data.map((item:products)=>{
                    return(
                        <Cards key={item._id} item={item}/>
                    )
                })
            }
        </div>
    </div>

    {
      loading ?(<div className={`set `}>
          <PageLoader/>
      </div>):""
    }  
</div>
</>
)
}

export default Recomendation;
