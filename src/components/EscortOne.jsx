import React from "react";

import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import EscortOneItems from "./EscortOneItems";

const EscortOne = () => {
  return (
    <div className="py-8 px-2">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold text-[24px] pb-6">
          Top Escort
        </h1>
        <p className="text-white cursor-pointer">See all</p>
      </div>
      <div className="max-w-[1300px] text-white">
        <Swiper
          // install Swiper modules
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",

            "--swiper-pagination-bullet-width": "40px",
            "--swiper-pagination-bullet-height": "8px",
            "--swiper-pagination-bullet-inactive-width": "20px",
            "--swiper-pagination-bullet-border-radius": "5px",
            "--swiper-pagination-bullet-inactive-border-radius": "",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
          }}
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          <SwiperSlide>
            <EscortOneItems />
          </SwiperSlide>
          <SwiperSlide>
            <EscortOneItems />
          </SwiperSlide>
          <SwiperSlide>
            <EscortOneItems />
          </SwiperSlide>
          <SwiperSlide>
            <EscortOneItems />
          </SwiperSlide>
          <SwiperSlide>
            <EscortOneItems />
          </SwiperSlide>
          <SwiperSlide>
            <EscortOneItems />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EscortOne;
