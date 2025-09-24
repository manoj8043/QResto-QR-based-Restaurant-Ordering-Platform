import React, { useState, useEffect } from "react";
import bg from "../../assets/imgs/bg2.png";
import { useNavigate } from "react-router";

function Usersigninpage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isOtpSent && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [isOtpSent, timer]);

  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(number)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isOtpSent && validateMobileNumber(mobileNumber)) {
      alert(`OTP sent to ${name}'s mobile number: ${mobileNumber}`);
      setIsOtpSent(true);
      setTimer(60);
      return;
    }

    if (isOtpSent) {
      if (otp === "123456") {
        alert("OTP verified successfully!");
        setName("");
        setMobileNumber("");
        setOtp("");
        setIsOtpSent(false);
        navigate("/home");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Background */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
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
              : "Enter your details to receive an OTP."}
          </p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type={isOtpSent ? "text" : "tel"}
              pattern={isOtpSent ? "[0-9]{6}" : "[0-9]{10}"}
              maxLength={isOtpSent ? 6 : 10}
              placeholder={isOtpSent ? "Enter OTP" : "Enter Mobile Number"}
              value={isOtpSent ? otp : mobileNumber}
              onChange={(e) =>
                isOtpSent
                  ? setOtp(e.target.value)
                  : setMobileNumber(e.target.value)
              }
              className="input input-bordered w-full"
              required
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
                    onClick={() => {
                      setOtp("");
                      setTimer(60);
                      alert("OTP resent to " + mobileNumber);
                    }}
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

export default Usersigninpage;
