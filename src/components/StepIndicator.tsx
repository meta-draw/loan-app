import React from 'react';

interface Step {
  id: string;
  title: string;
  description?: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: string;
  completedSteps: string[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, completedSteps }) => {
  const getStepStatus = (stepId: string) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  return (
    <div className="w-full bg-white border-b border-wise-gray200 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop view - horizontal layout */}
        <div className="hidden lg:block">
          <nav aria-label="Progress">
            <div className="relative flex items-center justify-between max-w-5xl mx-auto">
              {steps.map((step, index) => {
                const status = getStepStatus(step.id);
                const isLast = index === steps.length - 1;
                
                return (
                  <div key={step.id} className="relative flex flex-col items-center flex-1">
                    {/* Connection line to next step */}
                    {!isLast && (
                      <div className="absolute top-6 left-1/2 w-full h-0.5 bg-wise-gray200 z-0 transform translate-x-6">
                        <div className={`h-full transition-all duration-300 ${
                          status === 'completed' ? 'bg-wise-green w-full' : 'bg-wise-gray200 w-0'
                        }`}></div>
                      </div>
                    )}
                    
                    {/* Step circle */}
                    <div className={`relative w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold shadow-sm z-10 ${
                      status === 'completed' 
                        ? 'bg-wise-green text-white shadow-button' 
                        : status === 'current'
                        ? 'bg-wise-green text-white border-2 border-wise-green shadow-button'
                        : 'bg-white text-wise-content-tertiary border-2 border-wise-gray200'
                    }`}>
                      {status === 'completed' ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    
                    {/* Step text - fixed height container */}
                    <div className="mt-4 px-2 text-center">
                      <div className="h-12 flex flex-col justify-start">
                        <p className={`text-sm font-semibold leading-4 mb-1 ${
                          status === 'current' ? 'text-wise-content-primary' : status === 'completed' ? 'text-wise-content-primary' : 'text-wise-content-tertiary'
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-xs text-wise-content-tertiary font-medium leading-4">
                          {step.description || ''}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Tablet view - 2x3 grid */}
        <div className="hidden sm:block lg:hidden">
          <nav aria-label="Progress">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg mx-auto">
              {steps.map((step, index) => {
                const status = getStepStatus(step.id);
                
                return (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shadow-sm ${
                      status === 'completed' 
                        ? 'bg-wise-green text-white shadow-button' 
                        : status === 'current'
                        ? 'bg-wise-green text-white border-2 border-wise-green shadow-button'
                        : 'bg-white text-wise-content-tertiary border-2 border-wise-gray200'
                    }`}>
                      {status === 'completed' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    
                    <div className="mt-3 px-2 text-center">
                      <div className="h-12 flex flex-col justify-start">
                        <p className={`text-sm font-semibold leading-4 mb-1 ${
                          status === 'current' ? 'text-wise-content-primary' : status === 'completed' ? 'text-wise-content-primary' : 'text-wise-content-tertiary'
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-xs text-wise-content-tertiary font-medium leading-4">
                          {step.description || ''}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Mobile view - current step only */}
        <div className="block sm:hidden">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-2">
                {steps.map((step, index) => {
                  const status = getStepStatus(step.id);
                  return (
                    <div
                      key={step.id}
                      className={`w-2 h-2 rounded-full ${
                        status === 'completed' || status === 'current'
                          ? 'bg-wise-green'
                          : 'bg-wise-gray200'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold shadow-sm ${
                getStepStatus(currentStep) === 'completed' 
                  ? 'bg-wise-green text-white shadow-button' 
                  : 'bg-wise-green text-white border-2 border-wise-green shadow-button'
              }`}>
                {steps.findIndex(s => s.id === currentStep) + 1}
              </div>
              
              <div className="mt-3 text-center">
                <p className="text-base font-semibold text-wise-content-primary">
                  {steps.find(s => s.id === currentStep)?.title}
                </p>
                <p className="text-sm text-wise-content-secondary mt-1">
                  Step {steps.findIndex(s => s.id === currentStep) + 1} of {steps.length}
                </p>
                {steps.find(s => s.id === currentStep)?.description && (
                  <p className="text-sm text-wise-content-tertiary mt-2">
                    {steps.find(s => s.id === currentStep)?.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;