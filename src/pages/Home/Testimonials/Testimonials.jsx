import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    
    fetch("https://foodcart-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  
  return (
    <section className="my-20 py-16 bg-amber-50 rounded-xl">
      <SectionTitle
        heading={"Customer Stories"}
        subheading={"Voices of Satisfaction"}
      ></SectionTitle>
      
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
        <Swiper 
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="py-12 px-4">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mx-auto max-w-3xl relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-amber-600 rounded-full p-3 shadow-lg">
                  <FaQuoteLeft className="text-white text-xl" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-amber-200">
                    <img 
                      src={review.image || `https://ui-avatars.com/api/?name=${review.name}&background=random`} 
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${review.name}&background=random`;
                      }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{review.name}</h3>
                  
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={review.rating}
                    readOnly
                    className="mb-4"
                  />
                  
                  <p className="text-gray-600 text-center italic leading-relaxed mb-4">
                    "{review.details}"
                  </p>
                  
                  <div className="text-amber-600 text-sm font-medium">
                    {review.designation || "Valued Customer"}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
