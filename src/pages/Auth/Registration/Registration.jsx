import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import * as Yup from "yup";
export default function Registration() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters"),

    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters"),

    email: Yup.string()
      .email("Invalid email format")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    gender: Yup.string()
      .oneOf(["male", "female", "other"], "Select a valid gender")
      .required("Gender is required"),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Google auth logic here
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    // Facebook auth logic here
  };

  return (
    <div className="min-h-screen w-full bg-[#fafafa] relative text-gray-900">
      {/* Diagonal Grid with Light */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={true} // ✅ validate every change
          validateOnBlur={true} // ✅ validate when leaving field
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
            >
              {console.log(formik)}
              <h2 className="text-2xl font-bold mb-6 text-center">
                Create an Account
              </h2>

              {/* First Name */}
              <div className="flex justify-between items-center gap-3">
                <div className="mb-4">
                  <label>First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label>Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label>Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4 relative">
                <label className="block mb-1">Password</label>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Eye Icon Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-10 right-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEye className=" text-blue-700" />
                  ) : (
                    <FaEyeSlash />
                  )}
                </button>
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="block mb-1 text-gray-600">Gender</label>
                <Field
                  name="gender"
                  as="select"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Register
              </button>

              {/* Social Media Login */}
              <div className="mt-6 text-center">
                <p className="text-gray-500">Or register with</p>
                <div className="flex justify-center gap-4 mt-3">
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <FcGoogle size={20} /> Google
                  </button>
                  <button
                    type="button"
                    onClick={handleFacebookLogin}
                    className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <FaFacebook size={20} className="text-blue-600" /> Facebook
                  </button>
                </div>
              </div>
              <p className=" pt-4 text-center">
                if you are already Register go to
                <span className=" mx-2">
                  <Link to={"/login"} className=" text-purple-600">
                    SignIn
                  </Link>
                </span>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
