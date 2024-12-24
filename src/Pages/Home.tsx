import React from "react";
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
