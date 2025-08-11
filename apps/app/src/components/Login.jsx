import React from "react";
import toast from "react-hot-toast";
import bg from "../assets/Web_bg10.webp";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full">
      {/* Left: Background Image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "10% center",
        }}
      />
      {/* Right: Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-blue-900 p-6">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-800">
            Login In
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Welcome back! Please login to continue.
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Logged in successfully!");
              navigate("/dashboard");
            }}
          >
            {/* UserId */}
            <input
              type="text"
              placeholder="UserId"
              className="input input-bordered w-full"
            />

            {/* Password */}
            <input
              type="password"
              //   required
              placeholder="Password"
              className="input input-bordered w-full"
            />

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                required
                className="checkbox checkbox-sm"
              />
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </label>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          {/* Registration */}
          <p className="text-center mt-6 text-sm text-gray-700">
            Don’t have an account?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Register Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
