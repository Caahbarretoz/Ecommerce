"use client";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import CartDropdown from "./CartDropdown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("services");
      if (secondSection) {
        const secondSectionTop = secondSection.getBoundingClientRect().top;

        if (secondSectionTop <= 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex items-center fixed top-0 ${
          isScrolled ? "bg-white " : "bg-stone-950 "
        } w-screen h-16 z-50 transition-all duration-500`}
      >
        <a
          href="#"
          className=" ml-5 transition-all duration-500 hover:scale-105"
        >
          <span className="text-3xl text-gradient">Ecommerce</span>
          <span className=" text-xs text-principal">©</span>
        </a>
        <div className="flex text-principal space-x-6 ml-auto ">
          <a
            href="#home"
            className="hover:text-hover transition-all duration-500"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-hover transition-all duration-500"
          >
            Services
          </a>
          <a
            href="#products"
            className="hover:text-hover transition-all duration-500"
          >
            Products
          </a>

          <a
            href="#sale"
            className="hover:text-hover transition-all duration-500"
          >
            Sale
          </a>
          <a
            href="#contact"
            className="hover:text-hover transition-all duration-500"
          >
            Contact
          </a>
        </div>
        <div className="flex text-principal items-center space-x-6 ml-24 mr-20 text-lg">
          <button className="hover:text-hover">
            <IoIosSearch />
          </button>
          <button className="hover:text-hover">
            <BsCart />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
