import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from './ui';

const BorrowEstimate: React.FC = () => {
  const navigate = useNavigate();

  const handleStartEstimate = () => {
    navigate('/estimate');
  };

  return (
    <section className="py-20 bg-wise-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-wise-heading-1 lg:text-wise-display-medium font-bold text-wise-navy mb-4">
            Get your borrowing estimate
          </h2>
          {/* <p className="text-wise-title-section text-wise-gray max-w-3xl mx-auto">
            Up to $5,000 with competitive rates to cover unexpected costs - 
            find out how much you could borrow with our Middlepay service.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card size="small" className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-wise-title-body font-semibold text-wise-navy mb-2">
              Funds in 60 Seconds
            </h3>
            <p className="text-wise-gray text-wise-body-large">
              Lightning-fast transfers directly to your account
            </p>
          </Card>

          <Card size="small" className="text-center">
            <div className="text-4xl mb-4">🇦🇺</div>
            <h3 className="text-wise-title-body font-semibold text-wise-navy mb-2">
              Australian Owned
            </h3>
            <p className="text-wise-gray text-wise-body-large">
              Proudly Australian company supporting local communities
            </p>
          </Card>

          <Card size="small" className="text-center">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-wise-title-body font-semibold text-wise-navy mb-2">
              Simple Fees
            </h3>
            <p className="text-wise-gray text-wise-body-large">
              Transparent pricing with no hidden charges or surprises
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleStartEstimate}
            variant="primary"
            size="large"
          >
            Start Your Estimate
          </Button>
          <div className="flex items-center justify-center mt-4">
            <svg className="w-6 h-6 text-wise-bright-green mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <p className="text-wise-navy font-medium text-wise-body-large">
              Secure & fast, 5-minute application
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BorrowEstimate;