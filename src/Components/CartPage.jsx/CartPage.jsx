import { MdDelete } from "react-icons/md";
import { cartState } from "../../Utils/Context/Context";
import { SiQt } from "react-icons/si";
import { useEffect, useState } from "react";
const CartPage = () => {
  const {
    state: { cart },
    dispatch,
  } = cartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <div>
        <div
          className="w-full md:h-[50vh] h-[40vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/previews/006/694/292/non_2x/hand-holding-smile-face-block-customer-choose-emoticon-for-user-reviews-service-rating-ranking-customer-review-satisfaction-mood-mental-health-and-feedback-concept-free-photo.jpg)",
          }}
        >
          <div className=" absolute bg-black opacity-50 w-full md:h-[50vh] h-[40vh]"></div>
          <div className="flex justify-center items-center w-full md:h-[60vh] h-[55vh]">
            <h1 className=" z-10 text-white font-bold text-3xl lg:text-5xl">
              SHOPPING CART
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10  md:gap-0 lg:w-9/12 mx-auto py-10  px-3">
          {cart.map((value) => {
            return (
              <div
                key={value.id}
                className="flex md:flex-row flex-col md:gap-10 justify-center md:py-4 items-center xl:gap-24 border-b-2"
              >
                <div
                  onClick={() => {
                    dispatch({
                      type: "remove-from-cart",
                      payload: value,
                    });
                  }}
                  className="hidden  cursor-pointer border-b-2 md:border-0 w-full md:w-[30px] md:flex justify-center  pb-3"
                >
                  <MdDelete size={30} />
                </div>
                <div className="border-b-2 md:border-0 w-full md:w-[150px]  flex md:block justify-center pb-3">
                  <img
                    src={value.image}
                    alt="product-img"
                    className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-contain "
                  />
                </div>

                <h1 className=" lg:w-[200px] border-b-2 md:border-0 w-full  flex justify-center pb-3 ">
                  {value.title}
                </h1>
                <p className="lg:w-[70px] border-b-2 md:border-0 w-full md:w-[40px]  flex justify-center pb-3">
                  ${value.price}
                </p>
                <div className="lg:w-[70px] md:w-[60px] border-b-2  md:border-0 w-full  flex justify-center pb-3">
                  <select
                    className=" border border-black px-5 rounded-sm py-1 "
                    onChange={(e) => {
                      dispatch({
                        type: "change-cart-qty",
                        payload: {
                          id: value.id,
                          qty: e.target.value,
                        },
                      });
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((val, i) => {
                      return (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <p className=" lg:w-[70px] pb-3 font-bold text-xl">
                  ${value.price * value.qty}
                </p>
                <div
                  onClick={() => {
                    dispatch({
                      type: "remove-from-cart",
                      payload: value,
                    });
                  }}
                  className="  cursor-pointer border-b-2 md:border-0 w-full md:w-[30px] md:hidden flex justify-center  pb-3"
                >
                  <MdDelete size={30} />
                </div>
              </div>
            );
          })}
          <div className="flex  md:flex-row flex-col gap-5 justify-between items-center border-b-2 py-4">
            <form className="flex flex-col md:flex-row items-center gap-5">
              <input
                type="text"
                placeholder="Coupon Code"
                className="  w-[300px] py-3 px-2 border border-black mr-2"
              />
              <button
                className=" w-fit bg-gray-800 text-white py-3 px-4"
                onSubmit={(e) => e.target.preventDefault}
              >
                Apply Coupon
              </button>
            </form>
            <div>
              <button className=" w-fit px-4 py-3 text-white bg-gray-800">
                Update Cart
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-9/12 mx-auto flex justify-center md:px-3 md:justify-end pb-10 md:pb-20">
          <div className="w-[300px] h-fit text-white bg-black p-3">
            <h1 className="pb-4">Cart Totals</h1>
            <div className="flex flex-col gap-4 mx-3 ">
              <div className="flex justify-between  border-b-2 border-gray-400 pb-4">
                <p>Cart Subtotal</p>
                <p>{total}</p>
              </div>
              <div className="flex justify-between  border-b-2 border-gray-400 pb-4">
                <p>Shipping</p>
                <p>Free</p>
              </div>
            </div>
            <div className="flex justify-between mx-3 py-4">
              <p>Total</p>
              <p>{total}</p>
            </div>
            <button className=" w-full py-3 bg-pink-700">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
