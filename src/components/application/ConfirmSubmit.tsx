import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ConfirmSubmitProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const ConfirmSubmit: React.FC<ConfirmSubmitProps> = ({ data, onBack }) => {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedCredit, setAcceptedCredit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateMonthlyPayment = () => {
    const amount = data.loanDetails?.amount || 0;
    const term = data.loanDetails?.term || 12;
    const rate = 3.5 / 100 / 12;
    const monthlyPayment = 
      (amount * rate * Math.pow(1 + rate, term)) /
      (Math.pow(1 + rate, term) - 1);
    return monthlyPayment.toFixed(2);
  };

  const purposes = [
    { value: 'personal', label: 'Personal expenses' },
    { value: 'car', label: 'Car & transport' },
    { value: 'home', label: 'Home improvement' },
    { value: 'medical', label: 'Medical expenses' },
    { value: 'education', label: 'Education & training' },
    { value: 'travel', label: 'Travel & holidays' },
    { value: 'debt', label: 'Debt consolidation' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = async () => {
    if (!acceptedTerms || !acceptedPrivacy || !acceptedCredit) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Redirect to success page or show confirmation
    navigate('/', { 
      replace: true,
      state: { 
        applicationSubmitted: true,
        applicationId: 'QL-' + Math.random().toString(36).substr(2, 9).toUpperCase()
      }
    });
  };

  const canSubmit = acceptedTerms && acceptedPrivacy && acceptedCredit;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-wise-forest-green mb-4">
            Review and submit
          </h2>
          <p className="text-wise-content-secondary text-lg">
            Please review your application details before submitting. Once submitted, our team will process your application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Application Summary */}
          <div className="space-y-6">
            <div className="bg-wise-lightblue rounded-xl p-6">
              <h3 className="text-xl font-semibold text-wise-forest-green mb-4">
                Loan Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Loan amount:</span>
                  <span className="font-semibold text-wise-forest-green">
                    ${data.loanDetails?.amount?.toLocaleString() || '0'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Loan term:</span>
                  <span className="font-semibold text-wise-forest-green">
                    {data.loanDetails?.term || 0} months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Purpose:</span>
                  <span className="font-semibold text-wise-forest-green">
                    {purposes.find(p => p.value === data.loanDetails?.purpose)?.label || 'Not specified'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Interest rate:</span>
                  <span className="font-semibold text-wise-forest-green">3.5% p.a.</span>
                </div>
                <div className="border-t border-wise-bright-green/20 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-wise-content-secondary">Monthly payment:</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-wise-forest-green">
                        ${calculateMonthlyPayment()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-wise-forest-green mb-4">
                Personal Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Name:</span>
                  <span className="font-medium">
                    {data.personalDetails?.title} {data.personalDetails?.firstName} {data.personalDetails?.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Email:</span>
                  <span className="font-medium">{data.personalDetails?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Mobile:</span>
                  <span className="font-medium">{data.personalDetails?.mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Address:</span>
                  <span className="font-medium text-right">
                    {data.personalDetails?.address?.street}<br/>
                    {data.personalDetails?.address?.suburb} {data.personalDetails?.address?.state} {data.personalDetails?.address?.postcode}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-wise-forest-green mb-4">
                Income & Employment
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Employment:</span>
                  <span className="font-medium">{data.incomeExpenses?.employmentStatus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Monthly income:</span>
                  <span className="font-medium">${data.incomeExpenses?.netIncome}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wise-content-secondary">Employer:</span>
                  <span className="font-medium">{data.incomeExpenses?.employer || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-wise-forest-green mb-6">
                Terms and Conditions
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 mr-3 w-4 h-4 text-wise-bright-green border-gray-300 rounded focus:ring-wise-bright-green"
                  />
                  <label htmlFor="terms" className="text-sm text-wise-content-secondary leading-relaxed">
                    I have read and agree to the{' '}
                    <a href="#" className="text-wise-bright-green hover:underline">Terms and Conditions</a>{' '}
                    and understand the loan terms, interest rates, fees, and repayment obligations.
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-1 mr-3 w-4 h-4 text-wise-bright-green border-gray-300 rounded focus:ring-wise-bright-green"
                  />
                  <label htmlFor="privacy" className="text-sm text-wise-content-secondary leading-relaxed">
                    I have read and accept the{' '}
                    <a href="#" className="text-wise-bright-green hover:underline">Privacy Policy</a>{' '}
                    and consent to the collection, use, and disclosure of my personal information as described.
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="credit"
                    checked={acceptedCredit}
                    onChange={(e) => setAcceptedCredit(e.target.checked)}
                    className="mt-1 mr-3 w-4 h-4 text-wise-bright-green border-gray-300 rounded focus:ring-wise-bright-green"
                  />
                  <label htmlFor="credit" className="text-sm text-wise-content-secondary leading-relaxed">
                    I authorize QuickLoan to perform credit checks and verify my information with credit bureaus, 
                    employers, and financial institutions as necessary for loan assessment.
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-yellow-600 text-xl mr-3">⚠️</div>
                <div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                    Important Information
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• This is a credit application and not a guarantee of approval</li>
                    <li>• Credit assessment will be performed based on responsible lending criteria</li>
                    <li>• Loan approval and terms are subject to our credit policy</li>
                    <li>• You have a 14-day cooling off period after loan settlement</li>
                    <li>• Default may affect your credit rating and incur additional fees</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-wise-lightblue rounded-xl p-6">
              <h4 className="text-lg font-semibold text-wise-forest-green mb-4">
                What happens next?
              </h4>
              <div className="space-y-3 text-sm text-wise-content-secondary">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-wise-bright-green text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
                  <span>We'll review your application (usually within 2 hours)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-wise-bright-green text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
                  <span>You'll receive an SMS and email with the decision</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-wise-bright-green text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
                  <span>If approved, funds will be deposited within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm text-wise-content-secondary">
            Step 6 of 6 - Confirm & Submit
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={onBack}
              disabled={isSubmitting}
              className="btn-wise-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || isSubmitting}
              className="btn-wise-primary disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Application...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmSubmit;