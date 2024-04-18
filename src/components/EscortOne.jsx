import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import EscortOneItems from "./EscortOneItems";

const EscortOne = () => {
  const names = [
    "James",
    "Paul",
    "John",
    "George",
    "Ringo",
    1,
    2,
    3,
    4,
    5,
    6,
    6,
  ];
  return (
    <div className="flex-1 max-w-[1300px] py-8 px-2">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold text-[24px] pb-6">
          Top Escort
        </h1>
        <p className="text-white cursor-pointer">See all</p>
      </div>

      <div className=" text-white">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
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
          modules={[Pagination]}
          // onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          {names.map((item) => {
            return (
              <SwiperSlide className="w-[30px] swiper-1" key={item}>
                <EscortOneItems />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default EscortOne;
