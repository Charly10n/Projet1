import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from './Navigation';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Find Your Dream Home With LTC immobilier
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          We help you discover the perfect property tailored to your lifestyle and preferences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300 text-lg">
            View Properties
          </button>
          <button className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-md transition-colors duration-300 text-lg">
            Contact Us
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full text-center">
        <Link to="#properties" className="text-white animate-bounce inline-block">
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
