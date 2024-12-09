"use client";

import { useState } from "react";
import { Search, ShoppingCart, CircleUserRound, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className= "w-full bg-white">

      <div className="flex justify-center">
        <div className="w-[1386px] h-[66px] drop-shadow-sm bg-white flex justify-between items-center px-4">

          <div className="flex items-center">
            <Search className="w-4 h-4 text-gray-600 cursor-pointer" />
          </div>

          <h1 className="text-[24px] text-black text-center">Avion</h1>

          <div className="flex items-center space-x-4">
            <ShoppingCart className="w-4 h-4 text-gray-600 hidden md:block" />
            <CircleUserRound className="w-4 h-4 text-gray-600 hidden md:block" />

            <button onClick={toggleMenu} className="block md:hidden">
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[66px] flex justify-center items-center">
        <div
          className={`w-full md:w-[675px] text-[#726E8D] ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-0">
            <li className="hover:text-gray-800 cursor-pointer">Plant pots</li>
            <li className="hover:text-gray-800 cursor-pointer">Ceramics</li>
            <li className="hover:text-gray-800 cursor-pointer">Tables</li>
            <li className="hover:text-gray-800 cursor-pointer">Chairs</li>
            <li className="hover:text-gray-800 cursor-pointer">Crockery</li>
            <li className="hover:text-gray-800 cursor-pointer">Tableware</li>
            <li className="hover:text-gray-800 cursor-pointer">Cutlery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
