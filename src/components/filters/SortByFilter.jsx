
const SortByFilter = ({ selectedAttribute, setSelectedAttribute }) => {
    const handleAttributeChange = (event) => {
        setSelectedAttribute(event.target.value);
    };
    return (
        <div className="flex flex-none items-start justify-center w-fit border border-[#d1d1d1] text-xs px-3 py-1">
            <label className="block mb-2">Sort By :</label>
            <select
                value={selectedAttribute}
                onChange={handleAttributeChange}
                className='font-semibold outline-none bg-white'
            >
                <option value="popularity">Popularity</option>
                <option value="trending">Trending</option>
                <option value="recommended">Recommended</option>
            </select>
        </div>
    )
}

export default SortByFilter
