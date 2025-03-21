import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaShoppingCart, FaUserCircle, FaUtensils } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path ? 'text-amber-400' : '';
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Our Menu" },
    { to: "/order/salad", label: "Order Food" },
    { to: "/secret", label: "Secret" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-gradient-to-r from-gray-900 to-gray-800 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Updated Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-amber-600 p-2 rounded-full mr-2">
              <FaUtensils className="text-white text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-white leading-tight">
                Halal<span className="text-amber-500">Food</span>
              </span>
              <span className="text-xs text-gray-400 -mt-1">Premium Cuisine</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`text-white hover:text-amber-400 transition-colors duration-300 ${isActive(link.to)}`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Cart */}
            <Link 
              to="/dashboard/cart" 
              className="relative p-2 text-white hover:text-amber-400 transition-colors duration-300"
            >
              <FaShoppingCart className="text-xl" />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
            
            {/* User section */}
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt={user.displayName || "User"} 
                        className="w-8 h-8 rounded-full border-2 border-amber-500"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${user.displayName || "User"}&background=f59e0b&color=fff`;
                        }}
                      />
                    ) : (
                      <img 
                        src={`https://ui-avatars.com/api/?name=${user.displayName || "User"}&background=f59e0b&color=fff`}
                        alt={user.displayName || "User"}
                        className="w-8 h-8 rounded-full border-2 border-amber-500"
                      />
                    )}
                    {/* <span className="text-white text-sm hidden lg:block">{user.displayName || "User"}</span> */}
                  </div>
                  
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Dashboard</Link>
                    <Link to="/profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Profile</Link>
                    <button 
                      onClick={handleLogOut} 
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors duration-300 text-sm"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link 
              to="/dashboard/cart" 
              className="relative p-2 mr-2 text-white"
            >
              <FaShoppingCart className="text-xl" />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`text-white hover:text-amber-400 py-2 transition-colors duration-300 ${isActive(link.to)}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {user ? (
            <div className="pt-2 border-t border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full border-2 border-amber-500"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${user.displayName || "User"}&background=f59e0b&color=fff`;
                    }}
                  />
                ) : (
                  <img 
                    src={`https://ui-avatars.com/api/?name=${user.displayName || "User"}&background=f59e0b&color=fff`}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full border-2 border-amber-500"
                  />
                )}
                <span className="text-white">{user.displayName || "User"}</span>
              </div>
              <Link 
                to="/dashboard" 
                className="block text-white hover:text-amber-400 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/profile" 
                className="block text-white hover:text-amber-400 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <button 
                onClick={() => {
                  handleLogOut();
                  setIsMenuOpen(false);
                }} 
                className="text-white hover:text-amber-400 py-2"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors duration-300 text-sm inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
