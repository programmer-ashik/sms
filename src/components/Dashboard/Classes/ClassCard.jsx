import { motion } from "framer-motion";
import Icon from "../../../shared/Components/Iocn/Icon";
import CircleChart from "../../../shared/Components/chart/CircleChart";
import { Icons } from "../../../shared/constant/icon.constant";

function ClassCard({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
      className="w-[50%] h-full sm:w-[300px] px-4 py-3 rounded-md shadow-md shadow-blue-400 bg-white"
    >
      {/* 1st row */}
      <div className="flex justify-between items-center">
        <p className="font-medium">{data?.className || "Bangla"}</p>
        <div className="flex justify-end items-center gap-2">
          <motion.div whileTap={{ scale: 0.8 }}>
            <Icon
              icon={Icons.delete}
              className="text-red-500 bg-gray-200 p-1 text-2xl rounded-md cursor-pointer"
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }}>
            <Icon
              icon={Icons.edit}
              className="text-gray-700 bg-gray-200 p-1 text-2xl rounded-md cursor-pointer"
            />
          </motion.div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex justify-start items-baseline">
          <h1 className="text-[40px] font-semibold leading-none">
            {data?.studentCount || 0}
          </h1>
          <p className="ml-1">Students</p>
        </div>
        <Icon icon={Icons.cap} className="text-[40px] text-blue-500" />
      </div>

      {/* Charts */}
      <div className="w-full h-full flex flex-wrap justify-evenly items-center gap-3 mt-3">
        <CircleChart label="Boys" />
        <CircleChart label="Girls" />
        <CircleChart />
      </div>
    </motion.div>
  );
}

export default ClassCard;
