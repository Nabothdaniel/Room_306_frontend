import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import RoomsItem from "./RoomsItem";
import { useGetAllRoomsQuery } from "../redux/roomApi";
import Loading from "./Loading";

export const RoomSwiper = () => {
  const { data, isLoading } = useGetAllRoomsQuery();

  if (isLoading) {
    return <Loading />;
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
        {data.map((item, index) => {
          return (
            <SwiperSlide className=" swiper-1" key={index}>
              <RoomsItem items={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
