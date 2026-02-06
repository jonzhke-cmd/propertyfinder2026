// components/Header.jsx
import React from 'react';
import { Home, Search, Heart, User } from 'lucide-react'; // Placeholder icons for now

const Header = () => {
  return (
    <>
      {/* Desktop/Tablet Header */}
      <header className="hidden sm:flex sticky top-0 z-50 w-full bg-white shadow-md items-center justify-between p-4">
        <div className="flex items-center">
          {/* Logo/Site Title */}
          <h1 className="text-2xl font-bold text-primary-red mr-8">PropertyFinder</h1>
          {/* Desktop Navigation - You can add more links here */}
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary-red font-medium">Buy</a>
            <a href="#" className="text-gray-700 hover:text-primary-red font-medium">Rent</a>
            <a href="#" className="text-gray-700 hover:text-primary-red font-medium">New Projects</a>
          </nav>
        </div>

        {/* Login/Join Button */}
        <div>
          <button className="bg-primary-red text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors">
            Login / Join
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 z-50 w-full bg-white shadow-lg border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          <a href="#" className="flex flex-col items-center text-gray-600 hover:text-primary-red text-xs">
            <Home size={20} />
            <span className="mt-1">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-600 hover:text-primary-red text-xs">
            <Search size={20} />
            <span className="mt-1">Search</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-600 hover:text-primary-red text-xs">
            <Heart size={20} />
            <span className="mt-1">Shortlist</span>
          </a>
          {/* Assuming a user icon for login/profile */}
          <a href="#" className="flex flex-col items-center text-gray-600 hover:text-primary-red text-xs">
            <User size={20} />
            <span className="mt-1">Account</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
