/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";

type SliderProps = {
  noOfSlides: number;
  speed?: number;
  loop?: boolean;
  space?: number;
  children?: React.ReactNode;
  breakpoints?: any;
};

export const Slider = ({
  noOfSlides,
  speed,
  loop,
  space,
  children,
  breakpoints,
}: SliderProps) => {
  return (
    <Swiper
      slidesPerView={noOfSlides}
      navigation
      breakpoints={breakpoints}
      spaceBetween={space}
      loop={loop}
      speed={speed}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      modules={[Pagination, Autoplay, Navigation]}
      className="swiper-container"
    >
      {children}
    </Swiper>
  );
};
