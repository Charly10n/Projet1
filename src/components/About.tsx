import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1560065/pexels-photo-1560065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Real estate team" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-900 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About LTC immobilier</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, LTC immobilier has established itself as a premier real estate agency, dedicated to helping clients find their dream properties and make informed real estate decisions.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experienced professionals combines market expertise with personalized service to ensure every client receives the attention and guidance they deserve throughout their real estate journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Expert local knowledge',
                'Personalized service',
                'Transparent process',
                'Negotiation expertise',
                'After-sale support',
                'Client-focused approach'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 size={20} className="text-blue-900 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;