import { motion } from "framer-motion";
import { useState } from "react";
import { CollectionData } from "../../Utils/ConstantForCollection/constantForCollection";

const Collection = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [indexValue, setIndexValue] = useState(null);
  return (
    <div className=" flex flex-wrap gap-7 justify-center py-20 px-3">
      {CollectionData.map((value, index) => {
        return (
          <div
            key={value.id}
            className="flex relative flex-col group w-[350px] h-[250px] rounded-lg lg:w-[450px] xl:w-[350px] overflow-hidden"
          >
            <motion.div
              onMouseEnter={() => {
                setShowBtn(true);
                setIndexValue(index);
              }}
              onMouseLeave={() => {
                setShowBtn(false);
                console.log(false);
              }}
              className=" absolute group"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.5,
                  stiffness: 30,
                  ease: "easeInOut",
                },
              }}
            >
              <img
                src={value.image}
                className="w-[350px] h-[250px] lg:w-[450px] xl:[350px] object-cover hover:scale-105 md:scale-100"
              />
            </motion.div>
            <motion.div
              onMouseEnter={() => {
                setShowBtn(true);
                setIndexValue(index);
              }}
              onMouseLeave={() => {
                setShowBtn(false);
                console.log(false);
              }}
              className=" absolute top-[40%] right-0 pr-3 cursor-pointer "
            >
              <h1 className="text-lg font-bold pb-2 text-pink-700 text-end ">
                {value.message}
              </h1>
              <p
                className={`text-3xl font-bold pb-2 text-end ${
                  index === 0 || index === 3 ? " text-white" : " text-black"
                } `}
              >
                {value.offer}
              </p>
              {indexValue === index && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  animate={{
                    opacity: showBtn ? 1 : 0,
                    y: showBtn ? 0 : 100,
                  }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 40,
                    bounce: 50,
                    ease: "easeInOut",
                  }}
                  className="flex justify-end"
                >
                  <motion.button
                    transition={{
                      duration: 2,
                      stiffness: 60,
                      ease: "easeInOut",
                    }}
                    className="bg-pink-600 px-5 py-3 w-fit font-medium text-lg rounded-lg"
                  >
                    Discover Now
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>

    // <div className="h-screen">
    //   <div className="relative">
    //     <img
    //       src=""
    //       className=" absolute"
    //     />

    //   </div>
    // </div>
  );
};

export default Collection;

//  {
//    CollectionData.map((value, index) => {
//      return (
//        <div key={value.id} className="  w-[400px] h-[350px] overflow-hidden ">
//          <motion.div
//            onHoverStart={() => {
//              setShowBtn(true);
//              setIndexValue(index);
//            }}
//            onHoverEnd={() => {
//              setShowBtn(false);
//              console.log(false);
//            }}
//            className="bg-cover w-[350px] absolute h-[300px]  hover:scale-110 overflow-hidden transition duration-500 text-white shadow-lg "
//            style={{
//              backgroundImage: `url(${value.image})`,
//            }}
//          >
//            <motion.div className=" flex flex-col items-end justify-end h-[300px] px-5 py-3hover:scale-0">
//              <p className="text-lg font-bold pb-2 text-pink-700 ">
//                {value.message}
//              </p>
//              <p className="text-4xl font-bold pb-2">{value.offer}</p>
//              {indexValue === index && (
//                <motion.div
//                  initial={{
//                    opacity: 0,
//                    y: 100,
//                  }}
//                  animate={{
//                    opacity: showBtn ? 1 : 0,
//                    y: showBtn ? 0 : 100,
//                  }}
//                  transition={{
//                    duration: 1,
//                    type: "spring",
//                    stiffness: 40,
//                    bounce: 50,
//                    ease: "easeInOut",
//                  }}
//                >
//                  <motion.button
//                    transition={{
//                      duration: 2,
//                      stiffness: 60,
//                      ease: "easeInOut",
//                    }}
//                    className="bg-pink-600 px-5 py-3 w-fit font-medium text-lg"
//                  >
//                    Discover Now
//                  </motion.button>
//                </motion.div>
//              )}
//            </motion.div>
//          </motion.div>
//        </div>
//      );
//    });
//  }
