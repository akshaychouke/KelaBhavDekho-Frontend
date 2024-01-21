import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SERVER_URL } from "../Services/api";
import { useAuth } from "../Context/Auth";
const LoginPage = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth(); //custom hook
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}auth/login`, loginData);
      // console.log(response.data); // Assuming the server sends back meaningful data
      //saving the response in local storage
      localStorage.setItem("auth", JSON.stringify(response.data));
      toast.success("Login Successful");

      setAuth({
        ...auth,
        user: response.data.user,
        token: response.data.token,
      });

      if (response.data.user.role == "farmer") {
        navigate("/");
      }else if(response.data.user.role == "kela-group"){
        navigate("/kelagroupdashboard")
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error logging in:", error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-600 p-8 rounded shadow-md w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-900 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-gray-950"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-900 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-gray-950"
              placeholder="Your Password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
