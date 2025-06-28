import React from 'react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      description: 'Former Goldman Sachs executive with 15+ years in fintech'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      description: 'Ex-Google engineer, expert in financial technology infrastructure'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Risk',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      description: 'Risk management specialist from JP Morgan Chase'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wise-lightblue to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-wise-heading-1 lg:text-wise-display-medium font-bold text-wise-navy mb-6">
            Get funds in
            <span className="text-wise-green"> 60 seconds</span>
          </h1>
          <p className="text-wise-title-body text-wise-gray leading-relaxed">
            We're an Australian-owned lender providing instant approvals and 
            60-second funding. Bad credit considered. No hidden fees. 
            5-minute applications that actually take 5 minutes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-wise-heading-2 font-bold text-wise-navy mb-6">Our story</h2>
              <div className="space-y-4 text-wise-gray leading-relaxed">
                <p>
                  Fundo was founded in 2020 with a simple idea: Australians deserve 
                  fast, transparent lending with instant approvals and funding in seconds, 
                  not days.
                </p>
                <p>
                  After experiencing the frustrating traditional lending process firsthand, 
                  our founders decided to build a better way. We leverage technology 
                  to make quick lending decisions while maintaining the personal touch 
                  that traditional banks have lost.
                </p>
                <p>
                  Today, we've helped over 15,000 Australians access fast funding 
                  when they need it most. Our Fundo Score system rewards responsible 
                  borrowers with better rates and even faster approvals.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-wise-x-large shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-wise-green opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-wise-lightblue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-wise-heading-2 lg:text-wise-heading-1 font-bold text-wise-navy mb-4">
              Our values
            </h2>
            <p className="text-wise-title-body text-wise-gray">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-wise-x-large shadow-sm">
              <div className="w-16 h-16 bg-wise-green/10 rounded-wise-medium flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wise-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-wise-title-body font-semibold text-wise-navy mb-4">Transparency</h3>
              <p className="text-wise-gray">
                No hidden fees, no fine print surprises. We believe in clear, 
                upfront pricing and honest communication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-wise-x-large shadow-sm">
              <div className="w-16 h-16 bg-wise-green/10 rounded-wise-medium flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wise-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-wise-title-body font-semibold text-wise-navy mb-4">Instant Funding</h3>
              <p className="text-wise-gray">
                60-second funding after approval. 5-minute applications. 
                Instant decisions. Because when you need money, you need it now.
              </p>
            </div>

            <div className="bg-white p-8 rounded-wise-x-large shadow-sm">
              <div className="w-16 h-16 bg-wise-green/10 rounded-wise-medium flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wise-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-wise-title-body font-semibold text-wise-navy mb-4">Bad Credit OK</h3>
              <p className="text-wise-gray">
                We look beyond your credit score. If you can show you can repay, 
                we'll consider your application. Everyone deserves a second chance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-wise-heading-2 lg:text-wise-heading-1 font-bold text-wise-navy mb-4">
              Meet our leadership team
            </h2>
            <p className="text-wise-title-body text-wise-gray">
              Experienced professionals from top financial institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-wise-title-body font-semibold text-wise-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-wise-green font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-wise-gray">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-wise-heading-2 lg:text-wise-heading-1 font-bold text-wise-navy mb-4">
              Am I eligible?
            </h2>
            <p className="text-wise-title-body text-wise-gray">
              Simple requirements, fast approvals
            </p>
          </div>
          
          <div className="bg-wise-lightblue rounded-wise-x-large p-8 mb-8">
            <h3 className="text-wise-title-body font-bold text-wise-navy mb-6">
              To apply for a Fundo loan, you need to:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-wise-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-wise-gray text-wise-body-large">
                  Be at least 18 years old
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-wise-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-wise-gray text-wise-body-large">
                  Have a regular income (employment or government benefits)
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-wise-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-wise-gray text-wise-body-large">
                  Be able to demonstrate your ability to repay
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-wise-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-wise-gray text-wise-body-large">
                  Be an Australian resident with a valid Australian bank account
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-wise-green/10 rounded-wise-x-large p-8">
            <div className="flex items-start">
              <svg className="w-8 h-8 text-wise-green mt-0.5 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-wise-title-body font-bold text-wise-navy mb-2">
                  Bad credit? No problem!
                </h3>
                <p className="text-wise-gray text-wise-body-large">
                  We consider applications from people with less-than-perfect credit. 
                  Your current ability to repay matters more than your past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-wise-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-wise-heading-2 lg:text-wise-heading-1 font-bold text-white mb-4">
              By the numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-wise-heading-1 font-bold text-wise-green mb-2">60 sec</div>
              <div className="text-white/80">Funding time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wise-green mb-2">15K+</div>
              <div className="text-white/80">Happy customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wise-green mb-2">4.8★</div>
              <div className="text-white/80">Average rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wise-green mb-2">5 min</div>
              <div className="text-white/80">Application time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;