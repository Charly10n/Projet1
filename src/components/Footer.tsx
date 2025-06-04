import React from 'react';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from './Navigation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Home className="mr-2" size={28} />
              <span className="text-xl font-semibold">LTC immobilier</span>
            </div>
            <p className="text-gray-400 mb-6">
              Votre partenaire de confiance pour trouver le bien idéal. Avec des années d'expérience et une équipe dévouée, nous concrétisons vos rêves immobiliers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              {['Accueil', 'Biens', 'Services', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Types de biens</h3>
            <ul className="space-y-3">
                {[
                  'Biens r\u00e9sidentiels',
                  'Espaces commerciaux',
                  'Maisons de luxe',
                  'Locations de vacances',
                  "Biens d'investissement",
                  'Nouvelles constructions'
                ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-gray-400" />
                <span className="text-gray-400">123 Real Estate Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-gray-400" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-gray-400" />
                <span className="text-gray-400">info@estateelite.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} LTC immobilier. Tous droits réservés.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;