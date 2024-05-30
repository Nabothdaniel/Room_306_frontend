import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import NaugthyItems from "./NaugthyItems";
import { useGetAllVideosQuery } from "../redux/EscortApi";
import Loading from "./Loading";

const NaughtSwiper = () => {
  const { data, isLoading } = useGetAllVideosQuery();

  if (isLoading) {
    return <Loading />;
  }

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
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 2.8,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className="w-[30px] mb-10 swiper-1" key={index}>
              <NaugthyItems items={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NaughtSwiper;
