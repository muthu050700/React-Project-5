import React from "react";
import Image_Slider from "./Image_Slider";
import Collection from "../Collection/Collection";
import PopularProducts from "../PopularProducts/PopularProducts";

const Body = () => {
  return (
    <div>
      <Image_Slider />
      <Collection />
      <PopularProducts />
    </div>
  );
};

export default Body;
