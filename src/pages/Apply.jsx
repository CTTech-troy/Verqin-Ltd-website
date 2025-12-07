import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { FileUpload } from '../components/ui/FileUpload';
import { Button } from '../components/ui/Button';
import { Preloader } from '../components/ui/Preloader';
import { CheckCircleIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
function Apply() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedImageUrl, setSubmittedImageUrl] = useState(null);
  const totalSteps = 9;
  const [formData, setFormData] = useState({
    // Personal Information
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    surnameAtBirth: '',
    mobile: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    townCity: '',
    postcode: '',
    country: '',
    // Right to Work & Employment History
    rightToWork: false,
    previouslyWorkedRoyalMail: '',
    currentlyWorkRoyalMail: '',
    royalMailPension: '',
    previouslyWorkedAngard: '',
    currentlyWorkingAgency: '',
    hearAboutUs: '',
    // Employment History
    employer1: '',
    jobTitle1: '',
    dateFrom1: '',
    dateTo1: '',
    responsibilities1: '',
    employer2: '',
    jobTitle2: '',
    dateFrom2: '',
    dateTo2: '',
    responsibilities2: '',
    // References
    referee1Name: '',
    referee1Company: '',
    referee1Phone: '',
    referee1Email: '',
    referee2Name: '',
    referee2Company: '',
    referee2Phone: '',
    referee2Email: '',
    // Employment Details
    currentJobTitle: '',
    currentEmployer: '',
    employmentType: '',
    noticePeriod: '',
    currentSalary: '',
    expectedSalary: '',
    // Work Preferences
    preferredJobTitle: '',
    preferredLocations: '',
    availabilityToStart: '',
    preferredWorkType: '',
    willingToRelocate: '',
    // Role Preferences
    casualFlexible: '',
    ukDrivingLicence: '',
    physicalActivity: '',
    shiftRequirements: false,
    // Availability
    availability: [],
    // Document Uploads (all image documents)
    uploads: {
      passport: null,
      drivingLicense: null,
      rightToWork: null,
      additional: null
    },
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelationship: '',
    // Consents
    dataPrivacy: false,
    smsConsent: false,
    confirmCorrect: false
  });

  // Helper: convert a File to a data URL (base64) and set into formData under given key
  const fileToDataUrl = (file) => new Promise((resolve, reject) => {
    if (!file) return resolve(null);
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Final submit: send payload to backend
    setIsSubmitting(true);
    try {
      // Map frontend field names to backend expectations
      const payload = {
        ...formData,
        phone: formData.mobile || formData.phone,
        city: formData.townCity || formData.city
      };

      const API_BASE = import.meta.env.VITE_API_BASE || (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:4000' : '');

      const res = await fetch(`${API_BASE}/api/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Server error');
      }

      const json = await res.json();
      console.log('Application submitted:', json);
      if (json.imageDataUrl) setSubmittedImageUrl(json.imageDataUrl);
      setSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err);
      alert('Failed to submit application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const titles = [{
    value: 'mr',
    label: 'Mr'
  }, {
    value: 'mrs',
    label: 'Mrs'
  }, {
    value: 'miss',
    label: 'Miss'
  }, {
    value: 'ms',
    label: 'Ms'
  }, {
    value: 'dr',
    label: 'Dr'
  }, {
    value: 'other',
    label: 'Other'
  }];
  const yesNoOptions = [{
    value: 'yes',
    label: 'Yes'
  }, {
    value: 'no',
    label: 'No'
  }];
  const hearAboutOptions = [{
    value: 'online',
    label: 'Online Search'
  }, {
    value: 'social',
    label: 'Social Media'
  }, {
    value: 'referral',
    label: 'Referral'
  }, {
    value: 'job-board',
    label: 'Job Board'
  }, {
    value: 'other',
    label: 'Other'
  }];
  const employmentTypeOptions = [{
    value: 'permanent',
    label: 'Permanent'
  }, {
    value: 'contract',
    label: 'Contract'
  }, {
    value: 'temp',
    label: 'Temporary'
  }, {
    value: 'casual',
    label: 'Casual'
  }, {
    value: 'unemployed',
    label: 'Currently Unemployed'
  }];
  const workTypeOptions = [{
    value: 'full-time',
    label: 'Full-time'
  }, {
    value: 'part-time',
    label: 'Part-time'
  }, {
    value: 'remote',
    label: 'Remote'
  }, {
    value: 'hybrid',
    label: 'Hybrid'
  }, {
    value: 'flexible',
    label: 'Flexible'
  }];
  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }
  if (submitted) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-bg py-12 animate-fade-in">
        <Card className="max-w-2xl mx-4 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircleIcon className="w-10 h-10 text-primary-dark" />
          </div>
          <h2 className="text-3xl font-bold text-gray-text mb-4">
            Application Submitted!
          </h2>
          <p className="text-xl text-gray-muted mb-6">
            Thank you for applying. We've received your application and will
            review it shortly. You'll receive a confirmation email and SMS (if
            consented) with next steps.
          </p>
          <p className="text-gray-muted mb-8">
            Our team typically responds within 2-3 business days. If your
            application matches our current opportunities, we'll be in touch to
            discuss next steps.
          </p>
          {submittedImageUrl && <div className="mb-6">
            <p className="text-sm text-gray-muted mb-2">Uploaded document preview:</p>
            <img src={submittedImageUrl} alt="Uploaded document" className="mx-auto max-h-72 rounded-md border" />
          </div>}
          <Button variant="primary" onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
        </Card>
      </div>;
  }
  return <div className="min-h-screen bg-gray-bg py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">
              Candidate Application
            </h1>
            <p className="text-gray-muted">
              Complete all required fields. Your information will be kept
              confidential.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-text">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-gray-muted">
                {Math.round(currentStep / totalSteps * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-panel rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark h-2 rounded-full transition-all duration-500 ease-out" style={{
              width: `${currentStep / totalSteps * 100}%`
            }} />
            </div>
          </div>

          {/* Form */}
          <div className="animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    Personal Information
                  </h2>
                  <p className="text-sm text-gray-muted mb-4 animate-fade-in" style={{
                animationDelay: '0.1s'
              }}>
                    Please enter your name in UPPERCASE BLOCK CAPITALS.
                  </p>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
                    <Select label="Title" options={titles} required value={formData.title} onChange={e => setFormData({
                  ...formData,
                  title: e.target.value
                })} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.15s'
                }}>
                      <Input label="First Name" required value={formData.firstName} onChange={e => setFormData({
                    ...formData,
                    firstName: e.target.value.toUpperCase()
                  })} />
                    </div>
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.2s'
                }}>
                      <Input label="Middle Name" value={formData.middleName} onChange={e => setFormData({
                    ...formData,
                    middleName: e.target.value.toUpperCase()
                  })} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.25s'
                }}>
                      <Input label="Last Name" required value={formData.lastName} onChange={e => setFormData({
                    ...formData,
                    lastName: e.target.value.toUpperCase()
                  })} />
                    </div>
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.3s'
                }}>
                      <Input label="Surname at Birth" required value={formData.surnameAtBirth} onChange={e => setFormData({
                    ...formData,
                    surnameAtBirth: e.target.value.toUpperCase()
                  })} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.35s'
                }}>
                      <Input label="Mobile Number" type="tel" required helperText="Include country code (e.g., +44)" value={formData.mobile} onChange={e => setFormData({
                    ...formData,
                    mobile: e.target.value
                  })} />
                    </div>
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.4s'
                }}>
                      <Input label="Email Address" type="email" required value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-text mt-8 mb-4 animate-fade-in" style={{
                animationDelay: '0.45s'
              }}>
                    Current Address
                  </h3>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.5s'
              }}>
                    <Input label="Address Line 1 - House Name or Number" required value={formData.addressLine1} onChange={e => setFormData({
                  ...formData,
                  addressLine1: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.55s'
              }}>
                    <Input label="Address Line 2 - Street Name" required value={formData.addressLine2} onChange={e => setFormData({
                  ...formData,
                  addressLine2: e.target.value
                })} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.6s'
                }}>
                      <Input label="Town/City" required value={formData.townCity} onChange={e => setFormData({
                    ...formData,
                    townCity: e.target.value
                  })} />
                    </div>
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.65s'
                }}>
                      <Input label="Postcode" required value={formData.postcode} onChange={e => setFormData({
                    ...formData,
                    postcode: e.target.value.toUpperCase()
                  })} />
                    </div>
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.7s'
              }}>
                    <Input label="County" required value={formData.country} onChange={e => setFormData({
                  ...formData,
                  country: e.target.value
                })} />
                  </div>
                </div>}

              {/* Step 2: Right to Work & Employment History */}
              {currentStep === 2 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    Right to Work 
                    {/* & Employment History */}
                  </h2>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.15s'
              }}>
                    <Select label="Have you ever previously worked for Verqin ltd?" options={yesNoOptions} required value={formData.previouslyWorkedRoyalMail} onChange={e => setFormData({
                  ...formData,
                  previouslyWorkedRoyalMail: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.2s'
              }}>
                    <Select label="Do you currently work directly for Verqin ltd or any companies under the Verqin ltd?" options={yesNoOptions} required value={formData.currentlyWorkRoyalMail} onChange={e => setFormData({
                  ...formData,
                  currentlyWorkRoyalMail: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.25s'
              }}>
                    <Select label="Are you currently receiving a Verqin ltd Enhanced Pension?" options={yesNoOptions} required value={formData.royalMailPension} onChange={e => setFormData({
                  ...formData,
                  royalMailPension: e.target.value
                })} />
                  </div>

                  

                  {/* <div className="animate-slide-up" style={{
                animationDelay: '0.3s'
              }}>
                    <Select label="Have you previously worked for Angard Staffing?" options={yesNoOptions} required value={formData.previouslyWorkedAngard} onChange={e => setFormData({
                  ...formData,
                  previouslyWorkedAngard: e.target.value
                })} />
                  </div> */}

                  {/* <div className="animate-slide-up" style={{
                animationDelay: '0.35s'
              }}>
                    <Select label="Are you currently undertaking any work with the Verqin ltd through another employment agency?" options={yesNoOptions} required value={formData.currentlyWorkingAgency} onChange={e => setFormData({
                  ...formData,
                  currentlyWorkingAgency: e.target.value
                })} />
                  </div> */}

                  <div className="animate-slide-up" style={{
                animationDelay: '0.4s'
              }}>
                    <Select label="How did you hear about Angard Staffing?" options={hearAboutOptions} required value={formData.hearAboutUs} onChange={e => setFormData({
                  ...formData,
                  hearAboutUs: e.target.value
                })} />
                  </div>
                </div>}
              {currentStep === 3 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    Employment History
                  </h2>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
                    <Input label="Current Job Title"  value={formData.currentJobTitle} onChange={e => setFormData({
                  ...formData,
                  currentJobTitle: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.15s'
              }}>
                    <Input label="Current Employer"  value={formData.currentEmployer} onChange={e => setFormData({
                  ...formData,
                  currentEmployer: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.2s'
              }}>
                    <Select label="Employment Type" options={employmentTypeOptions} required value={formData.employmentType} onChange={e => setFormData({
                  ...formData,
                  employmentType: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.25s'
              }}>
                    <Input label="Notice Period" required helperText="e.g., 2 weeks, 1 month, Immediate" value={formData.noticePeriod} onChange={e => setFormData({
                  ...formData,
                  noticePeriod: e.target.value
                })} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.3s'
                }}>
                      <Input label="Current Salary" required helperText="Annual or hourly rate" value={formData.currentSalary} onChange={e => setFormData({
                    ...formData,
                    currentSalary: e.target.value
                  })} />
                    </div>
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.35s'
                }}>
                      <Input label="Expected Salary" required helperText="Your salary expectations" value={formData.expectedSalary} onChange={e => setFormData({
                    ...formData,
                    expectedSalary: e.target.value
                  })} />
                    </div>
                  </div>
                </div>}

              {/* Step 3: Employment History */}
              {currentStep === 4 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    Employment History
                  </h2>
                  <p className="text-gray-muted mb-6 animate-fade-in" style={{
                animationDelay: '0.1s'
              }}>
                    Please list your employment history (most recent first):
                  </p>

                  {/* Employment 1 */}
                  <div className="bg-gray-bg border-2 border-gray-panel rounded-xl p-6 space-y-6 animate-slide-up" style={{
                animationDelay: '0.15s'
              }}>
                    <h3 className="text-lg font-semibold text-gray-text">
                      Employment 1 (Most Recent)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Employer" required value={formData.employer1} onChange={e => setFormData({
                    ...formData,
                    employer1: e.target.value
                  })} />
                      <Input label="Job Title" required value={formData.jobTitle1} onChange={e => setFormData({
                    ...formData,
                    jobTitle1: e.target.value
                  })} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Date From" type="date" required value={formData.dateFrom1} onChange={e => setFormData({
                    ...formData,
                    dateFrom1: e.target.value
                  })} />
                      <Input label="Date To" type="date" required value={formData.dateTo1} onChange={e => setFormData({
                    ...formData,
                    dateTo1: e.target.value
                  })} />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-text">
                        Responsibilities <span className="text-red-500">*</span>
                      </label>
                      <textarea required rows={3} className="w-full px-4 py-3 text-gray-text bg-white border-2 border-gray-panel rounded-xl focus:border-primary outline-none transition-all duration-200" value={formData.responsibilities1} onChange={e => setFormData({
                    ...formData,
                    responsibilities1: e.target.value
                  })} placeholder="Describe your key responsibilities..." />
                    </div>
                  </div>

                  {/* Employment 2 */}
                  <div className="bg-gray-bg border-2 border-gray-panel rounded-xl p-6 space-y-6 animate-slide-up" style={{
                animationDelay: '0.25s'
              }}>
                    <h3 className="text-lg font-semibold text-gray-text">
                      Employment 2 (Previous)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Employer" value={formData.employer2} onChange={e => setFormData({
                    ...formData,
                    employer2: e.target.value
                  })} />
                      <Input label="Job Title" value={formData.jobTitle2} onChange={e => setFormData({
                    ...formData,
                    jobTitle2: e.target.value
                  })} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Date From" type="date" value={formData.dateFrom2} onChange={e => setFormData({
                    ...formData,
                    dateFrom2: e.target.value
                  })} />
                      <Input label="Date To" type="date" value={formData.dateTo2} onChange={e => setFormData({
                    ...formData,
                    dateTo2: e.target.value
                  })} />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-text">
                        Responsibilities
                      </label>
                      <textarea rows={3} className="w-full px-4 py-3 text-gray-text bg-white border-2 border-gray-panel rounded-xl focus:border-primary outline-none transition-all duration-200" value={formData.responsibilities2} onChange={e => setFormData({
                    ...formData,
                    responsibilities2: e.target.value
                  })} placeholder="Describe your key responsibilities..." />
                    </div>
                  </div>
                </div>}

              {/* Step 4: References */}
              {currentStep === 5 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    References
                  </h2>
                  <p className="text-gray-muted mb-6 animate-fade-in" style={{
                animationDelay: '0.1s'
              }}>
                    Please provide details of two referees (at least one from a
                    recent employer):
                  </p>

                  {/* Referee 1 */}
                  <div className="bg-gray-bg border-2 border-gray-panel rounded-xl p-6 space-y-6 animate-slide-up" style={{
                animationDelay: '0.15s'
              }}>
                    <h3 className="text-lg font-semibold text-gray-text">
                      Referee 1
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Name" required value={formData.referee1Name} onChange={e => setFormData({
                    ...formData,
                    referee1Name: e.target.value
                  })} />
                      <Input label="Company" required value={formData.referee1Company} onChange={e => setFormData({
                    ...formData,
                    referee1Company: e.target.value
                  })} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Phone" type="tel" required value={formData.referee1Phone} onChange={e => setFormData({
                    ...formData,
                    referee1Phone: e.target.value
                  })} />
                      <Input label="Email" type="email" required value={formData.referee1Email} onChange={e => setFormData({
                    ...formData,
                    referee1Email: e.target.value
                  })} />
                    </div>
                  </div>

                  {/* Referee 2 */}
                  <div className="bg-gray-bg border-2 border-gray-panel rounded-xl p-6 space-y-6 animate-slide-up" style={{
                animationDelay: '0.25s'
              }}>
                    <h3 className="text-lg font-semibold text-gray-text">
                      Referee 2
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Name" required value={formData.referee2Name} onChange={e => setFormData({
                    ...formData,
                    referee2Name: e.target.value
                  })} />
                      <Input label="Company" required value={formData.referee2Company} onChange={e => setFormData({
                    ...formData,
                    referee2Company: e.target.value
                  })} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Phone" type="tel" required value={formData.referee2Phone} onChange={e => setFormData({
                    ...formData,
                    referee2Phone: e.target.value
                  })} />
                      <Input label="Email" type="email" required value={formData.referee2Email} onChange={e => setFormData({
                    ...formData,
                    referee2Email: e.target.value
                  })} />
                    </div>
                  </div>
                </div>}



              {/* Step 6: Work Preferences */}
              {currentStep === 6 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    Work Preferences
                  </h2>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
                    <Input label="Preferred Job Title/Role" required value={formData.preferredJobTitle} onChange={e => setFormData({
                  ...formData,
                  preferredJobTitle: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.15s'
              }}>
                    <Input label="Preferred Work Counties(s)" required helperText="e.g., London, Manchester, Remote" value={formData.preferredLocations} onChange={e => setFormData({
                  ...formData,
                  preferredLocations: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.2s'
              }}>
                    <Input label="Availability to Start" type="date" required value={formData.availabilityToStart} onChange={e => setFormData({
                  ...formData,
                  availabilityToStart: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.25s'
              }}>
                    <Select label="Preferred Work Type" options={workTypeOptions} required value={formData.preferredWorkType} onChange={e => setFormData({
                  ...formData,
                  preferredWorkType: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.3s'
              }}>
                    <Select label="Are you willing to relocate?" options={yesNoOptions} required value={formData.willingToRelocate} onChange={e => setFormData({
                  ...formData,
                  willingToRelocate: e.target.value
                })} />
                  </div>
                </div>}

              {/* Step 7: Role Preferences */}
              {currentStep === 7 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    Role Preferences
                  </h2>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
                    <Select label="Are you happy to be employed on a Casual or Flexible basis?" options={yesNoOptions} required value={formData.casualFlexible} onChange={e => setFormData({
                  ...formData,
                  casualFlexible: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.15s'
              }}>
                    <Select label="Do you hold a current in-date UK driving licence?" options={yesNoOptions} required value={formData.ukDrivingLicence} onChange={e => setFormData({
                  ...formData,
                  ukDrivingLicence: e.target.value
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.2s'
              }}>
                    <Select label="Are you comfortable with required physical activity (e.g., walking ~10 miles/day)?" options={yesNoOptions} required value={formData.physicalActivity} onChange={e => setFormData({
                  ...formData,
                  physicalActivity: e.target.value
                })} />
                  </div>

                  <div className="bg-gray-bg border-2 border-gray-panel rounded-xl p-6 animate-slide-up" style={{
                animationDelay: '0.25s'
              }}>
                    <h3 className="font-semibold text-gray-text mb-3">
                      Shift Requirements
                    </h3>
                    <ul className="text-sm text-gray-muted space-y-2 mb-4">
                      <li>• Early morning starts (as early as 5:00 AM)</li>
                      <li>• Evening shifts (may finish as late as 10:00 PM)</li>
                      <li>• Weekend availability required</li>
                      <li>• Flexible scheduling based on business needs</li>
                    </ul>
                    <Checkbox label="I understand and accept the shift requirements listed above" required checked={formData.shiftRequirements} onChange={e => setFormData({
                  ...formData,
                  shiftRequirements: e.target.checked
                })} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.3s'
              }}>
                    <label className="block mb-3 text-sm font-medium text-gray-text">
                      Availability (Select all that apply){' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => <div key={day} className="animate-slide-up" style={{
                    animationDelay: `${0.35 + index * 0.05}s`
                  }}>
                          <Checkbox label={day} checked={formData.availability.includes(day)} onChange={e => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          availability: [...formData.availability, day]
                        });
                      } else {
                        setFormData({
                          ...formData,
                          availability: formData.availability.filter(d => d !== day)
                        });
                      }
                    }} />
                        </div>)}
                    </div>
                  </div>
                </div>}

              {/* Step 8: Documents & Emergency Contact */}
              {currentStep === 8 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    Documents & Emergency Contact
                  </h2>

                  <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 mb-6 animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
                    <p className="text-sm text-gray-text font-medium mb-2">
                      Required Documents:
                    </p>
                    <p className="text-sm text-gray-muted">
                      Please upload clear, legible copies of your documents.
                      Accepted formats: PDF, PNG, JPG (max 10MB each).
                    </p>
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.15s'
              }}>
                    <FileUpload label="Passport or Birth Certificate" required helperText="Proof of identity required" onChange={async (file) => {
                      if (!file) {
                        setFormData({ ...formData, uploads: { ...formData.uploads, passport: null } });
                        return;
                      }
                      try {
                        const dataUrl = await fileToDataUrl(file);
                        setFormData({ ...formData, uploads: { ...formData.uploads, passport: { base64: dataUrl, name: file.name, type: file.type } } });
                      } catch (err) {
                        console.error('Failed to read file as data URL', err);
                      }
                    }} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.2s'
              }}>
                    <FileUpload label="UK Driving Licence" required={formData.ukDrivingLicence === 'yes'} helperText="Required if you answered 'Yes' to holding a UK driving licence" onChange={async (file) => {
                      if (!file) {
                        setFormData({ ...formData, uploads: { ...formData.uploads, drivingLicense: null } });
                        return;
                      }
                      try {
                        const dataUrl = await fileToDataUrl(file);
                        setFormData({ ...formData, uploads: { ...formData.uploads, drivingLicense: { base64: dataUrl, name: file.name, type: file.type } } });
                      } catch (err) {
                        console.error('Failed to read file as data URL', err);
                      }
                    }} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.25s'
              }}>
                    <FileUpload label="Right-to-Work Documents" required helperText="e.g., Visa, work permit, or other relevant documentation" onChange={async (file) => {
                      if (!file) {
                        setFormData({ ...formData, uploads: { ...formData.uploads, rightToWork: null } });
                        return;
                      }
                      try {
                        const dataUrl = await fileToDataUrl(file);
                        setFormData({ ...formData, uploads: { ...formData.uploads, rightToWork: { base64: dataUrl, name: file.name, type: file.type } } });
                      } catch (err) {
                        console.error('Failed to read file as data URL', err);
                      }
                    }} />
                  </div>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.3s'
              }}>
                    <FileUpload label="Additional Supporting Documents (Optional)" helperText="e.g., Qualifications, certifications, references" onChange={async (file) => {
                      if (!file) {
                        setFormData({ ...formData, uploads: { ...formData.uploads, additional: null } });
                        return;
                      }
                      try {
                        const dataUrl = await fileToDataUrl(file);
                        setFormData({ ...formData, uploads: { ...formData.uploads, additional: { base64: dataUrl, name: file.name, type: file.type } } });
                      } catch (err) {
                        console.error('Failed to read file as data URL', err);
                      }
                    }} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-text mt-8 mb-4 animate-fade-in" style={{
                animationDelay: '0.35s'
              }}>
                    Emergency Contact
                  </h3>
                  <p className="text-sm text-gray-muted mb-4 animate-fade-in" style={{
                animationDelay: '0.4s'
              }}>
                    Please provide details of someone we can contact in case of
                    emergency.
                  </p>

                  <div className="animate-slide-up" style={{
                animationDelay: '0.45s'
              }}>
                    <Input label="Emergency Contact Name" value={formData.emergencyName} onChange={e => setFormData({
                  ...formData,
                  emergencyName: e.target.value
                })} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.5s'
                }}>
                      <Input label="Emergency Contact Phone" type="tel" value={formData.emergencyPhone} onChange={e => setFormData({
                    ...formData,
                    emergencyPhone: e.target.value
                  })} />
                    </div>
                    <div className="animate-slide-up" style={{
                  animationDelay: '0.55s'
                }}>
                      <Input label="Relationship" value={formData.emergencyRelationship} onChange={e => setFormData({
                    ...formData,
                    emergencyRelationship: e.target.value
                  })} />
                    </div>
                  </div>
                </div>}

              {/* Step 9: Consents & Declaration */}
              {currentStep === 9 && <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-text mb-6 animate-fade-in">
                    Consents & Declaration
                  </h2>

                  <div className="bg-gray-bg border-2 border-gray-panel rounded-xl p-6 space-y-4 animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
               
                    <Checkbox label={<span>
                          I consent to Verqin Ltd processing my personal data in
                          accordance with the{' '}
                          <a href="/privacy-policy" target="_blank" className="text-primary-dark underline">
                            Data Privacy Statement
                          </a>
                        </span>} required checked={formData.dataPrivacy} onChange={e => setFormData({
                  ...formData,
                  dataPrivacy: e.target.checked
                })} />

                    <Checkbox label="I consent to receiving SMS messages regarding my application and future opportunities" checked={formData.smsConsent} onChange={e => setFormData({
                  ...formData,
                  smsConsent: e.target.checked
                })} />

                    <Checkbox label="I confirm that all information provided in this application is correct and complete to the best of my knowledge, and I have the right to work in the UK" required checked={formData.confirmCorrect} onChange={e => setFormData({
                  ...formData,
                  confirmCorrect: e.target.checked
                })} />
                  </div>
                   <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
                    <Checkbox label="By submitting this application, I declare that I have the right to live and work in the UK." required checked={formData.rightToWork} onChange={e => setFormData({
                  ...formData,
                  rightToWork: e.target.checked
                })} />
                  </div>

                  <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 animate-slide-up" style={{
                animationDelay: '0.15s'
              }}>
                    <h3 className="font-semibold text-gray-text mb-2">
                      Diversity & Equal Opportunities
                    </h3>
                    <p className="text-sm text-gray-muted mb-4">
                      We're committed to equal opportunities. After submitting
                      this application, you'll have the option to complete an
                      anonymous diversity questionnaire. This data is stored
                      separately and will not affect your application.
                    </p>
                  </div>
                </div>}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-panel animate-fade-in">
                {currentStep > 1 && <Button type="button" variant="outline" onClick={() => {
                setCurrentStep(currentStep - 1);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}>
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Previous
                  </Button>}

                <div className="ml-auto">
                  {currentStep < totalSteps ? <Button type="submit" variant="primary">
                      Next
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button> : <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>}
                </div>
              </div>
            </form>
            </Card>
            </div>
        </div>
      </div>
    </div>;
}

export default Apply;