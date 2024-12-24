import '../Pages/About.css';
import Footer from '../components/Footer';
import Metaballs from '../../src/assets/Metaballs.svg';

const About = () => {
  return (
    <div>
      <section style={{ backgroundImage: `url(${Metaballs})` }}  className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>At Tech Info Infinity, we are dedicated <br /> to transforming 
            the way businesses <br /> leverage technology.  </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
      <div className="max-w-7xl font-['Volkhov'] font-bold mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="about">About Us</h2>
       <p className="text-lg text-gray-700 text-start mb-3 mt-5 font-['Syne']">
         Established in [Year], we specialize in providing innovative IT solutions that empower organizations <br /> to streamline operations, enhance productivity, and stay ahead in today’s rapidly evolving digital <br /> landscape.
       </p>
       <p className="text-lg text-gray-700 text-start mb-8 font-['Syne']">
         Our team consists of experienced professionals with expertise in various IT domains, including <br /> cloud computing, cybersecurity, data management, software development, IT support, <br /> and network infrastructure. We pride ourselves on offering customized, scalable, and cost-effective <br /> solutions that align with each client’s unique goals and challenges.
       </p>
      </div>
      </section>

      <section className="sec3 py-16">
      <div className=" ">
       <h2 className="mission">Our Mission</h2>
       <p className="text-lg text-gray-700 text-center mb-3 mt-5 font-['Syne']">
       Our mission is to be the trusted IT partner for businesses of all sizes. 
       We are committed to <br /> delivering reliable, cutting-edge technology solutions that not
        only meet the demands of today but <br /> also anticipate the needs of tomorrow. Whether you're a 
        startup looking for IT support or an <br /> enterprise in need of advanced IT infrastructure, we’re 
        here to help you unlock the full potential of <br /> your technology.
       </p>
      </div>

      <div className=" ">
       <h2 className="mission">Our Values</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 max-w-5xl mx-auto">

    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <p className="text-gray-700 text-xl">
      Collaboration: We work closely with our clients to understand their needs and deliver solutions that truly add value.
      </p>
    </div>


    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <p className="text-gray-700 text-xl">
        We are committed to transparency, honesty, and accountability in all of our interactions.
      </p>
    </div>


    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <p className="text-gray-700 text-xl">
        We strive for the highest standards of quality in everything we do, ensuring client satisfaction.
      </p>
    </div>
    </div>

      </section>



      <Footer />
    </div>
  );
};

export default About;

