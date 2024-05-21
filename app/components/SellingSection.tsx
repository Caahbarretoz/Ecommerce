"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

interface ProductProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: object;
  title: string;
  name: string;
  brand: string;
  photo: string;
}

type SellingSectionProps = {
  sectionTitle: string;
  productType: "eletronics" | "appleProducts";
};

const SellingSection: React.FC<SellingSectionProps> = ({
  sectionTitle,
  productType,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  const [appleProducts, setAppleProducts] = useState<ProductProps[] | null>(
    null
  );
  const [eletronics, setEletronics] = useState<ProductProps[] | null>(null);

  async function getProducts(
    url: string,
    setProduct: React.Dispatch<React.SetStateAction<ProductProps[] | null>>
  ) {
    const res = await fetch(url);
    const data = await res.json();
    {
      productType == "eletronics" && setProduct(data);
    }
    {
      productType == "appleProducts" && setProduct(data.products);
    }

    console.log(data);
  }

  useEffect(() => {
    getProducts(
      "https://fakestoreapi.com/products/category/electronics",
      setEletronics
    );
    getProducts(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC",
      setAppleProducts
    );
  }, []);

  return (
    <div className="relative flex-col flex h-[37rem] items-center w-full justify-center bg-[#f5f5f7]">
      <div className="flex w-[91%] py-5 bg-[#f5f5f7] items-center">
        <h1 className="text-4xl uppercase opacity-80 text-principal">
          {sectionTitle}
        </h1>
        <a className="ml-auto flex items-center underline uppercase" href="">
          go to shop
          <span className="pl-3 text-principal">
            <FaArrowRight />
          </span>
        </a>
      </div>
      <div
        ref={carouselRef}
        className="flex items-center flex-nowrap overflow-x-auto gap-7 h-[35rem] w-[92%] scrollbar-hide"
      >
        {productType === "eletronics" &&
          eletronics &&
          eletronics.length > 0 &&
          eletronics.map((item: ProductProps) => (
            <ProductCard
              key={item.id}
              productPrice={item.price}
              productTitle={item.title}
              productImage={item.image}
            />
          ))}

        {productType === "appleProducts" &&
          appleProducts &&
          appleProducts.length > 0 &&
          appleProducts.map((item: ProductProps) => (
            <ProductCard
              key={item.id}
              productPrice={item.price}
              productTitle={item.name}
              productImage={item.photo}
            />
          ))}

        <button
          className="absolute top-2/4 border-none cursor-pointer text-2xl text-principal z-30 left-9"
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-2/4 border-none cursor-pointer text-2xl text-principal z-30 right-9"
          onClick={scrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SellingSection;
