import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from './ui';

const LoanPurposes: React.FC = () => {
  const navigate = useNavigate();

  const purposes = [
    {
      icon: '🚗',
      title: 'Car expenses',
      description: 'Repairs, registration, or unexpected car costs',
      examples: ['Car repairs', 'Registration', 'Insurance', 'Emergency breakdown']
    },
    {
      icon: '🏠',
      title: 'Home improvements',
      description: 'Make your house a home with renovations',
      examples: ['Kitchen renovation', 'Bathroom upgrade', 'Painting', 'Garden landscaping']
    },
    {
      icon: '💊',
      title: 'Medical expenses',
      description: 'Health costs that can\'t wait',
      examples: ['Dental work', 'Medical procedures', 'Prescriptions', 'Therapy sessions']
    },
    {
      icon: '📱',
      title: 'Technology',
      description: 'Stay connected with the latest tech',
      examples: ['New laptop', 'Phone upgrade', 'Gaming setup', 'Work equipment']
    },
    {
      icon: '🎓',
      title: 'Education',
      description: 'Invest in your future with learning',
      examples: ['Course fees', 'Training programs', 'Certification', 'Study materials']
    },
    {
      icon: '💳',
      title: 'Debt consolidation',
      description: 'Simplify multiple payments into one',
      examples: ['Credit card debt', 'Multiple loans', 'Store cards', 'Personal debts']
    },
    {
      icon: '✈️',
      title: 'Travel & holidays',
      description: 'Life\'s too short not to explore',
      examples: ['Family holiday', 'Weekend getaway', 'Flight tickets', 'Accommodation']
    },
    {
      icon: '🎉',
      title: 'Special occasions',
      description: 'Celebrate life\'s important moments',
      examples: ['Wedding expenses', 'Birthday party', 'Anniversary', 'Family events']
    }
  ];

  const handleApplyNow = (purpose: string) => {
    navigate('/application', { 
      state: { 
        loanData: { 
          amount: 2000, 
          term: 12,
          purpose: purpose.toLowerCase().replace(/\s+/g, '-')
        } 
      } 
    });
  };

  return (
    <section className="py-20 bg-wise-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-wise-heading-1 lg:text-wise-display-medium font-bold text-wise-navy mb-4">
            What do you need a loan for?
          </h2>
          <p className="text-wise-title-section text-wise-gray max-w-3xl mx-auto">
            Whether it's planned or unexpected, we're here to help with life's expenses. 
            Here are some of the most common reasons our customers apply for loans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((purpose, index) => (
            <Card 
              key={index}
              size="small"
              interactive={true}
              onClick={() => handleApplyNow(purpose.title)}
              className="group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{purpose.icon}</div>
                <h3 className="text-wise-title-body font-semibold text-wise-navy mb-2 group-hover:text-wise-forest-green transition-colors">
                  {purpose.title}
                </h3>
                <p className="text-wise-gray text-wise-body-large mb-4 leading-relaxed">
                  {purpose.description}
                </p>
                <div className="text-wise-body-default text-wise-gray">
                  <p className="font-medium mb-1">Popular for:</p>
                  <ul className="space-y-1">
                    {purpose.examples.slice(0, 2).map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-wise-gray mb-6 text-wise-title-body">
            Don't see your reason listed? No problem! We offer loans for almost any legal purpose.
          </p>
          <Button 
            onClick={() => handleApplyNow('other')}
            variant="primary"
            size="large"
          >
            Apply for any purpose
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoanPurposes;