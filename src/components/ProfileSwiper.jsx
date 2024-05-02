import React from "react";
import Profile from "../images/profile-view.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const ProfileSwiper = () => {
  const names = ["James", "Paul", "John", "George", "Ringo", 1, 2, 3, 4, 5, 6];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        speed={1200}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper max-w-[1024px] text-white"
      >
        {names.map((item) => {
          return (
            <SwiperSlide className="mb-10 swiper-1" key={item}>
              <img
                className="md:w-[100%]  object-fill h-[403px] rounded-xl "
                src={Profile}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
