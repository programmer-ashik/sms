import React from "react";
import RouteHeader from "../../../shared/Components/RouteHeader/RouteHeader";
import { Outlet } from "react-router-dom";

const Employees = () => {
  return (
    <div className="p-4">
      <RouteHeader />
      <Outlet />
    </div>
  );
};

export default Employees;
