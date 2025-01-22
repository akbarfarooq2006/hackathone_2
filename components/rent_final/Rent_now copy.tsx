'use client'
//@ts-ignore
import React, { useState } from "react";
import DotBluePoints from "../mini/DotBluePoints";
import FormHeader from "../header/FormHeader";
import BillingInputs from "../mini/BillingInputs";
import { FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import InputSelect from "../mini/InputSelect";
import PickUp from "../mini/PickUp";



const Rent_now_copy = ({carId}:{carId:string}) => {
const [rentalinfo, setrentalinfo] = useState(
  {
    name:'',
    phone:'',
    email:'',
    address:'',
    PickUp_date:'',
    Drop_off_date:'',
    PickUp_time:'',
    totalduration:''
    

  }
)
console.log(rentalinfo)
function handleChange(e:any) {
  const {name,value}=  e.target
  setrentalinfo({...rentalinfo, [name]: value}) 
}



  return (
    <>
      <div className="my-10">
        <div className="mx-5">
          {/* main grid which divides both side1 and side2 */}
          <div className="flex bd:flex-row flex-col gap-5 ">


            {/* side 1 */}
            <div className="  w-full  bd:order-1 order-2 flex flex-col gap-y-5">
              {/*Inside side-1 4 div will be  */}

          {/* starting form */}
          <form >
            <div className="flex flex-col gap-y-5">
              {/* billing info */}
              <div className="bg-secondary rounded-xl px-4 py-5 flex flex-col gap-y-8">
                  {/* header form */}
                <FormHeader
                  headings="Billing Info"
                  title="Please enter your billing info"
                  pages="1"
                />
                {/*  personal info Input */}
                <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3 bd:gap-6 gap-5">
                    <BillingInputs
                    label="Name"
                    placeholder="Your Name"
                    change={handleChange}
                    name="name"
                    value={rentalinfo.name}
                    type="text"
                  />
                    <BillingInputs
                    label="Phone Number"
                    placeholder="Phone Number"
                    change={handleChange}
                    name="phone"
                    type="tel"
                    value={rentalinfo.phone}
                    pattern="[0-9]{4}-[0-9]{7}"
                  />
                    <BillingInputs
                    label="Address"
                    placeholder="Enter Your Address"
                    change={handleChange}
                    name="address"
                    value={rentalinfo.address}
                    type="text"
                  />
                    <BillingInputs
                    label="Email"
                    value={rentalinfo.email}
                    placeholder="Enter Your Email"
                    change={handleChange}
                    name="email"
                    type="email"
                  />

                </div>
              </div>




              {/* Rental info */}
              <div className="bg-secondary rounded-xl px-4 py-5 flex flex-col gap-y-8">
                {/* header form */}
                <FormHeader
                  headings="rental info "
                  title="Please select your rental date"
                  pages="2"
                />
                {/* form of billing 1 rental info*/}
                <div className="flex flex-col gap-y-6">
                    {/* picup */}
                <div className="flex flex-row gap-2 items-center">
                    <DotBluePoints
                    dot2="hidden"
                    />
                    <h4 className="text-base font-semibold text-seconday3"
                    >Pick-Up</h4>
                </div>
                    {/* formr */}
                <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3 bd:gap-6 gap-5">
                <BillingInputs
                    label="Locations"
                    placeholder="Your Name"
                    change={handleChange}
                    name="name"
                    value={rentalinfo.name}
                    type="text"
                  />
                  <InputSelect label="Locations" placeholder="Select your city" />
                  <InputSelect label="time" placeholder="Select your time"/>
                  <InputSelect label="date" placeholder="Select your date" />
                </div>
                </div>
                {/* 2 form of billing 2 rental info*/}
                <div className="flex flex-col gap-y-6">
                {/* picup */}
                <div className="flex flex-row gap-2 items-center">
                    <DotBluePoints
                    dot1="hidden"
                    />
                    <h4 className="text-base font-semibold text-seconday3"
                    >Drop-Off</h4>
                </div>
                {/* formr */}
                <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3 bd:gap-6 gap-5">
                  <InputSelect label="Locations" placeholder="Select your city" />
                  <InputSelect label="time" placeholder="Select your time"/>
                  <InputSelect label="date" placeholder="Select your date" />
                </div>
                </div>

              </div>
             </div> 
          </form>

       </div>
       {/* side 1 ends */}




            {/* side 2  */}
            <div className="bd:w-[35%] hidden w-full bg-secondary rounded-xl px-4 py-8  flex-col gap-y-8 bd:order-2 order-1 self-start ">
              {/* p-1 */}
              <FormHeader
                headings="rental summary"
                title="Prices may change depending on the length of the rental and the price of your rental car."
                className="hidden"
              />
              {/* p-2 */}
              <div className="flex flex-row gap-x-3 items-center">
                {/* image */}
                <div className="px-1 py-8 rounded-md bg-button1 grid place-items-center">
                  <Image
                    src={"/images/home/popular/car4.png"}
                    alt="/"
                    width={120}
                    height={80}
                    style={{ width: 'auto', height: 'auto' }} // CSS se adjust karo
                  />
                </div>
                {/* heading and rating */}
                <div>
                  <h1 className="md:text-3xl text-xl font-bold">Nissan GT-R</h1>
                  {/* rating stars */}
                  <div className="flex sm:flex-row flex-col sm:items-center sm:gap-2 gap-1">
                    <span className="flex items-center gap-x-0.5">
                      <FaStar className="text-yellow-500 text-sm" />
                      <FaStar className="text-yellow-500 text-sm" />
                      <FaStar className="text-yellow-500 text-sm" />
                      <FaStar className="text-yellow-500 text-sm" />
                      <FaRegStar className="text-button3 text-sm" />
                    </span>
                    <p className="md:text-sm text-xs text-button3">44+Reviews</p>
                  </div>
                </div>
              </div>
              {/* p-3 */}
              <hr />
              {/* p-4 */}
              <div className="flex flex-col gap-y-4 w-full">
                {/* rate-1 */}
                <div className="flex flex-row justify-between w-full">
                    <span className="md:text-base text-xs text-button3 font-medium capitalize">subtotal</span>
                    <span className="text-base text-seconday3 font-semibold">$80.00</span>
                </div>
                {/* rate-2 */}
                <div className="flex flex-row justify-between w-full">
                    <span className="md:text-base text-xs text-button3 font-medium capitalize">tax</span>
                    <span className="text-base text-seconday3 font-semibold">$0.00</span>
                </div>
                {/* promo code  */}
                <div className="flex flex-row justify-between w-full bg-primary sm:px-6 px-4 py-3 rounded-lg">
                    <span className="md:text-sm text-xs text-button3 font-medium ">Apply promo code</span>
                    <span className="md:text-base text-xs text-seconday3 font-semibold">Apply now</span>
                </div>
              </div>
              {/* p-5 */}
              <div className="flex flex-row justify-between items-center w-full">
                <span>
                    <h4 className="md:text-xl text-base text-seconday3 font-bold">Total Rental Price</h4>
                    <p className="text-button3 md:text-sm text-xs font-medium">Overall price and includes rental discount</p>
                </span>
                <span className="text-seconday3 md:text-[32px] text-xl font-bold ml-2">
                    $80.00
                </span>

              </div>

            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default Rent_now_copy;
