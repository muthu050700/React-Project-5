import { motion } from "framer-motion";
import { useState } from "react";
import { icons } from "../../Utils/ConstantForPopularProducts/ConstantForPopularProducts";
import { cartState } from "../../Utils/Context/Context";

const ProductsMenu = ({ value }) => {
  const [showCart, setShowCart] = useState(null);
  const [showIconPupose, setShowIconPupose] = useState(null);
  // const { cart, setCart } = useContext(Cart);
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
          className=" w-[300px] lg:w-[400px] lg:h-[570px] bg-gray-200 p-4"
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
              {icons.map((value, index) => {
                return (
                  <motion.div
                    key={value.id}
                    initial={{
                      x: 20,
                      opacity: 1,
                    }}
                    animate={{
                      x: showCart ? 0 : 20,
                      opacity: showCart ? 1 : 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        stiffness: 20,
                      },
                    }}
                    className="flex justify-end items-center"
                  >
                    {showIconPupose === index ? (
                      <motion.span
                        initial={{
                          // x: 15,
                          opacity: 0,
                        }}
                        animate={{
                          // x: showAddList ? 0 : 15,
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                            stiffness: 20,
                          },
                        }}
                        className="font-medium text-lg bg-pink-800 w-fit px-3 py-1"
                      >
                        {value.purpose}
                      </motion.span>
                    ) : (
                      ""
                    )}
                    <div
                      onMouseEnter={() => {
                        setShowIconPupose(index);
                      }}
                      onMouseLeave={() => {
                        setShowIconPupose(null);
                      }}
                      className="p-2 cursor-pointer text-pink-800"
                    >
                      {value.icon}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between p-2">
            <div>
              <h1 className="font-medium text-base capitalize pb-3">
                {value.title}
              </h1>
              <motion.p
                initial={{
                  opacity: 1,
                }}
                animate={{
                  opacity: showCart === value.id ? 0 : 1,
                }}
                className={`font-bold text-base  ${
                  showCart === value.id ? "hidden" : "block"
                }`}
              >
                {" "}
                Price: {value.price}
              </motion.p>

              {cart.some((cartValue) => cartValue.id === value.id) ? (
                <motion.p
                  initial={{
                    x: 20,
                    opacity: 1,
                  }}
                  animate={{
                    x: showCart ? 0 : 20,
                    opacity: showCart === value.id ? 1 : 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                      stiffness: 20,
                    },
                  }}
                  className={`font-bold text-lg  text-pink-800 uppercase  cursor-pointer ${
                    showCart === value.id ? "block" : "hidden"
                  }`}
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
                    opacity: 1,
                  }}
                  animate={{
                    x: showCart ? 0 : 20,
                    opacity: showCart === value.id ? 1 : 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                      stiffness: 20,
                    },
                  }}
                  className={`font-bold text-lg  text-pink-800 uppercase cursor-pointer ${
                    showCart === value.id ? "block" : "hidden"
                  }`}
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
            <div className="flex items-end justify-center">
              <p className="font-medium text-base w-[100px] text-end">
                Rating : {value.rating.rate}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProductsMenu;
