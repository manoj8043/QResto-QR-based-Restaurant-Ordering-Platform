import React from "react";
import logo from "../../../../Shared/UiComponents/assets/logo1.png";
import logo1 from "../../../../Shared/UiComponents/assets/lionlogo.png";
import { useState } from "react";

function PageDemo() {
  const [isSignup, setIsSignup] = useState();
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-col lg:flex-row items-center min-h-screen">
        <div className="lg:w-1/2 w-full flex justify-center p-8">
          <img
            alt="Signin-Poster"
            className="max-w-full h-auto object-cover object-center rounded-lg shadow-lg"
            src={logo}
          />
        </div>

        <div className="lg:w-1/2 w-full flex justify-center items-center p-8">
          <div className="w-full max-w-sm">
            <div className="text-center">
              <img alt="Restro" src={logo1} className="mx-auto h-10 w-auto" />
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
                {isSignup ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                {isSignup
                  ? "Join us today! Please fill in the details to get started."
                  : "Login to continue to your account."}
              </p>
            </div>

            <form action="#" method="POST" className="mt-8 space-y-6">
              {isSignup && (
                <>
                  <div>
                    <input
                      type="text"
                      // ref={SigininInfo.username}
                      placeholder="Username"
                      className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-3"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      // ref={SigininInfo.userId}
                      placeholder="User ID"
                      className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-3"
                    />
                  </div>
                </>
              )}
              <div>
                <input
                  type="email"
                  // ref={SigininInfo.email}
                  placeholder=" Email Address"
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-3"
                />
              </div>
              <div>
                <input
                  type="password"
                  // ref={SigininInfo.password}
                  placeholder="Password"
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-3"
                />
              </div>
              {isSignup && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    // ref={SigininInfo.profilePic}
                    className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-teal-600 file:text-white hover:file:bg-teal-700"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-medium py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition"
              >
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>

            {/* Footer link */}
            <p className="mt-6 text-center text-sm text-gray-400">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsSignup(false)}
                    className="text-teal-600 cursor-pointer hover:underline font-medium"
                  >
                    Login
                  </span>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setIsSignup(true)}
                    className="text-teal-600 cursor-pointer hover:underline font-medium"
                  >
                    Sign Up
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageDemo;
