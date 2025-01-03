import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/orders");
      })
      .catch((error) => {});
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {});
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center bg-base-200 w-full min-h-screen">
  <div className="w-full max-w-md">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl mb-8 font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleShowPassword}
                className="btn btn-xs absolute right-4 top-12 "
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ml-4 mb-4">
            New to this websit? Please{" "}
            <Link to={"/register"}>
              {" "}
              <span className="text-red-600">Register</span>{" "}
            </Link>
          </p>
          <button onClick={handleGoogleSignIn} className="btn btn-accent">
            Sign Up With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
