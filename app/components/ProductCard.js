"use client"
import { useRouter } from "next/navigation"
import useCart from "../{store}/store"

export default function ProductCard(props) {
  const { product } = props
  const { id: price_id, unit_amount: cost, product: productInfo } = product
  const { name, description } = productInfo

  const setProduct = useCart((state) => state.setProduct)

  const router = useRouter()

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    }
    setProduct({ newProduct })
    router.push("/product?price_id=" + price_id)
  }

  return (
    <picture
      onClick={onProductClick}
      className="flex flex-col shadow hover:shadow-md hover:shadow-yellow-300 cursor-pointer rounded"
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="h-full w-full object-cover rounded"
      />
      <div className="flex flex-col gap-2 p-4">
        <div>
          <h3 className="pt-4 text-md font-bold">{name}</h3>
          <p className="pt-4 text-sm">{description}</p>
          <p className="pt-4 font-bold">${cost / 100}/lb.</p>
        </div>
      </div>
    </picture>
  )
}
