import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const Cart = ({ cart }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={cart.image} alt="car!" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl">{cart.name}</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-center">
            <button className="uppercase text-yellow-500 btn btn-outline border-0 border-b-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
