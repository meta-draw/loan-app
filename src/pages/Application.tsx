import React, { useState, useEffect } from 'react';
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

  const [currentStep, setCurrentStep] = useState(() => {
    try {
      return localStorage.getItem('middlepay-current-step') || 'loan-details';
    } catch {
      return 'loan-details';
    }
  });
  
  const [completedSteps, setCompletedSteps] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('middlepay-completed-steps');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  
  const [applicationData, setApplicationData] = useState(() => {
    try {
      const savedData = localStorage.getItem('middlepay-application-data');
      
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        // Merge with initial loan data if coming from calculator
        return {
          ...parsedData,
          loanDetails: { ...parsedData.loanDetails, ...initialLoanData }
        };
      }
      
      return {
        loanDetails: initialLoanData,
        personalDetails: {},
        incomeExpenses: {},
        bankVerification: {},
        centrelinkVerification: {},
      };
    } catch (error) {
      console.error('Error loading saved application data:', error);
      return {
        loanDetails: initialLoanData,
        personalDetails: {},
        incomeExpenses: {},
        bankVerification: {},
        centrelinkVerification: {},
      };
    }
  });

  const steps = [
    { id: 'loan-details', title: 'Loan Details', description: 'Loan amount and purpose' },
    { id: 'personal-details', title: 'Personal Details', description: 'Your information' },
    { id: 'income-expenses', title: 'Income & Expenses', description: 'Financial situation' },
    { id: 'bank-verification', title: 'Bank Verification', description: 'Connect your bank' },
    { id: 'centrelink-verification', title: 'Centrelink Verification', description: 'Government benefits' },
    { id: 'confirm-submit', title: 'Confirm & Submit', description: 'Review and submit' },
  ];

  // Save data to localStorage whenever applicationData changes
  useEffect(() => {
    try {
      localStorage.setItem('middlepay-application-data', JSON.stringify(applicationData));
    } catch (error) {
      console.error('Error saving application data:', error);
    }
  }, [applicationData]);

  // Save current step to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('middlepay-current-step', currentStep);
    } catch (error) {
      console.error('Error saving current step:', error);
    }
  }, [currentStep]);

  // Save completed steps to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('middlepay-completed-steps', JSON.stringify(completedSteps));
    } catch (error) {
      console.error('Error saving completed steps:', error);
    }
  }, [completedSteps]);

  const handleNext = (stepData: any) => {
    // Fix the key mapping issue: convert 'loan-details' to 'loanDetails' properly
    const stepKey = currentStep.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    
    // Update application data
    setApplicationData((prev: any) => ({
      ...prev,
      [stepKey]: stepData
    }));

    // Mark current step as completed
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps((prev: string[]) => [...prev, currentStep]);
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

  // Clear saved application data (call this when application is successfully submitted)
  const clearSavedData = () => {
    try {
      localStorage.removeItem('middlepay-application-data');
      localStorage.removeItem('middlepay-current-step');
      localStorage.removeItem('middlepay-completed-steps');
    } catch (error) {
      console.error('Error clearing saved application data:', error);
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
      onSubmitSuccess: clearSavedData, // Add this for the final step
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
    <div className="min-h-screen bg-wise-neutral-bg">
      <StepIndicator 
        steps={steps} 
        currentStep={currentStep} 
        completedSteps={completedSteps}
      />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default Application;