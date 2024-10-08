"use client";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import ItemCartDropdown from "./ItemCartDropdown";
import { useCart } from "./CartProvider";
import { Product } from "./ProductCard";

type CartDropdownProps = {
  isOpen: boolean;
  toggleCart: () => void;
};

const CartDropdown = ({ isOpen, toggleCart }: CartDropdownProps) => {
  const { cartItems, removeItemFromCart, lessItemQuantity, moreItemQuantity } =
    useCart();
  const [cartItemsList, setCartItemsList] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (Array.isArray(cartItems)) {
      const productsWithPricesAsNumbers = cartItems.map((item) => ({
        ...item,
        price: Number(item.price),
      }));
      setCartItemsList(productsWithPricesAsNumbers);
    }
  }, [cartItems]);

  useEffect(() => {
    if (cartItemsList.length > 0) {
      const total = cartItemsList.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    }
  }, [cartItemsList]);

  return (
    <div
      className={`fixed ${
        isOpen ? "flex" : "hidden"
      } flex-col items-center bg-white top-0 right-0 w-96 h-full z-40`}
    >
      <h1 className="mt-20 mr-auto ml-5 text-black font-bold tracking-wide text-2xl">
        Cart
      </h1>
      <div
        className="absolute right-5 top-20 flex items-center w-8 h-8 justify-center text-white text-sm bg-principal opacity-90 hover:opacity-100 rounded-full p-1 cursor-pointer"
        onClick={toggleCart}
      >
        <GrClose />
      </div>
      <div className="flex flex-col items-center overflow-y-auto w-full scrollbar-hide mb-36 pb-5 ">
        {cartItemsList.length > 0 ? (
          cartItemsList.map((item) => (
            <ItemCartDropdown
              key={item.id}
              product={item}
              removeItemFromCart={removeItemFromCart}
              lessItemQuantity={lessItemQuantity}
              moreItemQuantity={moreItemQuantity}
              itemQuantity={item.quantity}
            />
          ))
        ) : (
          <h1 className="mt-5">Empty Cart!</h1>
        )}
      </div>
      {cartItemsList.length > 0 && (
        <div className="text-black absolute bottom-24 flex items-center justify-center py-2">
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      )}
      <div className="bg-principal opacity-85 hover:opacity-100 flex justify-center items-center absolute bottom-0 h-24 w-full cursor-pointer">
        <h1 className="text-white font-bold text-xl tracking-wide">Checkout</h1>
      </div>
    </div>
  );
};

export default CartDropdown;
