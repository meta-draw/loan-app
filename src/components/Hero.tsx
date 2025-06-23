import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1000);
  const [term, setTerm] = useState(12);

  const calculateMonthlyPayment = () => {
    const rate = 3.5 / 100 / 12; // 3.5% annual rate
    const monthlyPayment = 
      (amount * rate * Math.pow(1 + rate, term)) /
      (Math.pow(1 + rate, term) - 1);
    return monthlyPayment.toFixed(2);
  };

  const handleApplyNow = () => {
    navigate('/application', { 
      state: { 
        loanData: { 
          amount, 
          term,
          purpose: 'personal' 
        } 
      } 
    });
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start lg:items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-wise-forest-green text-white px-4 py-2 rounded-full text-base font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Same day approval available
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-wise-content-primary leading-tight mb-8">
              Quick loans from
              <span className="text-wise-bright-green"> $500 to $50,000</span>
            </h1>
            <p className="text-xl lg:text-2xl text-wise-content-secondary mb-10 leading-relaxed max-w-lg">
              Get approved in minutes, not days. No hidden fees, transparent rates, 
              and funds deposited as soon as the next business day.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-wise-bright-green/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-wise-content-secondary font-medium text-lg">No hidden fees</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-wise-bright-green/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-wise-content-secondary font-medium text-lg">100% secure & safe</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-wise-bright-green/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-wise-content-secondary font-medium text-lg">Fast approval</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-wise-bright-green/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <span className="text-wise-content-secondary font-medium text-lg">Rates from 3.5%</span>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-10">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-base text-wise-content-secondary font-medium">4.8/5 on Trustpilot</span>
              </div>
              <div className="text-base text-wise-content-secondary font-medium">
                🔒 Bank-level security
              </div>
              <div className="text-base text-wise-bright-green font-medium">
                🎉 We approved 127 loans in the last 24 hours
              </div>
            </div>

            <button 
              onClick={handleApplyNow}
              className="btn-wise-primary btn-wise-large"
            >
              Apply now - 5 min application
            </button>
          </div>

          {/* Right side - Calculator */}
          <div className="relative z-10 mt-12 lg:mt-0">
            <div className="bg-white rounded-xl p-8 shadow-card border border-wise-gray200 max-w-lg mx-auto lg:mx-0">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-wise-content-primary mb-3">
                  How much do you need?
                </h3>
                <p className="text-wise-content-secondary text-lg">
                  Get an instant quote and see your monthly payments
                </p>
              </div>

              <div className="space-y-8">
                {/* Amount selector */}
                <div>
                  <label className="block text-base font-semibold text-wise-content-primary mb-4">
                    Loan amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-wise-content-secondary text-lg font-medium">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-4 text-2xl font-semibold border-2 border-wise-gray200 rounded-md focus:border-wise-bright-green focus:outline-none transition-all duration-200 bg-white"
                      placeholder="1,000"
                    />
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                    className="slider w-full mt-4"
                  />
                  <div className="flex justify-between text-base text-wise-content-tertiary mt-2 font-medium">
                    <span>$500</span>
                    <span>$50,000</span>
                  </div>
                </div>

                {/* Term selector */}
                <div>
                  <label className="block text-base font-semibold text-wise-content-primary mb-4">
                    Repayment period
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {[6, 12, 24, 36].map((months) => (
                      <button
                        key={months}
                        onClick={() => setTerm(months)}
                        className={`p-3 lg:p-4 rounded-md text-center transition-all duration-200 border-2 ${
                          term === months
                            ? 'bg-wise-bright-green text-white border-wise-bright-green shadow-button'
                            : 'bg-wise-gray50 text-wise-content-secondary border-wise-gray200 hover:border-wise-bright-green/50 hover:bg-white'
                        }`}
                      >
                        <div className="font-semibold text-base">{months}m</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="bg-wise-gray50 rounded-lg p-6 border border-wise-gray200">
                  <div className="text-center">
                    <div className="text-base text-wise-content-secondary mb-2 font-medium">Monthly payment</div>
                    <div className="text-4xl font-bold text-wise-content-primary">
                      ${calculateMonthlyPayment()}
                    </div>
                    <div className="text-base text-wise-content-tertiary mt-2">
                      Representative example at 3.5% p.a.
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleApplyNow}
                  className="btn-wise-primary btn-wise-full"
                >
                  Apply for this loan
                </button>
                
                <p className="text-sm text-wise-content-tertiary text-center">
                  Representative example only. Your rate may vary based on personal circumstances.
                </p>
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-wise-bright-green opacity-5 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-wise-purple opacity-10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;