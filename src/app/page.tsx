import Link from "next/link";
import Header from "../components/header";
export default function Home() {
  
  return(
    <>
    <section className="menubar-section">
    <Header />
      <div className="container">
      <div className="heading-section w-180 h-200 mt-50">
      <div className="heading ">
        <h1 className="text-[52px] font-bold bold text-[#ffb900]">Exclusive Deals of Furniture Collection</h1>
      </div>
      <p className="title text-[24px] text-[#e5e4df] arimo-font my-2 mb-4">Explore different categories. Find the best deals.</p>
      <button className="p-3 px-6 bg-[#ff7900] text-[#e5e4df] my-3 text-lg rounded-lg rounded font-[700]">
        Shop Now
      </button>
      </div>
    </div>
  </section>
  
</>
  );
}