import React, { useState } from "react";
import { useAuth } from "../../Context/Auth";
const NewDetails = () => {
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({
    kelagroupName: "",
    email: auth?.user?.email,
    contactNumber: "",
    currentPrice: "",
    image: null, // Added for image input
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0], // Use e.target.files[0] for file input
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can add further logic for form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-600 p-8 rounded shadow-md w-full max-w-md text-white">
        <h2 className="text-lg font-bold mb-4">New Details Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Kelagroup Name:
            </label>
            <input
              type="text"
              name="kelagroupName"
              value={formData.kelagroupName}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.contactNumber}
              onChange={handleChange}
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
              value={formData.currentPrice}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Upload Image:
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-800"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewDetails;
