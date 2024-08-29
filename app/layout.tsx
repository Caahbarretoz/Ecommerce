"use client";

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { BsBag } from "react-icons/bs";
import { CartProvider } from "./components/CartProvider";
import CartDropdown from "./components/CartDropdown";
import { useState } from "react";

const metadata: Metadata = {
  title: "Ecommerce©",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openModal, setOpenModal] = useState(false);

  const toggleCart = () => {
    setOpenModal(!openModal);
  };

  return (
    <html lang="en">
      <body className=" overflow-x-hidden">
        <CartProvider>
          <Header />
          {children}
          <CartDropdown isOpen={openModal} toggleCart={toggleCart} />
          <button
            onClick={toggleCart}
            className="fixed bottom-5 right-5 bg-principal text-white p-3 rounded-full z-50"
          >
            <BsBag />
          </button>
        </CartProvider>
      </body>
    </html>
  );
}
