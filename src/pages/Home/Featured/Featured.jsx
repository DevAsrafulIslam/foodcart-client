import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegClock, FaArrowRight } from "react-icons/fa";

const Featured = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="featured-item bg-fixed text-white py-20 my-20">
      <SectionTitle
        heading={"Signature Dish"}
        subheading={"Chef's Special"}
      ></SectionTitle>
      
      <div className="container mx-auto px-4">
        <div className="md:flex justify-center items-center gap-12 bg-black bg-opacity-70 p-8 md:p-16 rounded-xl backdrop-blur-sm" data-aos="fade-up">
          <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="200">
            <img 
              src={featured} 
              alt="Featured dish" 
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full"
            />
          </div>
          
          <div className="md:w-1/2 space-y-6" data-aos="fade-left" data-aos-delay="400">
            <div className="flex items-center gap-2 text-amber-400">
              <FaRegClock />
              <p className="font-medium">Limited Time Offer</p>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white">Premium Wagyu Steak</h3>
            
            <p className="text-gray-300 leading-relaxed">
              Experience the extraordinary flavor of our premium A5 Wagyu beef, 
              expertly prepared by our master chef. This exceptional cut is 
              sourced from specially raised cattle, resulting in unparalleled 
              marbling, tenderness, and a rich, buttery flavor profile that 
              melts in your mouth.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="bg-amber-700 px-3 py-1 rounded-full text-sm">Halal Certified</span>
              <span className="bg-amber-700 px-3 py-1 rounded-full text-sm">Premium Cut</span>
              <span className="bg-amber-700 px-3 py-1 rounded-full text-sm">Chef's Special</span>
            </div>
            
            <div className="pt-4">
              <button className="group bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2">
                Reserve Now 
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
