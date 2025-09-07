/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const CountCard = ({ className, title, count, icon }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`w-full mx-auto flex flex-col justify-center items-center rounded-2xl shadow p-4 py-4 space-y-2 cursor-pointer ${className}`}
    >
      <p className=" text-3xl">{icon}</p>
      <h2 className="text-sm">{title}</h2>
      <p className="text-2xl font-bold">{count}</p>
    </motion.div>
  );
};

export default CountCard;
