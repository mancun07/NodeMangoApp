import concert1 from "../img/concert1.jpg";
import concert2 from "../img/concert2.jpg";
import concert3 from "../img/concert3.jpg";

// Import Swiper React components
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay]);

const MySwiper = () => {
  return (
    //    Add Swiper container

    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={concert1} alt="perfomance" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={concert2} alt="perfomance" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={concert3} alt="perfomance" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
