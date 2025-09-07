import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import * as Yup from "yup";
export default function LoginForm() {
  const loginSchemaValidations = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
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
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchemaValidations}
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
              <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
              {/* Email */}
              <div className="mb-4">
                <label>Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
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
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Login
              </button>

              {/* Social Media Login */}
              <div className="mt-6 text-center">
                <p className="text-gray-500">Or login with</p>
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
                if you are't Register go for
                <span className=" mx-2">
                  <Link to={"/registration"} className=" text-purple-600">
                    SignUp
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
