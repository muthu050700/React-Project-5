import { icons } from "../../Utils/ConstantForPopularProducts/ConstantForPopularProducts";
import { motion } from "framer-motion";
const ProductIcos = ({ showCart, setShowIconPupose, showIconPupose }) => {
  return (
    <div>
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
  );
};

export default ProductIcos;
