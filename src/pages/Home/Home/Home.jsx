import Banner from "../../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefCart from "../ChefCart/ChefCart";
import Contact from "../Contact/Contact";
import { Helmet } from "react-helmet-async";
import HalalFoodCorner from "../HalalFood/HalalFoodCorner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FootCart | Home</title>
      </Helmet>
      <Banner />
      <div className="container mx-auto">
        <Category />
        <HalalFoodCorner />
        <PopularMenu />
        <Contact />
        <ChefCart />
        <Featured />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
