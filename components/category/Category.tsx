// "use client"
import React from "react";
import SideBar from "../mini/SideBar";
import UpDrop from "../home/UpDrop";
import Card from "../delete_component/Card";
import Select from "../mini/Select";
import Link from "next/link";
import Header2 from "../header/Header2";
// import { useState } from "react";



const Category = () => {




    // const [clck, setclck] = useState(false);
    // function toogle(){
    //     setclck(!clck)
    //     // console.log(clck);
        
    // }
    


  return (
    <>

      <div className=" w-full h-full">
      
        <div className=" flex flex-row h-full  justify-center relative">
          {/* side 1 */}
          <SideBar
          className={`md:inline-block hidden`}
          />
          {/* side-2 content */}

          {/* side 2 button flex */}
          <div className="flex-col flex-1 flex">
          <div
            className="flex-1 flex flex-col gap-y-6
         w-full h-full w- px-6"
          >
            <UpDrop />
            {/* all cards */}
            <div className="grid lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-5 grid-cols-1 grid-rows-9 md:gap-5 gap-4">
              {/* 1 */}
              <Card
                red="hidden"
                src="/images/home/recomendation/Car1.png"
                carName={"All New Rush"}
                modelName="SUV"
                rent="72"
                offPrice="80"
              />
              {/* 2 */}
              <Card
                outline="hidden"
                src="/images/home/recomendation/Car2.png"
                carName={"CR  - V"}
                modelName="SUV"
                rent="80"
                offPrice="100"
              />
              {/* 3 */}
              <Card
                red="hidden"
                src="/images/home/recomendation/Car3.png"
                carName={"All New Terios"}
                modelName="SUV"
                rent="72"
                isdiscount="hidden"
              />
              {/* 4 */}
              <Card
                outline="hidden"
                src="/images/home/recomendation/Car4.png"
                carName={"CR  - V"}
                modelName="SUV"
                rent="80"
                offPrice="100"
              />
              {/* 5 */}
              <Card
                red="hidden"
                src="/images/home/recomendation/Car5.png"
                carName={"MG ZX Exclusice"}
                modelName="Hatchback"
                rent="76"
                offPrice="80"
              />
              {/* 6 */}
              <Card
                outline="hidden"
                src="/images/home/recomendation/Car6.png"
                carName={"New MG ZS"}
                modelName="SUV"
                rent="80"
                offPrice="100"
              />
              {/* 7 */}
              <Card
                red="hidden"
                src="/images/home/recomendation/Car7.png"
                carName={"Rolls - Royce"}
                modelName="Hatchback"
                rent="99"
                isdiscount="hidden"
              />
              {/* 8 */}
              <Card
                outline="hidden"
                src="/images/home/recomendation/Car8.png"
                carName={"New MG ZS"}
                modelName="SUV"
                rent="74"
                offPrice="100"
              />
              {/* 9 */}
              <Card
                src="/images/home/recomendation/Car1.png"
                carName={"All New Rush"}
                modelName="SUV"
                rent="72"
                offPrice="80"
                outline="hidden"
              />
            </div>
          </div>
        {/* button */}
        <div className="flex items-center justify-center mt-8 mb-12">
            <Link href={'/'}
            className="bg-button1 sm:text-base text-xs rounded text-secondary px-4 py-2  hover:scale-105 down grid place-items-center hover:bg-button1/85 transform-gpu  overflow-hidden">
            Show More Cars</Link>
        </div>
        </div>

        </div>
        
      </div>
    </>
  );
};

export default Category;
