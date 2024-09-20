const FilterTag = ({ label, onRemove }) => {
  return (
    <div className="flex items-center justify-center border border-[#d1d1d1] rounded-2xl text-[10px] px-2 py-[2px] text-nowrap">
      <p>{label}</p>
      <button onClick={onRemove} className="ml-2 text-[#a3a3a3] text-sm">x</button>
    </div>
  );
};

export default FilterTag;