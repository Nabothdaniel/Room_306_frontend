import React from "react";
import Profile from "../images/profile-view.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlacklistImageSwipe = ({ items }) => {
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
        {items.map((item) => {
          return (
            <SwiperSlide className="mb-10 swiper-1" key={item}>
              <img
                className="w-[100%]  object-contain h-[403px] rounded-xl "
                src={`https://room35backend.onrender.com${item.image}`}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BlacklistImageSwipe;
