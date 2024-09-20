import { useFilterStore } from '../store';
import useProductStore from '../store/slices/productStore';
import { useState } from 'react';
import GenderFilter from './filters/GenderFilter';
import BrandFilter from './filters/BrandFilter';
import CategoryFilter from './filters/CategoryFilter';
import ColorFilter from './filters/ColorFilter';
import DiscountFilter from './filters/DiscountFilter';
import PriceRangeFilter from "./filters/PriceRangeFilter"

const Sidebar = () => {
  const { products } = useProductStore();
  const {
    genderFilter,
    setGenderFilter,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    categories,
    setCategory,
    colors,
    setColors,
    brands,
    setBrands,
    discountRateFilter,
    setDiscountRateFilter
  } = useFilterStore();

  const genderFilteredProducts = products.filter(product => product.gender === genderFilter);
  const uniqueCategories = [...new Set(genderFilteredProducts.map(product => product?.category))];
  const uniqueBrands = [...new Set(genderFilteredProducts.map(product => product?.brand))];
  const uniqueColors = [...new Set(genderFilteredProducts.map(product => product?.color))];
  const uniqueGenders = [...new Set(products.map(product => product?.gender))];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="sm:hidden p-2 bg-[#a3a3a3] text-white"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className={`absolute sm:relative flex flex-col flex-none w-[230px] h-auto bg-white shadow-lg border border-[#d1d1d1] py-4 ${isOpen ? 'block' : 'hidden'}  sm:block`}>

        <GenderFilter
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          uniqueGenders={uniqueGenders}
        />

        <BrandFilter
          uniqueBrands={uniqueBrands}
          brands={brands}
          setBrands={setBrands}
        />

        <CategoryFilter
          uniqueCategories={uniqueCategories}
          categories={categories}
          setCategory={setCategory}
        />

        <ColorFilter
          uniqueColors={uniqueColors}
          colors={colors}
          setColors={setColors}
        />

        <PriceRangeFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />

        <DiscountFilter
          discountRateFilter={discountRateFilter}
          setDiscountRateFilter={setDiscountRateFilter}
        />

      </div>
    </div>
  );
};

export default Sidebar;