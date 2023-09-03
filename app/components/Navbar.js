import Link from "next/link"
import Image from "next/image"
import { Handlee } from "next/font/google"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

import React from "react"

const handlee = Handlee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export default function Navbar() {
  return (
    <header className="sticky top-0 p-4 sm:py-4 sm:px-6 bg-white border-b border-solid border-blue-500 shadow-md z-99 text-2xl sm:text-3xl md:text-4xl flex justify-between items-center">
      <Link href={"/"} className="flex gap-2 cursor-pointer hover:scale-110">
          <Image
            src="/banana-logo-icon.jpg"
            alt="banana logo"
            width={70}
            height={70}
            
            className="w-[3rem] sm:w-[4rem]"
          />
        <h1 className={"flex items-center " + handlee.className}>Fruit Shop</h1>
      </Link>
      <FontAwesomeIcon
        icon={faCartShopping}
        className="cursor-pointer hover:text-yellow-500 duration-400 hover:animate-bounce"
        size="sm"
      />
    </header>
  )
}
