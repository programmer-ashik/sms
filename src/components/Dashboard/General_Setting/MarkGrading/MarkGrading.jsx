import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormHeader from "../../../../shared/Components/Form/FormHeader";
import Button from "../../../../shared/Components/Button/Button";
import { Icons } from "../../../../shared/constant/icon.constant";
import MarkGradingForm from "./MarkGradingForm";
import FailCriteriaForm from "./FailCriteriaForm";

const tabs = [
  { id: "marksGrading", name: "Marks Grading" },
  { id: "failCriteria", name: "Fail Criteria" },
];

export default function MarkGrading() {
  const [activeTab, setActiveTab] = useState("marksGrading");

  return (
    <div className="w-full lg:w-3/5 mx-auto">
      {/* Tab Buttons */}
      <div className="flex mb-6 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 ${
              activeTab === tab.id ? " theme-text" : " theme-text"
            }`}
          >
            {tab.name}
            {/* Animated underline */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-1/2 w-full h-1 bg-indigo-600 transform -translate-x-1/2"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 shadow-md rounded-lg min-h-[200px]">
        <AnimatePresence mode="wait">
          {activeTab === "marksGrading" && (
            <motion.div
              key="marksGrading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <FormHeader
                title={"Customize Grading"}
                color={["border-[#7F60E4]", "border-gray-500"]}
                options={["Required", "Optional"]}
              />
              <MarkGradingForm />
            </motion.div>
          )}

          {activeTab === "failCriteria" && (
            <motion.form
              key="failCriteria"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <FailCriteriaForm />
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
