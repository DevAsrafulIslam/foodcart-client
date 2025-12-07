import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa6";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("User created:", loggedUser);
      
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          
          // Send user data to the database
          fetch('https://foodcart-server.vercel.app/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId) {
                reset();
                Swal.fire({
                  title: 'Welcome to FootCart!',
                  text: 'Your account has been created successfully',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 2500,
                  timerProgressBar: true,
                  background: '#fff',
                  iconColor: '#10B981',
                  customClass: {
                    popup: 'animate__animated animate__fadeInUp',
                    title: 'text-xl font-bold text-gray-800',
                    content: 'text-gray-600'
                  }
                });
                navigate(from, { replace: true });
              }
            });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error',
            confirmButtonColor: '#FF7A00',
            background: '#fff',
            iconColor: '#EF4444',
            customClass: {
              title: 'text-xl font-bold text-gray-800',
              content: 'text-gray-600',
              confirmButton: 'px-5 py-2 rounded-lg'
            }
          });
        });
    })
    .catch(error => {
      console.log(error);
      Swal.fire({
        title: 'Registration Failed',
        text: error.message,
        icon: 'error',
        confirmButtonColor: '#FF7A00',
        background: '#fff',
        iconColor: '#EF4444',
        customClass: {
          title: 'text-xl font-bold text-gray-800',
          content: 'text-gray-600',
          confirmButton: 'px-5 py-2 rounded-lg'
        }
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>FootCart | Create Account</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center relative">
        <Link 
          to="/" 
          className="absolute top-6 left-6 flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors font-medium"
        >
          <FaArrowLeft className="text-sm" /> 
          <span>Back to Home</span>
        </Link>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
            {/* Left side - Form */}
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="John Doe"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">Name is required</p>
                  )}
                </div>
                
                {/* <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Profile Photo URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaImage className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      {...register("photoURL", { required: true })}
                      placeholder="https://example.com/photo.jpg"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  {errors.photoURL && (
                    <p className="text-red-500 text-xs mt-1">Photo URL is required</p>
                  )}
                </div> */}
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">Email is required</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        // pattern:
                        //   /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/,
                      })}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  {errors.password?.type === "required" && (
                    <p className="text-red-500 text-xs mt-1">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500 text-xs mt-1">Password must be at least 6 characters</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500 text-xs mt-1">Password must be less than 20 characters</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500 text-xs mt-1">Password must include uppercase, lowercase, number, and special character</p>
                  )}
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Create Account
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-amber-600 hover:text-amber-800 font-medium"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <SocialLogin />
                </div>
              </div>
            </div>
            
            {/* Right side - Image and text */}
            <div className="md:w-1/2 bg-amber-600 p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500 rounded-full opacity-50"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-700 rounded-full opacity-50"></div>
              
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-6">Join Our Community</h1>
                <p className="text-amber-100 mb-8">
                  Create an account to enjoy premium halal food delivered to your doorstep. Unlock exclusive offers and track your orders with ease.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">✓</div>
                    <span>Personalized recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">✓</div>
                    <span>Save your favorite meals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">✓</div>
                    <span>Faster checkout process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">✓</div>
                    <span>Special member-only discounts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
