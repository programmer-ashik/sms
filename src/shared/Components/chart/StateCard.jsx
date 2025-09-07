/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

// Example chart data
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

// Stat data
const dataItems = [
  { label: "Total Students", value: 10000, color: "text-blue-600" },
  { label: "Present", value: 123, color: "text-green-600" },
  { label: "Absent", value: 345, color: "text-red-600" },
];

// ✅ Reusable Card Component
function StatCard({ label, value, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="
      flex justify-center items-center
          bg-gray-200 hover:shadow-md text-sm shadow-inner rounded-xl p-4  w-full sm:w-56"
    >
      <div className="flex flex-col items-center">
        <p className="text-2xl py-1">
          <FaGraduationCap />
        </p>
        <p className="text-sm text-gray-500">{label}</p>
        <p className={`text-xl font-bold ${color}`}>{value}</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={30} height={40}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={40}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

// ✅ Main Flex Component
export default function OverviewFlex() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {dataItems.map((item, index) => (
        <StatCard
          key={index}
          label={item.label}
          value={item.value}
          color={item.color}
          index={index}
        />
      ))}
    </div>
  );
}
