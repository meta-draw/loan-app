import React from 'react';
import { Button } from './ui';

interface BorrowingWarningModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onContinue: () => void;
}

const BorrowingWarningModal: React.FC<BorrowingWarningModalProps> = ({
  isOpen,
  onCancel,
  onContinue
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onCancel}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-3xl shadow-xl max-h-[90vh] overflow-hidden">
        <div className="p-8 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-wise-heading-2 font-semibold text-wise-content-primary">
                Warning about Borrowing
              </h2>
            </div>
            
            <h3 className="text-wise-title-body font-semibold text-wise-content-primary mb-4">
              Do you really need a loan today?
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-6 text-wise-content-secondary">
            <p className="text-wise-body-large leading-relaxed">
              It can be expensive to borrow small amounts of money and borrowing may not solve your money problems. 
              Check your options before you borrow:
            </p>

            <div className="bg-wise-gray50 rounded-wise-medium p-6 space-y-4">
              <p className="text-wise-body-large leading-relaxed">
                For information about other options for managing bills and debts, ring{' '}
                <span className="font-semibold text-wise-content-primary">1800 007 007</span> from anywhere in Australia 
                to talk to a free and independent financial counsellor.
              </p>
              
              <p className="text-wise-body-large leading-relaxed">
                Talk to your electricity, gas, phone or water provider to see if you can work out a payment plan.
              </p>
              
              <p className="text-wise-body-large leading-relaxed">
                If you are on government benefits, ask if you can receive an advance from Centrelink.
              </p>
              
              <p className="text-wise-body-large leading-relaxed">
                The Government's{' '}
                <a 
                  href="https://moneysmart.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wise-bright-green font-semibold hover:underline"
                >
                  MoneySmart website
                </a>{' '}
                shows you how small amount loans work and suggests other options that may help you.
              </p>
            </div>

            <div className="border-t border-wise-gray200 pt-4">
              <p className="text-wise-body-default text-wise-content-tertiary italic">
                * This statement is an Australian Government requirement under the National Consumer Credit Protection Act 2009.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              onClick={onCancel}
              variant="secondary"
              size="large"
              fullWidth
              className="sm:flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={onContinue}
              variant="primary"
              size="large"
              fullWidth
              className="sm:flex-1"
            >
              I understand, continue with application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowingWarningModal;