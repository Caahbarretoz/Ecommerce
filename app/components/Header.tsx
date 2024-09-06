"use client";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true); // Começa preto

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("services");

      if (secondSection) {
        const secondSectionTop = secondSection.getBoundingClientRect().top;

        if (secondSectionTop <= 0) {
          setIsScrolled(false); // Fora da seção "home", o header fica branco
        } else {
          setIsScrolled(true); // Dentro da seção "home", o header fica preto
        }
      }
    };

    // Checar se a seção "home" existe ao carregar a página
    const homeSectionExists = document.getElementById("home");
    if (homeSectionExists) {
      setIsScrolled(true); // Header preto ao iniciar na seção "home"
    } else {
      setIsScrolled(false); // Header branco se a seção "home" não existir
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex items-center fixed top-0 ${
          isScrolled ? "bg-stone-950 " : "bg-white "
        } w-screen h-16 z-50 transition-all duration-500`}
      >
        <a
          href="/"
          className=" ml-5 transition-all duration-500 hover:scale-105"
        >
          <span className="text-3xl text-gradient">Ecommerce</span>
          <span className=" text-xs text-principal">©</span>
        </a>
        <div className="flex text-principal space-x-6 ml-auto ">
          <a
            href="/#home"
            className="hover:text-hover transition-all duration-500"
          >
            Home
          </a>
          <a
            href="/#services"
            className="hover:text-hover transition-all duration-500"
          >
            Services
          </a>
          <a
            href="/#products"
            className="hover:text-hover transition-all duration-500"
          >
            Products
          </a>

          <a
            href="/#sale"
            className="hover:text-hover transition-all duration-500"
          >
            Sale
          </a>
          <a
            href="/#contact"
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
