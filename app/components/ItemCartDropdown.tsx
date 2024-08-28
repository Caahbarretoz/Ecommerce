import { MdOutlineDeleteForever } from "react-icons/md";
import { Product } from "./ProductCard";

type ItemCartDropdownProps = {
  product: Product;
  removeItemFromCart: (itemToRemove: Product) => void;
  lessItemQuantity: (item: Product) => void;
  moreItemQuantity: (item: Product) => void;
  itemQuantity: number;
};

const ItemCartDropdown = ({
  product,
  removeItemFromCart,
  lessItemQuantity,
  moreItemQuantity,
  itemQuantity,
}: ItemCartDropdownProps) => {
  return (
    <div className="relative flex shrink-0 items-center mt-5 rounded-lg bg-white border-2 shadow-xl w-80 h-24">
      <div
        onClick={() => removeItemFromCart(product)}
        className="absolute -right-2 -top-2 text-xs rounded-full w-5 h-5 cursor-pointer text-white bg-stone-900 bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center"
      >
        <MdOutlineDeleteForever />
      </div>
      <img
        className="ml-3 object-fill h-16 w-16"
        src={product.image ?? product.photo ?? product.images[0]}
        alt=""
      />
      <div className="ml-2 w-16">
        <h1 className="text-wrap text-sm opacity-90 truncate line-clamp-2">
          {product.title ?? product.name}
        </h1>
      </div>
      <div className="ml-2 flex items-center w-14 h-5 rounded border-2 border-gray-200">
        <div
          className="cursor-pointer flex items-center justify-center text-xs font-light w-1/3 border-r-2 border-gray-200"
          onClick={() => lessItemQuantity(product)}
        >
          -
        </div>
        <div className="flex items-center justify-center text-xs font-light w-1/3">
          {product.quantity}
        </div>
        <div
          className="cursor-pointer flex items-center justify-center text-xs font-light w-1/3 border-l-2 border-gray-200"
          onClick={() => moreItemQuantity(product)}
        >
          +
        </div>
      </div>
      <h1 className="ml-4 font-bold text-sm">
        ${product.price * product.quantity}
      </h1>
    </div>
  );
};

export default ItemCartDropdown;
