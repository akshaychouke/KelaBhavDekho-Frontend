import React, { useState } from "react";
import EditDetails from "./CRUD/EditDetails";
import NewDetails from "./CRUD/NewDetails";
import DeleteDetails from "./CRUD/DeleteDetails";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("edit"); // 'edit', 'new', 'delete'

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-2/5 p-4 flex justify-center items-center">
        {/* <div className="mb-4 text-lg font-bold">Options</div> */}
        <ul className="flex-1 flex flex-col w-full ml-10">
          <li className="mb-2">
            <button
              className={`w-full bg-green-500 text-white py-2 px-4 rounded ${
                activeOption === "new" ? "bg-opacity-50" : ""
              }`}
              onClick={() => handleOptionClick("new")}
            >
              New Details
            </button>
          </li>
          <li className="mb-2">
            <button
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded ${
                activeOption === "edit" ? "bg-opacity-50" : ""
              }`}
              onClick={() => handleOptionClick("edit")}
            >
              Edit Details
            </button>
          </li>
          <li>
            <button
              className={`w-full bg-red-500 text-white py-2 px-4 rounded ${
                activeOption === "delete" ? "bg-opacity-50" : ""
              }`}
              onClick={() => handleOptionClick("delete")}
            >
              Delete Details
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        {activeOption === "edit" && <EditDetails />}
        {activeOption === "new" && <NewDetails />}
        {activeOption === "delete" && <DeleteDetails />}
      </div>
    </div>
  );
};

export default Sidebar;
