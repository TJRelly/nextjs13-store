"use client"

import React from "react"
import { createPortal } from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import useCart from "../{store}/store"

export default function Modal() {
  const [mounted, setMounted] = React.useState()
  const openModal = useCart((state) => state.openModal)
  const closeModal = useCart((state) => state.setOpenModal)
  const cartItems = useCart((state) => state.cart)

  React.useEffect(() => setMounted(openModal), [openModal])

  return mounted
    ? createPortal(
        <div className="absolute top-0 left-0 w-screen h-screen z-50">
          <div
            onClick={closeModal}
            className="bg-transparent absolute inset-0"
          ></div>
          <div className="flex flex-col absolute right-0 top-0 h-screen shadow-lg bg-white gap-4 p-4 w-screen sm:w-96">
            <div className="flex items-center relative justify-between text-xl border-b-slate-300 border-b-[1px] py-4 px-2">
              <h1>Shopping Cart</h1>
              <FontAwesomeIcon
                onClick={closeModal}
                icon={faXmark}
                size="lg"
                className="cursor-pointer hover:opacity-60"
              />
            </div>
            <div className="flex flex-col overflow-auto flex-1 gap-4 p-4">
              {cartItems.length === 0 ? (
                <p>Your cart is empty 😭</p>
              ) : (
                <>
                  {cartItems.map((cartItem, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-2 border-l border-green-700 px-2"
                      >
                        <div className="flex items-center justify-between">
                          <h2>{cartItem.name}</h2>
                          <p>${cartItem.cost / 100}</p>
                        </div>
                        <p className="text-slate-600 text-sm">Qty: 1</p>
                      </div>
                    )
                  })}
                </>
              )}
            </div>
            <div className="bg-green-700 border border-green-700 text-lg text-white m-4 p-4  tracking-wider grid place-items-center rounded cursor-pointer hover:opacity-60 ">Proceed to Checkout</div>
          </div>
        </div>,
        document.body
      )
    : null
}
