import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  setFilter,
  clearFilters,
  setView,
} from "../../../../store/students/studentSlice";
import { IoGrid, IoList, IoClose } from "react-icons/io5";

const QueryController = ({ semesterOptions = [] }) => {
  const dispatch = useDispatch();
  const { searchQuery, filters, view } = useSelector((state) => state.controls);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ name, value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handleRemoveFilter = (filterName) => {
    dispatch(setFilter({ name: filterName, value: "" }));
  };

  const activeFilters = Object.entries(filters).filter(
    ([key, value]) => value !== ""
  );

  return (
    <div className=" theme-bg theme-text shadow-md p-2 rounded-md flex flex-col justify-between items-center gap-4 mb-4 w-full sm:h-32">
      <div className=" w-full flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by name, roll, division..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 outline-0 rounded-md text-sm shadow-inner theme-text theme-bg w-full md:w-64 dark:outline-1 "
          />
          <select
            name="semester"
            onChange={handleFilterChange}
            value={filters.semester}
            className="p-2 outline-0 rounded-md text-sm shadow-inner theme-bg theme-text dark:outline-1"
          >
            <option value="">Select Semester</option>
            {semesterOptions.map((sem) => (
              <option key={sem} value={sem.split(" ")[1]}>
                {sem}
              </option>
            ))}
          </select>
          <select
            name="division"
            onChange={handleFilterChange}
            value={filters.division}
            className="p-2 outline-0 rounded-md text-sm shadow-inner theme-bg theme-text dark:outline-1"
          >
            <option value="">Select Division</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
          </select>
          <select
            name="paymentStatus"
            onChange={handleFilterChange}
            value={filters.paymentStatus}
            className="p-2 outline-0 rounded-md text-sm shadow-inner theme-bg theme-text dark:outline-1"
          >
            <option value="">Paid/Non-paid</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Non-paid</option>
          </select>
          {/* <button
            onClick={handleClearFilters}
            className=" hidden sm:block sm:flex-1 border-2 p-2 outline-0 rounded-md text-sm shadow-inner theme-bg theme-text dark:outline-1"
          >
            Clear All
          </button> */}
        </div>

        <div className="flex justify-between items-center w-full gap-2 text-2xl text-gray-600">
          <button
            onClick={handleClearFilters}
            className=" flex-shrink-0 p-2 outline-0 rounded-md text-sm shadow-inner theme-bg theme-text dark:outline-1"
          >
            Clear All
          </button>
          <div className="w-full flex justify-end items-center">
            <button
              onClick={() => dispatch(setView("grid"))}
              className={`p-1 rounded-md ${
                view === "grid"
                  ? "p-2 outline-0 rounded-md shadow-inner theme-bg theme-text border-1"
                  : "shadow-inner theme-bg theme-text p-2"
              }`}
            >
              <IoGrid />
            </button>
            <button
              onClick={() => dispatch(setView("list"))}
              className={`p-1 rounded-md ${
                view === "list"
                  ? "p-2 outline-0 rounded-md shadow-inner theme-bg theme-text border-1"
                  : "shadow-inner theme-bg theme-text p-2"
              }`}
            >
              <IoList />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-center rounded-md">
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map(([key, value]) => (
              <span
                key={key}
                className="flex items-center gap-1 p-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                <span className="capitalize">{key}:</span>
                <span className="font-semibold">{value}</span>
                <button
                  onClick={() => handleRemoveFilter(key)}
                  className="p-1 rounded-full text-blue-500 hover:bg-blue-200 focus:outline-none"
                >
                  <IoClose size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryController;
