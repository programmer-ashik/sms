import React from "react";
import { Icons } from "../../../shared/constant/icon.constant";
import Icon from "../../../shared/Components/Iocn/Icon";
import CircleChart from "../../../shared/Components/chart/CircleChart";
import { motion } from "framer-motion";
const SubjectsCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
      className=" w-[410px] flex flex-col justify-start items-start rounded-md shadow-md p-4 space-y-4 dark:border theme-text"
    >
      <div className=" w-full flex justify-between items-center">
        <h1 className=" font-semibold text-xl font-poppins">{"Bangla"}</h1>
        <Icon
          icon={Icons.edit}
          className=" text-zink-500 text-blue-500 rounded-md cursor-pointer"
        />
      </div>
      <div className="flex justify-between items-center gap-2 w-full">
        <div className="w-full flex gap-4">
          {/* 1st */}
          <div className="flex flex-col justify-start items-start">
            <h1 className=" font-semibold text-xl font-poppins">{"2"}</h1>
            <p className=" text-[10px] text-zinc-400 tracking-wider">
              TOTAL SUBJECTS
            </p>
          </div>
          {/* 2nd */}

          <div className="h-10 w-[1px] bg-slate-400"></div>

          <div className=" flex flex-col justify-start items-start">
            <h1 className=" font-semibold text-xl font-poppins">{"150"}</h1>
            <p className=" text-[10px] text-zinc-400 tracking-wider">
              TOTAL EXAM MARKS
            </p>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Icon
            icon={Icons.file}
            className=" text-zink-500 text-blue-500 rounded-md cursor-pointer text-4xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <CircleChart size={80} lable="Chymistry" />
        <CircleChart size={80} lable="Math" />
        <CircleChart size={80} lable="Physic" />
      </div>
    </motion.div>
  );
};

export default SubjectsCards;
