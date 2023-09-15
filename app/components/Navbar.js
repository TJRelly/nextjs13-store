"use client"
import Link from "next/link"
import Image from "next/image"
import { Handlee } from "next/font/google"
import useCart from "../{store}/store"
import Modal from "./Modal"
import { IoCartSharp, IoCartOutline } from "react-icons/io5"

import React from "react"

const handlee = Handlee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export default function Navbar() {
  const cartItems = useCart((state) => state.cart)
  const openModal = useCart((state) => (state.openModal))
  const toggleModal = useCart((state) => state.setOpenModal)

  return (
    <header className="sticky top-0 p-4 sm:py-4 sm:px-6 bg-yellow-100 shadow-sm z-99 text-2xl sm:text-3xl md:text-4xl flex justify-between items-center">
      {openModal && <Modal />}
      <Link href={"/"} className="flex gap-2 cursor-pointer hover:scale-110">
        <Image
          src="/banana-logo-icon.jpg"
          alt="banana logo"
          width={70}
          height={70}
          className="w-[3rem] sm:w-[4rem] rounded-full"
        />
        <h1
          className={"flex items-center tracking-tighter " + handlee.className}
        >
          Fruit Shop
        </h1>
      </Link>
      <div
        onClick={toggleModal}
        className="relative grid place-items-center cursor-pointer duration-400 hover:opacity-60"
      >
        {cartItems.length > 0 && (
          <div className="absolute top-0 right-0 bg-green-500 text-white rounded-full h-4 sm:h-5 grid place-content-center translate-x-1/2 -translate-y-1/2 px-2 py-3">
            <p className="text-xs sm:text-sm">{cartItems.length}</p>
          </div>
        )}
        {cartItems.length ? <IoCartSharp /> : <IoCartOutline />}
      </div>
    </header>
  )
}
