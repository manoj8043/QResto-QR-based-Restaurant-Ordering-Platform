import React, { useState, useEffect } from "react";
import bg from "../assets/imgs/bg2.png";
import { useNavigate } from "react-router";

function AuthPage() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Background */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      {/* Right Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gradient-to-br from-violet-800 to-blue-900 p-6">
        <div className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-violet-800 mb-2">
            Verify Your Email
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter the OTP sent to your registered email.
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
          >
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="input input-bordered w-full"
            />

            <button
              type="submit"
              className="btn bg-violet-700 hover:bg-violet-800 text-white w-full"
            >
              Verify OTP
            </button>

            <div className="text-center">
              {timer > 0 ? (
                <p className="text-sm text-gray-500">Resend OTP in {timer}s</p>
              ) : (
                <button
                  type="button"
                  className="text-sm text-violet-700 hover:underline"
                  onClick={() => setTimer(30)}
                >
                  Resend OTP
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
