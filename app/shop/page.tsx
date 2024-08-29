"use client";
import ShopFilter from "./components/ShopFilter";
import { useState, useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";
import { ProductProps } from "@/app/components/interfaces-types";
import { useCart } from "../components/CartProvider";

const Page = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [uniqueBrands, setUniqueBrands] = useState<string[]>([]);

  async function getProducts(url: string, api: string) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts((prevItems) => {
        const newProducts = api === "fakestore" ? data : data.products;

        // Filtrar produtos duplicados
        const filteredProducts = newProducts.filter(
          (newProduct) => !prevItems.some((item) => item.id === newProduct.id)
        );

        return [...prevItems, ...filteredProducts];
      });
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

  const { addItemToCart } = useCart();

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
    </div>
  );
};

export default Page;
