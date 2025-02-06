// "use client"
import React from "react";
import SideBar from "../mini/SideBar";
import UpDrop from "../home/UpDrop";
import Card from "../delete_component/Card";
import Select from "../mini/Select";
import Link from "next/link";
import CrRecomendation from "./CrRecomendation";


// import { useState } from "react";



const Category = () => {

    


  return (
    <>

      <div className=" w-full h-full">
      
        <div className=" flex flex-row h-full  relative">
          {/* side 1 */}
          <SideBar
          className={`md:inline-block hidden`}
          />
          {/* side-2 content */}

          {/* side 2 button flex */}
          <div className="flex-col flex-1 flex">
          <div className="     px-6">
            <CrRecomendation/>
          </div>
        {/* button */}

        </div>

        </div>
        
      </div>
    </>
  );
};

export default Category;
