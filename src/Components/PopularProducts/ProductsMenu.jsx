import { motion } from "framer-motion";
import { useState } from "react";

import { cartState } from "../../Utils/Context/Context";
import ProductIcos from "./ProductIcos";
import FunctionalityOfCards from "./FunctionalityOfCards";

const ProductsMenu = ({ value }) => {
  const [showCart, setShowCart] = useState(null);
  const [showIconPupose, setShowIconPupose] = useState(null);
  const {
    state: { cart },
    dispatch,
  } = cartState();

  return (
    <>
      <div>
        <motion.div
          onMouseEnter={() => {
            setShowCart(value.id);
          }}
          onMouseLeave={() => {
            setShowCart(null);
          }}
          className=" w-[300px] lg:w-[400px] lg:h-[570px] bg-gray-200 gap-4 p-4"
        >
          <div className="flex flex-col gap-3 relative ">
            <div className=" lg:h-[430px] overflow-hidden shadow-lg">
              <img
                src={value.image}
                alt=""
                className="lg:w-[450px] w-[300px] h-[300px] lg:h-[430px] object-fit  hover:scale-105 transition ease-in-out duration-500"
              />
            </div>
            {/* Icons */}
            <div className=" absolute right-4 top-4">
              <ProductIcos
                showCart={showCart}
                setShowIconPupose={setShowIconPupose}
                showIconPupose={showIconPupose}
              />
            </div>
          </div>
          <div>
            <h1 className="font-medium text-base capitalize pb-3 pt-4">
              {value.title}
            </h1>
            <div className="flex justify-between w-full">
              <div className=" hidden md:block">
                <motion.span
                  initial={{
                    opacity: 1,
                  }}
                  animate={{
                    opacity: showCart === value.id ? 0 : 1,
                  }}
                  // className="font-bold text-base hidden md:block"
                  className={`font-bold text-base  ${
                    showCart === value.id ? "hidden" : "block"
                  }`}
                >
                  {" "}
                  Price: ${Math.trunc(value.price)}
                </motion.span>
                <div>
                  <FunctionalityOfCards showCart={showCart} value={value} />
                </div>
              </div>
              <div>
                <motion.span
                  initial={{
                    opacity: 1,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  // className="font-bold text-base hidden md:block"
                  className={`font-bold text-base md:hidden  `}
                >
                  {" "}
                  Price: ${Math.trunc(value.price)}
                </motion.span>
              </div>
              <div>
                <p className="font-medium text-base w-[90px] text-end">
                  Rating : {value.rating.rate}
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-4 md:hidden">
              {cart.some((cartValue) => cartValue.id === value.id) ? (
                <motion.p
                  initial={{
                    x: 20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                      stiffness: 20,
                    },
                  }}
                  className={`font-bold text-lg flex items-center  text-pink-800 uppercase  cursor-pointer`}
                  onClick={() => {
                    dispatch({
                      type: "remove-from-cart",
                      payload: value,
                    });
                  }}
                >
                  Remove From Cart
                </motion.p>
              ) : (
                <motion.p
                  initial={{
                    x: 20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                      stiffness: 20,
                    },
                  }}
                  className={`font-bold text-lg  text-pink-800 uppercase cursor-pointer w-fit`}
                  onClick={() => {
                    dispatch({
                      type: "add-to-cart",
                      payload: value,
                    });
                  }}
                >
                  Add to Cart
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProductsMenu;
