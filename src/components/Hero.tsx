// import React from 'react';
// import hero from '../../src/assets/hero.svg';

// const Hero = () => {
//   return (
//     <div className="min-h-screen pt-16 bg-gray-50 ml-60">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(100vh-4rem)]">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className=" animate-fade-in">
//             <h1 className="text-6xl font-['Lobster'] leading-tight z-auto">
//               Elevate Your Business <br /> with Expert IT Services
//             </h1>
//             <p className="text-gray-600 text-lg mt-4">
//               From Web Design to Security Testing, We Provide Comprehensive Solutions Tailored to Your Needs.
//             </p>
//             <button className="px-8 py-3 mt-16 border-2 border-black text-white bg-black hover:bg-white hover:text-black transition-all duration-300">
//               Get Started
//             </button>
//           </div>
//           <div className="relative animate-slide-in">
//             <img
//               src={hero}
//               alt="IT Services"
//               className="rounded-lg w-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React from 'react';
import hero from '../../src/assets/hero.svg';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex items-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="text-left lg:w-1/2 animate-fade-in z-10 lg:pl-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Lobster'] leading-tight text-gray-900">
            Elevate Your Business <br /> with Expert IT Services
          </h1>
          <p className="text-gray-600 text-lg mt-4 sm:mt-6">
            From Web Design to Security Testing, We Provide Comprehensive Solutions Tailored to Your Needs.
          </p>
          <button className="px-8 py-3 mt-8 sm:mt-10 border-2 border-black text-white bg-black hover:bg-white hover:text-black transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={hero}
            alt="IT Services"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;








