"use client";

import { BsBag } from "react-icons/bs";
import CartDropdown from "../components/CartDropdown";
import { Product } from "@/app/components/ProductCard";
import ShopFilter from "./components/ShopFilter";
import { useState, useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";
import { ProductProps } from "@/app/components/interfaces-types";

const Page = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [uniqueBrands, setUniqueBrands] = useState<string[]>([]);

  async function getProducts(url: string, api: string) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (api === "fakestore") {
        setProducts((prevItems) => [...prevItems, ...data]);
      } else {
        setProducts((prevItems) => [...prevItems, ...data.products]);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    getProducts("https://dummyjson.com/products/category/smartphones", "mks");
    getProducts("https://fakestoreapi.com/products", "fakestore");
  }, []);

  useEffect(() => {
    // Extrair categorias dos produtos e remover duplicatas
    const allCategories = products.map((product) => product.category);
    const uniqueCategoriesSet = new Set(allCategories);
    setUniqueCategories([...uniqueCategoriesSet]);

    const allBrands = products.map((product) => product.brand);
    const uniqueBrandsSet = new Set(allBrands);
    setUniqueBrands([...uniqueBrandsSet]);
  }, [products]);

  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState();
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

  useEffect(() => {}, [cartItems]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Atualizar o localStorage sempre que cartItems mudar
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <div className="pt-16 grid grid-cols-7 w-full h-screen bg-[#efefef]">
      <div className="col-span-2">
        <ShopFilter categorys={uniqueCategories} brands={uniqueBrands} />
      </div>
      <div className="col-span-5 overflow-auto">
        <div className="relative flex flex-wrap justify-center gap-5 pt-3 w-full h-full">
          {products.length > 0 &&
            products.map((item: ProductProps) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddItemToCart={addItemToCart}
              />
            ))}
        </div>
      </div>
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

export default Page;
