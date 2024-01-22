// MainPage.js
import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import { SERVER_URL } from "../Services/api";
import axios from "axios";
import { useAuth } from "../Context/Auth";
import { useNavigate, useLocation } from "react-router-dom";
const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [kelaGroups, setKelaGroups] = useState([]);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const getKelaGroups = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}api/details/kelagroups`);
      setKelaGroups(response.data.kelagroups); // Assuming response.data is an array of Kela Groups
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (auth.user === null) {
      navigate("/login");
    }
    getKelaGroups();
  }, []);

  const filteredKelaGroups = kelaGroups?.filter((group) =>
    group?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-gray-800 text-white min-h-screen">
        <div className="container mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Kela Groups</h2>
            <div className="relative w-1/4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute top-2 right-3 text-gray-400">🔍</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKelaGroups?.map((group) => (
              <div key={group._id} className="bg-gray-700 p-4 rounded-md">
                {/* Assuming group.imageSrc, group.name, and group.price exist */}
                <img
                  src={group.imageURL}
                  alt={group.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                <p className="text-gray-300">&#8377; {group.currentPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
