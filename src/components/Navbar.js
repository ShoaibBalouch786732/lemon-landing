

import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-background: #FFFFFF;
    p-4 flex justify-between items-center w-[92%] mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-semibold flex items-center ">
          <a href="/">
            <img
              src="https://lemonwares.com/wp-content/uploads/2020/11/Lemon-Wares-Main-Logo-1500px-wide.png"
              alt="LemonWares"
              width={100}
              height={800}
              srcSet="https://lemonwares.com/wp-content/uploads/2020/11/Lemon-Wares-Main-Logo-1500px-wide.png 2x"
              className="jet-logo__img w-48 h-32"
            />
          </a>
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-${
            menuOpen ? '9%' : '-100%'
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center space-x-4 gap-20">
            <li className="group relative ml-4">
              <a
                href="/services"
                className="text-black  hover:text-red-400"
              >
                Our Services
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="group relative  ml-4 mb-3  ">
              <a href="/services" className="text-black  hover:text-red-400">
                About
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="group relative ml-4 mb-3">
              <a href="/services" className="text-black  hover:text-red-400">
                Blog & News
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="group relative ml-4  mb-3">
              <a href="/services" className="text-black  hover:text-red-400">
                Contact
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="group relative">
              <a href="/services" className="text-black  hover:text-red-400">
                Account
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="group relative flex items-center">
              <a href="/services" className="text-black hover:text-red-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 ml-2 fill-red-400 mx-2"
                >
                  <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                </svg>
                <span>+2349067322844</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-600 hover:text-black focus:text-black focus:outline-none "
            >
              {menuOpen ? (
                <ion-icon name="menu-outline"></ion-icon>
              ) : (
                <ion-icon name="close"></ion-icon>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar