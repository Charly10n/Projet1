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
    title: 'Annonces immobilières',
    description: 'Accédez à notre vaste base de biens à vendre ou à louer dans des emplacements de choix.',
    icon: <Home size={32} className="text-blue-900" />,
  },
  {
    id: 2,
    title: 'Recherche de biens',
    description: 'Utilisez nos outils de recherche avancés pour trouver les biens correspondant à vos critères.',
    icon: <Search size={32} className="text-blue-900" />,
  },
  {
    id: 3,
    title: 'Assistance à l'achat',
    description: "Nos experts vous accompagnent tout au long du processus d'achat, de la recherche à la signature.",
    icon: <Key size={32} className="text-blue-900" />,
  },
  {
    id: 4,
    title: 'Agents experts',
    description: 'Collaborez avec des agents expérimentés qui connaissent parfaitement le marché local.',
    icon: <Users size={32} className="text-blue-900" />,
  },
  {
    id: 5,
    title: 'Gestion immobilière',
    description: 'Services complets de gestion pour propriétaires et investisseurs immobiliers.',
    icon: <Building size={32} className="text-blue-900" />,
  },
  {
    id: 6,
    title: 'Solutions de financement',
    description: 'Accédez à des organismes de prêt privilégiés et à des solutions adaptées à vos besoins.',
    icon: <DollarSign size={32} className="text-blue-900" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous proposons une gamme complète de services immobiliers pour répondre à tous vos besoins.
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
