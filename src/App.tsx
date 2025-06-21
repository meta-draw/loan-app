import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Loans from './pages/Loans';
import Contact from './pages/Contact';
import Application from './pages/Application';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/application" element={<Application />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;