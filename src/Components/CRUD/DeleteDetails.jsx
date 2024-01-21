import React, { useState } from "react";

const DeleteDetails = () => {
  // Dummy data for the table
  const initialData = [
    { id: 1, categoryName: "Category 1" },
    { id: 2, categoryName: "Category 2" },
    { id: 3, categoryName: "Category 3" },
  ];

  const [tableData, setTableData] = useState(initialData);

  const handleDelete = (id) => {
    // Logic to delete the item with the given id
    const updatedData = tableData.filter((item) => item.id !== id);
    setTableData(updatedData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-red-500 p-8 rounded shadow-md w-full max-w-md text-white">
        <h2 className="text-lg font-bold mb-4">Delete Details Table</h2>
        {tableData.length === 0 ? (
          <p className="text-white">No category to delete</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="py-2 px-4 border">Serial Number</th>
                <th className="py-2 px-4 border">Category Name</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "bg-red-600" : "bg-red-500"}
                >
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{item.categoryName}</td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-white text-red-500 px-3 py-1 rounded hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DeleteDetails;
