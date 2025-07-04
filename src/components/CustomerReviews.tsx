import React from 'react';
import { Card } from './ui';

const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      review: 'Quick and easy process! I needed money for car repairs and got approved in minutes. The whole process was transparent with no hidden fees.',
      amount: '$3,500',
      purpose: 'Car repairs'
    },
    {
      name: 'James L.',
      rating: 5,
      review: 'Excellent customer service and very fast approval. I used the loan for home improvements and couldn\'t be happier with the service.',
      amount: '$8,000',
      purpose: 'Home improvement'
    },
    {
      name: 'Emma T.',
      rating: 5,
      review: 'I was skeptical at first but the process was incredibly smooth. Got the money I needed for medical expenses within 24 hours.',
      amount: '$2,200',
      purpose: 'Medical expenses'
    },
    {
      name: 'Michael K.',
      rating: 5,
      review: 'Best loan experience I\'ve ever had. Clear terms, fair rates, and money in my account the next day. Highly recommend!',
      amount: '$5,000',
      purpose: 'Debt consolidation'
    },
    {
      name: 'Lisa H.',
      rating: 5,
      review: 'Perfect for my wedding expenses. The application was so simple and the customer support team was very helpful throughout.',
      amount: '$6,500',
      purpose: 'Wedding'
    },
    {
      name: 'David R.',
      rating: 5,
      review: 'Needed money quickly for an emergency and Middlepay delivered. Fast, reliable, and no hassle. Would definitely use again.',
      amount: '$1,800',
      purpose: 'Emergency'
    }
  ];

  return (
    <section className="py-20 bg-wise-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-wise-heading-1 lg:text-wise-display-medium font-bold text-wise-navy mb-4">
            What our customers say
          </h2>
          <p className="text-wise-title-section text-wise-gray max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their lending needs
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="ml-3 text-left">
                <div className="text-wise-heading-2 font-bold text-wise-navy">4.8/5</div>
                <div className="text-wise-body-large text-wise-gray">Based on 12,000+ reviews</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <svg className="h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <div className="text-wise-heading-2 font-bold text-wise-navy">4.7/5</div>
                <div className="text-wise-body-large text-wise-gray">Google Reviews</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <svg className="w-8 h-8 text-wise-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-left">
                <div className="text-wise-heading-2 font-bold text-wise-navy">98%</div>
                <div className="text-wise-body-large text-wise-gray">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} size="small">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-wise-green/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-wise-green font-semibold text-wise-title-body">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-wise-navy text-wise-title-body">{review.name}</div>
                  <div className="text-wise-body-large text-wise-gray">Verified Customer</div>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-wise-gray text-wise-body-large mb-4 leading-relaxed">
                "{review.review}"
              </p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="text-wise-body-default text-wise-gray">
                  <span className="font-medium">{review.amount}</span> for {review.purpose}
                </div>
                <div className="text-wise-body-default text-wise-green font-medium">
                  Verified customer
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-wise-gray mb-6 text-wise-title-body">
            Want to see more reviews? Check out our profiles on review platforms
          </p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center bg-white text-wise-navy px-8 py-4 rounded-lg hover:shadow-md transition-shadow text-wise-title-body font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Trustpilot Reviews
            </button>
            <button className="flex items-center bg-white text-wise-navy px-8 py-4 rounded-lg hover:shadow-md transition-shadow text-wise-title-body font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Google Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;