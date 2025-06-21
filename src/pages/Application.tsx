import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StepIndicator from '../components/StepIndicator';
import LoanDetails from '../components/application/LoanDetails';
import PersonalDetails from '../components/application/PersonalDetails';
import IncomeExpenses from '../components/application/IncomeExpenses';
import BankVerification from '../components/application/BankVerification';
import CentrelinkVerification from '../components/application/CentrelinkVerification';
import ConfirmSubmit from '../components/application/ConfirmSubmit';

const Application: React.FC = () => {
  const location = useLocation();
  
  // Get initial loan data from navigation state (if coming from calculator)
  const initialLoanData = location.state?.loanData || {
    amount: 10000,
    term: 12,
    purpose: 'personal'
  };

  const [currentStep, setCurrentStep] = useState('loan-details');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [applicationData, setApplicationData] = useState({
    loanDetails: initialLoanData,
    personalDetails: {},
    incomeExpenses: {},
    bankVerification: {},
    centrelinkVerification: {},
  });

  const steps = [
    { id: 'loan-details', title: 'Loan Details', description: 'Loan amount and purpose' },
    { id: 'personal-details', title: 'Personal Details', description: 'Your information' },
    { id: 'income-expenses', title: 'Income & Expenses', description: 'Financial situation' },
    { id: 'bank-verification', title: 'Bank Verification', description: 'Connect your bank' },
    { id: 'centrelink-verification', title: 'Centrelink Verification', description: 'Government benefits' },
    { id: 'confirm-submit', title: 'Confirm & Submit', description: 'Review and submit' },
  ];

  const handleNext = (stepData: any) => {
    // Update application data
    setApplicationData(prev => ({
      ...prev,
      [currentStep.replace('-', '')]: stepData
    }));

    // Mark current step as completed
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps(prev => [...prev, currentStep]);
    }

    // Move to next step
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  // const handleStepClick = (stepId: string) => {
  //   // Allow navigation to completed steps or current step
  //   if (completedSteps.includes(stepId) || stepId === currentStep) {
  //     setCurrentStep(stepId);
  //   }
  // };

  const renderCurrentStep = () => {
    const commonProps = {
      data: applicationData,
      onNext: handleNext,
      onBack: handleBack,
      isFirstStep: currentStep === 'loan-details',
      isLastStep: currentStep === 'confirm-submit'
    };

    switch (currentStep) {
      case 'loan-details':
        return <LoanDetails {...commonProps} />;
      case 'personal-details':
        return <PersonalDetails {...commonProps} />;
      case 'income-expenses':
        return <IncomeExpenses {...commonProps} />;
      case 'bank-verification':
        return <BankVerification {...commonProps} />;
      case 'centrelink-verification':
        return <CentrelinkVerification {...commonProps} />;
      case 'confirm-submit':
        return <ConfirmSubmit {...commonProps} />;
      default:
        return <LoanDetails {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StepIndicator 
        steps={steps} 
        currentStep={currentStep} 
        completedSteps={completedSteps}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default Application;