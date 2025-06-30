import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wise-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-wise-bright-green rounded-full flex items-center justify-center mr-2">
                <span className="text-wise-forest-green font-bold text-sm">MP</span>
              </div>
              <h3 className="text-xl font-bold text-white">Middlepay</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Making loans accessible, transparent, and fast for everyone. 
              Join thousands of customers who trust us with their financial needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 text-white rounded-wise-medium flex items-center justify-center hover:bg-wise-bright-green hover:text-wise-forest-green transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 text-white rounded-wise-medium flex items-center justify-center hover:bg-wise-bright-green hover:text-wise-forest-green transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 text-white rounded-wise-medium flex items-center justify-center hover:bg-wise-bright-green hover:text-wise-forest-green transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/loans" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link to="/loans" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Debt Consolidation
                </Link>
              </li>
              <li>
                <Link to="/loans" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Home Improvement
                </Link>
              </li>
              <li>
                <Link to="/loans" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Emergency Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-wise-green transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 lg:mb-0">
              © 2024 Middlepay. All rights reserved. NMLS ID: 1234567
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-wise-green transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-wise-green transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-wise-green transition-colors duration-200">
                Risk Disclosure
              </a>
              <a href="#" className="text-white/60 hover:text-wise-green transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-white/40 leading-relaxed">
            <p>
              Middlepay is a financial technology company, not a bank. Banking services are provided by our partner banks. 
              Loans are made by partner lenders and may not be available in all states. The operator of this website is not a lender, 
              does not make credit decisions, and does not broker loans.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;