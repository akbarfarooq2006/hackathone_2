'use client'
import React from 'react'
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  return (
    <div> 
      <span>booking</span>
      
      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => router.push("/rent_now")}
      >
        Back to Form
      </button>
       </div>
  )
}

export default page;