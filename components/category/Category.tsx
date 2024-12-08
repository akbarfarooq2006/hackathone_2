import React from "react";
import SideBar from "./SideBar";
import UpDrop from "../home/UpDrop";
import Card from "../mini/Card";
import Select from "../mini/Select";
import Link from "next/link";



const Category = () => {
  return (
    <>
      <div className=" w-full h-full">
        <div className=" flex flex-row h-full  justify-center relative">
          {/* side 1 */}
          <div className=" lg:h-[1248px] md:h-[1970px] h-[3555px]  md:flex hidden ">
            <div className="bg-secondary  w-56  h-[100%] inline-block ">
              <div className="pt-8 px-3">
                <div className="flex flex-col  gap-y-8">
                  {/* type all */}
                  {/* 1 */}
                  <div className="flex flex-col gap-y-2">
                    <h3 className="uppercase text-xs text-button3 font-semibold tracking-widest mb-2">
                      {" "}
                      type
                    </h3>
                    <Select label="Sport" num="10" />
                    <Select label="SUV" num="12" />
                    <Select label="MPV" num="16" />
                    <Select label="Sedan" num="20" />
                    <Select label="Coupe" num="14" />
                    <Select label="Hatchback" num="14" />
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col gap-y-3">
                    <h3 className="uppercase text-xs text-button3 font-semibold tracking-widest mb-2">
                      {" "}
                      capacity
                    </h3>
                    <Select label="2 Person" num="10" />
                    <Select label="4 Person" num="12" />
                    <Select label="6 Person" num="12" />
                    <Select label="8 Person" num="20" />
                  </div>
                  {/* 3 price */}
                  <div>
                    <h3 className="uppercase text-xs text-button3 font-semibold tracking-widest mb-2">
                      {" "}
                      price
                    </h3>
                    <div className="mr-5">
                      <input
                        type="range"
                        name="price"
                        id="range"
                        className="w-full"
                      />
                      <label
                        htmlFor="range"
                        className="text-base font-semibold text-button4"
                      >
                        Max. $100.00
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* side-2 content */}
          <div
            className="flex-1 flex flex-col gap-y-6
         w-full h-full w- px-6"
          >
            <UpDrop />
            {/* all cards */}
            <div className="grid lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-5 grid-cols-1 grid-rows-9 md:gap-3 gap-2">
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
        </div>
        {/* button */}
        <div className="flex items-center justify-center mt-8 mb-16">
            <Link href={'/'}
            className="bg-button1 sm:text-base text-xs rounded text-secondary px-4 py-2">
            Show More Cars</Link>
        </div>
      </div>
    </>
  );
};

export default Category;
