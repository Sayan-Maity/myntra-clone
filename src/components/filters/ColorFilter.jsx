
const ColorFilter = ({ uniqueColors, colors, setColors }) => {
  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setColors([...colors, value]);
    } else {
      setColors(colors.filter((color) => color !== value));
    }
  };

  return (
    <div className="mt-4 border-b border-[#d1d1d1] px-4 pb-4">
      <p className="font-bold mb-4 uppercase text-sm">Colors</p>
      {uniqueColors.map((color, index) => (
        <label key={index} className="block mb-1 text-sm">
          <input
            type="checkbox"
            value={color}
            className="mr-2"
            checked={colors.includes(color)}
            onChange={handleColorChange}
          />
          {color}
        </label>
      ))}
    </div>
  )
}

export default ColorFilter
