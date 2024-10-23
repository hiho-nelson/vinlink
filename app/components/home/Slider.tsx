"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    title: "Our Lab",
    image: "/slide_0.jpg",
  },
  {
    title: "Our Winery",
    image: "/slide_1.jpg",
  },
  {
    title: "Our Winemakers",
    image: "/slide_2.jpg",
  },
  {
    title: "Our Equipment",
    image: "/slide_3.jpg",
  },
  {
    title: "Our Vineyards",
    image: "/slide_4.jpg",
  },
  {
    title: "Our Test",
    image: "/slide_4.jpg",
  },
];

export default function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3.4}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      centeredSlides
      loop
      navigation
      modules={[Navigation, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        1280: {
          slidesPerView: 3.4,
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="group relative cursor-pointer overflow-hidden rounded-xl"
        >
          <div className="relative h-[700px] p-10 text-white">
            <div className="small relative z-10">{slide.title}</div>
            <Image
              src={slide.image}
              alt={slide.title}
              width={300}
              height={600}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 h-full w-full bg-black opacity-50 transition-all duration-1000 group-hover:opacity-0" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
