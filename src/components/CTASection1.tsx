import React from 'react';
import cta from '../../src/assets/cta.svg';

const CTASection = () => {
  return (
    <section style={{ backgroundColor: 'rgba(236, 213, 184, 1)' }} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="">
            <h2 className="text-4xl font-['Lobster']">Ready to Transform Your IT Strategy?</h2>
            <p className="text-gray-600 pt-3">
              Contact us today for a free consultation and discover how we can help your business thrive.
            </p>
            <button className="px-8 py-3 mt-10 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300">
              Contact Us
            </button>
          </div>
          <div className="relative">
            <img
              src={cta}
              alt="IT Strategy"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        </div>
    </section>    
  );
};

export default CTASection;