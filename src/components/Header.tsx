import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-wise-gray200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-wise-bright-green rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">QL</span>
                </div>
                <h1 className="text-xl font-semibold text-wise-content-primary">QuickLoan</h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link 
                to="/" 
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive('/') 
                    ? 'text-wise-content-primary border-b-2 border-wise-bright-green' 
                    : 'text-wise-content-secondary hover:text-wise-content-primary'
                }`}
              >
                Personal
              </Link>
              <Link 
                to="/loans" 
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive('/loans') 
                    ? 'text-wise-content-primary border-b-2 border-wise-bright-green' 
                    : 'text-wise-content-secondary hover:text-wise-content-primary'
                }`}
              >
                Loans
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive('/about') 
                    ? 'text-wise-content-primary border-b-2 border-wise-bright-green' 
                    : 'text-wise-content-secondary hover:text-wise-content-primary'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive('/contact') 
                    ? 'text-wise-content-primary border-b-2 border-wise-bright-green' 
                    : 'text-wise-content-secondary hover:text-wise-content-primary'
                }`}
              >
                Help
              </Link>
            </div>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-wise-content-primary hover:text-wise-bright-green transition-all duration-200 text-sm font-medium">
              Log in
            </button>
            <button className="btn-wise-primary text-sm">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-wise-content-secondary hover:text-wise-content-primary focus:outline-none focus:text-wise-content-primary"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-wise-gray200">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/') ? 'text-wise-content-primary bg-wise-gray50' : 'text-wise-content-secondary hover:text-wise-content-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Personal
              </Link>
              <Link
                to="/loans"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/loans') ? 'text-wise-text-primary bg-wise-gray50' : 'text-wise-text-secondary hover:text-wise-text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Loans
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/about') ? 'text-wise-text-primary bg-wise-gray50' : 'text-wise-text-secondary hover:text-wise-text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/contact') ? 'text-wise-text-primary bg-wise-gray50' : 'text-wise-text-secondary hover:text-wise-text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
              <div className="pt-4 pb-3 border-t border-wise-gray200">
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-wise-content-primary hover:text-wise-bright-green rounded-md">
                  Log in
                </button>
                <button className="btn-wise-primary w-full mt-2">
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