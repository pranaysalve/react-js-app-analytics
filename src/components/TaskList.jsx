import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
const TaskList = ({ tasks, onDelete, onEdit }) => {
  console.log("stored", tasks);
  return (
    <>
      {tasks && (
        <div className="relative overflow-x-auto">
          <table className="flex flex-col w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Task
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {task.taskName}
                  </th>
                  <td className="px-6 py-4"> {task.taskDescription}</td>
                  <td className="px-6 py-4">
                    {moment(task.dueDate, "YYYY-MM-DD").format("DD/MMM/YY")}
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    <div className="inline-flex mx-2 items-center text-base font-semibold text-gray-900 dark:text-white">
                      <button
                        className="px-3 py-2 mx-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => onEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-2 mx-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        onClick={() => onDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
export default TaskList;
