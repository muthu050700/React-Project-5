import React from "react";
import Image_Slider from "./Image_Slider";
import Collection from "../Collection/Collection";
import PopularProducts from "../PopularProducts/PopularProducts";

const Body = () => {
  return (
    <>
      <Image_Slider />
      <Collection />
      <PopularProducts />
    </>
  );
};

export default Body;
