import React from 'react';
import clint1 from '../../src/assets/client1.svg'; // Import local images
import clint2 from '../../src/assets/client2.svg';
import clint3 from '../../src/assets/client3.svg';

const testimonials = [
  {
    content: "The team at Tech II delivered an outstanding website that exceeded our expectations",
    image: clint1 // Use the imported image
  },
  {
    content: "Their expertise in cybersecurity gave us the confidence we needed to operate online.",
    image: clint2 // Use the imported image
  },
  {
    content: "Professional, reliable, and results-driven. A great partner for our IT needs.",
    image: clint3 // Use the imported image
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-center mb-16 animate-fade-in font-['Lobster']">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 scroll-reveal animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center">
                <div 
                  className="mb-6 animate-float"
                  style={{
                    width: '100%', // Make the width responsive
                    maxWidth: '393px', // Set a maximum width
                    height: 'auto', // Allow height to adjust proportionally
                    aspectRatio: '393/290', // Maintain the aspect ratio
                    marginLeft: '2px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <img
                    src={testimonial.image} // Use the local image here
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-gray-600 text-sm text-center mb-4">{testimonial.content}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

