import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BlacklistedList from "./BlacklistedList";


const BlacklistSwiper = () => {
  const names = ["James", "Paul", "John", "George", "Ringo", 1, 2, 3, 4, 5, 6];
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2.8,
            spaceBetween: 10,
          },

          1023: {
            slidesPerView: 3.4,
            spaceBetween: 290,
            direction: "vertical",
          },
        }}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper max-w-[1024px] max-h-[1000px] text-white"
      >
        {names.map((item) => {
          return (
            <SwiperSlide className=" swiper-1" key={item}>
              <BlacklistedList />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BlacklistSwiper;
