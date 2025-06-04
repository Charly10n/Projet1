import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

const Properties: React.FC = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that match various lifestyles and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;