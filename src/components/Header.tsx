import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from './Navigation';

const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'Biens', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Home
              className={`mr-2 ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}
              size={28}
            />
            <span
              className={`text-xl font-semibold ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              LTC immobilier
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-gold-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Contact Info for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className={`flex items-center ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              <Phone size={18} className="mr-1" />
              <span>(123) 456-7890</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Basculer le menu"
          >
            {isOpen ? (
              <X size={24} className={scrolled ? 'text-blue-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-blue-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl mt-2 py-4 px-2 absolute left-4 right-4 transition-all duration-300">
            <nav className="flex flex-col space-y-3">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className="text-gray-700 hover:text-blue-900 px-4 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-2 px-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-700 py-2"
                >
                  <Phone size={18} className="mr-2" />
                  <span>(123) 456-7890</span>
                </a>
                <a
                  href="mailto:contact@estateelite.com"
                  className="flex items-center text-gray-700 py-2"
                >
                  <Mail size={18} className="mr-2" />
                  <span>contact@estateelite.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;