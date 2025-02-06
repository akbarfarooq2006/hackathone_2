"use client";
import React from "react";
import Cardslike from "./Cardslike";
import { products } from "@/types/products";
import { useState, useEffect } from "react";
import { useLikeContext } from "@/app/context/LikeContext";
import CategoryHeader from "../header/CategoryHeader";
import Cards from "../mini/Cards";
import Header2 from "../header/Header2";
import FormHeader from "../header/FormHeader";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Loader } from "lucide-react";
import PageLoader from "../loader/PageLoader";

const LikeComponents = () => {
  const { liked, count } = useLikeContext();

  const [data, setdata] = useState([]); //here popular tag data will be stored
  const [error, setError] = useState("");
  const [loading, setloading] = useState<boolean>(true);
  const [empty, setempty] = useState<boolean>(false);

  async function fetchData() {
    try {
      setloading(true);
      const res = await fetch("/api/like");
      const result = await res.json();
      if (result.data) {
        setdata(result.data);
      }
      if (result.data.length === 0) {
        setempty(true);
      }
      if (data) {
        setloading(false);
      }

      // setdata(result.data);
      // if (data) {
      //   console.log(data, "🎉🎉");
      // }
    } catch (err) {
      setError("Failed to fetch data");
    }
  }

  useEffect(() => {
    fetchData();
    // console.log('popular ka render check😜😜')
  }, [liked]);
  if (error) return <p>{error}</p>;

  return (
    <>
      <div
        className={`min-h-[80vh] my-10 relative ${loading ? " relative" : ""} `}
      >
        <div className="   w-full mb-10">
          <div className="container flex flex-col gap-y-5">
            <CategoryHeader head="Cars wishlist" />
            {/* all cards */}
            <div className="grid grid-cols-1  gap-8  ">
              {data.map((items: products) => {
                return <Cardslike key={items._id} item={items} />;
              })}
            </div>
          </div>
        </div>
{/* loading , empty */}
        <div className="h-[80vh] -z-50 absolute top-0 w-full">
          <div className="h-full w-full relative">
            <div
              className={ loading? "absolute top-2/4 right-2/4 transform translate-x-1/2 -translate-y-1/2" : ""} >
              {loading ? <PageLoader /> : null}
            </div>
            {empty ? (
              <div className=" absolute top-2/4 right-2/4 w-full px-5  transform translate-x-1/2 -translate-y-1/2">
                <p className="text-center text-3xl font-bold text-button1  mt-5">
                  No items in your wishlist yet
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeComponents;
