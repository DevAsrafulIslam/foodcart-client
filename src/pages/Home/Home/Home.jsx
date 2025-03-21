import { useEffect } from "react";
import Banner from "../../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefCart from "../ChefCart/ChefCart";
import Contact from "../Contact/Contact";
import { Helmet } from "react-helmet-async";
import HalalFoodCorner from "../HalalFood/HalalFoodCorner";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      disable: window.innerWidth < 768 // Disable animations on mobile for better performance
    });
    
    // Smooth scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      <Helmet>
        <title>FootCart | Premium Food Delivery</title>
        <meta name="description" content="Experience premium halal food delivery with FootCart" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      {/* Updated Banner component will use new hero images */}
      <div className="relative">
        <Banner />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Food Category Section with new images */}
        <div data-aos="fade-up" className="my-8 md:my-16">
          <Category />
        </div>
        
        {/* Halal Food Corner with updated premium imagery */}
        <div data-aos="fade-up" className="my-8 md:my-16">
          <HalalFoodCorner />
        </div>
        
        {/* Popular Menu with high-quality food photography */}
        <div data-aos="fade-up" className="my-8 md:my-16">
          <PopularMenu />
        </div>
        
        {/* Contact section with elegant background */}
        <div data-aos="fade-up" className="my-8 md:my-16 bg-amber-50 rounded-xl md:rounded-3xl shadow-inner p-4 md:p-8 relative overflow-hidden">
          {/* Decorative image elements */}
          <div className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 opacity-10">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1" alt="" className="w-full h-full object-cover" />
          </div>
          <Contact />
        </div>
        
        {/* Chef Showcase with professional chef images */}
        <div data-aos="fade-up" className="my-8 md:my-16">
          <ChefCart />
        </div>
        
        {/* Featured section with premium food imagery */}
        <div data-aos="fade-up" className="my-8 md:my-16 relative">
          <div className="hidden md:block absolute -top-20 -left-20 w-40 h-40 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="hidden md:block absolute -bottom-20 -right-20 w-40 h-40 bg-amber-300 rounded-full opacity-20 blur-3xl"></div>
          <Featured />
        </div>
        
        {/* Testimonials with customer photos */}
        <div data-aos="fade-up" className="my-8 md:my-16 pb-8 md:pb-16">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Home;
