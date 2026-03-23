import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
  const services = [
    'Deratizare',
    'Dezinsectie',
    'Servicii de curatare'
  ];

  const helpLinks = [
    'Despre Noi ',
    'Contacteaza-ne',
    'FAQ',
    'Privacy Policy',
    'Terms of Service',
    'Blog'
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Firma DDD</h3>
            <p className="text-gray-400 mb-4">
              Garantia unor servicii la cele mai inalte standarde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-sm">Email</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-sm">Phone</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Info</h4>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={
                      link.trim() === 'Despre Noi'
                        ? '/about'
                        : link.trim() === 'Contacteaza-ne'
                        ? '/contact'
                        : `/${link.toLowerCase().replace(/\s+/g, '-')}`
                    }
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Vrei sa fii parte din echipa noastra?</h4>
            <p className="text-gray-400 mb-4">
              Alatura-te echipei noastre de curatatori profesionisti.
            </p>
            <Button variant="primary" className="w-full">
              Aplica acum!
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 Firma DDD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
