import { useContext, useState } from "react";
import {
  // loadCaptchaEnginge,
  // LoadCanvasTemplate,
  // validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaArrowLeft, FaLock, FaEnvelope } from "react-icons/fa6";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // const from = location.state?.from || { pathname: "/" };
  const from = location.state?.from?.pathname || "/";

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: 'Welcome Back!',
          text: 'You have successfully logged in',
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
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: 'Login Failed',
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
        <title>Halal Food Corner | Login</title>
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
            {/* Left side - Image and text */}
            <div className="md:w-1/2 bg-amber-600 p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500 rounded-full opacity-50"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-700 rounded-full opacity-50"></div>

              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
                <p className="text-amber-100 mb-8">
                  Sign in to access your account and enjoy our delicious halal food offerings. Your culinary journey awaits!
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">✓</div>
                    <span>Premium quality halal food</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">✓</div>
                    <span>Fast and reliable delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">✓</div>
                    <span>Exclusive member discounts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Login form */}
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <a href="#" className="text-sm text-amber-600 hover:text-amber-800">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Security Verification</label>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <LoadCanvasTemplate />
                  </div>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="text"
                    placeholder="Enter the captcha above"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                 */}
                <button
                  type="submit"
                  disabled={false}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Donot have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-amber-600 hover:text-amber-800 font-medium"
                  >
                    Create an Account
                  </Link>
                </p>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6">
                  <SocialLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
