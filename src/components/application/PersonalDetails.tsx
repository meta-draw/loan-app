import React, { useState, useEffect } from 'react';
import { Button } from '../ui';
import { Select } from '../ui/Select';

interface PersonalDetailsProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ data, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    title: data.personalDetails?.title || '',
    firstName: data.personalDetails?.firstName || '',
    lastName: data.personalDetails?.lastName || '',
    dateOfBirth: data.personalDetails?.dateOfBirth || '',
    email: data.personalDetails?.email || '',
    mobile: data.personalDetails?.mobile || '',
    residentialStatus: data.personalDetails?.residentialStatus || '',
    address: {
      street: data.personalDetails?.address?.street || '',
      suburb: data.personalDetails?.address?.suburb || '',
      state: data.personalDetails?.address?.state || '',
      postcode: data.personalDetails?.address?.postcode || ''
    },
    timeAtAddress: data.personalDetails?.timeAtAddress || '',
    maritalStatus: data.personalDetails?.maritalStatus || '',
    dependents: data.personalDetails?.dependents || '0'
  });

  const [errors, setErrors] = useState<any>({});

  // Update form data when props change (for data restoration from localStorage)
  useEffect(() => {
    if (data.personalDetails) {
      setFormData({
        title: data.personalDetails.title || '',
        firstName: data.personalDetails.firstName || '',
        lastName: data.personalDetails.lastName || '',
        dateOfBirth: data.personalDetails.dateOfBirth || '',
        email: data.personalDetails.email || '',
        mobile: data.personalDetails.mobile || '',
        residentialStatus: data.personalDetails.residentialStatus || '',
        address: {
          street: data.personalDetails.address?.street || '',
          suburb: data.personalDetails.address?.suburb || '',
          state: data.personalDetails.address?.state || '',
          postcode: data.personalDetails.address?.postcode || ''
        },
        timeAtAddress: data.personalDetails.timeAtAddress || '',
        maritalStatus: data.personalDetails.maritalStatus || '',
        dependents: data.personalDetails.dependents || '0'
      });
    }
  }, [data.personalDetails]);

  const titles = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof'];
  const states = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];
  const residentialStatuses = [
    'Own with mortgage',
    'Own outright', 
    'Renting',
    'Living with parents/family',
    'Boarding',
    'Other'
  ];
  const maritalStatuses = ['Single', 'Married', 'De facto', 'Divorced', 'Separated', 'Widowed'];
  const timeAtAddressOptions = [
    'Less than 6 months',
    '6-12 months', 
    '1-2 years',
    '2-5 years',
    'More than 5 years'
  ];

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.residentialStatus) newErrors.residentialStatus = 'Residential status is required';
    if (!formData.address.street) newErrors.street = 'Street address is required';
    if (!formData.address.suburb) newErrors.suburb = 'Suburb is required';
    if (!formData.address.state) newErrors.state = 'State is required';
    if (!formData.address.postcode) newErrors.postcode = 'Postcode is required';
    if (!formData.timeAtAddress) newErrors.timeAtAddress = 'Time at address is required';
    if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Mobile validation (Australian format)
    const mobileRegex = /^04\d{8}$/;
    if (formData.mobile && !mobileRegex.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid Australian mobile number';
    }

    // Age validation (must be 18+)
    if (formData.dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(formData.dateOfBirth);
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        newErrors.dateOfBirth = 'You must be 18 or older to apply';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-wise-gray200 p-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-wise-forest-green mb-4">
            Personal details
          </h2>
          <p className="text-wise-content-secondary text-xl">
            We need some basic information to verify your identity and process your application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-base font-medium text-wise-forest-green mb-2">
                  Title *
                </label>
                <Select
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  error={!!errors.title}
                  options={[
                    { value: '', label: 'Select' },
                    ...titles.map(title => ({ value: title, label: title }))
                  ]}
                />
                {errors.title && <p className="text-wise-error text-sm mt-1">{errors.title}</p>}
              </div>
              
              <div>
                <label className="block text-base font-medium text-wise-forest-green mb-2">
                  First name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className={`w-full px-3 py-3 border-2 rounded-[10px] focus:outline-none transition-colors ${
                    errors.firstName ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
                  }`}
                />
                {errors.firstName && <p className="text-wise-error text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label className="block text-base font-medium text-wise-forest-green mb-2">
                  Last name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className={`w-full px-3 py-3 border-2 rounded-[10px] focus:outline-none transition-colors ${
                    errors.lastName ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
                  }`}
                />
                {errors.lastName && <p className="text-wise-error text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Contact details */}
            <div>
              <label className="block text-base font-medium text-wise-navy mb-2">
                Date of birth *
              </label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                className={`w-full px-3 py-3 border-2 rounded-[10px] focus:outline-none transition-colors ${
                  errors.dateOfBirth ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
                }`}
              />
              {errors.dateOfBirth && <p className="text-wise-error text-xs mt-1">{errors.dateOfBirth}</p>}
            </div>

            <div>
              <label className="block text-base font-medium text-wise-navy mb-2">
                Email address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-3 py-3 border-2 rounded-[10px] focus:outline-none transition-colors ${
                  errors.email ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-wise-error text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-base font-medium text-wise-navy mb-2">
                Mobile number *
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className={`w-full px-3 py-3 border-2 rounded-[10px] focus:outline-none transition-colors ${
                  errors.mobile ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
                }`}
                placeholder="04XX XXX XXX"
              />
              {errors.mobile && <p className="text-wise-error text-xs mt-1">{errors.mobile}</p>}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Address */}
            <div>
              <label className="block text-base font-medium text-wise-navy mb-2">
                Residential status *
              </label>
              <Select
                value={formData.residentialStatus}
                onChange={(e) => setFormData({...formData, residentialStatus: e.target.value})}
                error={!!errors.residentialStatus}
                options={[
                  { value: '', label: 'Select residential status' },
                  ...residentialStatuses.map(status => ({ value: status, label: status }))
                ]}
              />
              {errors.residentialStatus && <p className="text-wise-error text-xs mt-1">{errors.residentialStatus}</p>}
            </div>

            <div>
              <label className="block text-base font-medium text-wise-navy mb-2">
                Street address *
              </label>
              <input
                type="text"
                value={formData.address.street}
                onChange={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})}
                className={`w-full px-3 py-3 border-2 rounded-[10px] focus:outline-none transition-colors ${
                  errors.street ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
                }`}
                placeholder="123 Main Street"
              />
              {errors.street && <p className="text-wise-error text-xs mt-1">{errors.street}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-medium text-wise-forest-green mb-2">
                  Suburb *
                </label>
                <input
                  type="text"
                  value={formData.address.suburb}
                  onChange={(e) => setFormData({...formData, address: {...formData.address, suburb: e.target.value}})}
                  className={`w-full px-3 py-3 border-2 rounded-[10px] focus:outline-none transition-colors ${
                    errors.suburb ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
                  }`}
                />
                {errors.suburb && <p className="text-wise-error text-xs mt-1">{errors.suburb}</p>}
              </div>
              
              <div>
                <label className="block text-base font-medium text-wise-forest-green mb-2">
                  State *
                </label>
                <Select
                  value={formData.address.state}
                  onChange={(e) => setFormData({...formData, address: {...formData.address, state: e.target.value}})}
                  error={!!errors.state}
                  options={[
                    { value: '', label: 'State' },
                    ...states.map(state => ({ value: state, label: state }))
                  ]}
                />
                {errors.state && <p className="text-wise-error text-xs mt-1">{errors.state}</p>}
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-wise-navy mb-2">
                Postcode *
              </label>
              <input
                type="text"
                value={formData.address.postcode}
                onChange={(e) => setFormData({...formData, address: {...formData.address, postcode: e.target.value}})}
                className={`w-full px-3 py-3 border-2 rounded-[10px] focus:outline-none transition-colors ${
                  errors.postcode ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
                }`}
                placeholder="2000"
              />
              {errors.postcode && <p className="text-wise-error text-xs mt-1">{errors.postcode}</p>}
            </div>

            <div>
              <label className="block text-base font-medium text-wise-navy mb-2">
                Time at current address *
              </label>
              <Select
                value={formData.timeAtAddress}
                onChange={(e) => setFormData({...formData, timeAtAddress: e.target.value})}
                error={!!errors.timeAtAddress}
                options={[
                  { value: '', label: 'Select time period' },
                  ...timeAtAddressOptions.map(option => ({ value: option, label: option }))
                ]}
              />
              {errors.timeAtAddress && <p className="text-wise-error text-xs mt-1">{errors.timeAtAddress}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-medium text-wise-forest-green mb-2">
                  Marital status *
                </label>
                <Select
                  value={formData.maritalStatus}
                  onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})}
                  error={!!errors.maritalStatus}
                  options={[
                    { value: '', label: 'Select status' },
                    ...maritalStatuses.map(status => ({ value: status, label: status }))
                  ]}
                />
                {errors.maritalStatus && <p className="text-wise-error text-xs mt-1">{errors.maritalStatus}</p>}
              </div>
              
              <div>
                <label className="block text-base font-medium text-wise-forest-green mb-2">
                  Number of dependents
                </label>
                <Select
                  value={formData.dependents}
                  onChange={(e) => setFormData({...formData, dependents: e.target.value})}
                  error={false}
                  options={[0,1,2,3,4,5].map(num => ({ value: num.toString(), label: num.toString() }))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-wise-gray200">
          <div className="text-sm text-wise-content-secondary">
            Step 2 of 6 - Personal Details
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
              Continue to Income & Expenses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;