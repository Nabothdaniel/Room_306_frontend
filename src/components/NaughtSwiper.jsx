import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import NaugthyItems from "./NaugthyItems";

const NaughtSwiper = () => {
  const names = ["James", "Paul", "John", "George", "Ringo", 1, 2, 3, 4, 5, 6];
  return (
    <div className=" text-white">
      <Swiper
        speed={1200}
        slidesPerView={1.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4.06,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        {names.map((item) => {
          return (
            <SwiperSlide className="w-[30px] mb-10 swiper-1" key={item}>
              <NaugthyItems />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NaughtSwiper;
