import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { data } from "../../Utils/ConstantForBody/BodyConstant";
const Image_Slider = () => {
  return (
    <div>
      <Swiper
        className="relative group"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div
            className="bg-cover w-full h-screen bg-center text-white"
            style={{
              backgroundImage:
                "url(https://www.ratanjewellers.com/wp-content/uploads/2020/03/z1-ratan-diamond-jewellery.jpg)",
            }}
          >
            <div className="absolute bg-black opacity-60 w-full h-screen"></div>
            <div className="flex flex-col h-screen text-white justify-center items-start pl-10">
              <h2 className="z-10 font-medium text-3xl pb-10">
                <span className=" text-pink-700">—</span> Exclusive Deals on{" "}
                <span className=" text-pink-700">Accessories!</span>
              </h2>
              <h1 className="z-10 font-bold text-6xl pb-10">
                Accessorize & Save: Up to{" "}
                <span className=" text-pink-700"> 40%</span> Off
              </h1>

              <p className="z-10 font-medium text-lg max-w-[850px] text-justify pb-4">
                Explore Amazing Deals on Jewelry, Watches, Scarves, and More!
              </p>
              <p className="z-10 font-medium text-lg max-w-[850px] text-justify pb-10">
                Find great prices on the latest trends and stylish accessories.
                Don’t miss our special offers—shop now and save!
              </p>
              <button className="z-10 px-4 rounded-md text-lg font-medium py-2 bg-pink-700">
                Shop now!!!
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="bg-cover w-full h-screen bg-top"
            style={{
              backgroundImage: "url()",
            }}
          >
            <div className="absolute bg-black opacity-60 w-full h-screen"></div>
          </div>
        </SwiperSlide>
        {/*      <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
        <div className=" absolute z-30 top-[50%] left-[-23rem] group-hover:left-0 duration-300 button-prev-slide w-[40px] h-[40px] bg-black text-white grid place-items-center">
          <IoArrowBack />
        </div>
        <div className=" absolute z-30 top-[50%] right-[-23rem] group-hover:right-0 duration-300 button-next-slide  w-[40px] h-[40px] bg-black text-white grid place-items-center">
          <IoArrowForward />
        </div>
      </Swiper>
    </div>
  );
};

export default Image_Slider;

// https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vMDJlZGNiYjItNTE3Ny00MzNhLWFkZGYtYTM1NTIwNTgxMjBmLmpwZWc.webp

// https://img.freepik.com/free-photo/handsome-bearded-man-standing-inside-old-abondened-factory_1303-22162.jpg?t=st=1722541033~exp=1722544633~hmac=c9b2d1f0692db9beb2b01eb97b21bed1761bb4021fb04a92c2ee83ea8e9db34a&w=996
