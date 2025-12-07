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
      fetch("https://foodcart-server.vercel.app/carts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: `${name} added to cart`,
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              background: '#1E293B',
              color: '#fff',
              iconColor: '#38BDF8',
              customClass: {
                popup: 'rounded-xl border border-[#334155] shadow-lg',
                title: 'text-sm font-medium text-gray-200'
              }
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Authentication Required',
        text: 'Please login to add items to cart',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
        background: '#0B1120',
        color: '#fff',
        iconColor: '#38BDF8',
        confirmButtonColor: '#38BDF8',
        cancelButtonColor: '#1E293B',
        customClass: {
          popup: 'rounded-xl border border-[#334155] shadow-xl',
          title: 'text-xl font-bold text-[#38BDF8]',
          htmlContainer: 'text-gray-300',
          confirmButton: 'px-6 py-2.5 rounded-lg font-medium',
          cancelButton: 'px-6 py-2.5 rounded-lg font-medium border border-[#334155]'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-[#1E293B] mx-auto w-full max-w-sm rounded-xl overflow-hidden shadow-xl border border-[#334155] transform transition-all duration-300 hover:scale-105">
      <figure className="relative">
        <img
          className="w-full h-48 sm:h-56 md:h-60 object-cover"
          src={image}
          alt={name}
        />
        <p className="absolute top-4 right-4 bg-[#38BDF8] text-white px-3 py-1 text-sm rounded-full font-medium">
          ${price}
        </p>
      </figure>
      <div className="p-5 text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-[#38BDF8]">{name}</h2>
        <p className="text-sm sm:text-base text-gray-400 my-3 line-clamp-2">{recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="mt-2 w-full bg-[#38BDF8] text-white py-2 rounded-lg hover:bg-[#0EA5E9] transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
