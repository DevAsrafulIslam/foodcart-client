import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const axiosSecure = axios.create({
    baseURL: "https://foodcart-server.vercel.app",
  });

  useEffect(() => {
    // Request interceptor to add token to headers
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // Response interceptor to handle 401 and 403 status codes
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
    // Cleanup interceptors when component unmounts
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
