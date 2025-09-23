import toast from "react-hot-toast";
import bg from "../assets/imgs/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Login() {
  const demoUserId = useRef();
  const demoPassword = useRef();

  const [staffData, setStaffData] = useState([]);
  useEffect(() => {
    alert("Use demo credentials to login:\nUserId: admin\nPassword: admin123");
    axios.get("http://localhost:5000/staff-login/staff").then((res) => {
      setStaffData(res.data);
    });
  }, []);
  console.log(staffData);
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

              const userId = demoUserId.current.value;
              const password = demoPassword.current.value;

              if (userId === "admin" || password === "admin123") {
                navigate("/dashboard");
                toast.success("Logged in successfully!");
              } else {
                toast.error("Invalid UserId or Password");
              }
            }}
          >
            {/* UserId */}
            <input
              type="text"
              placeholder="UserId"
              className="input input-bordered w-full"
              ref={demoUserId}
            />

            {/* Password */}
            <input
              type="password"
              //   required
              placeholder="Password"
              className="input input-bordered w-full"
              ref={demoPassword}
            />

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                required
                className="checkbox checkbox-sm"
              />
              I agree to the{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </Link>
            </label>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          {/* Registration */}
          <p className="text-center mt-6 text-sm text-gray-700">
            Don’t have an account?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
