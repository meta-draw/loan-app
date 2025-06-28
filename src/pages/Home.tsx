import React from 'react';
import Hero from '../components/Hero';
import BorrowEstimate from '../components/BorrowEstimate';
import Features from '../components/Features';
import CustomerReviews from '../components/CustomerReviews';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <BorrowEstimate />
      <Features />
      <CustomerReviews />
      <FAQ />
    </div>
  );
};

export default Home;