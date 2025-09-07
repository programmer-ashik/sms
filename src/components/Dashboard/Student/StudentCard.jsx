import React from "react";
import image from "../../../assets/o.jpeg";
import { motion } from "framer-motion";
const StudentCard = ({ student }) => {
  return (
    <motion.div
      className=" rounded-lg shadow-lg
    flex flex-col justify-between gap-0 h-[180px] px-2 cursor-pointer
    "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className={`top h-2/5 w-full rounded-t-md flex justify-between`}>
        <div className="relative w-1/2">
          <img
            src={image}
            className=" absolute top-4 left-4 h-[78px] w-[78px] flex justify-center items-center rounded-full
           p-1 bg-linear-to-t from-purple-500 to-yellow-600
            before:content-[''] before:absolute before:inset-0
            before:-m-1 before:rounded-lg
            before:bg-gradient-to-r before:from-indigo-500 before:to-sky-500
            before:-z-10
                  "
          />
        </div>

        <div className=" w-1/2 flex flex-col items-center py-3">
          <h1 className=" justify-center text-md font-bold theme-text">
            School Name
          </h1>
          <h1 className=" text-xl font-bold theme-text">Student ID Card</h1>
        </div>
      </div>
      <div className=" w-full h-3/5 my-3">
        <div className=" w-full rounded-lg py-3 flex justify-between">
          <div className="flex flex-col items-start gap-2 w-1/2">
            <h3 className="text-md font-bold mb-1">
              <strong className=" text-sm">Name:</strong> {student.firstName}{" "}
              {student.lastName}
            </h3>
            <p>
              <strong className=" text-sm">Student ID:</strong>{" "}
              {student.studentId}
            </p>
          </div>
          <div className=" flex flex-col items-end gap-2 w-1/2">
            <p>
              <strong className=" text-sm">Division:</strong> {student.division}
            </p>
            <p>
              <strong className=" text-sm">DOB:</strong> {student.dob}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentCard;
