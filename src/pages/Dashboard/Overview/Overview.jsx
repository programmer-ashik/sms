/* eslint-disable no-unused-vars */
import { FaGraduationCap } from "react-icons/fa";
import StudentChart from "../../../components/Dashboard/Overview/StudentChart";
import CountCard from "./CountCard";
import { motion } from "framer-motion";
export default function OverviewPage() {
  return (
    <div className="p-2 space-y-6 w-full theme-bg theme-text bg-red-500">
      <div className=" w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <motion.div
          className=" theme-bg theme-text sm:w-3/5 rounded-xl shadow p-6"
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <h2 className="text-lg font-semibold mb-4 theme-text">
            Weekly Attendance
          </h2>
          <StudentChart />
        </motion.div>
        <div className="sm:w-2/5 grid grid-cols-2 sm:grid-cols-2 gap-4">
          <CountCard
            title={"Total Student"}
            count={"12,000"}
            icon={<FaGraduationCap />}
            className={"text-green-500 bg-green-100"}
          />
          <CountCard
            title={"Present Student"}
            count={"12,000"}
            className={"text-purple-500 bg-purple-100"}
          />

          <CountCard
            title={"Total Boys"}
            count={"12,000"}
            className={"text-yellow-500 bg-yellow-100"}
          />
          <CountCard
            title={"Total Girls"}
            count={"12,000"}
            className={"text-blue-500 bg-blue-100"}
          />
        </div>
      </div>

      {/* Second Row of Cards */}
      <h1>Teacher State</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <CountCard
          title={"Total Teacher"}
          count={"50"}
          className={" theme-text dark:bg-gray-600 bg-gray-300"}
        />
        <CountCard
          title={"Present Teacher"}
          count={"12,000"}
          className={"theme-text dark:bg-gray-600 bg-gray-300"}
        />
        <CountCard
          title={"Present Physic Teacher"}
          count={"12,000"}
          className={"theme-text dark:bg-gray-600 bg-gray-300"}
        />
        <CountCard
          title={"Present Boylogy Teacher"}
          count={"12,000"}
          className={"theme-text dark:bg-gray-600 bg-gray-300"}
        />
      </div>
      {/* Top students */}
    </div>
  );
}
