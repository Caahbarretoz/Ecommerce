"use client";

import SellingSection from "./SellingSection";

import { useCart } from "./CartProvider";

const ParentSellingSection = () => {
  const { cartItems, addItemToCart } = useCart();
  return (
    <div>
      <section id="products" className="flex flex-col w-full">
        <SellingSection
          sectionTitle="Apple"
          productType="appleProducts"
          cartItems={cartItems}
          addItemToCart={addItemToCart}
        />
        <SellingSection
          sectionTitle="Eletronic accessories"
          productType="eletronics"
          cartItems={cartItems}
          addItemToCart={addItemToCart}
        />
        <SellingSection
          sectionTitle="Jewelery"
          productType="jewelery"
          cartItems={cartItems}
          addItemToCart={addItemToCart}
        />
      </section>
    </div>
  );
};

export default ParentSellingSection;
