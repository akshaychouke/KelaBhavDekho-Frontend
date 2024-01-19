// MainPage.js
import React, { useState } from "react";
import Slider from "../Components/Slider";

const carsData = [
  {
    id: 1,
    name: "Car A",
    price: "$30,000",
    imageSrc:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Lamborghini-Urus-251120221630.jpg&w=373&h=245&q=75&c=1", // Replace with your image source
  },
  {
    id: 2,
    name: "Car B",
    price: "$40,000",
    imageSrc:
      "https://www.financialexpress.com/wp-content/uploads/2023/01/Fronx1.jpg", // Replace with your image source
  },
  {
    id: 1,
    name: "Car A",
    price: "$30,000",
    imageSrc:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Lamborghini-Urus-251120221630.jpg&w=373&h=245&q=75&c=1", // Replace with your image source
  },
  {
    id: 2,
    name: "Car B",
    price: "$40,000",
    imageSrc:
      "https://www.financialexpress.com/wp-content/uploads/2023/01/Fronx1.jpg", // Replace with your image source
  },
  {
    id: 1,
    name: "Car A",
    price: "$30,000",
    imageSrc:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Lamborghini-Urus-251120221630.jpg&w=373&h=245&q=75&c=1", // Replace with your image source
  },
  {
    id: 2,
    name: "Car B",
    price: "$40,000",
    imageSrc:
      "https://www.financialexpress.com/wp-content/uploads/2023/01/Fronx1.jpg", // Replace with your image source
  },
  {
    id: 1,
    name: "Car A",
    price: "$30,000",
    imageSrc:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Lamborghini-Urus-251120221630.jpg&w=373&h=245&q=75&c=1", // Replace with your image source
  },
  {
    id: 2,
    name: "Car B",
    price: "$40,000",
    imageSrc:
      "https://www.financialexpress.com/wp-content/uploads/2023/01/Fronx1.jpg", // Replace with your image source
  },
  // Add more cars as needed
];

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-gray-800 text-white min-h-screen">
        <div className="container mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Cars</h2>
            <div className="relative w-1/4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute top-2 right-3 text-gray-400">
                {/* You can add a search icon here */}
                🔍
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div key={car.id} className="bg-gray-700 p-4 rounded-md">
                <img
                  src={car.imageSrc}
                  alt={car.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-300">{car.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
