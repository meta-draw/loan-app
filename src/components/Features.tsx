import React from 'react';
import { Button, Card } from './ui';
import FundoScore from './FundoScore';
import SpendingInsights from './SpendingInsights';

const Features: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '60-second funding',
      description: 'Get funds transferred to your account in just 60 seconds after approval. Lightning-fast when you need it most.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Bank-level security',
      description: 'Your data is protected with 256-bit SSL encryption and multi-factor authentication, just like major banks.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Fundo Score rewards',
      description: 'Earn points for on-time payments and unlock better rates. The more responsible you are, the more you save.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Bad credit considered',
      description: 'We look beyond your credit score. Even with less-than-perfect credit, you can still get approved.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: '5-minute application',
      description: 'Complete your application in just 5 minutes online. No paperwork, no branch visits, 100% digital.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-wise-bright-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: '24/7 support',
      description: 'Get help when you need it with our round-the-clock customer support team. We\'re here for you.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Features section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wise-forest-green mb-4">
              Why choose Fundo?
            </h2>
            <p className="text-2xl text-wise-content-secondary max-w-3xl mx-auto">
              Australian owned and operated. We're committed to responsible lending with transparent fees and instant approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:bg-wise-lightblue p-6 rounded-2xl transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-wise-forest-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-wise-content-secondary leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-wise-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-wise-bright-green mb-2">15K+</div>
              <div className="text-wise-content-secondary text-lg">Happy customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wise-bright-green mb-2">60sec</div>
              <div className="text-wise-content-secondary text-lg">Funding time</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wise-bright-green mb-2">4.8★</div>
              <div className="text-wise-content-secondary text-lg">Customer rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wise-bright-green mb-2">5min</div>
              <div className="text-wise-content-secondary text-lg">Application time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundo Score section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-wise-forest-green mb-6">
                Introducing Fundo Score
              </h2>
              <p className="text-2xl text-wise-content-secondary mb-8">
                Your personal credit score that rewards responsible borrowing behavior.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wise-bright-green mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-wise-content-secondary">
                    Earn points for every on-time payment
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wise-bright-green mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-wise-content-secondary">
                    Get bonus points for early repayments
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wise-bright-green mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-wise-content-secondary">
                    Unlock better rates and faster approvals
                  </span>
                </li>
              </ul>
              <Button 
                onClick={() => window.location.href = '/application'}
                variant="primary"
                size="large"
              >
                Start building your score
              </Button>
            </div>
            <div className="flex justify-center">
              <FundoScore score={750} />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Insights section */}
      <section className="py-20 bg-wise-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-wise-forest-green mb-6">
              Financial Tools & Insights
            </h2>
            <p className="text-2xl text-wise-content-secondary max-w-3xl mx-auto">
              Take control of your finances with our free budgeting tools and personalized insights
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <SpendingInsights />
            <div className="space-y-8">
              <Card size="large">
                <h3 className="text-wise-heading-3 font-bold text-wise-content-primary mb-4">
                  Smart Budgeting Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-wise-bright-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-wise-body-large text-wise-content-secondary">
                      Connect your bank accounts for automatic categorization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-wise-bright-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-wise-body-large text-wise-content-secondary">
                      Set spending limits and get real-time alerts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-wise-bright-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-wise-body-large text-wise-content-secondary">
                      Track your financial health over time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-wise-bright-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-wise-body-large text-wise-content-secondary">
                      Get personalized savings recommendations
                    </span>
                  </li>
                </ul>
              </Card>
              <Button 
                onClick={() => window.location.href = '/application'}
                variant="primary"
                size="large"
                fullWidth
              >
                Get Started with Free Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-wise-bright-green to-wise-success">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of customers who trust us with their financial needs. 
            Apply today and get approved in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/application'}
              variant="primary"
              size="large"
            >
              Start your application
            </Button>
            <Button 
              variant="secondary"
              size="large"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;