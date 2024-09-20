import { truncateText } from "./utils"

const ProductCard = ({ product }) => {

  return (
    <div key={product.id} className="flex flex-col w-[188px] h-fit bg-white hover:shadow-md">
      <img src={product?.imageUrls[0]} alt={product.brand} className="w-[188px] h-[250px]" />
      <div className='flex flex-col gap-1 px-[10px] pt-[11px] pb-[4px]'>
        <p className="text-sm font-bold">{product.brand}</p>
        <p className="text-xs">{truncateText(product.description, 20)}</p>
        <div className="flex items-center justify-start gap-2 w-full">
          <p className="text-sm font-bold">₹ {product.discountedPrice}</p>
          <div className="flex items-center gap-1 text-[10px] ">
            <p className="line-through text-[#a3a3a3]">{product.price}</p>
            <p className="text-pink-400">({product.discountRate}% OFF)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
