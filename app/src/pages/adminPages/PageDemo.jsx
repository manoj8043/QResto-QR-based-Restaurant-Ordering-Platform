import React, { useState, useEffect } from "react";
import bg from "../../assets//imgs/bg2.png";
import { useNavigate } from "react-router";

function PageDemo() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(number) || number.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }
    return true;
  };

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
            OTP Verification
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {isOtpSent
              ? "Enter the OTP sent to your mobile number."
              : "Enter your mobile number to receive an OTP."}
          </p>
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (isOtpSent == false && validateMobileNumber(mobileNumber)) {
                alert(
                  "OTP sent to " + name + "'s mobile number: " + mobileNumber
                );
                setIsOtpSent(true);
                setTimer(60);
              }
              if (isOtpSent) {
                if (otp === "123456") {
                  alert("OTP verified successfully!");
                  navigate("/home");
                } else {
                  alert("Invalid OTP. Please try again.");
                }
              }
            }}
          >
            {!isOtpSent && (
              <input
                className="input input-bordered w-full"
                placeholder="Enter Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              ></input>
            )}
            <input
              type="number"
              placeholder={isOtpSent ? "Enter OTP" : "Enter Mobile Number"}
              value={isOtpSent ? otp : mobileNumber}
              onChange={(e) =>
                isOtpSent
                  ? setOtp(e.target.value)
                  : setMobileNumber(e.target.value)
              }
              className="input input-bordered w-full"
            />

            <button
              type="submit"
              className="btn bg-violet-700 hover:bg-violet-800 text-white w-full"
            >
              {isOtpSent ? "Verify OTP" : "Send OTP"}
            </button>

            {isOtpSent && (
              <div className="text-center text-gray-600">
                {timer > 0 ? (
                  <p className="text-sm text-gray-500">
                    Resend OTP in {timer}s
                  </p>
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
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageDemo;
