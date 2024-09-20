import { useEffect, useMemo } from 'react';
import ProductCard from './ProductCard';
import { useFilterStore } from '../store';
import Pagination from './Pagination';
import useProductStore from '../store/slices/productStore';
import usePageStore from '../store/slices/pageStore';

const ProductGrid = () => {
  const { products, fetchProducts, filteredProducts, setFilteredProducts } = useProductStore();
  const {
    genderFilter,
    minPrice,
    maxPrice,
    categories,
    colors,
    brands,
    selectedAttribute,
    discountRateFilter
  } = useFilterStore();
  const { currentPage, setCurrentPage, productsPerPage } = usePageStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filtered = useMemo(() => {
    return products
      .filter((product) => {
        const matchesGender = product.gender === genderFilter;
        const matchesPrice = product.discountedPrice >= minPrice && product.discountedPrice <= maxPrice;
        const matchesCategory = categories.length === 0 || categories.includes(product.category);
        const matchesColor = colors.length === 0 || colors.includes(product.color);
        const matchesBrand = brands.length === 0 || brands.map(brand => brand.toLowerCase()).includes(product.brand.toLowerCase());
        const matchesDiscount = product.discountRate >= discountRateFilter;

        return matchesGender && matchesPrice && matchesCategory && matchesColor && matchesBrand && matchesDiscount;
      })
      .filter((product) => {
        if (selectedAttribute === 'recommended') {
          return product.recommended;
        }
        if (selectedAttribute === 'trending') {
          return product.trending;
        }
        return true;
      })
      .sort((a, b) => {
        if (selectedAttribute === 'popularity') {
          return b.popularity - a.popularity;
        }
        return 0;
      });
  }, [products, genderFilter, minPrice, maxPrice, categories, colors, brands, selectedAttribute, discountRateFilter]);

  useEffect(() => {
    setFilteredProducts(filtered);
  }, [filtered, setFilteredProducts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [genderFilter, minPrice, maxPrice, categories, colors, brands, selectedAttribute, setCurrentPage, discountRateFilter]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='flex flex-col w-full px-4 mt-6'>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-y-[30px]">
        {currentProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>

      {filteredProducts.length > productsPerPage && (
        <Pagination
          products={filteredProducts}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProductGrid;