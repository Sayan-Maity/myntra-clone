
const DiscountFilter = ({ discountRateFilter, setDiscountRateFilter }) => {
    const discountRates = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    return (
        <div className="mt-4 px-4 pb-4">
            <p className="font-bold mb-4 uppercase text-sm">Discount Range</p>
            {discountRates.map((rate) => (
                <label key={rate} className="block mb-1 text-sm">
                    <input
                        type="radio"
                        name="discountRate"
                        value={rate}
                        className="mr-2"
                        checked={discountRateFilter === rate}
                        onChange={(e) => setDiscountRateFilter(Number(e.target.value))}
                    />
                    {rate}% and above
                </label>
            ))}
        </div>
    )
}

export default DiscountFilter
