import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/ui';

const SimpleApplication: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const initialAmount = location.state?.loanData?.amount || 1000;
  
  const [formData, setFormData] = useState({
    amount: initialAmount,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    employmentStatus: 'full-time',
    income: '',
    purpose: 'personal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-wise-neutral-bg py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card size="large" className="text-center">
            <div className="w-20 h-20 bg-wise-bright-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-wise-heading-2 font-bold text-wise-content-primary mb-4">
              Application Submitted!
            </h1>
            <p className="text-wise-body-large text-wise-content-secondary mb-6">
              Your application for ${formData.amount} has been received. 
              You'll get an instant decision in your email within 60 seconds.
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => navigate('/')}
                variant="primary"
                size="large"
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wise-neutral-bg py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-wise-heading-1 font-bold text-wise-content-primary mb-4">
            Apply for ${formData.amount}
          </h1>
          <p className="text-wise-body-large text-wise-content-secondary">
            Quick 5-minute application. Instant decision. 60-second funding.
          </p>
        </div>

        <Card size="large">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Loan Amount */}
            <div>
              <label className="block text-wise-body-large-bold text-wise-content-primary mb-2">
                How much do you need?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-wise-content-secondary">$</span>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  min="500"
                  max="5000"
                  step="100"
                  required
                  className="w-full pl-8 pr-4 py-3 text-xl font-semibold border-2 border-wise-gray200 rounded-[10px] focus:border-wise-bright-green focus:outline-none"
                />
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={formData.amount}
                onChange={(e) => setFormData(prev => ({ ...prev, amount: parseInt(e.target.value) }))}
                className="w-full mt-2"
              />
              <div className="flex justify-between text-sm text-wise-content-tertiary mt-1">
                <span>$500</span>
                <span>$5,000</span>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-wise-body-large-bold text-wise-content-primary mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-bright-green focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-wise-body-large-bold text-wise-content-primary mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-bright-green focus:outline-none"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-wise-body-large-bold text-wise-content-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-bright-green focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-wise-body-large-bold text-wise-content-primary mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-bright-green focus:outline-none"
                />
              </div>
            </div>

            {/* Employment & Income */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-wise-body-large-bold text-wise-content-primary mb-2">
                  Employment Status
                </label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-bright-green focus:outline-none"
                >
                  <option value="full-time">Full-time employed</option>
                  <option value="part-time">Part-time employed</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="benefits">Government benefits</option>
                </select>
              </div>
              <div>
                <label className="block text-wise-body-large-bold text-wise-content-primary mb-2">
                  Monthly Income
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-wise-content-secondary">$</span>
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-8 pr-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-bright-green focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-wise-body-large-bold text-wise-content-primary mb-2">
                What's this loan for?
              </label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px] focus:border-wise-bright-green focus:outline-none"
              >
                <option value="personal">Personal expense</option>
                <option value="emergency">Emergency</option>
                <option value="education">Education</option>
                <option value="dental">Dental</option>
                <option value="furniture">Furniture</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Terms */}
            <div className="bg-wise-lightblue rounded-[10px] p-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-wise-bright-green focus:ring-wise-bright-green border-wise-gray300 rounded"
                />
                <span className="text-wise-body-default text-wise-content-secondary">
                  I agree to the terms and conditions and privacy policy. 
                  I understand this is a credit application and my credit will be checked.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="large"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Get Instant Decision'}
            </Button>

            <p className="text-wise-body-small text-wise-content-tertiary text-center">
              5.95% fixed fee • Instant approval • 60-second funding
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SimpleApplication;