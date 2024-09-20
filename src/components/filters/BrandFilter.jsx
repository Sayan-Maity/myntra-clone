
const BrandFilter = ({ uniqueBrands, brands, setBrands }) => {
  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setBrands([...brands, value]);
    } else {
      setBrands(brands.filter((brand) => brand !== value));
    }
  };

  return (
    <div className="mt-4 border-b border-[#d1d1d1] px-4 pb-4">
      <p className="font-bold mb-4 uppercase text-sm">Brands</p>
      {uniqueBrands.map((brand) => (
        <label key={brand} className="block mb-1 text-sm">
          <input
            type="checkbox"
            value={brand}
            className="mr-2"
            checked={brands.includes(brand)}
            onChange={handleBrandChange}
          />
          {brand}
        </label>
      ))}
    </div>
  )
}

export default BrandFilter
