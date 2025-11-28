import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { BriefcaseIcon, UserIcon } from 'lucide-react';
function CTASection() {
  return <section className="py-16 md:py-24 bg-gradient-to-br from-[#6EC1E4]/10 via-white to-primary-dark/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Employers CTA */}
          <AnimatedSection animation="slide-right" delay={0}>
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <BriefcaseIcon className="w-8 h-8 text-primary-dark transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-3xl font-bold text-gray-text mb-4">
                For Employers
              </h3>
              <p className="text-gray-muted leading-relaxed mb-6">
                Find exceptional talent quickly. From casual roles to permanent
                placements, we deliver candidates who drive your business
                forward.
              </p>
              <Link to="/for-employers">
                <Button variant="primary" size="lg" className="w-full transform transition-all duration-300 hover:scale-105">
                  Request Talent
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Candidates CTA */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <UserIcon className="w-8 h-8 text-primary-dark transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-3xl font-bold text-gray-text mb-4">
                For Candidates
              </h3>
              <p className="text-gray-muted leading-relaxed mb-6">
                Your next opportunity awaits. Browse flexible casual roles,
                permanent positions, and career opportunities that match your
                ambitions.
              </p>
              <Link to="/for-candidates">
                <Button variant="secondary" size="lg" className="w-full transform transition-all duration-300 hover:scale-105">
                  Browse Opportunities
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
}
export default CTASection;