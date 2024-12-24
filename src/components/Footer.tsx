import React from 'react';
import logo from '../../src/assets/logo.svg';

const footerLinks = {
  quickLinks: {
    title: 'Quick Links',
    links: ['Home', 'About Us', 'Services', 'Contact']
  },
  otherServices: {
    title: 'Other Services',
    links: ['Web Development', 'Web Design', 'App Development', 'Security Testing']
  },
  contact: {
    title: 'Contact With Us',
    links: ['Linkedin', 'Twitter', 'Instagram', 'Facebook']
  }
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(44, 40, 39, 1)', color: 'rgba(255, 255, 255, 0.5)' }} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <img src={logo} alt="Tech Info Logo" className="h-8 cursor-pointer" />
            <p style={{ color: 'rgba(255, 255, 255, 0.5)' }} >© 2024 Tech info infinity. All Rights Reserved.</p>
          </div>

          {/* Footer Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a  href="#" className="text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;