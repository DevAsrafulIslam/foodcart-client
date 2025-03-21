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
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="mb-20 py-10 px-4">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"Popular Items"}
      ></SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {popular.slice(0, 6).map((item, index) => (
          <div 
            key={item._id} 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <MenuItem item={item}></MenuItem>
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
