import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
import Card from "@/components/feature/Card";
import { CardData } from "@/data";

const Features = () => {
  const breakPoints = {
    150: {
      slidesPerView: 1,
      spaceBetween: 70,
      enabled: true,
      initialSlide: 0,
    },
    340: {
      slidesPerView: 1,
      spaceBetween: 90,
      initialSlide: 0,
      enabled: true,
    },
    685: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      initialSlide: 1,
      enabled: true,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 1,
      enabled: true,
    },
    930: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 2,
      enabled: true,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 2,
      enabled: true,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 20,
      initialSlide: 2,

      enabled: true,
    },
  };
  return (
    <div className="HL__features section__padding " id="services">
      <Swiper
        breakpoints={breakPoints}
        modules={[Navigation, Pagination]}
        navigation
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={0}
        slidesPerView={5}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="mySwiper"
      >
        <div className="swiper-container HL__features-box-container">
          {CardData.map((element) => {
            return (
              <SwiperSlide key={element.title}>
                <Card
                  title={element.title}
                  text={element.text}
                  image={element.image}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Features;
