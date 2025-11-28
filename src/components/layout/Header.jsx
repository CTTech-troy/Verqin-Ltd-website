import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isActive = (path) => location.pathname === path;
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/services',
    label: 'Services'
  }, {
    path: '/for-employers',
    label: 'For Employers'
  }, {
    path: '/for-candidates',
    label: 'For Candidates'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  return <header className={`
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm border-b border-gray-panel'}
      `}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Logo size="md" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`
                  text-sm font-medium transition-all duration-200 relative
                  ${isActive(link.path) ? 'text-[#2B95D6]' : 'text-[#4A4F55] hover:text-[#6EC1E4]'}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:bg-[#2B95D6] after:transition-all after:duration-300
                  ${isActive(link.path) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}>
                {link.label}
              </Link>)}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/apply">
              <Button variant="primary" size="sm" className="transform transition-all duration-200 hover:scale-105">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-text hover:text-primary transition-all duration-200 hover:scale-110">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t border-gray-panel pt-4 animate-fade-in">
            {navLinks.map((link, index) => <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`
                  block py-2 text-sm font-medium transition-all duration-200 animate-slide-up
                  ${isActive(link.path) ? 'text-[#2B95D6]' : 'text-[#4A4F55] hover:text-primary'}
                `} style={{
          animationDelay: `${index * 0.05}s`
        }}>
                {link.label}
              </Link>)}
            <Link to="/apply" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" size="sm" className="w-full mt-4 animate-slide-up" style={{
            animationDelay: '0.3s'
          }}>
                Apply Now
              </Button>
            </Link>
          </nav>}
      </div>
    </header>;
}
export default Header;