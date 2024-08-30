import React from "react";
import { IoStar } from "react-icons/io5";

const page = () => {
  return (
    <div className="pt-16 w-screen flex flex-col  bg-[#f5f5f7]">
      <div className="flex w-full h-[75vh] ">
        <div className="flex flex-col w-[40%]  pl-24 pt-16 gap-y-7">
          <div className="flex h-[90%] w-[93%] bg-white justify-center rounded shadow-gray-300 shadow-lg">
            <img
              src="https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png"
              alt=""
              className=" object-cover "
            />
          </div>
        </div>
        <div className="flex flex-col ml-10 pt-16  ">
          <h1 className="text-black  font-bold text-4xl mb-3">IPhone 13 Pro</h1>
          <div className="flex text-principal text-xl">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <div className="bodoni-regular flex flex-col mt-2 text-base">
            <span>Category: smartphones</span>
            <span>Brand: Apple</span>
          </div>

          <span className="font-bold text-2xl bodoni-regular mt-7">
            $1099.99
          </span>
          <div className="ml-2 flex items-center w-36 h-10 rounded border-2 mt-8 border-gray-200">
            <div className="cursor-pointer flex items-center justify-center text-xs font-light w-1/3 border-r-2 border-gray-200">
              -
            </div>
            <div className="flex items-center justify-center text-xs font-light w-1/3">
              1
            </div>
            <div className="cursor-pointer flex items-center justify-center text-xs font-light w-1/3 border-l-2 border-gray-200">
              +
            </div>
          </div>
          <button className="p-5 mt-3 w-96 rounded bg-principal text-white text-xl hover:bg-hover hover:text-black transition-all duration-500">
            Add To Cart
          </button>
        </div>
      </div>

      <div className="bg-gray-50 pl-24">
        <h1 className="text-xl font-bold text-principal">Description</h1>
        <p className="w-2/3 text-wrap text-neutral-800">
          The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera
          system, high-performance chip, and stunning display. It offers
          advanced features for users who demand top-notch technology.
        </p>
      </div>
    </div>
  );
};

export default page;
