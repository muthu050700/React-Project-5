import ProductsMenu from "./ProductsMenu";
// import { popularProductsDetails } from "../../Utils/ConstantForPopularProducts/ConstantForPopularProducts";
import { useState } from "react";
import { cartState } from "../../Utils/Context/Context";

const PopularProducts = () => {
  const {
    state: { popularProductsDetails },
  } = cartState();

  return (
    <div>
      <div className="flex flex-col items-center gap-3 ">
        <h1 className="font-medium text-lg">See Our Collection</h1>
        <p className="font-bold text-3xl">Popular Products</p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-10 md:gap-20 py-20">
        {popularProductsDetails.map((value, index) => {
          return <ProductsMenu key={value.id} value={value} />;
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
