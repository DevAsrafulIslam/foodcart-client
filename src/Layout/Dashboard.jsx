import { BiSolidCalendarEvent } from "react-icons/bi";
import {  FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaBook, FaUsers, FaUtensils } from "react-icons/fa6";
import { IoMdMail, IoMdMenu } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-4">
        {/* Page content here */}
        <div className="flex justify-between items-center mb-4">
          {/* <h2 className="text-2xl font-semibold">Dashboard</h2> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <IoMdMenu className="text-xl" />
          </label>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-slate-600 text-white">
          {/* Sidebar content here */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">Food Cart</h2>
            <p className="text-sm">{isAdmin ? 'Admin Dashboard' : 'User Dashboard'}</p>
          </div>
          
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/reservations" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <FaBook />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <FaUsers />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <FaShoppingCart /> My Cart
                  <span>
                    <div className="badge badge-secondary">
                      +{cart?.length || 0}
                    </div>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <MdReviews /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
                  <BiSolidCalendarEvent /> Payment History
                </NavLink>
              </li>
            </>
          )}

          <div className="divider bg-slate-400 h-0.5 my-4"></div>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
              <IoMdMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
              <FaBagShopping /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? "bg-slate-500" : ""}>
              <IoMdMail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
