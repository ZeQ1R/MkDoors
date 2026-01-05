import React from 'react';
import { navLinks, contactInfo, socialLinks } from '../data/mock';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const iconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
  Twitter: Twitter,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="font-bold text-2xl mb-4">
              <span className="text-blue-400">Elite</span> Garage Doors
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Your trusted local experts for professional garage door installation,
              repair, and maintenance services.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {IconComponent && <IconComponent size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Garage Door Installation',
                'Garage Door Repair',
                'Spring Replacement',
                'Opener Installation',
                'Maintenance & Inspection',
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={18} className="text-blue-400" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={18} className="text-blue-400" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span>{contactInfo.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Elite Garage Doors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
