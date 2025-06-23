import React, { useState } from 'react';
import { LinkButton, Button } from './ui';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can I get my loan approved?',
      answer: 'Most loan applications are processed within minutes during business hours. If approved, funds are typically deposited into your account within 24 hours, and sometimes the same day depending on your bank.'
    },
    {
      question: 'What do I need to apply for a loan?',
      answer: 'You\'ll need to be 18+ years old, an Australian citizen or permanent resident, have a regular income, and provide basic identification. The application process is simple and can be completed online in about 5 minutes.'
    },
    {
      question: 'What credit score do I need?',
      answer: 'We consider applications from people with various credit backgrounds. While a good credit score helps secure better rates, we look at your overall financial situation, not just your credit score.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees, ever. We believe in complete transparency. All fees and charges are clearly displayed before you sign anything. What you see is what you pay - no surprises.'
    },
    {
      question: 'Can I pay off my loan early?',
      answer: 'Yes! You can pay off your loan early at any time with no penalties or extra fees. This can actually save you money on interest charges.'
    },
    {
      question: 'How much can I borrow?',
      answer: 'You can borrow between $500 and $50,000, depending on your individual circumstances, income, and creditworthiness. The exact amount will be determined during the application process.'
    },
    {
      question: 'What can I use the loan for?',
      answer: 'Our personal loans can be used for almost any legal purpose - car repairs, home improvements, medical expenses, debt consolidation, holidays, or unexpected bills. You don\'t need to specify exactly how you\'ll use the money.'
    },
    {
      question: 'How do I make repayments?',
      answer: 'Repayments are automatically deducted from your nominated bank account on your chosen payment dates. You can also make additional payments or pay off your loan early through our online portal.'
    },
    {
      question: 'What if I need help during the loan term?',
      answer: 'We\'re here to help! If you\'re experiencing financial difficulty, contact our customer support team as soon as possible. We\'ll work with you to find a solution that works for your situation.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Absolutely. We use bank-level 256-bit SSL encryption to protect your personal and financial information. We never share your information with third parties without your consent, and we\'re fully compliant with Australian privacy laws.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-wise-neutral-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-wise-navy mb-4">
            Frequently asked questions
          </h2>
          <p className="text-2xl text-wise-gray">
            Got questions? We've got answers. Here are the most common questions about our loans.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-wise-gray200 rounded-wise-medium overflow-hidden hover:border-wise-green/30 transition-colors card-wise-small"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-wise-green focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-wise-navy pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-wise-gray transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-wise-gray leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-wise-lightblue rounded-wise-large card-wise-large">
          <h3 className="text-xl font-semibold text-wise-navy mb-4">
            Still have questions?
          </h3>
          <p className="text-wise-gray mb-6">
            Our friendly customer support team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton 
              to="tel:1800QUICKLOAN" 
              external
              variant="primary"
              size="medium"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              iconPosition="left"
            >
              Call us now
            </LinkButton>
            <Button 
              variant="secondary" 
              size="medium"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
              iconPosition="left"
            >
              Live chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;