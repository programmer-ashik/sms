"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Fake user for example
  const user = {
    name: "Ashik Hasan",
    role: "Admin",
    avatar: null, // set a URL if available
  };

  return (
    <div className="relative">
      {/* Avatar / Login Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full hover:bg-gray-100 transition cursor-pointer theme-bg p-1"
      >
        {user ? (
          user.avatar ? (
            <img
              src={user.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full border"
            />
          ) : (
            <FaUserCircle className="w-8 h-8 theme-bg theme-text" />
          )
        ) : (
          <span className="px-3 py-1 bg-blue-600 rounded-md text-sm">
            Login
          </span>
        )}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 hover:bg-gray-600 theme-bg theme-text shadow-lg rounded-lg overflow-hidden z-50"
          >
            {user ? (
              <>
                <div className="px-4 py-3 border-b cursor-pointer">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs theme-bg theme-text">
                    Role: {user.role}
                  </p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-600 theme-bg theme-text cursor-pointer">
                  LogOut
                </button>
              </>
            ) : (
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-600 theme-bg theme-text cursor-pointer">
                Login
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
