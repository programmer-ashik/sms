import React from "react";
import { FaSyncAlt } from "react-icons/fa"; // Update icon
import Icon from "../Iocn/Icon";

const Button = ({ children, className, isSubmitting, icon, ...props }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting} // disable button when submitting
      className={` ${className}
        h-full border-[1px]
        flex items-center justify-center gap-2 font-bold
        transition-all duration-300 cursor-pointer
        hover:opacity-90 hover:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-gray-500
        ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
      `}
      {...props}
    >
      {isSubmitting ? (
        <FaSyncAlt className="animate-spin text-white" />
      ) : (
        <Icon icon={icon} />
      )}
      {children}
    </button>
  );
};

export default Button;
