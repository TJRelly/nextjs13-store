import { Handlee } from "next/font/google"

const handlee = Handlee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export default function Footer() {
  return (
    <footer className={"p-4 sm:p-6 bg-yellow-100 border-t border-solid shadow-md text-2xl sm:text-3xl md:text-4xl flex justify-between items-center " + handlee.className}> Footer
      <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-yellow-500 duration-400 hover:animate-bounce"></i>
    </footer>
  )
}