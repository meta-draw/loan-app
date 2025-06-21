import React from 'react';
import Hero from '../components/Hero';
import LoanPurposes from '../components/LoanPurposes';
import Features from '../components/Features';
import CustomerReviews from '../components/CustomerReviews';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <LoanPurposes />
      <Features />
      <CustomerReviews />
      <FAQ />
    </div>
  );
};

export default Home;