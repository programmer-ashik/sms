import React from "react";
import Icon from "../../../shared/Components/Iocn/Icon";
import { Icons } from "../../../shared/constant/icon.constant";
import CircleChart from "../../../shared/Components/chart/CircleChart";
import { motion } from "framer-motion";
import ClassCard from "../../../components/Dashboard/Classes/ClassCard";
const AllClasses = () => {
  const data = { className: "Bangla", studentCount: "1" };
  return (
    <div className=" w-full h-full flex flex-col sm:flex-row justify-start items-center gap-4">
      <ClassCard />
      <div className="w-[200px] border-2 border-dashed border-primary rounded-md h-32 flex justify-center items-center mt-4">
        <div className="w-28 h-24 rounded-md border-2 flex justify-center items-center p-2">
          <Icon icon={Icons.add} /> Add Class
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
