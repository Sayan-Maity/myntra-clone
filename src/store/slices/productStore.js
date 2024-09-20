import { create } from "zustand";
import { productData } from "../../constants/productData";

const calculateDiscountedPrice = (price, discountRate) => {
  return Math.round(price * (1 - discountRate / 100));
};

const useProductStore = create((set) => ({
  products: [],
  filteredProducts: [],
  fetchProducts: () => {
    // Mock data request
    setTimeout(() => {
      const productsWithDiscountedPrice = productData.map(product => ({
        ...product,
        discountedPrice: calculateDiscountedPrice(product.price, product.discountRate),
      }));
      set({ products: productsWithDiscountedPrice });
    }, 0);
  },
  setFilteredProducts: (filteredProducts) => set({ filteredProducts }),

}));

export default useProductStore;
