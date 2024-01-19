// Slider.js
import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const Slider = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl">
      <Glider
        className="glider-container overflow-hidden"
        draggable
        hasArrows
        hasDots
        slidesToShow={3}
      >
        <div className="glider-track">
          <div className="glider-slide p-4">
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-md">
              <span className="text-4xl text-gray-700 font-semibold">1</span>
            </div>
          </div>
          <div className="glider-slide p-4">
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-md">
              <span className="text-4xl text-gray-700 font-semibold">2</span>
            </div>
          </div>
          <div className="glider-slide p-4">
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-md">
              <span className="text-4xl text-gray-700 font-semibold">3</span>
            </div>
          </div>
          <div className="glider-slide p-4">
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-md">
              <span className="text-4xl text-gray-700 font-semibold">4</span>
            </div>
          </div>
          <div className="glider-slide p-4">
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-md">
              <span className="text-4xl text-gray-700 font-semibold">5</span>
            </div>
          </div>
        </div>
      </Glider>
    </div>
  );
};

export default Slider;
