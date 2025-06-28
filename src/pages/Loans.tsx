import React, { useState } from 'react';
import { Button, Chip, ChipGroup } from '../components/ui';

const Loans: React.FC = () => {
  const [selectedLoan, setSelectedLoan] = useState('personal');

  const loanTypes = [
    {
      id: 'personal',
      name: 'Personal Loans',
      description: 'Flexible loans for any purpose',
      rates: 'From 5.95%',
      amounts: '$500 - $5,000',
      terms: '5 - 20 weeks',
      features: [
        'No collateral required',
        'Fixed interest rates',
        'Fast approval process',
        'No prepayment penalties'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'debt',
      name: 'Debt Consolidation',
      description: 'Combine multiple debts into one payment',
      rates: 'From 5.95%',
      amounts: '$500 - $5,000',
      terms: '5 - 20 weeks',
      features: [
        'Lower monthly payments',
        'Simplified debt management',
        'Potential interest savings',
        'Improve credit score'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'education',
      name: 'Education Loans',
      description: 'Fund your studies or training courses',
      rates: 'From 5.95%',
      amounts: '$500 - $5,000',
      terms: '5 - 20 weeks',
      features: [
        'Cover course fees',
        'Buy textbooks & supplies',
        'Flexible repayments',
        '60-second funding'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V19C9 20.6569 10.3431 22 12 22C13.6569 22 15 20.6569 15 19V17" />
        </svg>
      )
    },
    {
      id: 'emergency',
      name: 'Emergency Loans',
      description: 'Quick cash for unexpected expenses',
      rates: 'From 5.95%',
      amounts: '$500 - $5,000',
      terms: '5 - 20 weeks',
      features: [
        'Same-day funding',
        'Minimal documentation',
        '24/7 application process',
        'Emergency support'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      id: 'dental',
      name: 'Dental Loans',
      description: 'Cover dental procedures and treatments',
      rates: 'From 5.95%',
      amounts: '$500 - $5,000',
      terms: '5 - 20 weeks',
      features: [
        'Instant approval',
        'Cover any dental work',
        'No credit check required',
        'Fundo Score rewards'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'furniture',
      name: 'Furniture Loans',
      description: 'Furnish your home without the wait',
      rates: 'From 5.95%',
      amounts: '$500 - $5,000',
      terms: '5 - 20 weeks',
      features: [
        'Buy now, pay later',
        'Quick approval process',
        'Flexible payment plans',
        'No hidden fees'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  const selectedLoanData = loanTypes.find(loan => loan.id === selectedLoan);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wise-lightblue to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-wise-navy mb-6">
            Find the perfect loan
            <span className="text-wise-green"> for your needs</span>
          </h1>
          <p className="text-xl text-wise-gray leading-relaxed">
            Get $500 to $5,000 in 60 seconds. Bad credit considered. 
            100% online with transparent fees.
          </p>
        </div>
      </section>

      {/* Loan Types Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChipGroup className="justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3" scrollable={false}>
            {loanTypes.map((loan) => (
              <Chip
                key={loan.id}
                variant="choice"
                size="large"
                selected={selectedLoan === loan.id}
                onClick={() => setSelectedLoan(loan.id)}
                icon={loan.icon}
              >
                {loan.name}
              </Chip>
            ))}
          </ChipGroup>
        </div>
      </section>

      {/* Selected Loan Details */}
      {selectedLoanData && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-wise-green/10 rounded-wise-medium flex items-center justify-center mr-4 text-wise-green">
                    {selectedLoanData.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-wise-navy">
                      {selectedLoanData.name}
                    </h2>
                    <p className="text-wise-gray">{selectedLoanData.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="bg-wise-lightblue p-6 rounded-wise-medium">
                    <div className="text-sm text-wise-gray mb-1">Interest Rates</div>
                    <div className="text-xl font-bold text-wise-navy">
                      5.95% fixed
                    </div>
                  </div>
                  <div className="bg-wise-lightblue p-6 rounded-wise-medium">
                    <div className="text-sm text-wise-gray mb-1">Loan Amounts</div>
                    <div className="text-xl font-bold text-wise-navy">
                      {selectedLoanData.amounts}
                    </div>
                  </div>
                  <div className="bg-wise-lightblue p-6 rounded-wise-medium">
                    <div className="text-sm text-wise-gray mb-1">Loan Terms</div>
                    <div className="text-xl font-bold text-wise-navy">
                      {selectedLoanData.terms}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-wise-navy mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedLoanData.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-wise-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-wise-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="primary" 
                  size="large"
                >
                  Apply for {selectedLoanData.name}
                </Button>
              </div>

              <div className="relative">
                <div className="bg-white rounded-wise-x-large p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-wise-navy mb-6">
                    Quick Rate Check
                  </h3>
                  <p className="text-wise-gray mb-6">
                    See your potential rate without affecting your credit score
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-wise-navy mb-2">
                        Loan Amount
                      </label>
                      <input
                        type="text"
                        placeholder="$10,000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-wise-green focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-wise-navy mb-2">
                        Employment Status
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-wise-green focus:border-transparent">
                        <option>Full-time employed</option>
                        <option>Part-time employed</option>
                        <option>Self-employed</option>
                        <option>Government benefits</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-wise-navy mb-2">
                        Annual Income
                      </label>
                      <input
                        type="text"
                        placeholder="$50,000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-wise-green focus:border-transparent"
                      />
                    </div>

                    <Button 
                      type="submit"
                      variant="primary" 
                      size="large" 
                      fullWidth
                    >
                      Check My Rate
                    </Button>

                    <p className="text-xs text-wise-gray text-center">
                      Bad credit considered - we look beyond your credit score
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section className="py-20 bg-wise-lightblue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wise-navy mb-4">
              How it works
            </h2>
            <p className="text-xl text-wise-gray">
              Get funded in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-wise-navy mb-4">
                Apply Online
              </h3>
              <p className="text-wise-gray">
                Complete our 5-minute application online. 
                100% digital, no paperwork needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-wise-navy mb-4">
                Get Approved
              </h3>
              <p className="text-wise-gray">
                Get instant approval decision. We consider 
                bad credit and look at your ability to repay.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-wise-navy mb-4">
                Receive Funds
              </h3>
              <p className="text-wise-gray">
                Funds transferred to your account in 60 seconds. 
                Available 24/7, even on weekends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;