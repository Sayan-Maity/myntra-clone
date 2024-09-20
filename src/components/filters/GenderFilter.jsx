const GenderFilter = ({ genderFilter, setGenderFilter, uniqueGenders }) => {
  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
  };

  return (
    <div className="mt-4 border-b border-[#d1d1d1] px-4 pb-4">
      {uniqueGenders.map((gender) => (
        <label key={gender} className="block mb-1 text-sm font-semibold capitalize">
          <input
            type="radio"
            name="genderFilter"
            value={gender}
            className="mr-2"
            checked={genderFilter === gender}
            onChange={handleGenderFilterChange}
          />
          {gender}
        </label>
      ))}
    </div>
  );
};

export default GenderFilter;
