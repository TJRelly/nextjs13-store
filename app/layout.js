import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fruit Shop",
  description: "Buy the best fruit here at the best price!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}


