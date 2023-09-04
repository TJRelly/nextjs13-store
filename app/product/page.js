"use client"
import useCart from "../{store}/store"

export default function ProductPage(props) {
  const { searchParams } = props
  const { price_id } = props
  const product = useCart((state) => state.product)
  const { cost, productInfo, name, description } = product

  if (!product?.name) {
    window.location.href = "/"
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-col-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto p-6">
        <picture>
          <img
            src={productInfo.images[0]}
            alt={name}
            className="h-full w-full object-cover rounded shadow"
          />
        </picture>
        <div className="flex flex-col gap-2 md:p-8">
          <h3 className="pt-4 text-xl font-bold">{name}</h3>
          <p className="pt-4 text-lg">{description}</p>
          <p className="pt-4 pb-4 text-xl font-bold">${cost / 100}/lb.</p>
          <button class="bg-transparent text-xl hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
