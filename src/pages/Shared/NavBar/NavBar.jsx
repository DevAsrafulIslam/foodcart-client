import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navigation = useNavigate();

  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    navigation("/login");
  };
  const navOptions = (
    <div className="gap-4 items-center flex-none md:flex">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li className="">
        <Link className="btn" to="/dashboard/cart">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </Link>
      </li>

      {user ? (
        <>
          <span className="">{user.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </div>
  );
  return (
    <>
      <div className="navbar fixed  z-10 bg-slate-700 bg-opacity-90  text-white">
        
        {/* dropdown menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn text-xl pointer-events-none">Ƒօօժ<p className="text-green-500 text-2xl gap-0">↻</p>ąɾէ</a>
        </div>
        {/* menu items */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal pl-1 pr-1 pt-0 pb-0">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
