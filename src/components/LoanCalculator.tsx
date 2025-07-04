import React, { useState } from 'react';
import { Button } from './ui';

interface LoanData {
  amount: number;
  term: number;
  rate: number;
}

const LoanCalculator: React.FC = () => {
  const [loanData, setLoanData] = useState<LoanData>({
    amount: 10000,
    term: 12,
    rate: 3.5
  });

  const calculateMonthlyPayment = () => {
    const monthlyRate = loanData.rate / 100 / 12;
    const monthlyPayment = 
      (loanData.amount * monthlyRate * Math.pow(1 + monthlyRate, loanData.term)) /
      (Math.pow(1 + monthlyRate, loanData.term) - 1);
    return monthlyPayment.toFixed(2);
  };

  const totalInterest = () => {
    const monthly = parseFloat(calculateMonthlyPayment());
    return (monthly * loanData.term - loanData.amount).toFixed(2);
  };

  return (
    <section className="py-20 bg-wise-gray50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wise-forest-green mb-4">
            Loan Calculator
          </h2>
          <p className="text-xl text-wise-content-secondary">
            Enter your loan information to get an accurate repayment plan
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-wise-large p-8 shadow-card border border-wise-gray200 min-h-[300px]">
              <h3 className="text-2xl font-bold text-wise-forest-green mb-6">Loan Details</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-wise-content-primary mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={loanData.amount}
                      onChange={(e) => setLoanData({...loanData, amount: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-wise-gray200 rounded-[10px] focus:ring-2 focus:ring-wise-bright-green focus:border-transparent"
                    />
                    <span className="absolute right-3 top-3 text-wise-content-tertiary">$</span>
                  </div>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={loanData.amount}
                      onChange={(e) => setLoanData({...loanData, amount: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-wise-content-tertiary mt-1">
                      <span>$1,000</span>
                      <span>$100,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wise-content-primary mb-2">
                    Loan Term
                  </label>
                  <select
                    value={loanData.term}
                    onChange={(e) => setLoanData({...loanData, term: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 border border-wise-gray200 rounded-[10px] focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  >
                    <option value={3}>3 months</option>
                    <option value={6}>6 months</option>
                    <option value={12}>12 months</option>
                    <option value={24}>24 months</option>
                    <option value={36}>36 months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wise-content-primary mb-2">
                    Annual Interest Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={loanData.rate}
                      onChange={(e) => setLoanData({...loanData, rate: parseFloat(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-wise-gray200 rounded-[10px] focus:ring-2 focus:ring-wise-bright-green focus:border-transparent"
                    />
                    <span className="absolute right-3 top-3 text-wise-content-tertiary">%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-wise-large p-8 shadow-card border border-wise-gray200 min-h-[300px]">
              <h3 className="text-2xl font-bold text-wise-forest-green mb-6">Payment Plan</h3>
              
              <div className="space-y-6">
                <div className="bg-wise-bright-green/5 rounded-[10px] p-6">
                  <div className="text-center">
                    <p className="text-sm text-wise-content-secondary mb-2">Monthly Payment</p>
                    <p className="text-3xl font-bold text-wise-bright-green font-mono">
                      ${calculateMonthlyPayment()}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-wise-gray50 rounded-[10px] p-4">
                    <p className="text-sm text-wise-content-secondary mb-1">Loan Amount</p>
                    <p className="text-xl font-semibold text-wise-forest-green font-mono">
                      ${loanData.amount.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-wise-gray50 rounded-[10px] p-4">
                    <p className="text-sm text-wise-content-secondary mb-1">Total Interest</p>
                    <p className="text-xl font-semibold text-wise-forest-green font-mono">
                      ${totalInterest()}
                    </p>
                  </div>
                </div>

                <div className="bg-wise-gray50 rounded-[10px] p-4">
                  <p className="text-sm text-wise-content-secondary mb-1">Total Repayment</p>
                  <p className="text-xl font-semibold text-wise-forest-green font-mono">
                    ${(loanData.amount + parseFloat(totalInterest())).toLocaleString()}
                  </p>
                </div>

                <Button 
                  variant="primary" 
                  size="large" 
                  fullWidth
                >
                  Apply for This Loan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;