import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { useEffect, useState } from "react";
import Cart from "./Cart";

const ChefCart = () => {
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch("chef.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subheading={"Should Try"}
      ></SectionTitle>
      <div className="grid md:flex gap-4 mx-auto justify-between">
        {carts.map((cart) => (
          <Cart key={cart._id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default ChefCart;
