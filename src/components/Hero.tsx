import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Chip, ChipGroup } from './ui';
import BorrowingWarningModal from './BorrowingWarningModal';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1000);
  const [term, setTerm] = useState(12);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [hasAcceptedWarning, setHasAcceptedWarning] = useState(false);

  const calculateMonthlyPayment = () => {
    const rate = 3.5 / 100 / 12; // 3.5% annual rate
    const monthlyPayment = 
      (amount * rate * Math.pow(1 + rate, term)) /
      (Math.pow(1 + rate, term) - 1);
    return monthlyPayment.toFixed(2);
  };

  const handleApplyNow = () => {
    // Check if user has accepted warning in this session
    if (hasAcceptedWarning) {
      // Go directly to application
      navigate('/application', { 
        state: { 
          loanData: { 
            amount, 
            term,
            purpose: 'personal' 
          } 
        } 
      });
    } else {
      // Show warning modal first
      setShowWarningModal(true);
    }
  };

  const handleWarningCancel = () => {
    setShowWarningModal(false);
    // Optionally navigate back to home
    navigate('/');
  };

  const handleWarningContinue = () => {
    // Mark warning as accepted for this session
    setHasAcceptedWarning(true);
    setShowWarningModal(false);
    
    // Navigate to application
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
            <div className="inline-flex items-center mb-8">
              <svg className="w-4 h-4 mr-2 text-wise-button-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-wise-body-large-bold text-wise-button-secondary underline decoration-wise-button-secondary underline-offset-2">
                Funds in 60 seconds - $500 to $5,000
              </span>
            </div>
            
            <h1 className="font-display text-wise-display-medium lg:text-wise-display-large font-bold text-wise-content-primary leading-tight mb-8">
              <div>Instant</div>
              <div><span className="text-wise-forest-green">Loan.</span></div>
            </h1>
            <p className="text-wise-title-body lg:text-wise-title-section text-wise-content-secondary mb-10 leading-relaxed max-w-lg">
              Get $500 to $5,000 in your account in just 60 seconds. 5-minute application,
              instant approval, and transparent fees. Australian owned and operated.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-wise-bright-green/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-wise-content-secondary text-wise-body-large-bold">60-second funding</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-wise-bright-green/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-wise-content-secondary text-wise-body-large-bold">5-minute application</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-wise-bright-green/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-wise-content-secondary text-wise-body-large-bold">100% transparent fees</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-wise-bright-green/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <span className="text-wise-content-secondary text-wise-body-large-bold">Bad credit considered</span>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-wise-body-large-bold text-wise-content-secondary">4.8/5 from 15,000+ reviews</span>
              </div>
              
              <div className="text-wise-body-large-bold text-wise-content-secondary text-center lg:text-left">
                🏆 Australian Credit Licence: 491418
              </div>
              
              <div className="text-wise-body-large-bold text-wise-success text-center lg:text-left">
                🎉 We approved 127 loans in the last 24 hours
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center lg:text-left">
              <Button 
                onClick={handleApplyNow}
                variant="primary"
                size="large"
              >
                Apply now - 5 min application
              </Button>
            </div>
          </div>

          {/* Right side - Calculator */}
          <div className="relative z-10 mt-12 lg:mt-0">
            <Card 
              size="large"
              className="max-w-lg mx-auto lg:mx-0 shadow-lg hover:shadow-lg transition-none"
            >
              <div className="mb-6">
                <h3 className="text-wise-heading-2 font-bold text-wise-content-primary mb-3">
                  How much do you need?
                </h3>
                <p className="text-wise-content-secondary text-wise-title-body">
                  Get an instant quote and see your monthly payments
                </p>
              </div>

              <div className="space-y-8">
                {/* Amount selector */}
                <div>
                  <label className="block text-wise-body-large-bold text-wise-content-primary mb-4">
                    Loan amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-wise-content-secondary text-wise-title-body font-medium">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-4 text-2xl font-semibold border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none bg-white shadow-sm"
                      placeholder="1,000"
                    />
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                    className="slider w-full mt-4"
                  />
                  <div className="flex justify-between text-wise-body-large text-wise-content-tertiary mt-2 font-medium">
                    <span>$500</span>
                    <span>$5,000</span>
                  </div>
                </div>

                {/* Term selector */}
                <div>
                  <label className="block text-wise-body-large-bold text-wise-content-primary mb-4">
                    Repayment period
                  </label>
                  <ChipGroup scrollable={false} className="!grid !grid-cols-2 lg:!grid-cols-4 !gap-3">
                    {[
                      { value: 6, label: '6m' },
                      { value: 12, label: '12m' },
                      { value: 24, label: '24m' },
                      { value: 36, label: '36m' }
                    ].map((termOption) => (
                      <Chip
                        key={termOption.value}
                        variant="choice"
                        size="medium"
                        selected={term === termOption.value}
                        onClick={() => setTerm(termOption.value)}
                        className="!h-12 !justify-center !w-full !min-w-0"
                      >
                        {termOption.label}
                      </Chip>
                    ))}
                  </ChipGroup>
                </div>

                {/* Results */}
                <div className="bg-wise-gray50 rounded-[10px] p-6 border border-wise-gray200">
                  <div className="text-center">
                    <div className="text-wise-body-large-bold text-wise-content-secondary mb-2">Monthly payment</div>
                    <div className="text-wise-heading-1 font-bold text-wise-content-primary font-mono">
                      ${calculateMonthlyPayment()}
                    </div>
                    <div className="text-wise-body-large text-wise-content-tertiary mt-2">
                      Based on Fundo Score rewards system
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleApplyNow}
                  variant="primary"
                  size="large"
                  fullWidth
                >
                  Apply for this loan
                </Button>
                
                <p className="text-wise-body-default text-wise-content-tertiary text-center">
                  Earn Fundo Score points for better rates and faster approvals.
                </p>
              </div>
            </Card>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-wise-bright-green opacity-5 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-wise-purple opacity-10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Borrowing Warning Modal */}
      <BorrowingWarningModal
        isOpen={showWarningModal}
        onCancel={handleWarningCancel}
        onContinue={handleWarningContinue}
      />
    </section>
  );
};

export default Hero;