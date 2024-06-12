import React from "react";
import Profile from "../images/profile-view.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export const EscortProfileSwiper = ({data}) => {
 


  if (data.length <= 0) {
    return (
      <p className="text-white h-[403px] border rounded-xl border-white text-xl flex justify-center items-center font-semibold">
        No Photos
      </p>
    );
  }

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
        {data.map((item, index) => {
          return (
            <SwiperSlide className="mb-10 swiper-1" key={index}>
              <img
                className="md:w-[100%]  object-cover h-[403px] rounded-xl "
                src={`https://theroom306.com${item.photo}`}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
