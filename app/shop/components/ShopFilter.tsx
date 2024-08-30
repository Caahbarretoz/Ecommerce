import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "react-slider";

const ShopFilter = ({
  categorys,
  brands,
  filterSelectedCategories,
  filterSelectedBrands,
  filterSelectedPrice,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  function handleCategorieClick(category: string) {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        // Se já estiver clicado, remove do array (desmarca)
        return prevSelected.filter((i) => i !== category);
      } else {
        // Se não estiver clicado, adiciona ao array (marca)
        return [...prevSelected, category];
      }
    });
  }

  function handleBrandClick(brand: string) {
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(brand)) {
        // Se já estiver clicado, remove do array (desmarca)
        return prevSelected.filter((i) => i !== brand);
      } else {
        // Se não estiver clicado, adiciona ao array (marca)
        return [...prevSelected, brand];
      }
    });
  }

  useEffect(() => {
    filterSelectedBrands(selectedBrands);
  }, [selectedBrands]);

  useEffect(() => {
    filterSelectedCategories(selectedCategories);
  }, [selectedCategories]);

  const min = 0;
  const max = 3000;
  const [values, setValues] = useState([min, max]);

  useEffect(() => {
    filterSelectedPrice(values);
  }, [values]);

  const handleMinInputChange = (e) => {
    const value = Math.min(Number(e.target.value), values[1] - 1);
    setValues([value, values[1]]);
  };

  // Função para atualizar o valor máximo
  const handleMaxInputChange = (e) => {
    const value = Math.max(Number(e.target.value), values[0] + 1);
    setValues([values[0], value]);
  };

  const [displayPrice, setdisplayPrice] = useState(false);
  const [displayCategories, setdisplayCategories] = useState(false);
  const [displayBrands, setDisplayBrands] = useState(false);

  const togglePrice = () => setdisplayPrice(!displayPrice);
  const toggleCategories = () => setdisplayCategories(!displayCategories);
  const toggleBrands = () => setDisplayBrands(!displayBrands);

  return (
    <div className="flex flex-col justify-center text-xl pl-10 bodoni-regular lowercase">
      <div>
        <div className="flex items-center justify-between my-5 px-3 cursor-pointer">
          <h1>Filter by</h1>
          <IoIosArrowDown />
        </div>
      </div>
      <div>
        <div
          className="flex items-center justify-between my-5 px-3 cursor-pointer"
          onClick={togglePrice}
        >
          <h1>price filter</h1>
          {!displayPrice ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>

        <div className={`flex-col ${displayPrice ? "flex" : "hidden"}`}>
          <div className="relative flex">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-700">
              $
            </span>
            <input
              type="number"
              value={values[0]}
              onChange={handleMinInputChange}
              className="w-full pl-6 pr-2 py-1 border border-gray-300 rounded-md text-center bg-gray-50"
            />
            <span className="absolute left-[52%] top-1/2 transform -translate-y-1/2 text-gray-700">
              $
            </span>
            <input
              type="number"
              value={values[1]}
              onChange={handleMaxInputChange}
              className="w-full pl-6 pr-2 py-1 border border-gray-300 rounded-md text-center bg-gray-50"
            />
          </div>

          <Slider
            className="flex items-center w-full h-2 bg-gray-200 rounded-lg mt-5 slider"
            trackClassName="track"
            onChange={setValues}
            value={values}
            min={min}
            max={max}
            minDistance={100}
          />
        </div>
      </div>
      <div>
        <div
          className="flex items-center justify-between my-5 px-3 cursor-pointer"
          onClick={toggleCategories}
        >
          <h1>category</h1>
          {!displayCategories ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
        <div
          className={`${
            displayCategories ? "flex" : "hidden"
          } flex-wrap w-full gap-3`}
        >
          {categorys.length > 0 ? (
            categorys.map((category, index) => (
              <span
                className={`cursor-pointer border-2 p-3 border-zinc-800 ${
                  selectedCategories.includes(category)
                    ? "bg-slate-500"
                    : "bg-transparent"
                }`}
                key={index}
                onClick={() => handleCategorieClick(category)}
              >
                {category}
              </span>
            ))
          ) : (
            <span>No categories available</span>
          )}
        </div>
      </div>
      <div>
        <div
          className="flex items-center justify-between my-5 px-3 cursor-pointer"
          onClick={toggleBrands}
        >
          <h1>brand</h1>
          {!displayBrands ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
        <div
          className={`${
            displayBrands ? "flex" : "hidden"
          } flex-wrap w-full gap-3`}
        >
          {brands.length > 0 ? (
            brands.map(
              (brand, index) =>
                brand && (
                  <span
                    className={`cursor-pointer border-2 p-3 border-zinc-800  ${
                      selectedBrands.includes(brand)
                        ? "bg-slate-500"
                        : "bg-transparent"
                    }`}
                    key={index}
                    onClick={() => handleBrandClick(brand)}
                  >
                    {brand}
                  </span>
                )
            )
          ) : (
            <span>No brands available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
