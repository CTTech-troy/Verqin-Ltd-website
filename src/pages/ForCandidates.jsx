import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BriefcaseIcon, ClockIcon, TrendingUpIcon, MapPinIcon, CheckCircleIcon } from 'lucide-react';
function ForCandidates() {
  const benefits = [{
    icon: ClockIcon,
    title: 'Flexible Work',
    description: 'Choose casual, temporary, or permanent roles that fit your lifestyle'
  }, {
    icon: TrendingUpIcon,
    title: 'Career Growth',
    description: 'Access opportunities that develop your skills and advance your career'
  }, {
    icon: MapPinIcon,
    title: 'Local Opportunities',
    description: 'Find roles near you across the UK with competitive pay'
  }, {
    icon: CheckCircleIcon,
    title: 'Support & Guidance',
    description: 'Personalized career advice and application support throughout'
  }];
  const featuredRoles = [{
    title: 'Delivery Driver',
    type: 'Casual / Flexible',
    location: 'Multiple Locations',
    pay: '£12-15/hour',
    description: 'Join our network of delivery drivers. Flexible shifts, competitive pay, and immediate starts available.'
  }, {
    title: 'Warehouse Operative',
    type: 'Temporary',
    location: 'London, Manchester',
    pay: '£11-13/hour',
    description: 'Immediate warehouse positions available. Full training provided, with potential for permanent roles.'
  }, {
    title: 'Customer Service Representative',
    type: 'Permanent',
    location: 'Birmingham',
    pay: '£24-28k/year',
    description: 'Join a growing team providing excellent customer support. Full benefits package included.'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-text mb-6">
            For Candidates
          </h1>
          <p className="text-xl text-gray-muted leading-relaxed mb-8">
            Your next opportunity awaits. Browse flexible casual roles,
            permanent positions, and career opportunities that match your
            ambitions.
          </p>
          <Link to="/apply">
            <Button variant="primary" size="lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-text mb-4">
            Why Choose Verqin?
          </h2>
          <p className="text-xl text-gray-muted max-w-2xl mx-auto">
            We're committed to helping you find work that works for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return <Card key={index} hover className="text-center animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-dark" />
                </div>
                <h3 className="text-lg font-semibold text-gray-text mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-muted">{benefit.description}</p>
              </Card>;
        })}
        </div>
      </Section>

      {/* Featured Roles */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-text mb-4">
            Featured Opportunities
          </h2>
          <p className="text-xl text-gray-muted max-w-2xl mx-auto">
            Current openings across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {featuredRoles.map((role, index) => <Card key={index} hover className="animate-slide-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-primary-dark" />
                </div>
                <span className="text-xs font-medium text-primary-dark bg-primary/10 px-3 py-1 rounded-full">
                  {role.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-text mb-2">
                {role.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-muted mb-3">
                <span className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4" />
                  {role.location}
                </span>
                <span className="font-medium text-primary-dark">
                  {role.pay}
                </span>
              </div>
              <p className="text-gray-muted text-sm leading-relaxed mb-4">
                {role.description}
              </p>
              <Link to="/apply">
                <Button variant="outline" size="sm" className="w-full">
                  Apply Now
                </Button>
              </Link>
            </Card>)}
        </div>

        <div className="text-center">
          <p className="text-gray-muted mb-4">Ready to take the next step?</p>
          <Link to="/apply">
            <Button variant="primary" size="lg">
              Complete Application
            </Button>
          </Link>
        </div>
      </Section>
    </div>;
}
export default ForCandidates;