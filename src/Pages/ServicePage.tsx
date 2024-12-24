import '../Pages/ServicePage.css';
import CTASection1 from '../components/CTASection1';
import Footer from '../components/Footer';
import Metaballs from '../../src/assets/Metaballs.svg';

const About = () => {
  return (
    <div>
      <section style={{ backgroundImage: `url(${Metaballs})` }}  className="hero">
        <div className="hero-content">
          <h1>Welcome to TII</h1>
          <p>Your trusted partner in delivering innovative <br /> digital solutions. 
            We specialize in creating <br /> impactful, cutting-edge technology <br /> 
            experiences to elevate your business. </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
      <div className="max-w-7xl font-['Volkhov'] font-bold mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="about">Web Design</h2>
       <p className="text-lg text-gray-700 text-start mb-3 mt-5 font-['Syne']">
         We craft responsive and SEO-optimized websites with modern UI/UX designs using Figma. <br /> 
         Our designs are tailored for performance and accessibility. <br />
          WordPress is used to simplify content management. <br /> 
          We focus on creating visually appealing, user-friendly, and fast-loading websites. <br /> 
          Every design is customized to reflect your brand identity effectively.
       </p>
      </div>

      <div className="max-w-7xl font-['Volkhov'] font-bold mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="about">Frontend Development</h2>
       <p className="text-lg text-gray-700 text-start mb-3 mt-5 font-['Syne']">
       We build dynamic and interactive user interfaces using HTML5, CSS3, JavaScript, and React. <br /> 
       Our frontend solutions are responsive and optimized for performance across devices. <br /> 
       Animations and modern design principles enhance user engagement. <br /> 
       Cross-browser compatibility ensures seamless functionality everywhere. <br /> 
       We prioritize scalable and maintainable code to support future growth.
       </p>
      </div>
      </section>

      <section className="sec3 py-16">

      <div className=" ">
       <h2 className="mission">App Development</h2>
       <p className="text-lg text-gray-700 text-center mb-3 mt-5 font-['Syne']">
       We build cross-platform apps for iOS and Android using React Native and Flutter. <br />
       Our apps are user-friendly, high-performing, and feature-rich. <br />
       Security, responsiveness, and seamless functionality are top priorities. <br />
       We optimize apps for speed, adaptability, and reduced battery consumption. <br />
       Every app is designed to meet business goals and enhance user experiences.
       </p>
      </div>

      <div className=" ">
       <h2 className="mission">Testing & QA</h2>
       <p className="text-lg text-gray-700 text-center mb-3 mt-5 font-['Syne']">
       We conduct comprehensive testing with tools like Selenium, JUnit, and Postman. <br />
       Our testing covers unit, integration, and functional aspects of applications. <br />
       We identify and eliminate bugs to ensure flawless performance. <br />
       Compatibility testing across browsers and devices is a priority. <br />
       Detailed reports provide insights to maintain high-quality standards.
       </p>
      </div>

      </section>

      <section className="bg-gray-50 py-16">
      <div className="max-w-7xl font-['Volkhov'] font-bold mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="about">Security & Pentesting</h2>
       <p className="text-lg text-gray-700 text-start mb-3 mt-5 font-['Syne']">
       We perform in-depth security audits using OWASP guidelines and tools like Burp Suite.<br />
       Our penetration testing identifies and mitigates vulnerabilities.<br />
       We secure data and protect against real-world cyber threats.<br />
       Actionable insights and compliance with security standards are guaranteed.<br />
       Our testing ensures robust defenses for web and mobile applications.
       </p>
      </div>

      <div className="max-w-7xl font-['Volkhov'] font-bold mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="about">DevOps Solutions</h2>
       <p className="text-lg text-gray-700 text-start mb-3 mt-5 font-['Syne']">
       We streamline development operations with Docker, Jenkins, and Kubernetes.<br />
       CI/CD pipelines enable efficient and automated deployments.<br />
       We optimize workflows for faster delivery and reduced downtime.<br />
       Our solutions scale to meet evolving project requirements.<br />
       Real-time monitoring and proactive troubleshooting ensure reliability.
       </p>
      </div>
      </section>

      <CTASection1 />
      <Footer />
    </div>
  );
};

export default About;

