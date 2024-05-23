import React from "react";
import { Product } from "./ProductCard";

type ItemCartDropdownProps = {
  product: Product;
};

const ItemCartDropdown = ({ product }: ItemCartDropdownProps) => {
  return (
    <div className="flex shrink-0 items-center mt-5 rounded-lg bg-white border-2 shadow-xl w-80 h-24">
      <img
        className="ml-3 object-fill h-16 w-16"
        src={product.image ?? product.photo}
        alt=""
      />
      <div className="ml-2 w-16">
        <h1 className="text-wrap text-sm opacity-90 truncate line-clamp-2">
          {product.title ?? product.name}
        </h1>
      </div>
      <div className="ml-2 flex items-center w-14 h-5 rounded border-2 border-gray-200">
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
      <h1 className="ml-4 font-bold text-sm">${product.price}</h1>
    </div>
  );
};

export default ItemCartDropdown;
