import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartReducer } from "../../Utils/Context/Reducer";
import { cartState } from "../../Utils/Context/Context";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const changeBgColor = () => {
    if (scrollY >= 700) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  window.addEventListener("scroll", changeBgColor);
  console.log(bgColor);
  const {
    state: { cart },
  } = cartState();

  return (
    <div
      className={`${
        bgColor ? " bg-black/90 " : "bg-black/20 "
      } fixed  flex text-white justify-between md:justify-between w-full h-[100px] items-center z-20 px-3 ${
        mobileNav ? "px-0" : "px-3"
      } `}
    >
      {/* Header-logo */}
      <div>
        <h1 className="font-bold md:text-3xl text-xl ">Shopify</h1>
      </div>
      {/* desktop Nav links */}
      <ul className="md:flex gap-7 font-medium text-lg hidden ">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/accessories"}>Accessories</Link>
        </li>
        <li>
          <Link to={"/pages"}>Pages</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>
      {/* account and cart items */}
      <div className="flex gap-7 items-center font-medium text-lg ">
        <h2>Account</h2>
        <Link to={"/cart"}>
          {" "}
          <div className="relative">
            <FaCartShopping size={40} />
            <span className="absolute top-0 left-[16px] text-black font-bold text-lg">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
      <div
        className="md:hidden z-10 "
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
          className={`md:hidden flex flex-col justify-center items-center gap-7 font-medium text-lg absolute top-0 text-white bg-black w-full h-screen  ${
            mobileNav ? "px-0" : "px-3"
          }  `}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/accessories"}>Accessories</Link>
          </li>
          <li>
            <Link to={"/pages"}>Pages</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
