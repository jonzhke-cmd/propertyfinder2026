// components/Hero.jsx
import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('buy'); // 'buy', 'rent', 'new-projects'

  return (
    <section className="relative w-full bg-gray-100 py-20 px-4">
      {/* Background Image/Overlay - Can be added via inline style or a dedicated div */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x600?text=Singapore+Skyline')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Find Your Dream Property in Singapore
        </h2>

        {/* Search Bar Tabs */}
        <div className="bg-white rounded-t-lg overflow-hidden inline-flex shadow-lg mb-4">
          <button
            className={`px-6 py-3 text-lg font-semibold transition-colors ${
              activeTab === 'buy' ? 'bg-primary-red text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </button>
          <button
            className={`px-6 py-3 text-lg font-semibold transition-colors ${
              activeTab === 'rent' ? 'bg-primary-red text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('rent')}
          >
            Rent
          </button>
          <button
            className={`px-6 py-3 text-lg font-semibold transition-colors ${
              activeTab === 'new-projects' ? 'bg-primary-red text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('new-projects')}
          >
            New Projects
          </button>
        </div>

        {/* Main Search Input */}
        <div className="bg-white p-4 rounded-b-lg shadow-xl flex items-center mb-4">
          <input
            type="text"
            placeholder="District, MRT, or Property Name"
            className="flex-grow p-3 text-lg border-none focus:outline-none"
          />
          <button className="bg-primary-red text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors">
            Search
          </button>
        </div>

        {/* Horizontal Filter Bar */}
        <div className="bg-white p-3 rounded-lg shadow-lg flex flex-col md:flex-row justify-around items-center space-y-3 md:space-y-0 md:space-x-4">
          <select className="p-2 border border-gray-300 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary-red">
            <option>Property Type</option>
            <option>Condo</option>
            <option>HDB</option>
            <option>Landed</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary-red">
            <option>Price Range</option>
            <option>$500k - $1M</option>
            <option>$1M - $2M</option>
            <option>$2M+</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary-red">
            <option>Bedrooms</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Hero;
