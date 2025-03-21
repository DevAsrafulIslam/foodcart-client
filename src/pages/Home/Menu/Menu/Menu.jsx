import Cover from "../../../Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../../hooks/useMenu";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import menuImg from "../../../../assets/menu/banner3.jpg";
import dessertImg from "../../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../../assets/menu/salad-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>FootCart || Menu</title>
      </Helmet>
      <Cover img={menuImg} title=" Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subheading={"don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
