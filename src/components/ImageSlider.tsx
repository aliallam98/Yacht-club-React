import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { berthingSliderImage } from "../constants";

export default function ImageSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper cursor-grab mt-4"
      >
        {berthingSliderImage.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image} alt="berthingSliderImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
