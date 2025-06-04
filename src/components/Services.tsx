import React from 'react';
import { Home, Search, Key, Users, Building, DollarSign } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Property Listings',
    description: 'Access our extensive database of properties for sale and rent across prime locations.',
    icon: <Home size={32} className="text-blue-900" />,
  },
  {
    id: 2,
    title: 'Property Search',
    description: 'Use our advanced search tools to find properties that match your specific requirements.',
    icon: <Search size={32} className="text-blue-900" />,
  },
  {
    id: 3,
    title: 'Buying Assistance',
    description: 'Our experts guide you through the entire home buying process from search to closing.',
    icon: <Key size={32} className="text-blue-900" />,
  },
  {
    id: 4,
    title: 'Expert Agents',
    description: 'Work with experienced real estate agents who know the local market inside and out.',
    icon: <Users size={32} className="text-blue-900" />,
  },
  {
    id: 5,
    title: 'Property Management',
    description: 'Comprehensive property management services for landlords and property investors.',
    icon: <Building size={32} className="text-blue-900" />,
  },
  {
    id: 6,
    title: 'Financing Options',
    description: 'Access to preferred lenders and financing solutions tailored to your needs.',
    icon: <DollarSign size={32} className="text-blue-900" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services\" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of real estate services to meet all your property needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;