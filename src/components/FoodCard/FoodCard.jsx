import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5001/carts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added to the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="border mx-auto w-full max-w-sm rounded-md overflow-hidden hover:scale-105 duration-500 shadow-lg">
      <figure className="relative">
        <img
          className="w-full h-48 sm:h-56 md:h-60 rounded-t-md object-cover"
          src={image}
          alt={name}
        />
        <p className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-sm rounded">
          ${price}
        </p>
      </figure>
      <div className="p-4 text-center">
        <h2 className="text-lg sm:text-xl font-semibold">{name}</h2>
        <p className="text-sm sm:text-base text-gray-600 my-2">{recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="mt-2 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
