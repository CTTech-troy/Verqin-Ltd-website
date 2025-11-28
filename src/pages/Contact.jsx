import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircleIcon } from 'lucide-react';
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-bg">
        <Card className="max-w-2xl mx-4 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-10 h-10 text-primary-dark" />
          </div>
          <h2 className="text-3xl font-bold text-gray-text mb-4">
            Message Sent!
          </h2>
          <p className="text-xl text-gray-muted mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <Button variant="primary" onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </Card>
      </div>;
  }
  return <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-text mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-muted leading-relaxed">
            Get in touch with our team. We're here to help with any questions
            about our services.
          </p>
        </div>
      </Section>

      {/* Contact Info & Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card hover>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-text mb-2">Phone</h3>
                  <p className="text-gray-muted">+44 742 465 5783</p>
                  <p className="text-sm text-gray-muted mt-1">
                    Mon-Fri, 9am-6pm
                  </p>
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-text mb-2">Email</h3>
                  <p className="text-gray-muted">hello@verqin.co.uk</p>
                  <p className="text-sm text-gray-muted mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-text mb-2">Office</h3>
                  <p className="text-gray-muted">
                    281 , Dunstable Road
                    <br />
                    Luton, LU3 1JJ
                    
                    <br />
                    London United Kingdom
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-3xl font-bold text-gray-text mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input label="Your Name" required value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Email Address" type="email" required value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} />
                  <Input label="Phone Number" type="tel" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} />
                </div>

                <Input label="Subject" required value={formData.subject} onChange={e => setFormData({
                ...formData,
                subject: e.target.value
              })} />

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-text">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea required rows={6} className="w-full px-4 py-3 text-gray-text bg-white border-2 border-gray-panel rounded-xl focus:border-primary outline-none transition-all duration-200" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Tell us how we can help..." />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>;
}

export default Contact;