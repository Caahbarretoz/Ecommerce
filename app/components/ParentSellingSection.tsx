"use client";
import { useEffect, useState } from "react";
import SellingSection from "./SellingSection";
import CartDropdown from "./CartDropdown";
import { Product } from "./ProductCard";
import { BsBag } from "react-icons/bs";

const ParentSellingSection = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const addItemToCart = (newItem: Product) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  function removeItemFromCart(itemToRemove: Product) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  }

  const toggleCart = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <section id="products" className="flex flex-col w-full">
        <SellingSection
          sectionTitle="Apple"
          productType="appleProducts"
          cartItems={cartItems}
          addItemToCart={addItemToCart}
          toggleCart={toggleCart}
        />
        <SellingSection
          sectionTitle="Eletronic accessories"
          productType="eletronics"
          cartItems={cartItems}
          addItemToCart={addItemToCart}
          toggleCart={toggleCart}
        />
        <SellingSection
          sectionTitle="Jewelery"
          productType="jewelery"
          cartItems={cartItems}
          addItemToCart={addItemToCart}
          toggleCart={toggleCart}
        />
      </section>

      <CartDropdown
        isOpen={openModal}
        cartItems={cartItems}
        toggleCart={toggleCart}
        removeItemFromCart={removeItemFromCart}
      />

      <button
        onClick={toggleCart}
        className="fixed bottom-5 right-5 bg-principal text-white p-3 rounded-full z-50"
      >
        <BsBag />
      </button>
    </div>
  );
};

export default ParentSellingSection;
