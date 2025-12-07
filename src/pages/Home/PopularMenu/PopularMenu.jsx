import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="mb-20 py-10 px-4">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"Popular Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto py-10">
        {popular.slice(0, 6).map((item, index) => (
          <div
            key={item._id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl"
          >
            {/* <MenuItem item={item}></MenuItem> */}
            {/* Top Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold">{item.name}</h2>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <p className="text-cyan-600 font-bold text-lg">৳ {item.price}</p>

              {/* <button className="mt-3 w-full bg-[#0a0f1f] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-black transition">
                Order Now →
              </button> */}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12" data-aos="fade-up">
        <Link to="/menu">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto">
            View Full Menu <FaArrowRight className="text-sm" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
