import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRightIcon } from 'lucide-react';
 function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative min-h-[600px]  flex items-center overflow-hidden bg-gradient-to-r from-[#F6F7F9] via-white to-[#6EC1E4]/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`
            absolute top-20 left-10 w-72 h-72 bg-[#6EC1E4]/10 rounded-full blur-3xl
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `} style={{
        animation: 'float 6s ease-in-out infinite'
      }} />
        <div className={`
            absolute bottom-20 right-10 w-96 h-96 bg-[#2B95D6]/10 rounded-full blur-3xl
            transition-all duration-1000 ease-out delay-300
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `} style={{
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '1s'
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline with staggered animation */}
          <h1 className={`
              font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-text mb-6 leading-tight
              transition-all duration-1000 ease-out  mt-10
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
            <span className="inline-block transition-all duration-700 ease-out" style={{
              transitionDelay: '0.2s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}>
              Verqin Ltd{' '}
            </span>
            <span className="inline-block bg-gradient-to-r from-[#6EC1E4] to-[#2B95D6] bg-clip-text text-transparent transition-all duration-700 ease-out" style={{
              transitionDelay: '0.4s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}>
              People solutions
            </span>
            <span className="inline-block transition-all duration-700 ease-out" style={{
              transitionDelay: '0.6s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}>
              {' '}
              that power progress.
            </span>
          </h1>

          <p className={`
              text-xl md:text-2xl text-gray-muted mb-8 leading-relaxed max-w-3xl mx-auto
              transition-all duration-1000 ease-out delay-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
            We connect ambition with opportunity. Flexible staffing, permanent
            placements and workforce design — all delivered with integrity and
            insight.
          </p>

          <div className={`
              flex flex-col sm:flex-row gap-4 justify-center items-center
              transition-all duration-1000 ease-out delay-1000
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
            <Link to="/for-employers">
              <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                Find Talent
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/for-candidates">
              <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                Find Work
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>;
}

export default Hero;