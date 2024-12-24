// import React from 'react';
// import whychooseus from '../../src/assets/whychooseus.png'

// const reasons = [
//   'Experienced and Skilled Professionals',
//   'Customized Solutions to Fit Your Business Needs',
//   '24/7 Support and Maintenance',
//   'Proven Track Record of Success',
//   'Competitive Pricing and Transparent Processes'
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="relative py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <img
//               src={whychooseus}
//               alt="Team collaboration"
//               className="rounded-lg shadow-2xl"
//             />
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold text-black">Why Choose Us</h2>
//             <h3 className="text-2xl text-gray-800">Why Tech info infinity?</h3>
//             <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
//               <ul className="space-y-4">
//                 {reasons.map((reason, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center space-x-3"
//                   >
//                     <span className="text-gray-800">{reason}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
import React from 'react';
import whychooseus from '../../src/assets/whychooseus.png';

const reasons = [
  'Experienced and Skilled Professionals',
  'Customized Solutions to Fit Your Business Needs',
  '24/7 Support and Maintenance',
  'Proven Track Record of Success',
  'Competitive Pricing and Transparent Processes'
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-40 bg-gray-50"  // Added padding for more height
      style={{
        backgroundImage: `url(${whychooseus})`,
        backgroundSize: 'cover',  // Ensures the image covers the section area
        backgroundPosition: 'center',  // Keeps the image centered
        backgroundRepeat: 'no-repeat',  // Prevents repeating the image
        height: 'auto',  // Ensures the height is based on content size
        maxHeight: '100vh',  // Restricts the height to the viewport height
      }}
    >
      <div className="flex lg:justify-end lg:items-end sm:justify-center sm:items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          
          {/* Right side - content */}
          <div className="space-y-7">
            <h2 className="text-6xl text-black font-['Lobster']"><span className='text-red-700'>Why</span> Choose Us</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in opacity-90">
            <h3 className="text-3xl text-black font-['Lobster']">Why Tech info infinity?</h3>
              <ul className="space-y-4 list-disc pl-10 pt-7 pb-6">
                {reasons.map((reason, index) => (
                  <li key={index} className="text-gray-800">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;




