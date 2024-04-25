import React from "react";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import EscortOneItems from "./EscortOneItems";

const EscortOne = () => {
  const names = ["James", "Paul", "John", "George", "Ringo", 1, 2, 3, 4, 5, 6];
  return (
    <div className="flex-1 max-w-[1530px] pt-2 py-8 md:pt-12 px-2">
      <div className="flex pb-4 justify-between items-center">
        <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
          Top Escort
        </h1>
        <p className="text-white cursor-pointer text-[14px] lg:text-base">
          See all
        </p>
      </div>

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
