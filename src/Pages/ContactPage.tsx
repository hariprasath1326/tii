import Footer from '../components/Footer';
import Contact from '../components/Contact';
import './ContactPage.css'


const ContactPage = () => {
  return (
    <div>
      <section style={{ backgroundImage: `url('../../src/assets/Metaballs.svg')` }}  className="hero">
      <Contact />
      </section>
      



      <Footer />
    </div>
  );
};

export default ContactPage;