import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const faqs = [
    {
      question: 'How quickly can I get approved?',
      answer: 'Most applications are approved within minutes. In some cases, we may need additional information which could take up to 24 hours.'
    },
    {
      question: 'What credit score do I need?',
      answer: 'We work with borrowers across the credit spectrum. While a higher credit score typically qualifies for better rates, we consider multiple factors in our decision.'
    },
    {
      question: 'Are there any fees?',
      answer: 'We believe in transparency. There are no hidden fees, no prepayment penalties, and no application fees. You\'ll see all costs upfront.'
    },
    {
      question: 'How do I make payments?',
      answer: 'You can set up automatic payments from your bank account, make payments online through your account, or mail a check. We offer flexible payment options.'
    },
    {
      question: 'Can I pay off my loan early?',
      answer: 'Yes! You can pay off your loan early at any time with no prepayment penalties. This can save you money on interest.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Absolutely. We use bank-level 256-bit SSL encryption to protect your personal and financial information. Your security is our top priority.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wise-lightblue to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-wise-navy mb-6">
            How can we
            <span className="text-wise-green"> help you?</span>
          </h1>
          <p className="text-xl text-wise-gray leading-relaxed">
            Get in touch with our support team or find answers to common questions below.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-wise-lightblue rounded-wise-x-large">
              <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-wise-navy mb-4">Phone Support</h3>
              <p className="text-wise-gray mb-4">
                Speak with our loan specialists
              </p>
              <p className="text-wise-green font-semibold">1-800-QUICKLOAN</p>
              <p className="text-sm text-wise-gray">Mon-Fri: 8am-8pm EST</p>
            </div>

            <div className="text-center p-8 bg-wise-lightblue rounded-wise-x-large">
              <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-wise-navy mb-4">Live Chat</h3>
              <p className="text-wise-gray mb-4">
                Get instant help from our team
              </p>
              <button className="bg-wise-green text-white px-6 py-2 rounded-wise-medium hover:bg-wise-darkgreen transition-colors">
                Start Chat
              </button>
              <p className="text-sm text-wise-gray mt-2">Available 24/7</p>
            </div>

            <div className="text-center p-8 bg-wise-lightblue rounded-wise-x-large">
              <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-wise-navy mb-4">Email Support</h3>
              <p className="text-wise-gray mb-4">
                Send us a detailed message
              </p>
              <p className="text-wise-green font-semibold">support@quickloan.com</p>
              <p className="text-sm text-wise-gray">Response within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-wise-navy mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-wise-navy mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-wise-green focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-wise-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-wise-green focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-wise-navy mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-wise-green focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="application">Loan Application</option>
                    <option value="account">Account Support</option>
                    <option value="payment">Payment Questions</option>
                    <option value="technical">Technical Issues</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wise-navy mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-wise-green focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-wise-green text-white py-3 rounded-wise-medium font-semibold hover:bg-wise-darkgreen transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-wise-navy mb-6">Visit our office</h2>
              <div className="bg-wise-lightblue p-8 rounded-wise-x-large">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-wise-navy mb-4">Headquarters</h3>
                  <div className="space-y-2 text-wise-gray">
                    <p>123 Financial Street</p>
                    <p>New York, NY 10004</p>
                    <p>United States</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-wise-navy mb-4">Business Hours</h3>
                  <div className="space-y-2 text-wise-gray">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                    <p>Saturday: 9:00 AM - 5:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-wise-navy mb-4">Get Directions</h3>
                  <div className="bg-gray-200 h-48 rounded-wise-medium flex items-center justify-center">
                    <p className="text-wise-gray">Interactive map would go here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-wise-lightblue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wise-navy mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-wise-gray">
              Find answers to the most common questions about our loans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-wise-medium shadow-sm">
                <h3 className="text-lg font-semibold text-wise-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-wise-gray">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-wise-gray mb-4">
              Still have questions?
            </p>
            <button className="bg-wise-green text-white px-8 py-3 rounded-wise-medium font-semibold hover:bg-wise-darkgreen transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;