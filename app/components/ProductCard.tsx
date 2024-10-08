import { useState } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { MdDone } from "react-icons/md";

export interface Product {
  price: number;
  title?: string;
  image?: string;
  images?: string;
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
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onAddItemToCart(product);
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  function setProduct() {
    localStorage.setItem("product", JSON.stringify(product));
  }

  return (
    <div className="relative flex flex-shrink-0 flex-col justify-end p-7 bg-white w-80 h-[30rem] shadow-gray-300 shadow-lg rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105">
      <a
        href="/product"
        onClick={setProduct}
        className="flex justify-center items-center w-full h-96 "
      >
        <img
          className=" max-h-72 object-cover"
          src={product.image ?? product.photo ?? product.images?.[0]}
        />
      </a>

      <div className="flex flex-col justify-start w-full h-1/3 pt-2">
        <h1 className="font-bold opacity-85 text-wrap text-lg tracking-wide truncate line-clamp-2">
          {product.title ?? product.name}
        </h1>
        <span className="mt-auto text-gray-600">${product.price}</span>
        <button
          onClick={handleClick}
          className={`absolute bottom-5 right-5 text-white  opacity-85 text-lg py-3 px-3 rounded-full hover:opacity-100  ${
            clicked ? "bg-green-500" : "bg-principal"
          }`}
        >
          {clicked == true ? <MdDone /> : <TbShoppingBagPlus />}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
