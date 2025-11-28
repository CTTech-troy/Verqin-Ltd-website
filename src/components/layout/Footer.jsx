import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';
function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#182026] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{background: 'white', padding: '10px', borderRadius: '12px'}}>
                <Logo size="md" />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Meaningful connections that build growth. A modern people
              solutions company built on trust, insight, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/for-employers" className="text-gray-300 hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/for-candidates" className="text-gray-300 hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  For Candidates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">
                Permanent & Contract Recruitment
              </li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">
                Talent Consulting
              </li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">
                Workforce Solutions
              </li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">
                Career Advisory
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300 transition-all duration-200 hover:text-primary group">
                <PhoneIcon className="w-4 h-4 mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span>+44 742 465 5783</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300 transition-all duration-200 hover:text-primary group">
                <MailIcon className="w-4 h-4 mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span>hello@verqin.co.uk</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300 transition-all duration-200 hover:text-primary group">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span>281 , Dunstable Road, Luton, LU3 1JJ</span>
              </li>
            </ul>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © {currentYear} Verqin Ltd. All rights reserved.
          </p>

          <p className="text-center text-sm text-gray-300 transition-all duration-300 hover:text-primary">
            Integrity · Innovation · Empathy · Excellence · Growth
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-primary transition-all duration-200 hover:scale-105">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-300 hover:text-primary transition-all duration-200 hover:scale-105">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;