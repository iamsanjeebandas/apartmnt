import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

// Import your images (assuming they are stored in src/images/slider/)
import Image1 from "../images/slider/image1.jpg";
import Image2 from "../images/slider/image2.jpg";
import Image3 from "../images/slider/image3.jpg";
import Image4 from "../images/slider/image4.jpg";
import Image5 from "../images/slider/image5.jpg";
import Image6 from "../images/slider/image6.jpg";
// Import all 10 images similarly

import "./Slider.css"; // Import your custom CSS file

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="slider"
      >
        <SwiperSlide>
          <img src={Image1} alt="Slide 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="Slide 2" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Slide 3" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="Slide 4" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="Slide 5" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt="Slide 6" className="slide-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
