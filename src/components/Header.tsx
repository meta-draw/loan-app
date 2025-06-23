import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinkButton } from './ui';

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
                  <span className="text-wise-content-primary font-bold text-wise-body-default">QL</span>
                </div>
                <h1 className="text-wise-title-body font-semibold text-wise-content-primary">QuickLoan</h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {isActive('/') ? (
                <LinkButton
                  to="/"
                  variant="third"
                  size="small"
                  className="rounded-full"
                >
                  Personal
                </LinkButton>
              ) : (
                <Link 
                  to="/" 
                  className="px-4 py-2 text-wise-body-default-bold transition-all duration-200 text-wise-content-secondary hover:text-wise-content-primary"
                >
                  Personal
                </Link>
              )}
              
              {isActive('/loans') ? (
                <LinkButton
                  to="/loans"
                  variant="third"
                  size="small"
                  className="rounded-full"
                >
                  Loans
                </LinkButton>
              ) : (
                <Link 
                  to="/loans" 
                  className="px-4 py-2 text-wise-body-default-bold transition-all duration-200 text-wise-content-secondary hover:text-wise-content-primary"
                >
                  Loans
                </Link>
              )}
              
              {isActive('/about') ? (
                <LinkButton
                  to="/about"
                  variant="third"
                  size="small"
                  className="rounded-full"
                >
                  About
                </LinkButton>
              ) : (
                <Link 
                  to="/about" 
                  className="px-4 py-2 text-wise-body-default-bold transition-all duration-200 text-wise-content-secondary hover:text-wise-content-primary"
                >
                  About
                </Link>
              )}
              
              {isActive('/contact') ? (
                <LinkButton
                  to="/contact"
                  variant="third"
                  size="small"
                  className="rounded-full"
                >
                  Help
                </LinkButton>
              ) : (
                <Link 
                  to="/contact" 
                  className="px-4 py-2 text-wise-body-default-bold transition-all duration-200 text-wise-content-secondary hover:text-wise-content-primary"
                >
                  Help
                </Link>
              )}
            </div>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LinkButton 
              to="/application" 
              variant="primary"
              size="small"
            >
              Apply Now
            </LinkButton>
            <Link 
              to="/login" 
              className="text-wise-content-primary hover:text-wise-bright-green transition-all duration-200 text-wise-body-default-bold"
            >
              Log in
            </Link>
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
            <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 border-t border-wise-gray200" onClick={() => setIsMenuOpen(false)}>
              {isActive('/') ? (
                <LinkButton
                  to="/"
                  variant="third"
                  size="medium"
                  fullWidth
                  className="rounded-full"
                >
                  Personal
                </LinkButton>
              ) : (
                <Link
                  to="/"
                  className="block px-3 py-2 text-wise-body-large-bold rounded-wise-small text-wise-content-secondary hover:text-wise-content-primary hover:bg-wise-gray50"
                >
                  Personal
                </Link>
              )}
              
              {isActive('/loans') ? (
                <LinkButton
                  to="/loans"
                  variant="third"
                  size="medium"
                  fullWidth
                  className="rounded-full"
                >
                  Loans
                </LinkButton>
              ) : (
                <Link
                  to="/loans"
                  className="block px-3 py-2 text-wise-body-large-bold rounded-wise-small text-wise-content-secondary hover:text-wise-content-primary hover:bg-wise-gray50"
                >
                  Loans
                </Link>
              )}
              
              {isActive('/about') ? (
                <LinkButton
                  to="/about"
                  variant="third"
                  size="medium"
                  fullWidth
                  className="rounded-full"
                >
                  About
                </LinkButton>
              ) : (
                <Link
                  to="/about"
                  className="block px-3 py-2 text-wise-body-large-bold rounded-wise-small text-wise-content-secondary hover:text-wise-content-primary hover:bg-wise-gray50"
                >
                  About
                </Link>
              )}
              
              {isActive('/contact') ? (
                <LinkButton
                  to="/contact"
                  variant="third"
                  size="medium"
                  fullWidth
                  className="rounded-full"
                >
                  Help
                </LinkButton>
              ) : (
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-wise-body-large-bold rounded-wise-small text-wise-content-secondary hover:text-wise-content-primary hover:bg-wise-gray50"
                >
                  Help
                </Link>
              )}
              <div className="pt-4 pb-3 border-t border-wise-gray200 space-y-3" onClick={() => setIsMenuOpen(false)}>
                <LinkButton 
                  to="/application" 
                  variant="primary"
                  size="medium"
                  fullWidth
                >
                  Apply Now
                </LinkButton>
                <Link 
                  to="/login" 
                  className="block w-full text-center px-3 py-2 text-wise-body-large-bold text-wise-content-primary hover:text-wise-bright-green rounded-wise-small"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;