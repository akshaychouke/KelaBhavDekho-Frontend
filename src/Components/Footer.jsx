// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 bottom-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Kela Bhav Dekho</h3>
            <p className="text-sm">Providing quality services since 2024</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">1234 Main St, City, Country</p>
            <p className="text-sm">info@example.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="text-sm hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="text-sm hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
