import React from "react";

const PageHeader = ({ title, discriptions }) => {
  return (
    <div className="text-center py-12 rounded-md shadow-[0_0px_0px_0px_rgba(0,0,0,0.1),0_4px_8px_8px_rgba(0,0,0,0.06)]">
      <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-lg text-green-900 mx-auto">{discriptions}</p>
    </div>
  );
};

export default PageHeader;
