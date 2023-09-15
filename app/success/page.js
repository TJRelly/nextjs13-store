import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"

export default function SuccessPage() {
  return (
    <div className="p-4 grid gap-4">
      Thank you for shopping with us!
      <Link href={"/"}>
        <div className="flex items-center gap-2 border border-green-700 rounded p-2 w-fit text-white bg-green-700 hover:opacity-60">
          <BiArrowBack />
          <p className="tracking-wide">Forget something?</p>
        </div>
      </Link>
    </div>
  )
}
