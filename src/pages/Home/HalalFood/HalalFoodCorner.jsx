import { useEffect } from "react";
import "./HalalFoodCorner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HalalFoodCorner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="halalFood-bg text-center py-24 px-4 md:px-12 lg:px-36 my-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
      
      <div 
        className="bg-white bg-opacity-90 px-6 py-12 md:p-12 rounded-xl shadow-2xl relative z-10 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6">PREMIUM HALAL CUISINE</h3>
        
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Experience the finest Halal cuisine, prepared with authentic recipes and premium ingredients. 
          Our chefs meticulously craft each dish to ensure exceptional taste while adhering to strict 
          Halal standards. From traditional favorites to contemporary creations, our menu offers a 
          diverse selection to satisfy every palate.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-bold text-amber-800 mb-2">100% Certified Halal</h4>
            <p className="text-sm text-gray-600">All our ingredients are sourced from certified Halal suppliers</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-bold text-amber-800 mb-2">Premium Quality</h4>
            <p className="text-sm text-gray-600">We use only the finest ingredients for exceptional flavor</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-bold text-amber-800 mb-2">Authentic Recipes</h4>
            <p className="text-sm text-gray-600">Traditional preparation methods for authentic taste</p>
          </div>
        </div>
        
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
          Explore Our Halal Menu
        </button>
      </div>
    </div>
  );
};

export default HalalFoodCorner;
