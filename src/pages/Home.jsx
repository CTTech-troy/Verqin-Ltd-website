import React from 'react';
import  Hero  from '../components/home/Hero';
import  ServicesGrid  from '../components/home/ServicesGrid';
import  HowItWorks  from '../components/home/HowItWorks';
import  Testimonials  from '../components/home/Testimonials';
import  CTASection  from '../components/home/CTASection';
function Home() {
  return <div className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>;
}
export default Home;