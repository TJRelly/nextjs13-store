"use client"
import { Handlee } from "next/font/google"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Link from "next/link"
import Image from "next/image"

const handlee = Handlee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export default function Footer() {
  return (
    <footer className="p-4 sm:p-6 bg-yellow-100 border-t border-solid shadow-md text-xl sm:text-2xl md:text-3xl flex flex-col sm:flex-row gap-4 justify-between items-center">
      <Link href={"/"} className="flex gap-2 cursor-pointer hover:scale-110">
        <Image
          src="/banana-logo-icon.jpg"
          alt="banana logo"
          width={70}
          height={70}
          className="w-[2rem] sm:w-[3rem] rounded-full"
        />
        <h1
          className={"flex items-center tracking-tighter " + handlee.className}
        >
          Fruit Shop
        </h1>
      </Link>
      <div className="text-base">
        Copyright © {new Date().getFullYear()} Fruit Shop, Inc.
      </div>
      <section className="flex flex-col gap-2 uppercase">
        <p className="text-sm ms-auto">Connect with us</p>
        <div className="flex gap-4 text-md m-auto">
          <Link href={"https://github.com/TJRelly"} target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="cursor-pointer hover:scale-110"
            />
          </Link>
          <Link href={"https://github.com/TJRelly"} target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              className="cursor-pointer hover:scale-110"
            />
          </Link>
          <Link href={"https://twitter.com/tjr_tech"} target="_blank">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="cursor-pointer hover:scale-110"
            />
          </Link>
        </div>
      </section>
    </footer>
  )
}
