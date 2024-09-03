"use client";
import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { useCart } from "../components/CartProvider";
import { ProductProps } from "../components/interfaces-types";

const ProductPage = () => {
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [productQuantity, setProductQuantity] = useState(1);

  function moreQuantity() {
    setProductQuantity(productQuantity + 1);
  }

  function lessQuantity() {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  }

  const { addSingleProductToCart } = useCart();

  useEffect(() => {
    // Tenta obter o produto do localStorage
    const selectedProduct = localStorage.getItem("product");
    if (selectedProduct) {
      const productData = JSON.parse(selectedProduct);
      setProduct(productData);
    }
  }, []);

  if (!product) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Loading
      </div>
    );
  }
  return (
    <div className="pt-16 w-screen flex flex-col  bg-[#f5f5f7]">
      <div className="flex w-full h-[75vh] ">
        <div className="flex flex-col w-[40%]  pl-24 pt-16 gap-y-7">
          <div className="flex h-[90%] w-[93%] bg-white justify-center rounded shadow-gray-300 shadow-lg">
            <img
              src={product.image ?? product.photo ?? product.images?.[0]}
              alt=""
              className=" object-cover "
            />
          </div>
        </div>
        <div className="flex flex-col ml-10 pt-16  ">
          <h1 className="text-black  font-bold text-4xl mb-3">
            {product.title ?? product.name}
          </h1>
          <div className="flex text-principal text-xl">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <div className="bodoni-regular flex flex-col mt-2 text-base">
            <span>Category: {product.category}</span>
            <span>Brand: {product.brand}</span>
          </div>

          <span className="font-bold text-2xl bodoni-regular mt-7">
            ${product.price}
          </span>
          <div className="ml-2 flex items-center w-36 h-10 rounded border-2 mt-8 border-gray-200">
            <div
              onClick={lessQuantity}
              className="cursor-pointer flex items-center justify-center text-xs font-light w-1/3 border-r-2 border-gray-200"
            >
              -
            </div>
            <div className="flex items-center justify-center text-xs font-light w-1/3">
              {productQuantity}
            </div>
            <div
              onClick={moreQuantity}
              className="cursor-pointer flex items-center justify-center text-xs font-light w-1/3 border-l-2 border-gray-200"
            >
              +
            </div>
          </div>
          <button
            onClick={() => addSingleProductToCart(product, productQuantity)}
            className="p-5 mt-3 w-96 rounded bg-principal text-white text-xl hover:bg-hover hover:text-black transition-all duration-500 active:border-2 active:border-principal active:bg-neutral-800"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="bg-gray-50 pl-24">
        <h1 className="text-xl font-bold text-principal">Description</h1>
        <p className="w-2/3 text-wrap text-neutral-800">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
