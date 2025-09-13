import { useState } from "react";
import { Field, ErrorMessage } from "formik";

export const InputField = ({
  label = "",
  name = "",
  type = "text",
  placeholder = "",
  className = "",
  readOnly = false,
  colors = ["bg-primary", "bg-gray-400"],
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseClasses =
    "px-4 py-3 rounded-[20px] w-full theme-bg border placeholder:text-sm focus:outline-none";
  const readOnlyClasses =
    "bg-gray-900 opacity-90 cursor-not-allowed outline-none";

  // Determine input type
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className={`absolute -top-2 left-4 z-10 font-medium px-2 rounded-md text-[10px] lg:text-sm ${
            readOnly ? colors[1] : colors[0]
          } text-white`}
        >
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative">
        <Field
          as={type === "textarea" ? "textarea" : "input"}
          id={name}
          name={name}
          type={type !== "textarea" ? inputType : undefined}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`${baseClasses} ${readOnly ? readOnlyClasses : ""}`}
        />

        {/* Eye icon for password */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
          >
            {showPassword ? (
              // Eye open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              // Eye closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.06 10.06 0 012.181-3.434M6.22 6.22a10.05 10.05 0 015.78-2.22c4.478 0 8.268 2.943 9.542 7a10.06 10.06 0 01-1.44 3.024M3 3l18 18"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Error message */}
      <ErrorMessage
        name={name}
        component="span"
        className="text-red-500 text-xs"
      />
    </div>
  );
};
