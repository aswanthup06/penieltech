import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import { RiArrowRightLine } from "@remixicon/react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Penieltech",
  description: "Next.js App with Tailwind and Manrope font",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
    
      <nav className="grid grid-cols-3 items-center container px-24 py-4">

  <div className="text-lg font-bold">
    <img className="h-7" src="./penieltech.svg" alt="Penieltech logo" />
  </div>


  <ul className="flex justify-center gap-6 font-medium text-sm">
    <li className="cursor-pointer hover:text-blue-500   transition-all duration-300 ease-out">Home</li>
    <li className="cursor-pointer hover:text-blue-500   transition-all duration-300 ease-out">Products</li>
    <li className="cursor-pointer hover:text-blue-500  transition-all duration-300 ease-out">Partners</li>
    <li className="cursor-pointer hover:text-blue-500  transition-all duration-300 ease-out">IT-Solutions</li>
    <li className="cursor-pointer hover:text-blue-500   transition-all duration-300 ease-out">Contact</li>
  </ul>


  <div className="flex justify-end">
    <button
      className="
        bg-blue-500 text-white cursor-pointer
        hover:bg-blue-600
        transition-all duration-300 ease-out
        transform hover:-translate-y-0.5
        flex gap-3 py-3 px-5 rounded-sm
        text-sm items-center group
        w-fit
      "
    >
      Get Start
      <RiArrowRightLine
        size={16}
        className="
          transition-transform duration-300 ease-out
          group-hover:translate-x-2
        "
      />
    </button>
  </div>
</nav>


  
        <main>{children}</main>
      </body>
    </html>
  );
}
