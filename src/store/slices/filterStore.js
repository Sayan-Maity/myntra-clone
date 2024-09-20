import { create } from "zustand";

const useFilterStore = create((set) => ({
  genderFilter: "women",
  setGenderFilter: (gender) => set({ genderFilter: gender }),
  minPrice: 100,
  maxPrice: 10000,
  setMinPrice: (price) => set({ minPrice: price }),
  setMaxPrice: (price) => set({ maxPrice: price }),
  categories: ["top"],
  setCategory: (category) => set({ categories: category }),
  colors: [],
  setColors: (color) => set({ colors: color }),
  brands: [],
  setBrands: (brand) => set({ brands: brand }),
  discountRateFilter: 0,
  setDiscountRateFilter: (rate) => set({ discountRateFilter: rate }),
  minDiscountedPrice: 0,
  maxDiscountedPrice: 10000,
  setMinDiscountedPrice: (price) => set({ minDiscountedPrice: price }),
  setMaxDiscountedPrice: (price) => set({ maxDiscountedPrice: price }),

  selectedAttribute: "recommended",
  setSelectedAttribute: (attribute) => set({ selectedAttribute: attribute }),
  removeCategory: (category) =>
    set((state) => ({
      categories: state.categories.filter((cat) => cat !== category),
    })),
  removeColor: (color) =>
    set((state) => ({
      colors: state.colors.filter((col) => col !== color),
    })),
  removeBrand: (brand) =>
    set((state) => ({
      brands: state.brands.filter((br) => br !== brand),
    })),
}));

export default useFilterStore;
