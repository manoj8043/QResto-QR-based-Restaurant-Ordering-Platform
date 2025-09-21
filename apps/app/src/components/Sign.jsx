import React from "react";
import toast from "react-hot-toast";
import bg from "../assets/Web_bg10.webp";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputTextErrorMsgs from "../subComponents/InputTextErrorMsgs";

const initialValues = {
  staffId: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const onSubmit = (values) => {
  toast.success("Registered successfully!");
  // navigate("/login");
  console.log(values);
};

const validationSchema = Yup.object({
  staffId: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

function Sign() {
  // const navigate = useNavigate();

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
            Sign In
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Welcome! Please Register to continue.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="flex flex-col gap-5">
              {/* UserId */}
              <Field
                type="text"
                placeholder="UserId"
                className="input input-bordered w-full"
                name="staffId"
              />
              <ErrorMessage name="staffId" component={InputTextErrorMsgs} />

              {/* Email */}
              <Field
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                name="email"
              />
              <ErrorMessage
                name="email"
                component={InputTextErrorMsgs}
              ></ErrorMessage>

              {/* Password */}
              <Field
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                name="password"
              />
              <ErrorMessage name="password" component={InputTextErrorMsgs} />

              {/* Confirm Password */}
              <Field
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component={InputTextErrorMsgs}
              />

              <div className="text-right"></div>
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
                Submit
              </button>
            </Form>
          </Formik>

          {/* Registration */}
          <p className="text-center mt-6 text-sm text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sign;
