import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isPricesOpen, setIsPricesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePricesOpen, setIsMobilePricesOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0 w-auto lg:w-1/4">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600"
              onClick={handleScrollToTop}
            >
              Firma DDD
            </Link>
          </div>
          
          {/* Center: Navigation Links (desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleScrollToTop}
            >
              Acasa
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleScrollToTop}
            >
              Despre noi
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleScrollToTop}
            >
              Servicii
            </Link>

            {/* Prices dropdown: persoane juridice / persoane fizice */}
            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
                onClick={() => setIsPricesOpen((open) => !open)}
              >
                <span className="mr-1">Preturi</span>
                <span className="text-xs">▼</span>
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 transition-opacity ${
                  isPricesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <Link
                  to="/pricing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => {
                    setIsPricesOpen(false);
                    handleScrollToTop();
                  }}
                >
                  Persoane juridice
                </Link>
                <Link
                  to="/pricing-individuals"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => {
                    setIsPricesOpen(false);
                    handleScrollToTop();
                  }}
                >
                  Persoane fizice (garsoniere si apartamente)
                </Link>
              </div>
            </div>

            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleScrollToTop}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleScrollToTop}
            >
              Contact
            </Link>
          </div>

          {/* Right: Button (desktop) + Mobile menu toggle */}
          <div className="flex items-center justify-end gap-3 w-auto lg:w-1/4 flex-shrink-0">
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="primary" className="rounded-full px-6 py-3">
                  Contacteaza-ne
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className="sr-only">Deschide meniul</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu content */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2 border-t border-gray-100 pt-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleScrollToTop();
              }}
            >
              Acasa
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleScrollToTop();
              }}
            >
              Despre noi
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleScrollToTop();
              }}
            >
              Servicii
            </Link>
            <div className="border-t border-gray-100 pt-2">
              <button
                type="button"
                className="w-full flex items-center justify-between text-sm font-semibold text-gray-500 mb-1"
                onClick={() => setIsMobilePricesOpen((open) => !open)}
              >
                <span>Preturi</span>
                <span
                  className={`text-[10px] transition-transform ${
                    isMobilePricesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </button>
              {isMobilePricesOpen && (
                <div className="space-y-1 pl-2">
                  <Link
                    to="/pricing"
                    className="block text-gray-700 hover:text-blue-600 transition-colors text-sm"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobilePricesOpen(false);
                      handleScrollToTop();
                    }}
                  >
                    Persoane juridice
                  </Link>
                  <Link
                    to="/pricing-individuals"
                    className="block text-gray-700 hover:text-blue-600 transition-colors text-sm"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobilePricesOpen(false);
                      handleScrollToTop();
                    }}
                  >
                    Persoane fizice (garsoniere si apartamente)
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/blog"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleScrollToTop();
              }}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleScrollToTop();
              }}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full rounded-full px-6 py-3">
                  Contacteaza-ne
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
