// import React from 'react';
// import { ServiceCard } from './ui/ServiceCard';
// import { services } from '../data/services';

// const Services: React.FC = () => {
//   return (
//     <section className="py-20 bg-white" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">
//           We Offer Best Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard 
//               key={service.title}
//               service={service}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// import React from 'react';
// import './Services.css';

// type ServiceCardProps = {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   image: string; // Add an image property
// };

// const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
//   return (
//     <div className="service-card">
//       <img src={image} alt={title} className="card-image" /> {/* Display the image */}
//       <div className="icon-container">{icon}</div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// type Service = {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   image: string; // Add an image property to Service type
// };

// const Services: React.FC = () => {
//   const serviceData: Service[] = [
//     {
//       title: 'Web Design',
//       description: 'Create responsive, SEO-optimized websites with modern UI/UX using Figma...',
//       icon: <div className="icon web-design-icon"></div>,
//       image: 'https://via.placeholder.com/250x150?text=Web+Design', // Example image
//     },
//     {
//       title: 'Web Development',
//       description: 'Full-stack development with a focus on performance and user experience.',
//       icon: <div className="icon web-development-icon"></div>,
//       image: 'https://via.placeholder.com/250x150?text=Web+Development',
//     },
//     {
//       title: 'App Development',
//       description: 'Cross-platform mobile development for iOS and Android using React Native and Flutter.',
//       icon: <div className="icon app-development-icon"></div>,
//       image: 'https://via.placeholder.com/250x150?text=App+Development',
//     },
//     {
//       title: 'Testing',
//       description: 'Comprehensive testing for web and mobile applications.',
//       icon: <div className="icon testing-icon"></div>,
//       image: 'https://via.placeholder.com/250x150?text=Testing',
//     },
//   ];

//   return (
//     <div className="container">
//       <h1>We Offer Best Services</h1>
//       <div className="service-cards">
//         {serviceData.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import "./Services.css";
import service1 from "../../src/assets/service1.svg";
import service2 from "../../src/assets/service2.svg";
import service3 from "../../src/assets/service3.svg";
import service4 from "../../src/assets/service4.svg";

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">We Offer Best Services</h2>
      <div className="services-container">
        <div className="service-card">
          <img
            src={service1}
            alt="Web Design"
            className="service-icon"
          />
          <h3>Web Design</h3>
          <p>
            Create responsive, SEO-optimized websites with modern UI/UX using
            Figma.
          </p>
        </div>
        <div className="service-card">
          <img
            src={service2}
            alt="Web Development"
            className="service-icon"
          />
          <h3>Web Development</h3>
          <p className="card3">
            Full-stack development with a focus on performance and user
            experience.
          </p>
        </div>
        <div className="service-card service3">
          <img
            src={service3}
            alt="App Development"
            className="service-icon"
          />
          <h3>App Development</h3>
          <p>
            Cross-platform mobile development for iOS and Android using React
            Native and Flutter.
          </p>
        </div>
        <div className="service-card">
          <img
            src={service4}
            alt="Testing"
            className="service-icon"
          />
          <h3>Testing</h3>
          <p>Comprehensive testing for web and mobile applications.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;



