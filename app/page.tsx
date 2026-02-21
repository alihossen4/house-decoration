import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo/logo.png";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <section className="header-section">
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
      </div>
     {/* </div> */}
    </div>
  </section>
  );
}
