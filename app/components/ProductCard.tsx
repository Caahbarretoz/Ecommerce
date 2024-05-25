import { useState } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { MdDone } from "react-icons/md";

export interface Product {
  price: number;
  title?: string;
  image?: string;
  name?: string;
  photo?: string;
  id: number;
  quantity: number;
}

type ProductCardProps = {
  product: Product;
  onAddItemToCart: (product: Product) => void;
};

const ProductCard = ({ product, onAddItemToCart }: ProductCardProps) => {
  const [buttonText, setButtonText] = useState(<TbShoppingBagPlus />);

  const changeButtonIcon = () => {
    setButtonText(<MdDone />);
  };

  const changeButtonIconDefault = () => {
    setButtonText(<TbShoppingBagPlus />);
  };

  return (
    <div className="relative flex flex-shrink-0 flex-col justify-end p-7 bg-white w-80 h-[30rem] shadow-gray-300 shadow-lg rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105">
      <div className="flex justify-center items-center w-full h-96 ">
        <img
          className=" max-h-72 object-cover"
          src={product.image ?? product.photo}
        />
      </div>

      <div className="flex flex-col justify-start w-full h-1/3 pt-2">
        <h1 className="font-bold opacity-85 text-wrap text-lg tracking-wide truncate line-clamp-2">
          {product.title ?? product.name}
        </h1>
        <span className="mt-auto text-gray-600">${product.price}</span>
        <button
          onClick={() => onAddItemToCart(product)}
          onFocus={changeButtonIcon}
          onBlur={changeButtonIconDefault}
          className="absolute bottom-5 right-5 text-white bg-principal opacity-85 text-lg py-3 px-3 rounded-full hover:opacity-100 focus:bg-green-500"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
