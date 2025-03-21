import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ cart }) => {
  const { name, recipe, image, price } = cart;
  
  // Format price safely, handling undefined or non-number cases
  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{recipe}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-amber-600 font-bold">${formattedPrice}</span>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
