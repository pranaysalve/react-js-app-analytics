import React from "react";

export const CardLG = ({ childComponent, title, width, height }) => {
  return (
    <div
      className={`w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md mb-4`}
    >
      <h5 className="mb-2 px-4 text-md font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>
      {childComponent}
    </div>
  );
};
