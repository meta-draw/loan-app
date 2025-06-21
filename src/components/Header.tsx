import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-wise-green rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">QL</span>
                </div>
                <h1 className="text-xl font-semibold text-wise-navy">QuickLoan</h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-wise-navy border-b-2 border-wise-green' 
                    : 'text-wise-gray hover:text-wise-navy'
                }`}
              >
                Personal
              </Link>
              <Link 
                to="/loans" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/loans') 
                    ? 'text-wise-navy border-b-2 border-wise-green' 
                    : 'text-wise-gray hover:text-wise-navy'
                }`}
              >
                Loans
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'text-wise-navy border-b-2 border-wise-green' 
                    : 'text-wise-gray hover:text-wise-navy'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-wise-navy border-b-2 border-wise-green' 
                    : 'text-wise-gray hover:text-wise-navy'
                }`}
              >
                Help
              </Link>
            </div>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-wise-navy hover:text-wise-green transition-colors duration-200 text-sm font-medium">
              Log in
            </button>
            <button className="bg-wise-green text-white px-6 py-2 rounded-lg hover:bg-wise-darkgreen transition-colors duration-200 text-sm font-medium">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-wise-gray hover:text-wise-navy focus:outline-none focus:text-wise-navy"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/') ? 'text-wise-navy bg-wise-lightblue' : 'text-wise-gray hover:text-wise-navy'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Personal
              </Link>
              <Link
                to="/loans"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/loans') ? 'text-wise-navy bg-wise-lightblue' : 'text-wise-gray hover:text-wise-navy'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Loans
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/about') ? 'text-wise-navy bg-wise-lightblue' : 'text-wise-gray hover:text-wise-navy'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/contact') ? 'text-wise-navy bg-wise-lightblue' : 'text-wise-gray hover:text-wise-navy'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-wise-navy hover:text-wise-green">
                  Log in
                </button>
                <button className="block w-full text-left px-3 py-2 text-base font-medium bg-wise-green text-white rounded-lg mt-2 hover:bg-wise-darkgreen">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;