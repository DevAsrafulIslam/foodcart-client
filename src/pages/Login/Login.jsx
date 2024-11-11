import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa6";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || { pathname: "/" };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "User Login Successful.",
        showConfirmButton: false,
        timer: 1100,
      });
      navigate(from, { replace: true });
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Halal Food Corner | Login</title>
      </Helmet>
      <div>
        <button className="px-3 rounded-sm py-2 hover:bg-slate-600 bg-slate-500 absolute ">
          <Link to="/" className="flex text-white items-center gap-1">
            <FaArrowLeft /> Home
          </Link>
        </button>
        <div className=" hero min-h-screen bg-base-200">
          <div className="hero-content flex-col md:flex-row-reverse ">
            <div className="text-center md:w-1/2 lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* captcha */}
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="text"
                    placeholder="type the captcha"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* make button disabled for captcha */}
                <div className="form-control mt-6">
                  <input
                    disabled={false}
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  ></input>
                </div>
              </form>
              <p className="text-center mb-2">
                <small>
                  New Here?{" "}
                  <Link
                    to="/signup"
                    className="underline text-green-600 font-bold"
                  >
                    Create an Account
                  </Link>
                </small>
              </p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
