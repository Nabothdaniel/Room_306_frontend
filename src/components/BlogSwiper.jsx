import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import FreshEscort from "./FreshEscort";
import Loading from "./Loading";
import { useGetAllEscortsQuery } from "../redux/EscortApi";

export const BlogSwiper = () => {
  const { data, isLoading } = useGetAllEscortsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!data || data.length == 0) {
    return;
  }

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
        className="mySwiper max-w-[1024px] max-h-[1000px] lg:h-[1000px] text-white"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide className=" swiper-1" key={index}>
              <FreshEscort items={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
