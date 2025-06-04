import React from 'react';
import { MapPin, Bed, Bath, Home, ChevronRight } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-900 text-white text-sm font-medium rounded-md">
            {property.status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-md">
            {property.price.toLocaleString()}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={16} className="mr-1" />
          <span>{property.location}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{property.title}</h3>
        
        <div className="flex justify-between mb-5">
          <div className="flex items-center text-gray-600">
            <Bed size={18} className="mr-1" />
            <span>{property.bedrooms} chambres</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath size={18} className="mr-1" />
            <span>{property.bathrooms} salles de bain</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Home size={18} className="mr-1" />
            <span>{property.sqft} pieds²</span>
          </div>
        </div>
        
        <button className="w-full py-3 bg-gray-100 hover:bg-blue-900 hover:text-white text-blue-900 font-medium rounded-md transition-colors duration-300 flex items-center justify-center">
          Voir les détails
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
