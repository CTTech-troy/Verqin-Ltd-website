import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SearchIcon, UsersIcon, CheckCircleIcon } from 'lucide-react';
 function HowItWorks() {
  const steps = [{
    icon: SearchIcon,
    title: 'Tell Us What You Need',
    description: "Share your requirements, whether you're hiring talent or seeking your next opportunity. We listen carefully to understand your goals."
  }, {
    icon: UsersIcon,
    title: 'We Find the Perfect Match',
    description: 'Our expert team leverages deep market insight and proven processes to connect the right people with the right opportunities.'
  }, {
    icon: CheckCircleIcon,
    title: 'Success & Support',
    description: 'We ensure smooth onboarding and provide ongoing support to help both employers and candidates thrive in their partnership.'
  }];
  return <section className="py-16 md:py-24 bg-gray-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-muted max-w-2xl mx-auto">
            A simple, transparent process designed for your success
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="relative">
                  <div className="text-center">
                    <div className="relative inline-block mb-6 group">
                      <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
                        <Icon className="w-10 h-10 text-primary-dark transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-dark text-white rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-125">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>}
                </div>
              </AnimatedSection>;
        })}
        </div>
      </div>
    </section>;
}
export default HowItWorks;