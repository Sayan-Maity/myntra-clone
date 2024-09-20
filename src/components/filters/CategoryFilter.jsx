
const CategoryFilter = ({ uniqueCategories, categories, setCategory }) => {
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategory([...categories, value]);
    } else {
      setCategory(categories.filter((category) => category !== value));
    }
  };

  return (
    <div className="mt-4 border-b border-[#d1d1d1] px-4 pb-4">
      <p className="font-bold mb-4 uppercase text-sm">Categories</p>
      {uniqueCategories.map((category) => (
        <label key={category} className="block mb-1 text-sm">
          <input
            type="checkbox"
            value={category}
            className="mr-2"
            checked={categories.includes(category)}
            onChange={handleCategoryChange}
          />
          {category}
        </label>
      ))}
    </div>
  )
}

export default CategoryFilter
