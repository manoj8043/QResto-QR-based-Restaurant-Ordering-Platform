import toast from "react-hot-toast";
import bg from "../../assets/imgs/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  // const demoUserId = useRef();
  // const demoPassword = useRef();

  const [staffData, setStaffData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/staff-login/staff").then((res) => {
      setStaffData(res.data);
    });

    if (sessionStorage.getItem("isLoggedIn") === "true") {
      navigate("/dashboard");
      toast.success("You are already logged in!");
    } else {
      alert(
        "Use demo credentials to login:\nUserId: admin\nPassword: admin123"
      );
    }
  }, []);
  console.log(staffData);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // ⚡ Directly save user input in sessionStorage
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password); // not secure, just demo
    sessionStorage.setItem("isLoggedIn", "true");
    if (
      (username === "admin" && password === "admin123") ||
      (username === "staff" && password === "staff123")
    ) {
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
      sessionStorage.clear();
    }
  };
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
              handleLogin(e);
            }}
          >
            {/* UserId */}
            <input
              type="text"
              placeholder="UserId"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Password */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"} // toggle type
                placeholder="Password"
                className="input input-bordered w-full pr-10" // padding for icon
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Icon button */}
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

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
