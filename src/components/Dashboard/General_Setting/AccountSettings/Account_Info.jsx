import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../../../../shared/constant/icon.constant";
import Button from "../../../../shared/Components/Button/Button";
import Icon from "../../../../shared/Components/Iocn/Icon";

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.42, 0, 0.58, 0.9] },
  }),
};

const Account_Info = ({ values }) => {
  const rows = [
    { label: "Username", value: values.email || "ashikhasan998@gmail.com" },
    { label: "Password", value: values.password || "***********" },
    {
      label: "Subscription",
      value: values?.subscription,
      badge: true,
      badgeClass: "px-3 py-1 bg-green-500 text-white rounded-xl text-[12px]",
    },
    { label: "Expiry", value: values?.expiry || "Never" },
  ];

  return (
    <div className="space-y-2 h-full py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl p-4">
      <p className=" flex justify-center items-center gap-3 font-bold text-xl tracking-wider  text-white">
        {" "}
        <span className=" text-xl font-bold">
          <Icon icon={Icons.lock} />
        </span>
        Account details
      </p>
      <div className="w-full flex flex-col justify-center items-center">
        {rows.map((row, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={rowVariants}
            className="md:w-[410px]"
          >
            <div className="flex justify-between gap-2 w-full">
              <div className="flex justify-end w-1/2">
                <p className=" text-gray-500">{row.label}:</p>
              </div>
              <div className="flex justify-start w-1/2">
                {row.badge ? (
                  <span className={row.badgeClass}>{row.value || "FREE"}</span>
                ) : (
                  <span
                    className={
                      row.label === "Username" ? "text-white" : " text-gray-300"
                    }
                  >
                    {row.value}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Button
          type="submit"
          icon={Icons.delete}
          className={"rounded-full bg-red-500 border-none text-white mt-4"}
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export default Account_Info;
