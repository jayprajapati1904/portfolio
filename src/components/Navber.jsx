import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-3 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="ml-2 text-2xl sm:text-xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 shadow-md">
          Jay <span className="text-yellow-400">Prajapati</span>
        </h1>

        {/* Links for Large Screens */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="hover:text-purple-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-400 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-400 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="mr-2 md:hidden flex items-center justify-center w-8 h-8 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full shadow-md transition duration-300 ease-in-out"
          onClick={toggleDrawer}
          aria-label="Toggle Navigation"
        >
          <span className="text-xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <span className="text-white text-lg md:text-xl font-bold">Menu</span>
        }
        placement="right"
        width="75%"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        bodyStyle={{
          padding: 0,
          background: "linear-gradient(to right, #7e5bef, #46a8f9)",
        }}
        headerStyle={{
          background: "linear-gradient(to right, #7e5bef, #46a8f9)",
        }}
        className="custom-drawer"
      >
        <div className="p-3">
          <Link
            to="/"
            className="block py-2 px-3 text-base md:text-lg text-white hover:bg-blue-600 hover:shadow-lg rounded-md transition duration-200 ease-in-out"
            onClick={toggleDrawer}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="block py-2 px-3 text-base md:text-lg text-white hover:bg-blue-600 hover:shadow-lg rounded-md transition duration-200 ease-in-out"
            onClick={toggleDrawer}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="block py-2 px-3 text-base md:text-lg text-white hover:bg-blue-600 hover:shadow-lg rounded-md transition duration-200 ease-in-out"
            onClick={toggleDrawer}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-3 text-base md:text-lg text-white hover:bg-blue-600 hover:shadow-lg rounded-md transition duration-200 ease-in-out"
            onClick={toggleDrawer}
          >
            Contact
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
