// CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "./ProductCard";

const CartContext = createContext(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Carregar o carrinho do localStorage na inicialização
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

  // Funções para manipular o carrinho
  const addItemToCart = (newItem: Product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );

      let updatedItems;
      if (existingItemIndex !== -1) {
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
      } else {
        updatedItems = [...prevItems, { ...newItem, quantity: 1 }];
      }

      return updatedItems;
    });
  };

  const addSingleProductToCart = (newItem: Product, quantityItem: number) => {
    if (quantityItem > 0) {
      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) => item.id === newItem.id
        );

        let updatedItems;
        if (existingItemIndex !== -1) {
          updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += quantityItem;
        } else {
          updatedItems = [...prevItems, { ...newItem, quantity: quantityItem }];
        }

        return updatedItems;
      });
    }
  };

  const removeItemFromCart = (itemToRemove: Product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

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

  // Calcula o total do carrinho
  useEffect(() => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    addSingleProductToCart,
    removeItemFromCart,
    lessItemQuantity,
    moreItemQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
