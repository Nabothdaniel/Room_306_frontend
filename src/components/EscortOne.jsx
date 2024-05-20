import React from "react";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { useGetAllEscortsQuery } from "../redux/EscortApi";
import Loading from "./Loading";
import EscortItems from "./EscortItems";

const EscortOne = () => {
  const { data, isLoading } = useGetAllEscortsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (data.length == 0 || !data) {
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
        <div className="flex justify-center items-center h-[20vh]">
          <p className="text-xl font-semibold text-white">
            No Escort Available
          </p>
        </div>
      </div>
    );
  }

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
          {data.map((item, index) => {
            return (
              <SwiperSlide className="w-[30px] mb-10 swiper-1" key={index}>
                <EscortItems items={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default EscortOne;
