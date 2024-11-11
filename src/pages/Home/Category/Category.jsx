import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subheading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="-mt-16 text-shadow-md text-2xl uppercase text-white text-center">
            Desserts
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
