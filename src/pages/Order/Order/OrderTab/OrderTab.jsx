import FoodCard from "../../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Todo implement pagination here on this page
const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid m-auto w-fit gap-8 md:grid-cols-5">
            {items.map((item) => (
              <FoodCard item={item} key={item._id}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
