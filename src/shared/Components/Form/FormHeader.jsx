import React from "react";
import { motion } from "framer-motion";
const FormHeader = ({
  title,
  options = ["Required", "Optional"],
  color = ["required", "border-gray-800"],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col justify-center items-center p-4"
    >
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="flex justify-center items-center gap-4">
        {options.map((option, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-4 h-1 rounded-full ${
                index % 2 === 0
                  ? `${color[0]} border-3`
                  : ` border-3 ${color[1]}`
              }`}
            ></div>
            <p>{option}</p>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default FormHeader;
