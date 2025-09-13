import React from "react";
import RouteHeader from "../../../shared/Components/RouteHeader/RouteHeader";
import { Outlet } from "react-router-dom";

const Behaviour_Skills = () => {
  return (
    <div className="p-4">
      <RouteHeader />
      <Outlet />
    </div>
  );
};

export default Behaviour_Skills;
