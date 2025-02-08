"use client";
//@ts-ignore
import React, { useState,useEffect } from "react";
import DotBluePoints from "../mini/DotBluePoints";
import FormHeader from "../header/FormHeader";
import BillingInputs from "../mini/BillingInputs";
import { FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import InputSelect from "../mini/InputSelect";
import PickUp from "../mini/PickUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Controller } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AddressInput from "../suggestion/AddressInput ";
import calculateRentalDays, { timeCalsulate } from "@/action/calculate";
import { nanoid } from "nanoid";
import { client } from "@/sanity/lib/client";




const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),
    address: z.string().min(5, "Address is required"),
    email: z.string().email("Please enter a valid email"),
    pickupLocation: z.string().min(1, "Pickup location is required"),
    pickupDate: z
      .string()
      .refine(
        (val) => !isNaN(Date.parse(val)),
        "Please enter a valid date (YYYY-MM-DD)"
      ),
    pickupTime: z.string().min(1, "Pickup time is required"),
    dropoffLocation: z.string().min(1, "Dropoff location is required"),
    dropoffDate: z.string().refine(
      (val) => {
        const today = new Date().toISOString().split("T")[0];
        return new Date(val) >= new Date(today);
      },
      "Drop-off date must be equal to or later than today"
    ),
  })
  .superRefine((data, ctx) => {
    // Dropoff date validation compared to pickup date
    if (new Date(data.dropoffDate) <= new Date(data.pickupDate)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["dropoffDate"],
        message: "Drop-off date must be later than pickup date",
      });
    }

    // Pickup time validation if pickup date is today
    const today = new Date().toISOString().split("T")[0];
    if (data.pickupDate === today) {
      const currentTime = new Date().toTimeString().slice(0, 5); // HH:MM format
      if (data.pickupTime <= currentTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["pickupTime"],
          message: "Pickup time must be in the future for today's date",
        });
      }
    }
  });



  //


const Rent_now_copy = ({ carId }: { carId: string }) => {
  const [idata, setidata] = useState<{
    ref?: string,
    days?: number,
    orderId?: string
  }>({});
const [pref, setpref] = useState("")


  useEffect(() => {
    async function get() {
      try {
        const query = `*[_type =='products' && id=="${carId}"] {
             _id,
            
           }`;
        
        const data = await client.fetch(query);
        console.log(data,"jjjjjjjjjjjjj");
        setpref(data[0]._id)
      } catch (error) {
        console.error("Error fetching data:", error);
      }  
    }
    get()
  }, [carId]);

 


  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      email: "",
      pickupLocation: "",
      pickupDate: "",
      pickupTime: "",
      dropoffLocation: "",
      dropoffDate: "",
      
    },
  });
 

  const today = new Date().toISOString().split("T")[0]; // Define today's date

  // submit form ooooook
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // setstop(true)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);
    
    let days =  calculateRentalDays(data.pickupDate,data.pickupTime,data.dropoffDate)
    let time = timeCalsulate(data.pickupTime)
    data.pickupTime = time;
    console.log(data)
    const orderId = nanoid(10) // Example: "V1StGXR8_Z"
if (data && days &&orderId && pref ) {
 

 setidata({ ...data, days, orderId,ref:pref  });
}
if(idata){

  console.log(idata,"data");
}

    //   const val = await createProduct(data)
    //   // form.reset()
    //   if(val){
    //   setstop(false)
    // }
    // if (stop===false) {
    //   router.replace("/success");
    //   }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="my-10">
            <div className="mx-5">
              {/* main grid which divides both side1 and side2 */}
              <div className="flex bd:flex-row flex-col gap-5 ">
                {/* side 1    side2 has been hidden*/}
                <div className="  w-full  bd:order-1 order-2 flex flex-col gap-y-5">
                  {/*Inside side-1 4 div will be  */}

                  {/* starting form */}

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
                        {/* name */}
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-y-3">
                                <FormLabel className="capitalize md:text-base focus:none text-sm font-semibold text-seconday3">
                                  Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-primary placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-10 px-5 py-3 focus:outline-none down1 focus:ring-1 focus:ring-button1"
                                    placeholder="Your Name"
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        {/* phonr number */}
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-y-3">
                                <FormLabel className="capitalize md:text-base text-sm font-semibold text-seconday3">
                                  Phone Number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-primary placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-10 px-5 py-3 focus:outline-none down1 focus:ring-1 focus:ring-button1"
                                    placeholder=" Phone Number "
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        {/* address */}
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-y-3">
                                <FormLabel className="capitalize md:text-base text-sm font-semibold text-seconday3">
                                  Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-primary placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-10 px-5 py-3 focus:outline-none down1 focus:ring-1 focus:ring-button1 "
                                    placeholder=" Enter Your Address "
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        {/* email */}
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-y-3">
                                <FormLabel className="capitalize md:text-base text-sm font-semibold text-seconday3">
                                  Email{" "}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-primary placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-10 px-5 py-3 focus:outline-none down1 focus:ring-1 focus:ring-button1 "
                                    placeholder=" Enter Your Email "
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
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
                      {/* pickup form of billing 1 rental info*/}
                      <div className="flex flex-col gap-y-6">
                        {/* pickup head */}
                        <div className="flex flex-row gap-2 items-center">
                          <DotBluePoints dot2="hidden" />
                          <h4 className="text-base font-semibold text-seconday3">
                            Pick-Up
                          </h4>
                        </div>
                        {/* pickup form */}
                        <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3 bd:gap-6 gap-5">
                           {/* pickup location */}
                          <FormField
                            control={form.control}
                            name="pickupLocation"
                            render={({ field }) => (
                              <FormItem>
                                <div className="flex flex-col gap-y-3">
                                  <FormLabel className="capitalize md:text-base text-sm font-semibold text-seconday3">
                                    Where To Pick Up{" "}
                                  </FormLabel>
                                  <Controller
                                    name={field.name}
                                    control={form.control}
                                    render={({ field: controllerField }) => (
                                      <AddressInput
                                      holder="Pickup Location"
                                        value={controllerField.value || ""}
                                        onChange={controllerField.onChange}
                                      />
                                    )}
                                  />
                                </div>
                                <FormMessage className="text-red-500" />
                              </FormItem>
                            )}
                          />
                           {/* pickup date */}
                           <FormField
                          control={form.control}
                          name="pickupDate"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-y-3">
                                <FormLabel className="capitalize md:text-base text-sm font-semibold text-seconday3">
                                  Pick-Up Date
                                </FormLabel>
                                <FormControl>
                                  <Input
                                  min={today}
                                  type="date"
                                    className="bg-primary placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-10 px-5 py-3 focus:outline-none down1 focus:ring-1 focus:ring-button1 "
                                    placeholder=" Enter Pick-Up Date "
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        {/* pick up time */}
                           <FormField
                          control={form.control}
                          name="pickupTime"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-y-3">
                                <FormLabel className="capitalize md:text-base text-sm font-semibold text-seconday3">
                                  Pick-Up Time
                                </FormLabel>
                                <FormControl>
                                  <Input
                                  type="time"
                                    className="bg-primary placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-10 px-5 py-3 focus:outline-none down1 focus:ring-1 focus:ring-button1 "
                                    placeholder=" Enter Pick-Up Time "
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                          
                        </div>
                      </div>

                      {/* 2 form of billing 2 rental info*/}
                      <div className="flex flex-col gap-y-6">
                        
                        {/* picup */}
                        <div className="flex flex-row gap-2 items-center">
                          <DotBluePoints dot1="hidden" />
                          <h4 className="text-base font-semibold text-seconday3">
                            Drop-Off
                          </h4>
                        </div>
                        {/* formr */}
                        <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3 bd:gap-6 gap-5">
                        {/* drop location */}
                        <FormField
                            control={form.control}
                            name="dropoffLocation"
                            render={({ field }) => (
                              <FormItem>
                                <div className="flex flex-col gap-y-3">
                                  <FormLabel className="capitalize md:text-base text-sm font-semibold text-seconday3">
                                    Where To Drop Off{" "}
                                  </FormLabel>
                                  <Controller
                                    name={field.name}
                                    control={form.control}
                                    render={({ field: controllerField }) => (
                                      <AddressInput
                                      holder="DropOff Location"
                                        value={controllerField.value || ""}
                                        onChange={controllerField.onChange}
                                      />
                                    )}
                                  />
                                </div>
                                <FormMessage className="text-red-500" />
                              </FormItem>
                            )}
                          />
                           {/* dropoff date */}
                           <FormField
                          control={form.control}
                          name="dropoffDate"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-y-3">
                                <FormLabel className="capitalize md:text-base text-sm font-semibold text-seconday3">
                                  Drop-Off Date
                                </FormLabel>
                                <FormControl>
                                  <Input
                                  type="date"
                                  className="bg-primary placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs  text-sm  font-medium rounded-[10px] sm:px-10 px-5 py-3 focus:outline-none down1 focus:ring-1 focus:ring-button1 "
                                  placeholder=" Enter Drop-Off Date "
                                  min={today}
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* side 1 ends */}

                



              </div>
            </div>
          </div>

          <Button type="submit"> submit </Button>
        </form>
      </Form>

    </>
  );
};

export default Rent_now_copy;
