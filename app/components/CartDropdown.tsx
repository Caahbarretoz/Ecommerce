"use client";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import ItemCartDropdown from "./ItemCartDropdown";

const CartDropdown = () => {
  const [modalState, setModalState] = useState("flex");
  function closeCart() {
    setModalState("hidden");
  }
  return (
    <div
      className={`fixed ${modalState} flex-col items-center bg-white top-0 right-0 w-96 h-full z-40`}
    >
      <h1 className=" mt-20 mr-auto ml-5 text-black font-bold tracking-wide text-2xl">
        Carrinho
      </h1>
      <div
        className=" absolute right-5 top-20 flex items-center w-8 h-8 justify-center text-white text-sm bg-principal opacity-90 hover:opacity-100 rounded-full p-1 cursor-pointer"
        onClick={closeCart}
      >
        <GrClose />
      </div>
      <div className="flex flex-col items-center overflow-y-auto w-full scrollbar-hide mb-24 pb-5">
        <ItemCartDropdown />
      </div>
      <div className="bg-principal opacity-85 hover:opacity-100 absolute flex justify-center items-center bottom-0 h-24 w-full cursor-pointer">
        <h1 className="text-white font-bold text-xl tracking-wide">
          Finalizar Compra
        </h1>
      </div>
    </div>
  );
};

export default CartDropdown;
