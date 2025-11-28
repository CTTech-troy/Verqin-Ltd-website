import React from 'react';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import { UsersIcon, TrendingUpIcon, BriefcaseIcon, CompassIcon } from 'lucide-react';
function ServicesGrid() {
  const services = [{
    icon: BriefcaseIcon,
    title: 'Permanent & Contract Recruitment',
    description: 'Find the right talent for long-term success. We match skilled professionals with roles that align with their ambitions and your business goals.'
  }, {
    icon: TrendingUpIcon,
    title: 'Talent Consulting',
    description: 'Strategic workforce planning and talent acquisition strategies that help you build high-performing teams and stay ahead of market trends.'
  }, {
    icon: UsersIcon,
    title: 'Workforce Solutions',
    description: 'Flexible staffing solutions for casual, temporary, and seasonal needs. Scale your workforce with confidence and agility.'
  }, {
    icon: CompassIcon,
    title: 'Career Advisory',
    description: 'Personalized career guidance for candidates at every stage. We help you navigate opportunities and make informed decisions about your future.'
  }];
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-muted max-w-2xl mx-auto">
            Comprehensive people solutions designed to drive growth and success
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card hover className="h-full transform transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-muted leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </AnimatedSection>;
        })}
        </div>
      </div>
    </section>;
}

export default ServicesGrid;