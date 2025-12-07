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
    Swal.fire({
      toast: true,
      position: 'top-center',
      title: 'Remove item?',
      text: item.name,

      showCancelButton: true,
      confirmButtonColor: '#38BDF8',
      cancelButtonColor: '#1E293B',
      confirmButtonText: 'Remove',
      cancelButtonText: 'Cancel',
      background: '#1E293B',
      color: '#fff',
      width: '280px',
      padding: '0.75rem',
      showClass: {
        popup: 'animate__animated animate__fadeInRight animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutRight animate__faster'
      },
      customClass: {
        popup: 'rounded-xl border border-[#334155]',
        title: 'text-sm font-medium text-[#38BDF8]',
        htmlContainer: 'text-xs text-gray-300',
        actions: 'gap-2',
        confirmButton: 'px-3 py-1 text-sm rounded-lg font-medium',
        cancelButton: 'px-3 py-1 text-sm rounded-lg font-medium border border-[#334155]'
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
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Item removed',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                width: '200px',
                padding: '0.5rem',
                background: '#1E293B',
                color: '#fff',
                showClass: {
                  popup: 'animate__animated animate__fadeInRight animate__faster'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutRight animate__faster'
                },
                customClass: {
                  popup: 'rounded-xl border border-[#334155]',
                  title: 'text-xs font-medium'
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
