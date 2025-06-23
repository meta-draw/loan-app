import React from 'react';

const CardDemo: React.FC = () => {
  return (
    <div className="p-8 bg-wise-gray50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-wise-content-primary mb-8">
          Wise Design System Cards
        </h1>
        
        <div className="space-y-12">
          {/* Small Cards */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Small Cards (88px - 300px)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-wise-gray200 rounded-wise-medium p-6 shadow-card card-wise-small">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">🚗</div>
                  <h3 className="text-lg font-semibold text-wise-content-primary">Car expenses</h3>
                </div>
                <p className="text-wise-content-secondary text-sm">
                  Repairs, registration, or unexpected car costs
                </p>
              </div>
              
              <div className="bg-white border border-wise-gray200 rounded-wise-medium p-6 shadow-card card-wise-small">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">🏠</div>
                  <h3 className="text-lg font-semibold text-wise-content-primary">Home improvements</h3>
                </div>
                <p className="text-wise-content-secondary text-sm">
                  Make your house a home with renovations
                </p>
              </div>
              
              <div className="bg-white border border-wise-gray200 rounded-wise-medium p-6 shadow-card card-wise-small">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">💊</div>
                  <h3 className="text-lg font-semibold text-wise-content-primary">Medical expenses</h3>
                </div>
                <p className="text-wise-content-secondary text-sm">
                  Health costs that can't wait
                </p>
              </div>
            </div>
          </div>
          
          {/* Large Cards */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Large Cards (300px+)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-wise-gray200 rounded-wise-large p-8 shadow-card-large card-wise-large">
                <h3 className="text-2xl font-bold text-wise-content-primary mb-4">
                  Loan Calculator
                </h3>
                <p className="text-wise-content-secondary mb-6">
                  Get an instant quote and see your monthly payments. Enter your loan information to get an accurate repayment plan.
                </p>
                
                <div className="bg-wise-gray50 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-wise-content-secondary mb-2">Monthly Payment</p>
                    <p className="text-3xl font-bold text-wise-content-primary font-mono">$234.50</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-wise-content-secondary">Loan Amount</span>
                    <span className="font-semibold text-wise-content-primary">$10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-wise-content-secondary">Term</span>
                    <span className="font-semibold text-wise-content-primary">48 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-wise-content-secondary">Interest Rate</span>
                    <span className="font-semibold text-wise-content-primary">3.5% p.a.</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-wise-gray200 rounded-wise-large p-8 shadow-card-large card-wise-large">
                <h3 className="text-2xl font-bold text-wise-content-primary mb-4">
                  Application Progress
                </h3>
                <p className="text-wise-content-secondary mb-6">
                  Track your loan application status and see what steps remain to complete your approval.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-wise-bright-green rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-wise-content-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-wise-content-primary font-medium">Personal Details</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-wise-bright-green rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-wise-content-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-wise-content-primary font-medium">Income Verification</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-wise-button-third-bg border-2 border-wise-bright-green rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-wise-bright-green rounded-full"></div>
                    </div>
                    <span className="text-wise-content-primary font-medium">Bank Verification</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-wise-gray200 rounded-full mr-3"></div>
                    <span className="text-wise-content-secondary">Final Review</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-wise-gray200">
                  <p className="text-sm text-wise-content-tertiary">
                    Estimated completion: 2-3 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Cards */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Interactive Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-wise-gray200 rounded-wise-large p-6 shadow-card card-wise hover:shadow-card-hover hover:border-wise-gray300 transition-all duration-200 cursor-pointer min-h-[88px]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-wise-content-primary mb-2">Quick Rate Check</h3>
                    <p className="text-wise-content-secondary text-sm">See your rate without affecting your credit score</p>
                  </div>
                  <svg className="w-6 h-6 text-wise-content-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="bg-white border border-wise-gray200 rounded-wise-large p-6 shadow-card card-wise hover:shadow-card-hover hover:border-wise-gray300 transition-all duration-200 cursor-pointer min-h-[88px]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-wise-content-primary mb-2">Download App</h3>
                    <p className="text-wise-content-secondary text-sm">Manage your loan on the go</p>
                  </div>
                  <svg className="w-6 h-6 text-wise-content-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text with Underline Example */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Text with Underline (Non-button style)</h2>
            <div className="bg-white border border-wise-gray200 rounded-wise-large p-8 shadow-card">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 mr-2 text-wise-button-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-base font-medium text-wise-button-secondary underline decoration-wise-button-secondary underline-offset-2">
                  Same day approval available
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 mr-2 text-wise-button-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-medium text-wise-button-secondary underline decoration-wise-button-secondary underline-offset-2">
                  100% secure application
                </span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-wise-button-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="text-base font-medium text-wise-button-secondary underline decoration-wise-button-secondary underline-offset-2">
                  No hidden fees guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;