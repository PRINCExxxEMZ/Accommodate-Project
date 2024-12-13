import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#162029] p-5 fixed z-50 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white w-[300px]">
          <span className="font-semibold text-xl tracking-tight"><Link to='/admin'>Accommodate</Link></span>
        </div>

        {/* Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow text-center lg:text-left">
           <Link to='/admin' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0BA75A] mx-4">
             Home</Link> 
           <Link to='/adminhostel' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0BA75A] mx-4">
            Hostel</Link> 
           <Link to='/studentoverview' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0BA75A] mx-4">
            Student Overview</Link> 
           {/* <Link to='/adminpayment' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0BA75A] mx-4">
           Payment</Link> */}
          </div>

          {/* CTA Button */}
          <div className="text-center space-x-5 lg:text-right mt-4 lg:mt-0">
            <Link to='/register' className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-[#1d623f]">
            Sign up  </Link> 
            <Link to='/login' className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-[#1d623f]">
            Login   </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
