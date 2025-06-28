import React, { useState, useEffect } from 'react';
import { Button, Chip, ChipGroup } from '../ui';

interface LoanDetailsProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({ data, onNext, isFirstStep }) => {
  const [formData, setFormData] = useState({
    amount: data.loanDetails?.amount || 10000,
    term: data.loanDetails?.term || 12,
    purpose: data.loanDetails?.purpose || 'personal',
    description: data.loanDetails?.description || ''
  });

  // Update form data when props change (for data restoration from localStorage)
  useEffect(() => {
    if (data.loanDetails) {
      setFormData({
        amount: data.loanDetails.amount || 10000,
        term: data.loanDetails.term || 12,
        purpose: data.loanDetails.purpose || 'personal',
        description: data.loanDetails.description || ''
      });
    }
  }, [data.loanDetails]);

  const calculateMonthlyPayment = () => {
    const rate = 3.5 / 100 / 12;
    const monthlyPayment = 
      (formData.amount * rate * Math.pow(1 + rate, formData.term)) /
      (Math.pow(1 + rate, formData.term) - 1);
    return monthlyPayment.toFixed(2);
  };

  const purposes = [
    { value: 'personal', label: 'Personal expenses', icon: '👤' },
    { value: 'car', label: 'Car & transport', icon: '🚗' },
    { value: 'home', label: 'Home improvement', icon: '🏠' },
    { value: 'medical', label: 'Medical expenses', icon: '💊' },
    { value: 'education', label: 'Education & training', icon: '🎓' },
    { value: 'travel', label: 'Travel & holidays', icon: '✈️' },
    { value: 'debt', label: 'Debt consolidation', icon: '💳' },
    { value: 'other', label: 'Other', icon: '📋' }
  ];

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-card border border-wise-gray200 p-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-wise-text-primary mb-6">
            Tell us about your loan
          </h2>
          <p className="text-wise-text-secondary text-lg font-medium">
            Let's start with the basics - how much you need and what for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}
          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-semibold text-wise-text-primary mb-4">
                How much do you need? *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-wise-text-secondary text-lg font-medium">$</span>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: parseInt(e.target.value) || 0})}
                  className="w-full pl-8 pr-4 py-4 text-xl font-semibold border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none bg-white shadow-sm"
                  min="500"
                  max="50000"
                  step="100"
                />
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: parseInt(e.target.value)})}
                className="w-full mt-4 h-2 bg-wise-gray200 rounded-full appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-wise-text-muted mt-2 font-medium">
                <span>$500</span>
                <span>$50,000</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="block text-sm font-semibold text-wise-text-primary mb-4">
                How long do you need to repay? *
              </label>
              <ChipGroup scrollable={false} className="!flex-wrap">
                {[
                  { value: 6, label: '6 months' },
                  { value: 12, label: '12 months' },
                  { value: 24, label: '2 years' },
                  { value: 36, label: '3 years' }
                ].map((term) => (
                  <Chip
                    key={term.value}
                    variant="choice"
                    size="medium"
                    selected={formData.term === term.value}
                    onClick={() => setFormData({...formData, term: term.value})}
                  >
                    {term.label}
                  </Chip>
                ))}
              </ChipGroup>
            </div>

            {/* Loan Purpose */}
            <div>
              <label className="block text-sm font-semibold text-wise-text-primary mb-4">
                What's the loan for? *
              </label>
              <ChipGroup scrollable={false} className="!flex-wrap">
                {purposes.map((purpose) => (
                  <Chip
                    key={purpose.value}
                    variant="choice"
                    size="medium"
                    selected={formData.purpose === purpose.value}
                    onClick={() => setFormData({...formData, purpose: purpose.value})}
                    icon={<span className="text-base">{purpose.icon}</span>}
                  >
                    {purpose.label}
                  </Chip>
                ))}
              </ChipGroup>
            </div>

            {/* Description */}
            {formData.purpose === 'other' && (
              <div>
                <label className="block text-sm font-semibold text-wise-text-primary mb-4">
                  Please describe what the loan is for
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-all duration-200 bg-white"
                  rows={3}
                  placeholder="Tell us more about what you need the loan for..."
                />
              </div>
            )}
          </div>

          {/* Right side - Summary */}
          <div className="bg-wise-gray50 rounded-[10px] p-8 border border-wise-gray200">
            <h3 className="text-xl font-semibold text-wise-text-primary mb-6">
              Loan summary
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between">
                <span className="text-wise-text-secondary font-medium">Loan amount:</span>
                <span className="font-semibold text-wise-text-primary">
                  ${formData.amount.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-wise-text-secondary font-medium">Loan term:</span>
                <span className="font-semibold text-wise-text-primary">
                  {formData.term} months
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-wise-text-secondary font-medium">Purpose:</span>
                <span className="font-semibold text-wise-text-primary">
                  {purposes.find(p => p.value === formData.purpose)?.label}
                </span>
              </div>
              
              <div className="border-t border-wise-gray200 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-wise-text-secondary font-medium">Estimated monthly payment:</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-wise-text-primary">
                      ${calculateMonthlyPayment()}
                    </div>
                    <div className="text-sm text-wise-text-muted">
                      per month
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-[10px] p-4 mt-6 border border-wise-gray200">
                <div className="text-xs text-wise-text-muted space-y-1">
                  <p>• 安全快速，5分钟内完成申请</p>
                  <p>• Total repayment: ${(parseFloat(calculateMonthlyPayment()) * formData.term).toFixed(2)}</p>
                  <p>• No hidden fees or charges</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-wise-gray200">
          <div className="text-sm text-wise-text-secondary font-medium">
            Step 1 of 6 - Loan Details
          </div>
          
          <div className="flex space-x-4">
            <Button
              onClick={handleNext}
              disabled={!formData.amount || !formData.term || !formData.purpose}
              variant="primary"
              size="large"
            >
              Continue to Personal Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;