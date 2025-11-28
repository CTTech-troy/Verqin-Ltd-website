import React from 'react';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import { StarIcon } from 'lucide-react';
function Testimonials() {
  const testimonials = [{
    quote: 'Verqin transformed our hiring process. Their understanding of our needs and quick turnaround helped us scale our team efficiently.',
    author: 'Sarah Mitchell',
    role: 'HR Director, TechCorp UK',
    rating: 4
  }, {
    quote: 'The team at Verqin found me the perfect role that matched my skills and career goals. Professional, responsive, and genuinely caring.',
    author: 'James Thompson',
    role: 'Logistics Coordinator',
    rating: 5
  }, {
    quote: "Outstanding service from start to finish. Verqin's workforce solutions gave us the flexibility we needed during peak season.",
    author: 'Emma Roberts',
    role: 'Operations Manager, RetailPlus',
    rating: 5
  }];
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-muted max-w-2xl mx-auto">
            Trusted by employers and candidates across the UK
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
              <Card hover className="h-full transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B] transition-transform duration-300 hover:scale-125" />)}
                </div>
                <p className="text-[#182026] leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-panel pt-4">
                  <p className="font-semibold text-gray-text">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-muted">{testimonial.role}</p>
                </div>
              </Card>
            </AnimatedSection>)}
        </div>
      </div>
    </section>;
}
export default Testimonials;