import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo/logo.png";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa"
export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <section className="menubar-section">
     <div className="container">
      <div className="flex">
        <div className="logo">

        </div>
        <div className="menu">
          <ul className="flex menu-ul font-xl ">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="cart-section flex my-auto pt-5 gap-5">
          <FiSearch className="text-[#d2e2dc] h-[35px] w-[35px]"/>
          <FiShoppingCart className="text-[#ffb8ab] h-[35px] w-[35px]"/>
          <FaUser className="h-[35px] w-[35px] text-[#d2e2dc]"/>
        </div>
      </div>
     {/* </div> */}
    </div>
  </section>
  );
}
