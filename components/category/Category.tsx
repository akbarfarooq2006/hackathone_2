// "use client"
import React from "react";
import SideBar from "../mini/SideBar";
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
