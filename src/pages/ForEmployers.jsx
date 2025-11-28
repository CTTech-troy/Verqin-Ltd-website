import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { FileUpload } from '../components/ui/FileUpload';
import { CheckCircleIcon, ClockIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
export function ForEmployers() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    roleName: '',
    roleType: '',
    location: '',
    numberOfHires: '',
    startDate: '',
    description: '',
    budget: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const benefits = [{
    icon: ClockIcon,
    title: 'Fast Turnaround',
    description: 'Access qualified candidates within 24-48 hours for urgent roles'
  }, {
    icon: UsersIcon,
    title: 'Quality Talent',
    description: 'Pre-vetted professionals who match your requirements and culture'
  }, {
    icon: TrendingUpIcon,
    title: 'Scalable Solutions',
    description: 'Flexible staffing that grows with your business needs'
  }, {
    icon: CheckCircleIcon,
    title: 'Compliance Assured',
    description: 'Full right-to-work checks and documentation handled for you'
  }];
  const roleTypes = [{
    value: 'casual',
    label: 'Casual / Flexible'
  }, {
    value: 'temporary',
    label: 'Temporary'
  }, {
    value: 'contract',
    label: 'Contract'
  }, {
    value: 'permanent',
    label: 'Permanent'
  }];
  if (submitted) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-bg">
        <Card className="max-w-2xl mx-4 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-10 h-10 text-primary-dark" />
          </div>
          <h2 className="text-3xl font-bold text-gray-text mb-4">Thank You!</h2>
          <p className="text-xl text-gray-muted mb-6">
            We've received your request and will be in touch within 24 hours to
            discuss your hiring needs.
          </p>
          <Button variant="primary" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </Card>
      </div>;
  }
  return <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-text mb-6">
            For Employers
          </h1>
          <p className="text-xl text-gray-muted leading-relaxed">
            Find exceptional talent quickly. From casual roles to permanent
            placements, we deliver candidates who drive your business forward.
          </p>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Request Form */}
        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-3xl font-bold text-gray-text mb-6">
              Request Talent
            </h2>
            <p className="text-gray-muted mb-8">
              Tell us about your hiring needs and we'll connect you with
              qualified candidates
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Company Name" required value={formData.companyName} onChange={e => setFormData({
                ...formData,
                companyName: e.target.value
              })} />
                <Input label="Contact Person" required value={formData.contactPerson} onChange={e => setFormData({
                ...formData,
                contactPerson: e.target.value
              })} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Email Address" type="email" required value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} />
                <Input label="Phone Number" type="tel" required value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Role Name" required value={formData.roleName} onChange={e => setFormData({
                ...formData,
                roleName: e.target.value
              })} />
                <Select label="Role Type" options={roleTypes} required value={formData.roleType} onChange={e => setFormData({
                ...formData,
                roleType: e.target.value
              })} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Location" required value={formData.location} onChange={e => setFormData({
                ...formData,
                location: e.target.value
              })} />
                <Input label="Number of Hires" type="number" required value={formData.numberOfHires} onChange={e => setFormData({
                ...formData,
                numberOfHires: e.target.value
              })} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Expected Start Date" type="date" required value={formData.startDate} onChange={e => setFormData({
                ...formData,
                startDate: e.target.value
              })} />
                <Input label="Budget / Hourly Rate (Optional)" value={formData.budget} onChange={e => setFormData({
                ...formData,
                budget: e.target.value
              })} />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-text">
                  Brief Description <span className="text-red-500">*</span>
                </label>
                <textarea required rows={4} className="w-full px-4 py-3 text-gray-text bg-white border-2 border-gray-panel rounded-xl focus:border-primary outline-none transition-all duration-200" value={formData.description} onChange={e => setFormData({
                ...formData,
                description: e.target.value
              })} placeholder="Describe the role, key responsibilities, and ideal candidate..." />
              </div>

              <FileUpload label="Attach Job Description (Optional)" accept=".pdf,.doc,.docx" />

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </div>;
}
export default ForEmployers;