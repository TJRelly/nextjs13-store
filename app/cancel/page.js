import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"

export default function SuccessPage() {
    return (
        <div>
            {"We're here for you when you need us!"}
            <Link href={"/"}>
        <div className="flex items-center gap-2 border border-green-700 rounded p-2 w-fit text-white bg-green-700 hover:opacity-60">
          <BiArrowBack />
          <p className="tracking-wide">Continue shopping</p>
        </div>
      </Link>
        </div>
        
    )
}