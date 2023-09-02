import "./globals.css"
import { Inter, Handlee } from "next/font/google"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })
const handlee = Handlee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Fruit Shop",
  description: "Buy the best fruit here at the best price!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}
      >
        <header className="sticky top-0 p-4 sm:p-6 bg-white border-b border-solid border-blue-500 shadow-md z-99 text-2xl sm:text-3xl md:text-4xl flex justify-between items-center">
          <Link
            href={"/"}
            className="flex gap-2 cursor-pointer hover:scale-110"
          >
            <Image
              src="/banana-logo-icon.jpg"
              alt="banana logo"
              width={70}
              height={70}
            />
            <h1 className={"flex items-center " + handlee.className}>
              Fruit Shop
            </h1>
          </Link>
          <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-yellow-500 duration-400 hover:animate-bounce"></i>
        </header>
        <div className="flex-1 bg-green-200">{children}</div>
        <footer>footer</footer>
      </body>
    </html>
  )
}
