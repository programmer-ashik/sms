import { motion } from "framer-motion";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import AddNewStudentModal from "./Modal/studentModal/AddNewStudentModal";

const ListHeader = ({ stats }) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const formattedPath = pathParts.join(" / ");
  const [addStudent, setAddStudent] = useState(false);
  return (
    <>
      {addStudent && (
        <AddNewStudentModal open={addStudent} setAddStudent={setAddStudent} />
      )}
      <div className="flex md:flex-row justify-between items-start md:items-center gap-4 p-4 theme-bg rounded-lg shadow-md mb-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl md:text-2xl font-bold theme-text capitalize">
            {pathParts[pathParts.length - 1]} List
          </h1>
          <div className="flex items-center text-sm theme-text">
            <span className="capitalize">{formattedPath}</span>
            <IoArrowForwardOutline className="ml-2" />
          </div>
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-4 text-center   rounded-md px-3 py-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
        ></motion.div>
        {/* shadow-[0_15px_15px_rgba(0,0,0,0.25)] */}
        <motion.button
          className="flex items-center gap-2  dark:shadow-md dark:shadow-slate-300 border-1  rounded-md px-3 py-2 theme-bg  transition cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setAddStudent(true)}
        >
          <span className="text-lg font-bold">+</span>
          Add Student
        </motion.button>
      </div>
    </>
  );
};

export default ListHeader;
