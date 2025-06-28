import React from 'react';
import { Card } from './ui';

interface FundoScoreProps {
  score?: number;
  maxScore?: number;
  className?: string;
}

const FundoScore: React.FC<FundoScoreProps> = ({ 
  score = 650, 
  maxScore = 1000,
  className = '' 
}) => {
  const percentage = (score / maxScore) * 100;
  
  const getScoreColor = () => {
    if (percentage >= 80) return 'text-wise-success';
    if (percentage >= 60) return 'text-wise-bright-green';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-wise-error';
  };

  const getScoreLevel = () => {
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Fair';
    return 'Building';
  };

  return (
    <Card size="small" className={`${className}`}>
      <div className="text-center">
        <h3 className="text-wise-heading-3 font-bold text-wise-content-primary mb-4">
          Your Fundo Score
        </h3>
        
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-wise-gray200"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)}`}
              className={`${getScoreColor()} transition-all duration-1000 ease-out`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <div className={`text-wise-heading-1 font-bold ${getScoreColor()}`}>
                {score}
              </div>
              <div className="text-wise-body-default text-wise-content-tertiary">
                of {maxScore}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <span className={`text-wise-title-body font-bold ${getScoreColor()}`}>
            {getScoreLevel()} Score
          </span>
        </div>

        <div className="space-y-3 text-left">
          <h4 className="text-wise-body-large-bold text-wise-content-primary">
            Improve your score by:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-wise-bright-green mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-wise-body-default text-wise-content-secondary">
                Making payments on time
              </span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-wise-bright-green mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-wise-body-default text-wise-content-secondary">
                Paying early for bonus points
              </span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-wise-bright-green mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-wise-body-default text-wise-content-secondary">
                Referring friends to Fundo
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-4 pt-4 border-t border-wise-gray200">
          <p className="text-wise-body-small text-wise-content-tertiary">
            Higher scores unlock better rates and faster approvals
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FundoScore;