import React, { useState } from 'react';

interface BankVerificationProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const BankVerification: React.FC<BankVerificationProps> = ({ data, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    method: data.bankVerification?.method || '',
    bankName: data.bankVerification?.bankName || '',
    accountType: data.bankVerification?.accountType || '',
    bsb: data.bankVerification?.bsb || '',
    accountNumber: data.bankVerification?.accountNumber || '',
    accountHolder: data.bankVerification?.accountHolder || ''
  });

  const methods = [
    {
      id: 'open-banking',
      title: 'Open Banking (Recommended)',
      description: 'Instantly verify your account with bank-grade security',
      features: ['Instant verification', 'Bank-level security', 'No manual entry required'],
      icon: '🏦',
      popular: true
    },
    {
      id: 'bank-statements',
      title: 'Upload Bank Statements',
      description: 'Upload your recent bank statements for verification',
      features: ['Upload PDF statements', '90 days of history', 'Manual review process'],
      icon: '📄',
      popular: false
    },
    {
      id: 'manual-entry',
      title: 'Manual Bank Details',
      description: 'Enter your bank details manually',
      features: ['Quick entry', 'Standard verification', 'May require additional documents'],
      icon: '✍️',
      popular: false
    }
  ];

  const banks = [
    'Commonwealth Bank', 'Westpac', 'ANZ', 'NAB', 'Bendigo Bank', 
    'Bank of Queensland', 'Suncorp Bank', 'ING', 'Macquarie Bank', 'Other'
  ];

  const accountTypes = ['Transaction/Savings', 'Credit Card', 'Business Account'];

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-wise-navy mb-4">
            Bank verification
          </h2>
          <p className="text-wise-gray text-lg">
            We need to verify your bank account to process your loan application safely and securely.
          </p>
        </div>

        {/* Method Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-wise-navy mb-6">
            Choose your verification method
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((method) => (
              <div
                key={method.id}
                onClick={() => setFormData({...formData, method: method.id})}
                className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                  formData.method === method.id
                    ? 'border-wise-green bg-wise-green/5'
                    : 'border-gray-200 hover:border-wise-green/50'
                }`}
              >
                {method.popular && (
                  <div className="absolute -top-2 left-4 bg-wise-green text-white text-xs px-3 py-1 rounded-full">
                    Recommended
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h4 className="text-lg font-semibold text-wise-navy mb-2">
                    {method.title}
                  </h4>
                  <p className="text-wise-gray text-sm mb-4">
                    {method.description}
                  </p>
                  
                  <ul className="text-xs text-wise-gray space-y-1">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <svg className="w-3 h-3 text-wise-green mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Method-specific content */}
        {formData.method === 'open-banking' && (
          <div className="bg-wise-lightblue rounded-xl p-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-wise-navy mb-4">
                Secure Open Banking Connection
              </h3>
              <p className="text-wise-gray mb-6">
                Connect your bank account securely through Open Banking. Your login credentials are never shared with us, 
                and the connection is protected by the same security standards as your online banking.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {banks.slice(0, 4).map((bank) => (
                  <button
                    key={bank}
                    onClick={() => setFormData({...formData, bankName: bank})}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      formData.bankName === bank
                        ? 'border-wise-green bg-white text-wise-navy'
                        : 'border-gray-200 bg-white text-wise-gray hover:border-wise-green/50'
                    }`}
                  >
                    <div className="text-sm font-medium">{bank}</div>
                  </button>
                ))}
              </div>
              
              <button className="bg-wise-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-wise-darkgreen transition-colors">
                Connect to {formData.bankName || 'your bank'}
              </button>
            </div>
          </div>
        )}

        {formData.method === 'bank-statements' && (
          <div className="bg-wise-lightblue rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-wise-navy mb-4">
              Upload Bank Statements
            </h3>
            <p className="text-wise-gray mb-6">
              Please upload your most recent 3 months of bank statements (PDF format).
            </p>
            
            <div className="border-2 border-dashed border-wise-green/50 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📄</div>
              <h4 className="text-lg font-semibold text-wise-navy mb-2">
                Drag and drop your files here
              </h4>
              <p className="text-wise-gray mb-4">
                or click to browse your files
              </p>
              <button className="bg-wise-green text-white px-6 py-2 rounded-lg hover:bg-wise-darkgreen transition-colors">
                Choose Files
              </button>
              <p className="text-xs text-wise-gray mt-4">
                Accepted formats: PDF • Max file size: 10MB each
              </p>
            </div>
          </div>
        )}

        {formData.method === 'manual-entry' && (
          <div className="bg-wise-lightblue rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-wise-navy mb-6">
              Enter Bank Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Bank name *
                </label>
                <select
                  value={formData.bankName}
                  onChange={(e) => setFormData({...formData, bankName: e.target.value})}
                  className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-wise-green focus:outline-none transition-colors"
                >
                  <option value="">Select your bank</option>
                  {banks.map(bank => (
                    <option key={bank} value={bank}>{bank}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Account type *
                </label>
                <select
                  value={formData.accountType}
                  onChange={(e) => setFormData({...formData, accountType: e.target.value})}
                  className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-wise-green focus:outline-none transition-colors"
                >
                  <option value="">Select account type</option>
                  {accountTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  BSB *
                </label>
                <input
                  type="text"
                  value={formData.bsb}
                  onChange={(e) => setFormData({...formData, bsb: e.target.value})}
                  className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-wise-green focus:outline-none transition-colors"
                  placeholder="123-456"
                  maxLength={7}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Account number *
                </label>
                <input
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                  className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-wise-green focus:outline-none transition-colors"
                  placeholder="12345678"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-wise-navy mb-2">
                  Account holder name *
                </label>
                <input
                  type="text"
                  value={formData.accountHolder}
                  onChange={(e) => setFormData({...formData, accountHolder: e.target.value})}
                  className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-wise-green focus:outline-none transition-colors"
                  placeholder="Full name as it appears on your account"
                />
              </div>
            </div>
          </div>
        )}

        {/* Security Info */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <div className="text-2xl mr-4">🔒</div>
            <div>
              <h4 className="text-lg font-semibold text-wise-navy mb-2">
                Your security is our priority
              </h4>
              <ul className="text-wise-gray text-sm space-y-1">
                <li>• 256-bit SSL encryption protects all data transmission</li>
                <li>• We never store your banking passwords or PINs</li>
                <li>• All connections are read-only for verification purposes</li>
                <li>• We comply with Australian banking security standards</li>
                <li>• You can disconnect access at any time through your bank</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm text-wise-gray">
            Step 4 of 6 - Bank Verification
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={onBack}
              className="border border-wise-navy text-wise-navy px-6 py-3 rounded-lg font-semibold hover:bg-wise-navy hover:text-white transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!formData.method}
              className="bg-wise-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-wise-darkgreen transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue to Centrelink Verification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankVerification;