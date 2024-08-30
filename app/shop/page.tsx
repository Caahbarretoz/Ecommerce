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

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedprice] = useState([0, 3000]);

  const filterSelectedBrands = (brand) => {
    setSelectedBrand(brand);
  };

  const filterSelectedCategories = (category) => {
    setSelectedCategory(category);
  };

  const filterSelectedPrice = (price) => {
    setSelectedprice(price);
  };

  return (
    <div className="pt-16 grid grid-cols-7 w-full h-screen bg-[#efefef]">
      <div className="col-span-2">
        <ShopFilter
          categorys={uniqueCategories}
          brands={uniqueBrands}
          filterSelectedCategories={filterSelectedCategories}
          filterSelectedBrands={filterSelectedBrands}
          filterSelectedPrice={filterSelectedPrice}
        />
      </div>
      <div className="col-span-5 overflow-auto">
        <div className="relative flex flex-wrap justify-center gap-5 pt-3 w-full h-full">
          {products.length > 0 &&
            products.map((product: ProductProps) =>
              (selectedCategory == "" &&
                selectedBrand == "" &&
                product.price >= selectedPrice[0] &&
                product.price <= selectedPrice[1]) ||
              (selectedCategory != "" &&
                selectedBrand != "" &&
                selectedCategory.includes(product.category) &&
                selectedBrand.includes(product.brand) &&
                product.price >= selectedPrice[0] &&
                product.price <= selectedPrice[1]) ||
              (selectedCategory != "" &&
                selectedBrand == "" &&
                selectedCategory.includes(product.category) &&
                product.price >= selectedPrice[0] &&
                product.price <= selectedPrice[1]) ||
              (selectedCategory == "" &&
                selectedBrand != "" &&
                selectedBrand.includes(product.brand) &&
                product.price >= selectedPrice[0] &&
                product.price <= selectedPrice[1]) ? (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddItemToCart={addItemToCart}
                />
              ) : null
            )}
        </div>
      </div>
    </div>
  );
};

export default Page;
