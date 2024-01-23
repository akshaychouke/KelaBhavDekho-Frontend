import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../Services/api";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/Auth";
const DeleteDetails = () => {
  const [auth, setAuth] = useAuth();
  const [tableData, setTableData] = useState([]);

  const handleDelete = async (id) => {
    // Logic to delete the item with the given id
    const updatedData = tableData?.filter((item) => item._id !== id);
    setTableData(updatedData);
  };

  const getKelaGroups = async () => {
    try {
      // console.log("The autherization is ", auth);
      const userId = auth?.user?._id;
      const response = await axios.get(
        `${SERVER_URL}api/details/getcategories`,
        {
          params: {userId},
        }
      );
      console.log(response?.data?.kelagroups);
      setTableData(response?.data?.kelagroups);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getKelaGroups();
  }, []);

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
                <th className="py-2 px-4 border">Category Price</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((item, index) => (
                <tr
                  key={item._id}
                  className={index % 2 === 0 ? "bg-red-600" : "bg-red-500"}
                >
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.currentPrice}</td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => handleDelete(item._id)}
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
