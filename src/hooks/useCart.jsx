import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`, {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      });
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [cart, refetch];
};
export default useCart;

// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProviders";
// const useCart = () => {
//   const { user } = useContext(AuthContext);
//   const token = localStorage.getItem("access-token");

//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["carts", user?.email],
//     queryFn: async () => {
//       const res = await fetch(
//         `http://localhost:5001/carts?email=${user.email}`,
//         { headers: { authorization: `bearer ${token}` } }
//       );
//       return res.json();
//     },
//   });
//   return [cart, refetch];
// };
// export default useCart;
