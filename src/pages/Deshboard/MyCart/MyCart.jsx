import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  //   how does reduce work
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  console.log(total, "Total Items Price");
  const handleDelete = (item) => {
    console.log(item, "Delete item");
    Swal.fire({
      title: 'Remove Item?',
      text: `Are you sure you want to remove ${item.name} from your cart?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#FF7A00',
      cancelButtonColor: '#718096',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Keep it',
      background: '#fff',
      borderRadius: '15px',
      iconColor: '#FF7A00',
      customClass: {
        title: 'text-xl font-bold text-gray-800',
        content: 'text-gray-600',
        confirmButton: 'px-5 py-2 rounded-lg',
        cancelButton: 'px-5 py-2 rounded-lg'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://foodcart-server.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Removed!',
                text: `${item.name} has been removed from your cart.`,
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                background: '#fff',
                iconColor: '#10B981',
                customClass: {
                  title: 'text-xl font-bold text-gray-800',
                  content: 'text-gray-600'
                }
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full mr-8">
      <Helmet>
        <title>FootCart || My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-warning btn-sm ">PAY</button>
          </Link>
        ) : (
          <button disabled className="btn btn-warning btn-sm ">
            PAY
          </button>
        )}
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-400">
            <tr>
              <th></th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600 text-white "
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
