import React from 'react';
import { Card } from './ui';

interface SpendingCategory {
  name: string;
  amount: number;
  percentage: number;
  color: string;
  icon: React.ReactNode;
}

interface SpendingInsightsProps {
  className?: string;
}

const SpendingInsights: React.FC<SpendingInsightsProps> = ({ className = '' }) => {
  const categories: SpendingCategory[] = [
    {
      name: 'Groceries',
      amount: 450,
      percentage: 25,
      color: 'bg-wise-bright-green',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: 'Transport',
      amount: 320,
      percentage: 18,
      color: 'bg-wise-purple',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      name: 'Entertainment',
      amount: 250,
      percentage: 14,
      color: 'bg-yellow-500',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
        </svg>
      )
    },
    {
      name: 'Bills & Utilities',
      amount: 580,
      percentage: 32,
      color: 'bg-wise-forest-green',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Other',
      amount: 200,
      percentage: 11,
      color: 'bg-wise-gray400',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      )
    }
  ];

  const totalSpending = categories.reduce((sum, cat) => sum + cat.amount, 0);

  return (
    <Card size="large" className={`${className}`}>
      <div className="space-y-6">
        <div>
          <h3 className="text-wise-heading-3 font-bold text-wise-content-primary mb-2">
            Spending Insights
          </h3>
          <p className="text-wise-body-large text-wise-content-secondary">
            Your spending breakdown for this month
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <span className="text-wise-body-large-bold text-wise-content-primary">
              Total Spent
            </span>
            <span className="text-wise-heading-2 font-bold text-wise-content-primary">
              ${totalSpending.toLocaleString()}
            </span>
          </div>

          <div className="h-4 bg-wise-gray100 rounded-full overflow-hidden flex">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} transition-all duration-500`}
                style={{ width: `${category.percentage}%` }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${category.color} bg-opacity-10 rounded-wise-small flex items-center justify-center`}>
                  <div className={`${category.color.replace('bg-', 'text-')}`}>
                    {category.icon}
                  </div>
                </div>
                <div>
                  <p className="text-wise-body-large-bold text-wise-content-primary">
                    {category.name}
                  </p>
                  <p className="text-wise-body-small text-wise-content-tertiary">
                    {category.percentage}% of total
                  </p>
                </div>
              </div>
              <span className="text-wise-body-large-bold text-wise-content-primary">
                ${category.amount}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-wise-gray200">
          <div className="bg-wise-lightblue rounded-wise-medium p-4">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-wise-bright-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-wise-body-large-bold text-wise-content-primary mb-1">
                  Budgeting Tip
                </p>
                <p className="text-wise-body-default text-wise-content-secondary">
                  You're spending 32% on bills. Consider reviewing your subscriptions to save money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SpendingInsights;