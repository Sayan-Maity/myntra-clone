import ReactSlider from "react-slider";

const PriceRangeFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
    const handlePriceChange = (values) => {
        const [newMinPrice, newMaxPrice] = values;
        setMinPrice(newMinPrice);
        setMaxPrice(newMaxPrice);
    };

    return (
        <div className="mt-4 border-b border-[#d1d1d1] px-4 pb-4">
            <label className="block mb-2">
                <div className="flex flex-col">
                    <p className="font-bold mb-4 uppercase text-sm">Price</p>
                    <span className="text-sm">₹{minPrice} - ₹{maxPrice}</span>
                </div>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    min={100}
                    max={10000}
                    value={[minPrice, maxPrice]}
                    onChange={handlePriceChange}
                />
            </label>
        </div>
    );
};

export default PriceRangeFilter;