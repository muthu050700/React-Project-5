import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="bg-black text-white flex justify-between md:justify-evenly w-full h-[100px] items-center relative">
      {/* Header-logo */}
      <div>
        <h1 className="font-bold md:text-3xl text-xl pl-3">Shopify</h1>
      </div>
      {/* desktop Nav links */}
      <ul className="md:flex gap-7 font-medium text-lg hidden ">
        <li>Home</li>
        <li>Shop</li>
        <li>Accessories</li>
        <li>Pages</li>
        <li>Blog</li>
      </ul>
      {/* account and cart items */}
      <div className="flex gap-7 items-center font-medium text-lg ">
        <h2>Account</h2>
        <div className="relative">
          <FaCartShopping size={40} />
          <span className="absolute top-0 left-[16px] text-black font-bold text-lg">
            0
          </span>
        </div>
      </div>
      <div
        className="md:hidden z-10 pr-3"
        onClick={() => {
          console.log(true);
          setMobileNav(!mobileNav);
        }}
      >
        {mobileNav ? <RxCross2 size={30} /> : <FaBars size={30} />}
      </div>
      {/* Mobile Navlinks */}
      {mobileNav && (
        <ul
          className={`md:hidden flex flex-col justify-center items-center gap-7 font-medium text-lg absolute top-0 text-white bg-black w-full h-screen `}
        >
          <li>Home</li>
          <li>Shop</li>
          <li>Accessories</li>
          <li>Pages</li>
          <li>Blog</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
