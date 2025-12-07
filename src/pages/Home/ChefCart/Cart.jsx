import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const Cart = ({ cart }) => {
  const { name, recipe, image, price, rating } = cart;
  
  // Format price safely, handling undefined or non-number cases
  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100">
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
              ${formattedPrice}
            </span>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
          {rating && (
            <div className="flex items-center gap-1">
              <FaStar className="text-amber-500" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{recipe}</p>
        
        <div className="mt-auto">
          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] font-medium">
            <FaShoppingCart className="text-lg" /> 
            <span>Book Chef</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
