// import React from "react";

const Searchbar = () => {
  return (
    <div className="grid md:grid-cols-1 p-4 md:px-96">
      <form>
        <div className="relative">
          <input
            type="text"
            className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Company"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5  focus:outline-none  px-4 py-2 "
          >
            <svg
              className="w-5 h-5 text-gray-700 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
