import React from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, TrendingUpIcon, UsersIcon, CompassIcon, CheckCircleIcon } from 'lucide-react';
function Services() {
  const services = [{
    icon: BriefcaseIcon,
    title: 'Permanent & Contract Recruitment',
    description: 'Find the right talent for long-term success. We specialize in placing skilled professionals in permanent and contract roles across multiple sectors.',
    features: ['Executive search and senior appointments', 'Mid-level professional placements', 'Contract and fixed-term positions', 'Industry-specific expertise', 'Comprehensive candidate vetting']
  }, {
    icon: TrendingUpIcon,
    title: 'Talent Consulting',
    description: 'Strategic workforce planning and talent acquisition strategies that help you build high-performing teams and stay ahead of market trends.',
    features: ['Workforce planning and strategy', 'Talent market insights and analysis', 'Employer branding consultation', 'Recruitment process optimization', 'Diversity and inclusion initiatives']
  }, {
    icon: UsersIcon,
    title: 'Workforce Solutions',
    description: 'Flexible staffing solutions for casual, temporary, and seasonal needs. Scale your workforce with confidence and agility.',
    features: ['Casual and flexible staffing', 'Temporary workforce management', 'Seasonal hiring solutions', 'On-demand talent pools', 'Rapid deployment capabilities']
  }, {
    icon: CompassIcon,
    title: 'Career Advisory',
    description: 'Personalized career guidance for candidates at every stage. We help you navigate opportunities and make informed decisions about your future.',
    features: ['Career planning and guidance', 'CV and interview preparation', 'Market insights and salary benchmarking', 'Skills assessment and development', 'Long-term career partnership']
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-text mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-muted leading-relaxed">
            Comprehensive people solutions designed to drive growth and success
            for employers and candidates alike
          </p>
        </div>
      </Section>

      {/* Services Detail */}
      {services.map((service, index) => {
      const Icon = service.icon;
      const isEven = index % 2 === 0;
      return <Section key={index} background={isEven ? 'white' : 'gray'}>
            <div className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${!isEven ? 'lg:order-2' : ''} animate-fade-in`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-dark" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-text mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="primary" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>

                <Card hover className={`${!isEven ? 'lg:order-1' : ''} animate-slide-up`}>
                  <h3 className="text-2xl font-semibold text-gray-text mb-6">
                    What We Offer
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-primary-dark flex-shrink-0 mt-0.5" />
                        <span className="text-gray-muted">{feature}</span>
                      </li>)}
                  </ul>
                </Card>
              </div>
            </div>
          </Section>;
    })}

      {/* CTA Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-text mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-muted mb-8">
            Whether you're hiring or looking for your next opportunity, we're
            here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/for-employers">
              <Button variant="primary" size="lg">
                For Employers
              </Button>
            </Link>
            <Link to="/for-candidates">
              <Button variant="secondary" size="lg">
                For Candidates
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>;
}

export default Services;