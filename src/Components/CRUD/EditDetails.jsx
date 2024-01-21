import React from "react";

const EditDetails = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-600 p-8 rounded shadow-md w-full max-w-md text-white">
        <h2 className="text-lg font-bold mb-4">Edit Details Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Kelagroup Name:
            </label>
            <input
              type="text"
              name="kelagroupName"
              // Add value and onChange as needed
              className="w-full p-2 border rounded text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email:</label>
            <input
              type="email"
              name="email"
              // Add value and onChange as needed
              className="w-full p-2 border rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Contact Number:
            </label>
            <input
              type="tel"
              name="contactNumber"
              // Add value and onChange as needed
              className="w-full p-2 border rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Current Price:
            </label>
            <input
              type="text"
              name="currentPrice"
              // Add value and onChange as needed
              className="w-full p-2 border rounded text-gray-800"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDetails;
