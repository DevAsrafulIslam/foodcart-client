import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Premium category images
const categoryImages = [
  {
    id: 1,
    name: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    path: "/order/salad"  // Changed from /menu/salad to /order/salad
  },
  {
    id: 2,
    name: "Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    path: "/order/pizza"  // Changed to order path
  },
  {
    id: 3,
    name: "Soups",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop",
    path: "/order/soup"  // Changed to order path
  },
  {
    id: 4,
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2070&auto=format&fit=crop",
    path: "/order/dessert"  // Changed to order path
  },
  {
    id: 5,
    name: "Drinks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=2070&auto=format&fit=crop",
    path: "/order/drinks"  // Changed to order path
  },
  {
    id: 6,
    name: "Premium",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    path: "/order/premium"  // Changed to order path
  }
];

const Category = () => {
  const [duplicatedItems, setDuplicatedItems] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Duplicate the items to create the infinite loop effect
    setDuplicatedItems([...categoryImages, ...categoryImages]);
    
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 overflow-hidden">
      <SectionTitle
        subheading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      />
      
      <div className="mt-12 relative">
        {/* Left gradient fade effect */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* Right gradient fade effect */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex space-x-6 overflow-hidden pb-8 px-4">
          <div className="flex space-x-6 animate-infinite-scroll">
            {duplicatedItems.map((category, index) => (
              <div 
                key={`${category.id}-${index}`}
                className="relative flex-shrink-0 cursor-pointer group"
                onClick={() => handleCategoryClick(category.path)}
                role="button"
                aria-label={`View ${category.name} menu`}
              >
                <div className="w-72 h-72 overflow-hidden rounded-xl">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
                  <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add custom CSS for the infinite loop animation */}
      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infiniteScroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Category;
