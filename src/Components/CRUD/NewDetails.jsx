import React, { useState } from "react";
import { useAuth } from "../../Context/Auth";
import { SERVER_URL } from "../../Services/api";
import axios from "axios";
import { toast } from "react-toastify";
const NewDetails = () => {
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({
    kelagroupName: auth?.user?.name,
    email: auth?.user?.email,
    contactNumber: "",
    currentPrice: "",
    owner: auth?.user?._id,
    image: null, // Added for image input
  });

  const handleChange = (e) => {
    if (e.target.type == "file") {
      setFormData({
        ...formData,
        image: e.target.files[0], // Use e.target.files[0] for file input
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here'
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("kelagroupName", formData.kelagroupName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contactNumber", formData.contactNumber);
    formDataToSend.append("currentPrice", formData.currentPrice);
    formDataToSend.append("owner", formData.owner);
    formDataToSend.append("image", formData.image);
    try {
      console.log("Form submitted:", formData, config);
      const response = await axios.post(
        `${SERVER_URL}api/details/upload`,
        formDataToSend
      );
      toast.success("Details Uploaded Successfully");
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
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
              disabled
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
              disabled
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
              type="number"
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
