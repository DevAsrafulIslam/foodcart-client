import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import AOS from "aos";
import "aos/dist/aos.css";

const ChefCart = () => {
  const [carts, setCart] = useState([]);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
    
    fetch("chef.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  
  return (
    <div className="py-16 bg-amber-50 rounded-xl my-16">
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subheading={"Premium Selections"}
      ></SectionTitle>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {carts.map((cart, index) => (
            <div 
              key={cart._id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <Cart cart={cart}></Cart>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefCart;
