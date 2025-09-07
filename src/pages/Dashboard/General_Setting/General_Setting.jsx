import React from "react";
import { Outlet } from "react-router-dom";
import RouteHeader from "../../../shared/Components/RouteHeader/RouteHeader";

const General_Setting = () => {
  return (
    <div className="p-4">
      <RouteHeader />
      <Outlet />
    </div>
  );
};

export default General_Setting;
