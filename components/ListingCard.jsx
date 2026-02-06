// components/ListingCard.jsx
import React from 'react';
import { Bed, Bath, LayoutDashboard, CheckCircle } from 'lucide-react';

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative h-48 sm:h-56 md:h-64">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        {listing.verified && (
          <span className="absolute top-2 left-2 bg-primary-red text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            <CheckCircle size={14} /> Verified
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">S${listing.price.toLocaleString()}</h3>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden border-2 border-white -mt-8 shadow-sm">
            {/* Agent Profile Circle - Replace with actual agent image */}
            <img src={listing.agentImage || "https://via.placeholder.com/40"} alt="Agent" className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="text-lg text-gray-600 mb-3">{listing.title}</p>
        <div className="flex items-center text-gray-700 text-sm space-x-4 mb-4">
          {listing.bedrooms && (
            <span className="flex items-center gap-1">
              <Bed size={16} /> {listing.bedrooms} Beds
            </span>
          )}
          {listing.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath size={16} /> {listing.bathrooms} Baths
            </span>
          )}
          {listing.area && (
            <span className="flex items-center gap-1">
              <LayoutDashboard size={16} /> {listing.area} sqft
            </span>
          )}
        </div>
        {/* Additional details can go here */}
      </div>
    </div>
  );
};

export default ListingCard;
