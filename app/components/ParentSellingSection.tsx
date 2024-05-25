"use client";
import { useState } from "react";
import SellingSection from "./SellingSection";
import CartDropdown from "./CartDropdown";
import { Product } from "./ProductCard";
import { BsBag } from "react-icons/bs";

const ParentSellingSection = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const addItemToCart = (newItem: Product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  function removeItemFromCart(itemToRemove: Product) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  }

  const lessItemQuantity = (item: Product) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
      return updatedItems;
    });
  };

  const moreItemQuantity = (item: Product) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      return updatedItems;
    });
  };

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
        itemQuantity={0}
        lessItemQuantity={lessItemQuantity}
        moreItemQuantity={moreItemQuantity}
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
