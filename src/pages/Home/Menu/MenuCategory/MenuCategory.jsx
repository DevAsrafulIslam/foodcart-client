import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8 container mx-auto">
      {title && (
        <Cover 
          img={img} 
          title={title}
          className="rounded-lg overflow-hidden shadow-xl"
        />
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 px-4 md:px-0">
        {items.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
            <div className="p-4 flex flex-col h-full">
              <MenuItem item={item} />
              <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="flex text-center mx-auto mt-8 px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-red-600 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <span className="mr-2">Order Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
