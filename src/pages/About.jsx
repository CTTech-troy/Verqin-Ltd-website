import React from 'react';
import  {Section}  from '../components/layout/Section';
import  {Card} from '../components/ui/Card';
import { TargetIcon, EyeIcon, HeartIcon, TrendingUpIcon, AwardIcon } from 'lucide-react';
function About() {
  const values = [{
    icon: HeartIcon,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical practices in every interaction.'
  }, {
    icon: TrendingUpIcon,
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to deliver better outcomes for our clients and candidates.'
  }, {
    icon: HeartIcon,
    title: 'Empathy',
    description: 'We understand the human side of recruitment, treating every person with respect and care.'
  }, {
    icon: AwardIcon,
    title: 'Excellence',
    description: 'We set high standards and consistently deliver exceptional service and results.'
  }, {
    icon: TrendingUpIcon,
    title: 'Growth',
    description: 'We invest in continuous improvement, helping our clients, candidates, and team members thrive.'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-text mb-6">
            About Verqin Ltd
          </h1>
          <p className="text-xl text-gray-muted leading-relaxed">
            Verqin Ltd — Meaningful connections that build growth. We're a
            modern people solutions company built on trust, insight, and
            innovation. Whether you're an employer seeking exceptional talent or
            a candidate ready for your next step, Verqin brings clarity and
            confidence to every stage.
          </p>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card hover>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <EyeIcon className="w-6 h-6 text-primary-dark" />
            </div>
            <h2 className="text-3xl font-bold text-gray-text mb-4">
              Our Vision
            </h2>
            <p className="text-gray-muted leading-relaxed">
              To redefine recruitment as a partnership built on trust and
              innovation — transforming the way people experience work.
            </p>
          </Card>

          <Card hover>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <TargetIcon className="w-6 h-6 text-primary-dark" />
            </div>
            <h2 className="text-3xl font-bold text-gray-text mb-4">
              Our Promise
            </h2>
            <p className="text-gray-muted leading-relaxed">
              We don't just fill roles — we build partnerships. We connect
              ambition with opportunity and turn potential into performance.
            </p>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-muted max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
          const Icon = value.icon;
          return <Card key={index} hover className="animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-dark" />
                </div>
                <h3 className="text-xl font-semibold text-gray-text mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-muted leading-relaxed">
                  {value.description}
                </p>
              </Card>;
        })}
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-text mb-8 text-center">
            Our Approach
          </h2>
          <div className="space-y-6 text-gray-muted leading-relaxed text-lg">
            <p>
              At Verqin, we believe recruitment is more than matching CVs to job
              descriptions. It's about understanding the unique needs of
              businesses and the aspirations of individuals, then creating
              connections that drive mutual success.
            </p>
            <p>
              We take time to listen, ask the right questions, and leverage our
              deep market insight to deliver solutions that work. Whether you're
              scaling your team, navigating workforce challenges, or seeking
              your next career move, we're here to guide you with expertise and
              empathy.
            </p>
            <p>
              Our commitment to innovation means we're always exploring better
              ways to serve you — from streamlined processes to cutting-edge
              technology that enhances the recruitment experience without losing
              the human touch.
            </p>
          </div>
        </div>
      </Section>
    </div>;
}

export default About;