'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent backdrop-filter backdrop-blur-lg shadow-md z-10">
      <h1 className="text-3xl font-bold text-white">Joker Club</h1>
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-white hover:text-yellow-300 transition">Home</Link>
        <Link href="/about" className="text-white hover:text-yellow-300 transition">About Us</Link>
        <Link href="/teams" className="text-white hover:text-yellow-300 transition">Our Teams</Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-white hover:text-yellow-300 transition">
            Servers
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 w-48 bg-gray-800 rounded-lg shadow-lg z-20">
              <Link href="/servers/server1" className="block px-4 py-2 text-white hover:bg-gray-700 transition">Server 1</Link>
              <Link href="/servers/server2" className="block px-4 py-2 text-white hover:bg-gray-700 transition">Server 2</Link>
              <Link href="/servers/server3" className="block px-4 py-2 text-white hover:bg-gray-700 transition">Server 3</Link>
            </div>
          )}
        </div>
        <Link href="/testimonials" className="text-white hover:text-yellow-300 transition">Testimonials</Link>
        <Link href="/events" className="text-white hover:text-yellow-300 transition">Events</Link>
        <Link href="/simulations" className="text-white hover:text-yellow-300 transition">Simulations</Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      <div className={`absolute top-16 right-0 w-full bg-gray-800 rounded-lg shadow-lg transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col p-4 space-y-2">
          <Link href="/" className="text-white hover:text-yellow-300 transition">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition">About Us</Link>
          <Link href="/teams" className="text-white hover:text-yellow-300 transition">Our Teams</Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white hover:text-yellow-300 transition">
              Servers
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 w-48 bg-gray-800 rounded-lg shadow-lg z-20">
                <Link href="/servers/server1" className="block px-4 py-2 text-white hover:bg-gray-700 transition">Server 1</Link>
                <Link href="/servers/server2" className="block px-4 py-2 text-white hover:bg-gray-700 transition">Server 2</Link>
                <Link href="/servers/server3" className="block px-4 py-2 text-white hover:bg-gray-700 transition">Server 3</Link>
              </div>
            )}
          </div>
          <Link href="/testimonials" className="text-white hover:text-yellow-300 transition">Testimonials</Link>
          <Link href="/events" className="text-white hover:text-yellow-300 transition">Events</Link>
          <Link href="/simulations" className="text-white hover:text-yellow-300 transition">Simulations</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
