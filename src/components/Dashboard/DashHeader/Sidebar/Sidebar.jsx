/* eslint-disable no-unused-vars */
import React from "react";
import { dashmenu } from "../../../../shared/constant/dash.menu";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

const navVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
  }),
};
const Sidebar = ({ openSidebar }) => {
  const location = useLocation();
  return (
    <aside
      className={` dark:bg-gray-800 theme-text p-2 space-y-4 transform transition-transform duration-300 
      ${
        openSidebar
          ? "translate-x-0 dark:bg-gray-800 theme-bg theme-text"
          : "-translate-x-full"
      } 
      md:translate-x-0 md:static fixed left-0 z-20
      max-h-screen`}
    >
      <nav className="space-y-3 h-[76vh] py-4 overflow-y-auto">
        {dashmenu.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              whileHover={{
                scale: 1.05,
                x: 5,
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-3 rounded  cursor-pointer tracking-wide
                
                ${
                  isActive
                    ? " dark:text-yellow-500 text-yellow-800 font-semibold"
                    : "theme-text"
                }`}
            >
              <Link to={item.link} className="flex items-center w-full">
                <i className={`${item.icon} mr-2`}></i>
                {item.title}
              </Link>
            </motion.div>
          );
        })}
      </nav>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={navVariants}
        whileHover={{
          scale: 1.05,
          x: 2,
        }}
        whileTap={{ scale: 0.95 }}
        className={` flex items-center gap-3 h-12 px-2 py-3  cursor-pointer tracking-wide rounded-md shadow-yellow-100 shadow-sm theme-text"
        }`}
      >
        Settings
        <FaGear />
      </motion.div>
    </aside>
  );
};

export default Sidebar;
