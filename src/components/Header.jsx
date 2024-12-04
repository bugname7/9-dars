import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="bg-blue-50">
        <header className="container-[1200px] w-[1200px] mx-auto px-20 flex items-center justify-between p-5">
          <div className="logo">
            <Link
              to="/"
              className="bg-blue-500 px-4 font-medium py-1 text-3xl text-white text-opacity-80 rounded-lg"
            >
              C
            </Link>
          </div>
          <nav className="flex items-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black hover:bg-gray-200 focus:bg-black focus:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black hover:bg-gray-200 focus:bg-black focus:text-white"
            >
              About
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black hover:bg-gray-200 focus:bg-black focus:text-white"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black hover:bg-gray-200 focus:bg-black focus:text-white"
            >
              Cart
            </Link>
          </nav>
          <div className="flex justify-between alo">
            <div>
              <i className="fas fa-moon text-black hover:text-gray-500 hover:bg-gray-300 p-2 rounded-full ease-linear cursor-pointer"></i>
            </div>

            <Link to="/cart">
              <i className="fas fa-shopping-cart text-black hover:text-gray-500 hover:bg-gray-300 p-2 cursor-pointer rounded-full ease-linear"></i>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
