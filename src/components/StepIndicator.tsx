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
    <div className="w-full bg-white border-b border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between">
            {steps.map((step, index) => {
              const status = getStepStatus(step.id);
              const isLast = index === steps.length - 1;
              
              return (
                <li key={step.id} className={`flex-1 ${!isLast ? 'pr-8 sm:pr-20' : ''} relative`}>
                  {!isLast && (
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className={`h-0.5 w-full ${
                        completedSteps.includes(step.id) ? 'bg-wise-green' : 'bg-gray-200'
                      }`} />
                    </div>
                  )}
                  
                  <div className="relative flex items-center group">
                    <span className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      status === 'completed' 
                        ? 'bg-wise-green text-white' 
                        : status === 'current'
                        ? 'bg-wise-green text-white border-2 border-wise-green'
                        : 'bg-white text-gray-500 border-2 border-gray-300'
                    }`}>
                      {status === 'completed' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </span>
                    
                    <div className="ml-4 min-w-0 hidden sm:block">
                      <p className={`text-sm font-medium ${
                        status === 'current' ? 'text-wise-navy' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </p>
                      {step.description && (
                        <p className="text-xs text-gray-400">{step.description}</p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
        
        {/* Mobile step indicator */}
        <div className="mt-4 block sm:hidden">
          <p className="text-sm font-medium text-wise-navy">
            Step {steps.findIndex(s => s.id === currentStep) + 1} of {steps.length}: {' '}
            {steps.find(s => s.id === currentStep)?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;