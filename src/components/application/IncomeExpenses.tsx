import React, { useState, useEffect } from 'react';
import { Button } from '../ui';

interface IncomeExpensesProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const IncomeExpenses: React.FC<IncomeExpensesProps> = ({ data, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    employmentStatus: data.incomeExpenses?.employmentStatus || '',
    employer: data.incomeExpenses?.employer || '',
    occupation: data.incomeExpenses?.occupation || '',
    grossIncome: data.incomeExpenses?.grossIncome || '',
    netIncome: data.incomeExpenses?.netIncome || '',
    timeWithEmployer: data.incomeExpenses?.timeWithEmployer || '',
    otherIncome: data.incomeExpenses?.otherIncome || '',
    rent: data.incomeExpenses?.rent || '',
    utilities: data.incomeExpenses?.utilities || '',
    groceries: data.incomeExpenses?.groceries || '',
    transport: data.incomeExpenses?.transport || '',
    insurance: data.incomeExpenses?.insurance || '',
    otherExpenses: data.incomeExpenses?.otherExpenses || '',
    existingLoans: data.incomeExpenses?.existingLoans || '',
    creditCards: data.incomeExpenses?.creditCards || ''
  });

  // Update form data when props change (for data restoration from localStorage)
  useEffect(() => {
    if (data.incomeExpenses) {
      setFormData({
        employmentStatus: data.incomeExpenses.employmentStatus || '',
        employer: data.incomeExpenses.employer || '',
        occupation: data.incomeExpenses.occupation || '',
        grossIncome: data.incomeExpenses.grossIncome || '',
        netIncome: data.incomeExpenses.netIncome || '',
        timeWithEmployer: data.incomeExpenses.timeWithEmployer || '',
        otherIncome: data.incomeExpenses.otherIncome || '',
        rent: data.incomeExpenses.rent || '',
        utilities: data.incomeExpenses.utilities || '',
        groceries: data.incomeExpenses.groceries || '',
        transport: data.incomeExpenses.transport || '',
        insurance: data.incomeExpenses.insurance || '',
        otherExpenses: data.incomeExpenses.otherExpenses || '',
        existingLoans: data.incomeExpenses.existingLoans || '',
        creditCards: data.incomeExpenses.creditCards || ''
      });
    }
  }, [data.incomeExpenses]);

  const employmentStatuses = [
    'Full-time employee',
    'Part-time employee', 
    'Casual employee',
    'Self-employed',
    'Contractor',
    'Government benefits',
    'Retired',
    'Student',
    'Unemployed'
  ];

  const timeOptions = [
    'Less than 3 months',
    '3-6 months',
    '6-12 months',
    '1-2 years',
    '2-5 years',
    'More than 5 years'
  ];

  const calculateNetWorth = () => {
    const income = parseFloat(formData.netIncome) || 0;
    const expenses = (
      parseFloat(formData.rent) + 
      parseFloat(formData.utilities) + 
      parseFloat(formData.groceries) + 
      parseFloat(formData.transport) + 
      parseFloat(formData.insurance) + 
      parseFloat(formData.otherExpenses) + 
      parseFloat(formData.existingLoans) + 
      parseFloat(formData.creditCards)
    ) || 0;
    
    return income - expenses;
  };

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-wise-navy mb-4">
            Income & expenses
          </h2>
          <p className="text-wise-gray text-lg">
            Help us understand your financial situation to determine the best loan option for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Income Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-wise-navy mb-4 pb-2 border-b border-gray-200">
              💼 Employment & Income
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-wise-navy mb-2">
                Employment status *
              </label>
              <select
                value={formData.employmentStatus}
                onChange={(e) => setFormData({...formData, employmentStatus: e.target.value})}
                className="w-full px-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
              >
                <option value="">Select employment status</option>
                {employmentStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            {(formData.employmentStatus && !formData.employmentStatus.includes('Unemployed') && !formData.employmentStatus.includes('Government')) && (
              <>
                <div>
                  <label className="block text-sm font-medium text-wise-navy mb-2">
                    Employer name
                  </label>
                  <input
                    type="text"
                    value={formData.employer}
                    onChange={(e) => setFormData({...formData, employer: e.target.value})}
                    className="w-full px-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-wise-navy mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                    className="w-full px-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="Your job title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-wise-navy mb-2">
                    Time with current employer
                  </label>
                  <select
                    value={formData.timeWithEmployer}
                    onChange={(e) => setFormData({...formData, timeWithEmployer: e.target.value})}
                    className="w-full px-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                  >
                    <option value="">Select time period</option>
                    {timeOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Gross monthly income *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.grossIncome}
                    onChange={(e) => setFormData({...formData, grossIncome: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="5,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Net monthly income *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.netIncome}
                    onChange={(e) => setFormData({...formData, netIncome: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="4,000"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-wise-navy mb-2">
                Other income (monthly)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                <input
                  type="number"
                  value={formData.otherIncome}
                  onChange={(e) => setFormData({...formData, otherIncome: e.target.value})}
                  className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                  placeholder="0"
                />
              </div>
              <p className="text-xs text-wise-gray mt-1">Include Centrelink, rental income, investments, etc.</p>
            </div>
          </div>

          {/* Expenses Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-wise-navy mb-4 pb-2 border-b border-gray-200">
              💳 Monthly Expenses
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Rent/Mortgage
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.rent}
                    onChange={(e) => setFormData({...formData, rent: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="1,500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Utilities
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.utilities}
                    onChange={(e) => setFormData({...formData, utilities: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Groceries
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.groceries}
                    onChange={(e) => setFormData({...formData, groceries: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Transport
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.transport}
                    onChange={(e) => setFormData({...formData, transport: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Insurance
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.insurance}
                    onChange={(e) => setFormData({...formData, insurance: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="150"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Other expenses
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.otherExpenses}
                    onChange={(e) => setFormData({...formData, otherExpenses: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="200"
                  />
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-wise-navy mt-6 mb-4">Existing debts</h4>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Existing loan payments
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.existingLoans}
                    onChange={(e) => setFormData({...formData, existingLoans: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Credit card payments
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wise-gray">$</span>
                  <input
                    type="number"
                    value={formData.creditCards}
                    onChange={(e) => setFormData({...formData, creditCards: e.target.value})}
                    className="w-full pl-8 pr-3 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-wise-lightblue rounded-[10px] p-4 mt-6">
              <h4 className="font-semibold text-wise-navy mb-2">Financial summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Monthly income:</span>
                  <span className="font-medium">${(parseFloat(formData.netIncome) + parseFloat(formData.otherIncome || '0')).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly expenses:</span>
                  <span className="font-medium">${(
                    parseFloat(formData.rent || '0') + 
                    parseFloat(formData.utilities || '0') + 
                    parseFloat(formData.groceries || '0') + 
                    parseFloat(formData.transport || '0') + 
                    parseFloat(formData.insurance || '0') + 
                    parseFloat(formData.otherExpenses || '0') + 
                    parseFloat(formData.existingLoans || '0') + 
                    parseFloat(formData.creditCards || '0')
                  ).toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-wise-green/20 font-semibold">
                  <span>Available income:</span>
                  <span className={calculateNetWorth() >= 0 ? 'text-wise-green' : 'text-wise-error'}>
                    ${calculateNetWorth().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-wise-gray200">
          <div className="text-sm text-wise-gray">
            Step 3 of 6 - Income & Expenses
          </div>
          
          <div className="flex space-x-4">
            <Button
              onClick={onBack}
              variant="fourth"
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              variant="primary"
            >
              Continue to Bank Verification
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;