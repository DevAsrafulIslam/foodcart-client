import React from "react";
import { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="my-16 py-16 bg-gradient-to-r from-amber-900 to-amber-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div 
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-amber-200">+88 0192345678910</p>
            <p className="text-amber-200">+88 0192345678911</p>
          </div>
          
          <div 
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-amber-200">info@halalfood.com</p>
            <p className="text-amber-200">support@halalfood.com</p>
          </div>
          
          <div 
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-amber-200">123 Halal Street</p>
            <p className="text-amber-200">Dhaka, Bangladesh</p>
          </div>
          
          <div 
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p className="text-amber-200">Mon-Fri: 11:00am - 10:00pm</p>
            <p className="text-amber-200">Sat-Sun: 10:00am - 11:00pm</p>
          </div>
        </div>
        
        <div className="mt-12 text-center" data-aos="fade-up">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
