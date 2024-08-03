import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

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
        {/* First img slider */}
        <SwiperSlide>
          <div
            className="bg-cover w-full h-screen bg-center  text-white"
            style={{
              backgroundImage:
                "url(https://www.ratanjewellers.com/wp-content/uploads/2020/03/z1-ratan-diamond-jewellery.jpg)",
            }}
          >
            <div className="absolute bg-black opacity-60 w-full h-screen"></div>
            <div className="flex flex-col h-screen text-white justify-center items-start lg:pl-10 px-3 lg:px-0">
              <h2 className="z-10 font-medium text-lg lg:text-3xl lg:pb-10 pb-5 ">
                <span className=" text-pink-700">—</span> Exclusive Deals on{" "}
                <span className=" text-pink-700">Accessories!</span>
              </h2>
              <h1 className="z-10 font-bold text-3xl lg:text-5xl lg:pb-10 pb-5">
                Accessorize & Save: Up to{" "}
                <span className=" text-pink-700"> 40%</span> Off
              </h1>

              <p className="z-10 font-medium lg:text-lg text-base lg:max-w-[800px]  md:max-w-[450px] text-justify pb-4">
                Explore Amazing Deals on Jewelry, Watches, Scarves, and More!
              </p>
              <p className="z-10 font-medium lg:text-lg text-base lg:max-w-[800px]  md:max-w-[450px] text-justify pb-10">
                Find great prices on the latest trends and stylish accessories.
                Don’t miss our special offers—shop now and save!
              </p>
              <button className="z-10 px-4 rounded-md text-lg font-medium py-2 bg-pink-700">
                Shop now!!!
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* Second img slider */}
        <SwiperSlide>
          <div
            className="bg-cover w-full h-screen bg-center text-white"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/11417443/pexels-photo-11417443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="absolute bg-black opacity-40 w-full h-screen"></div>
            <div className="flex flex-col h-screen text-white justify-center items-start lg:pl-10 px-3 lg:px-0">
              <h2 className="z-10 font-medium text-lg lg:text-3xl lg:pb-10 pb-5 ">
                <span className=" text-pink-700">—</span> Save Big on{" "}
                <span className=" text-pink-700">Perfumes</span> &{" "}
                <span className=" text-pink-700">Colognes</span>
              </h2>
              <h1 className="z-10 font-bold text-3xl lg:text-5xl lg:pb-10 pb-5">
                Fragrance Sale: Up to{" "}
                <span className=" text-pink-700"> 50%</span> Off
              </h1>
              <p className="z-10 font-medium lg:text-lg text-base lg:max-w-[800px]  md:max-w-[450px] text-justify pb-4">
                Explore our collection of luxurious perfumes and colognes at
                unbeatable prices. Whether you prefer floral, woody, or fresh
                scents, find the perfect fragrance to match your style. Enjoy
                exclusive discounts and indulge in your favorite aromas!
              </p>
              <button className="z-10 px-4 rounded-md text-lg font-medium py-2 bg-pink-700">
                Shop now!!!
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* Third img slider */}
        <SwiperSlide>
          <div
            className="bg-cover w-full h-screen bg-top text-white"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="absolute bg-black opacity-70 w-full h-screen"></div>
            <div className="flex flex-col h-screen text-white justify-center items-start lg:pl-10 px-3 lg:px-0">
              <h2 className="z-10 font-medium text-lg lg:text-3xl lg:pb-10 pb-5 ">
                <span className=" text-pink-700">—</span> Find Your Perfect at{" "}
                <span className=" text-pink-700">Outfit</span> Unbeatable Prices
              </h2>
              <h1 className="z-10 font-bold text-3xl lg:text-5xl lg:pb-10 pb-5">
                Up to <span className=" text-pink-700"> 60%</span> Off on All
                Clothing!
              </h1>

              <p className="z-10 font-medium lg:text-lg text-base lg:max-w-[800px] md:max-w-[450px] text-justify pb-4">
                Now’s the time to stock up on fashion essentials! Enjoy huge
                discounts on a wide range of clothing items, including tops,
                jeans, dresses, and more. Limited time only, so shop now and
                save!
              </p>

              <button className="z-10 px-4 rounded-md text-lg font-medium py-2 bg-pink-700">
                Shop now!!!
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className=" absolute z-30 top-[50%] left-[-23rem] group-hover:left-0 duration-300 button-prev-slide w-[40px] h-[40px] bg-pink-700 opacity-50 text-white grid place-items-center">
          <IoArrowBack />
        </div>
        <div className=" absolute z-30 top-[50%] right-[-23rem] group-hover:right-0 duration-300 button-next-slide  w-[40px] h-[40px] bg-pink-700 opacity-50 text-white grid place-items-center">
          <IoArrowForward />
        </div>
      </Swiper>
    </div>
  );
};

export default Image_Slider;
// https://www.themanual.com/wp-content/uploads/sites/9/2023/11/Man-wearing-scarf-in-sunset.jpg?p=1

//  https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vMDJlZGNiYjItNTE3Ny00MzNhLWFkZGYtYTM1NTIwNTgxMjBmLmpwZWc.webp
