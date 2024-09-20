import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import useProductStore from '../store/slices/productStore';

const Landing = () => {
  const { filteredProducts } = useProductStore();
  const productCount = filteredProducts ? filteredProducts.length : 0;

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-grow'>
        <div className="w-full flex flex-col">
          <div className='flex items-center text-sm p-4'>
            <p className='font-semibold mr-1'>Myntra Fashion Store </p>
            <p className='text-[#a3a3a3]'> -  {productCount} items</p>
          </div>
          <div className='flex flex-grow'>
            <Sidebar />
            <div className='flex flex-col w-full p-4'>
              <Filters />
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;