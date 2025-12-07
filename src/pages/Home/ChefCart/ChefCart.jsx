import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ChefCart = () => {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {carts.map((cart, index) => (
            <div
              key={cart._id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Optional Top Image (if cart.image exists) */}
              {cart.image && (
                <img
                  src={cart.image}
                  alt={cart.name}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Content */}
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold">{cart.name}</h2>

                {cart.subtitle && (
                  <p className="text-cyan-600 font-semibold text-sm leading-relaxed uppercase">
                    {cart.subtitle}
                  </p>
                )}

                <p className="text-gray-600 leading-relaxed">{cart.details}</p>

                {cart.price && (
                  <p className="text-cyan-600 font-bold text-lg">
                    ৳ {cart.price}
                  </p>
                )}

                <button className="mt-4 w-full bg-[#0A0F1F] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-black transition">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefCart;
