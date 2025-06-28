import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/ui';

const Estimate: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    repaymentAbility: '',
    incomeFeeling: '',
    missedPayments: '',
    governmentBenefits: '',
    email: ''
  });

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Instead of showing alert, navigate to application like Apply Now
    navigate('/application', {
      state: {
        fromEstimate: true,
        estimateData: formData
      }
    });
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1: return formData.repaymentAbility !== '';
      case 2: return formData.incomeFeeling !== '';
      case 3: return formData.missedPayments !== '';
      case 4: return formData.governmentBenefits !== '';
      case 5: return formData.email !== '';
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-wise-neutral-bg">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wise-lightblue to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-wise-heading-1 lg:text-wise-display-medium font-bold text-wise-navy mb-6">
            Get your borrowing estimate
          </h1>
          <p className="text-wise-title-body text-wise-gray leading-relaxed">
            Answer a few quick questions to get an estimate of how much you could borrow with Middlepay.
            It only takes a few minutes and won't affect your credit score.
          </p>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card size="large" className="p-8">
            <div className="mb-8">
              <h2 className="text-wise-heading-1 font-bold text-wise-navy mb-4">
                Loan Estimate
              </h2>
              <p className="text-wise-gray text-wise-body-large leading-relaxed">
                Please answer the following questions based on your current financial situation. 
                It'll only take a few minutes, and because we keep things quick and simple, 
                you don't need to worry about any paperwork or credit checks.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-wise-body-large-bold text-wise-navy">
                  {currentStep} / 5
                </span>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full ${
                        step <= currentStep ? 'bg-wise-bright-green' : 'bg-wise-gray200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-wise-title-section font-semibold text-wise-navy">
                  How well are you able to keep up with repaying your loans and debt?
                </h3>
                <div className="space-y-3">
                  {['Not well', 'Moderately well', 'Very well'].map((option) => (
                    <label key={option} className="flex items-center p-4 border border-wise-gray200 rounded-[10px] cursor-pointer hover:border-wise-green transition-colors">
                      <input
                        type="radio"
                        name="repaymentAbility"
                        value={option}
                        checked={formData.repaymentAbility === option}
                        onChange={(e) => setFormData({...formData, repaymentAbility: e.target.value})}
                        className="mr-3"
                      />
                      <span className="text-wise-navy">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-wise-title-section font-semibold text-wise-navy">
                  How do you feel about your current income?
                </h3>
                <div className="space-y-3">
                  {["It's okay", 'I could do with more', "I'm satisfied"].map((option) => (
                    <label key={option} className="flex items-center p-4 border border-wise-gray200 rounded-[10px] cursor-pointer hover:border-wise-green transition-colors">
                      <input
                        type="radio"
                        name="incomeFeeling"
                        value={option}
                        checked={formData.incomeFeeling === option}
                        onChange={(e) => setFormData({...formData, incomeFeeling: e.target.value})}
                        className="mr-3"
                      />
                      <span className="text-wise-navy">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-wise-title-section font-semibold text-wise-navy">
                  How often do you miss payments?
                </h3>
                <div className="space-y-3">
                  {['Rarely', 'Sometimes', 'More often than not'].map((option) => (
                    <label key={option} className="flex items-center p-4 border border-wise-gray200 rounded-[10px] cursor-pointer hover:border-wise-green transition-colors">
                      <input
                        type="radio"
                        name="missedPayments"
                        value={option}
                        checked={formData.missedPayments === option}
                        onChange={(e) => setFormData({...formData, missedPayments: e.target.value})}
                        className="mr-3"
                      />
                      <span className="text-wise-navy">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-wise-title-section font-semibold text-wise-navy">
                  How much of your weekly income is from government benefits?
                </h3>
                <div className="space-y-3">
                  {['None', 'Less than half', 'More than half'].map((option) => (
                    <label key={option} className="flex items-center p-4 border border-wise-gray200 rounded-[10px] cursor-pointer hover:border-wise-green transition-colors">
                      <input
                        type="radio"
                        name="governmentBenefits"
                        value={option}
                        checked={formData.governmentBenefits === option}
                        onChange={(e) => setFormData({...formData, governmentBenefits: e.target.value})}
                        className="mr-3"
                      />
                      <span className="text-wise-navy">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <h3 className="text-wise-title-section font-semibold text-wise-navy">
                  Enter your email to proceed to your loan estimate
                </h3>
                <div>
                  <label className="block text-wise-body-large-bold text-wise-navy mb-2">
                    Your email address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-green focus:outline-none"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="bg-wise-gray50 p-4 rounded-[10px] text-wise-body-default text-wise-gray">
                  <p>
                    By clicking the button below I agree to receive marketing communications 
                    and consent to the collection, use, and disclosure of my personal information 
                    in accordance with our Privacy Policy. I understand I can unsubscribe at any time.
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevStep}
                variant="secondary"
                size="medium"
                disabled={currentStep === 1}
                className={currentStep === 1 ? 'invisible' : ''}
              >
                Previous
              </Button>
              
              {currentStep < 5 ? (
                <Button
                  onClick={handleNextStep}
                  variant="primary"
                  size="medium"
                  disabled={!isStepComplete(currentStep)}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  variant="primary"
                  size="medium"
                  disabled={!isStepComplete(currentStep)}
                >
                  Get Estimate & Apply
                </Button>
              )}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Estimate;