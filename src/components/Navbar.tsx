import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Tech Info Logo" className="h-8 cursor-pointer" /> {/* Add your logo image */}
          </div>

          {/* Desktop Navigation */}
           <div className="hidden md:block">
             <div className="ml-10 flex items-center space-x-4 bg-gray-200 px-6 py-1 rounded-2xl">
               {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path} // Use 'to' for React Router navigation
                  className="px-4 py-1 rounded-2xl text-gray-700 hover:bg-white hover:text-black transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Button (Desktop) */}
          <div className="hidden md:block bg-white rounded-md px-4 py-2">
            <a href="#faq" className="text-black font-medium">
              FAQ
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? (
                // Close (X) icon when menu is open
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger menu icon when menu is closed
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Menu */}
       <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden`}
        style={{ width: '75%' }}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <h1 className="text-black text-xl font-bold">Menu</h1>
        </div>
        <div className="mt-4 flex flex-col items-start space-y-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path} // Use 'to' for React Router navigation
              onClick={() => setIsMenuOpen(false)} // Close menu when item is clicked
              className="px-4 py-2 rounded-md text-black hover:bg-gray-200 transition-all duration-300"
            >
              {item.name}
              
            </Link>
          ))}
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 rounded-md text-black hover:bg-gray-200 transition-all duration-300">
              FAQ
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../src/assets/logo.svg';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md' : ''
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img src={logo} alt="Tech Info Logo" className="h-8 cursor-pointer" />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-4 bg-gray-200 px-6 py-1 rounded-2xl">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path} // Use 'to' for React Router navigation
//                   className="px-4 py-1 rounded-2xl text-gray-700 hover:bg-white hover:text-black transition-all duration-300"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* FAQ Button (Desktop) */}
//           <div className="hidden md:block bg-white rounded-md px-4 py-2">
//             <a href="#faq" className="text-black font-medium">
//               FAQ
//             </a>
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-black focus:outline-none">
//               {isMenuOpen ? (
//                 // X icon when menu is open
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 // Hamburger icon when menu is closed
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
//           isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:hidden`}
//         style={{ width: '75%' }}
//       >
//         <div className="flex justify-between items-center px-4 py-4">
//           <h1 className="text-black text-xl font-bold">Menu</h1>
//         </div>
//         <div className="mt-4 flex flex-col items-start space-y-4 px-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path} // Use 'to' for React Router navigation
//               onClick={() => setIsMenuOpen(false)} // Close menu when item is clicked
//               className="px-4 py-2 rounded-md text-black hover:bg-gray-200 transition-all duration-300"
//             >
//               {item.name}
//             </Link>
//           ))}
//           <a
//             href="#faq"
//             onClick={() => setIsMenuOpen(false)} // Close menu when FAQ is clicked
//             className="px-4 py-2 rounded-md text-black hover:bg-gray-200 transition-all duration-300"
//           >
//             FAQ
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

