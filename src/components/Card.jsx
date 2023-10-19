import React from "react";

export const CardLG = ({ childComponent, title, width, height }) => {
  return (
    <div
      className={`w-${width} h-full p-1 bg-white border border-gray-200 rounded-lg shadow `}
    >
      <h5 className="mb-2 px-4 text-md font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>
      {childComponent}
    </div>
  );
};
