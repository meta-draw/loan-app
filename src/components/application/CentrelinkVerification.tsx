import React, { useState } from 'react';

interface CentrelinkVerificationProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const CentrelinkVerification: React.FC<CentrelinkVerificationProps> = ({ data, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    receivesBenefits: data.centrelinkVerification?.receivesBenefits || '',
    benefitTypes: data.centrelinkVerification?.benefitTypes || [],
    crnNumber: data.centrelinkVerification?.crnNumber || '',
    verificationMethod: data.centrelinkVerification?.verificationMethod || ''
  });

  const benefitOptions = [
    'JobSeeker Payment',
    'Disability Support Pension',
    'Age Pension',
    'Parenting Payment',
    'Carer Payment',
    'Youth Allowance',
    'Austudy',
    'Family Tax Benefit',
    'Child Care Subsidy',
    'Other'
  ];

  const handleBenefitChange = (benefit: string) => {
    const newBenefits = formData.benefitTypes.includes(benefit)
      ? formData.benefitTypes.filter((b: string) => b !== benefit)
      : [...formData.benefitTypes, benefit];
    
    setFormData({...formData, benefitTypes: newBenefits});
  };

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-wise-gray200 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-wise-navy mb-4">
            Centrelink verification
          </h2>
          <p className="text-wise-gray text-lg">
            If you receive government benefits, we can verify your income through Centrelink for a faster application process.
          </p>
        </div>

        {/* Benefits Question */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-wise-navy mb-6">
            Do you currently receive any Centrelink benefits?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setFormData({...formData, receivesBenefits: 'yes'})}
              className={`p-6 rounded-xl border-2 text-left transition-colors ${
                formData.receivesBenefits === 'yes'
                  ? 'border-wise-green bg-wise-green/5'
                  : 'border-wise-gray200 hover:border-wise-green/50'
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">✅</div>
                <div className="text-lg font-semibold text-wise-navy">Yes, I receive benefits</div>
              </div>
              <p className="text-wise-gray text-sm">
                I currently receive Centrelink payments and would like to verify my income through myGov.
              </p>
            </button>

            <button
              onClick={() => setFormData({...formData, receivesBenefits: 'no', benefitTypes: [], crnNumber: '', verificationMethod: ''})}
              className={`p-6 rounded-xl border-2 text-left transition-colors ${
                formData.receivesBenefits === 'no'
                  ? 'border-wise-green bg-wise-green/5'
                  : 'border-wise-gray200 hover:border-wise-green/50'
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">❌</div>
                <div className="text-lg font-semibold text-wise-navy">No, I don't receive benefits</div>
              </div>
              <p className="text-wise-gray text-sm">
                I don't currently receive any Centrelink payments or government benefits.
              </p>
            </button>
          </div>
        </div>

        {/* Benefits Details */}
        {formData.receivesBenefits === 'yes' && (
          <>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-wise-navy mb-6">
                Which benefits do you receive?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {benefitOptions.map((benefit) => (
                  <button
                    key={benefit}
                    onClick={() => handleBenefitChange(benefit)}
                    className={`p-4 rounded-lg border-2 text-left transition-colors ${
                      formData.benefitTypes.includes(benefit)
                        ? 'border-wise-green bg-wise-green/5 text-wise-navy'
                        : 'border-wise-gray200 hover:border-wise-green/50 text-wise-gray'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                        formData.benefitTypes.includes(benefit)
                          ? 'border-wise-green bg-wise-green'
                          : 'border-wise-gray200'
                      }`}>
                        {formData.benefitTypes.includes(benefit) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CRN Number */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-wise-navy mb-4">
                Customer Reference Number (CRN)
              </h3>
              <p className="text-wise-gray mb-4">
                Your CRN is found on any Centrelink letter or in your myGov account.
              </p>
              
              <div>
                <input
                  type="text"
                  value={formData.crnNumber}
                  onChange={(e) => setFormData({...formData, crnNumber: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-lg focus:border-wise-green focus:outline-none transition-colors text-lg font-mono"
                  placeholder="123 456 789A"
                  maxLength={12}
                />
                <p className="text-xs text-wise-gray mt-2">
                  Format: 9 digits followed by 1 letter (e.g., 123456789A)
                </p>
              </div>
            </div>

            {/* Verification Method */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-wise-navy mb-6">
                How would you like to verify your benefits?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => setFormData({...formData, verificationMethod: 'mygov'})}
                  className={`p-6 rounded-xl border-2 text-left transition-colors ${
                    formData.verificationMethod === 'mygov'
                      ? 'border-wise-green bg-wise-green/5'
                      : 'border-wise-gray200 hover:border-wise-green/50'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">🌐</div>
                    <div>
                      <div className="text-lg font-semibold text-wise-navy">myGov Connection</div>
                      <div className="text-sm text-wise-green font-medium">Recommended</div>
                    </div>
                  </div>
                  <p className="text-wise-gray text-sm mb-4">
                    Connect securely through myGov to verify your benefits instantly.
                  </p>
                  <ul className="text-xs text-wise-gray space-y-1">
                    <li>• Instant verification</li>
                    <li>• Secure connection</li>
                    <li>• No manual entry required</li>
                  </ul>
                </button>

                <button
                  onClick={() => setFormData({...formData, verificationMethod: 'documents'})}
                  className={`p-6 rounded-xl border-2 text-left transition-colors ${
                    formData.verificationMethod === 'documents'
                      ? 'border-wise-green bg-wise-green/5'
                      : 'border-wise-gray200 hover:border-wise-green/50'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">📄</div>
                    <div>
                      <div className="text-lg font-semibold text-wise-navy">Upload Documents</div>
                      <div className="text-sm text-wise-gray">Alternative option</div>
                    </div>
                  </div>
                  <p className="text-wise-gray text-sm mb-4">
                    Upload your recent Centrelink payment summary or letter.
                  </p>
                  <ul className="text-xs text-wise-gray space-y-1">
                    <li>• Upload PDF documents</li>
                    <li>• Manual review process</li>
                    <li>• May take longer to verify</li>
                  </ul>
                </button>
              </div>
            </div>

            {/* Document Upload */}
            {formData.verificationMethod === 'documents' && (
              <div className="bg-wise-lightblue rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-wise-navy mb-4">
                  Upload Centrelink Documents
                </h4>
                <p className="text-wise-gray mb-6">
                  Please upload a recent Centrelink payment summary, letter, or statement (last 3 months).
                </p>
                
                <div className="border-2 border-dashed border-wise-green/50 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">📄</div>
                  <h5 className="text-lg font-semibold text-wise-navy mb-2">
                    Drag and drop your files here
                  </h5>
                  <p className="text-wise-gray mb-4">
                    or click to browse your files
                  </p>
                  <button className="btn-wise-primary">
                    Choose Files
                  </button>
                  <p className="text-xs text-wise-gray mt-4">
                    Accepted formats: PDF, JPG, PNG • Max file size: 10MB
                  </p>
                </div>
              </div>
            )}

            {/* myGov Connection */}
            {formData.verificationMethod === 'mygov' && (
              <div className="bg-wise-lightblue rounded-xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h4 className="text-xl font-semibold text-wise-navy mb-4">
                    Connect to myGov
                  </h4>
                  <p className="text-wise-gray mb-6">
                    You'll be securely redirected to myGov to verify your Centrelink benefits. 
                    Your login credentials are never shared with us.
                  </p>
                  
                  <button className="btn-wise-primary">
                    Connect to myGov
                  </button>
                  
                  <div className="mt-6 text-xs text-wise-gray">
                    <p>• Secure connection protected by government-grade encryption</p>
                    <p>• We only access the information needed for loan verification</p>
                    <p>• You can disconnect access at any time through myGov</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* No Benefits Selected */}
        {formData.receivesBenefits === 'no' && (
          <div className="bg-wise-gray50 rounded-xl p-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👍</div>
              <h4 className="text-xl font-semibold text-wise-navy mb-4">
                No problem!
              </h4>
              <p className="text-wise-gray">
                Since you don't receive Centrelink benefits, we'll rely on your employment income 
                and bank verification for your loan assessment. You can proceed to the next step.
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-wise-gray200">
          <div className="text-sm text-wise-gray">
            Step 5 of 6 - Centrelink Verification
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={onBack}
              className="btn-wise-secondary"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!formData.receivesBenefits}
              className="btn-wise-primary disabled:bg-wise-gray200 disabled:cursor-not-allowed"
            >
              Continue to Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentrelinkVerification;