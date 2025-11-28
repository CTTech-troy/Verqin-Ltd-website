import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/ui/Card';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Button } from '../components/ui/Button';
import { CheckCircleIcon } from 'lucide-react';
function DiversityQuestionnaire() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ethnicity: '',
    gender: '',
    disability: '',
    ageRange: '',
    religion: '',
    consent: false
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const ethnicityOptions = [{
    value: 'prefer-not',
    label: 'Prefer not to say'
  }, {
    value: 'white-british',
    label: 'White - British'
  }, {
    value: 'white-irish',
    label: 'White - Irish'
  }, {
    value: 'white-other',
    label: 'White - Other'
  }, {
    value: 'mixed',
    label: 'Mixed / Multiple ethnic groups'
  }, {
    value: 'asian',
    label: 'Asian / Asian British'
  }, {
    value: 'black',
    label: 'Black / African / Caribbean / Black British'
  }, {
    value: 'other',
    label: 'Other ethnic group'
  }];
  const genderOptions = [{
    value: 'prefer-not',
    label: 'Prefer not to say'
  }, {
    value: 'male',
    label: 'Male'
  }, {
    value: 'female',
    label: 'Female'
  }, {
    value: 'non-binary',
    label: 'Non-binary'
  }, {
    value: 'other',
    label: 'Other'
  }];
  const disabilityOptions = [{
    value: 'prefer-not',
    label: 'Prefer not to say'
  }, {
    value: 'yes',
    label: 'Yes'
  }, {
    value: 'no',
    label: 'No'
  }];
  const ageRangeOptions = [{
    value: 'prefer-not',
    label: 'Prefer not to say'
  }, {
    value: '18-24',
    label: '18-24'
  }, {
    value: '25-34',
    label: '25-34'
  }, {
    value: '35-44',
    label: '35-44'
  }, {
    value: '45-54',
    label: '45-54'
  }, {
    value: '55-64',
    label: '55-64'
  }, {
    value: '65+',
    label: '65+'
  }];
  const religionOptions = [{
    value: 'prefer-not',
    label: 'Prefer not to say'
  }, {
    value: 'none',
    label: 'No religion'
  }, {
    value: 'christian',
    label: 'Christian'
  }, {
    value: 'buddhist',
    label: 'Buddhist'
  }, {
    value: 'hindu',
    label: 'Hindu'
  }, {
    value: 'jewish',
    label: 'Jewish'
  }, {
    value: 'muslim',
    label: 'Muslim'
  }, {
    value: 'sikh',
    label: 'Sikh'
  }, {
    value: 'other',
    label: 'Other'
  }];
  if (submitted) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-bg py-12">
        <Card className="max-w-2xl mx-4 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-10 h-10 text-primary-dark" />
          </div>
          <h2 className="text-3xl font-bold text-gray-text mb-4">Thank You</h2>
          <p className="text-xl text-gray-muted mb-6">
            Your diversity questionnaire has been submitted. This information
            will be stored separately and anonymously to help us monitor and
            improve our equal opportunities practices.
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
        </Card>
      </div>;
  }
  return <div className="min-h-screen bg-gray-bg py-12">
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">
              Diversity & Equal Opportunities
            </h1>
            <p className="text-gray-muted">
              This questionnaire is completely optional and anonymous
            </p>
          </div>

          <Card>
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 mb-8">
              <h2 className="font-semibold text-gray-text mb-3">
                Why we collect this information
              </h2>
              <p className="text-sm text-gray-muted leading-relaxed mb-4">
                Verqin Ltd is committed to equal opportunities and diversity.
                This questionnaire helps us monitor the diversity of our
                applicant pool and ensure our recruitment practices are fair and
                inclusive.
              </p>
              <ul className="text-sm text-gray-muted space-y-2">
                <li>
                  • This data will be stored separately from your application
                </li>
                <li>
                  • Your responses will be anonymised and used for statistical
                  purposes only
                </li>
                <li>
                  • This information will not be used in the selection process
                </li>
                <li>
                  • All questions are optional - you may select "Prefer not to
                  say"
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Select label="Ethnic Group" options={ethnicityOptions} value={formData.ethnicity} onChange={e => setFormData({
              ...formData,
              ethnicity: e.target.value
            })} />

              <Select label="Gender" options={genderOptions} value={formData.gender} onChange={e => setFormData({
              ...formData,
              gender: e.target.value
            })} />

              <Select label="Do you consider yourself to have a disability?" options={disabilityOptions} value={formData.disability} onChange={e => setFormData({
              ...formData,
              disability: e.target.value
            })} />

              <Select label="Age Range" options={ageRangeOptions} value={formData.ageRange} onChange={e => setFormData({
              ...formData,
              ageRange: e.target.value
            })} />

              <Select label="Religion or Belief" options={religionOptions} value={formData.religion} onChange={e => setFormData({
              ...formData,
              religion: e.target.value
            })} />

              <div className="bg-gray-bg border-2 border-gray-panel rounded-xl p-6">
                <Checkbox label="I consent to Verqin Ltd processing this diversity data for equal opportunities monitoring purposes. I understand this data will be stored separately and anonymously." required checked={formData.consent} onChange={e => setFormData({
                ...formData,
                consent: e.target.checked
              })} />
              </div>

              <div className="flex gap-4">
                <Button type="submit" variant="primary" size="lg" className="flex-1">
                  Submit Questionnaire
                </Button>
                <Button type="button" variant="outline" size="lg" onClick={() => window.location.href = '/'}>
                  Skip
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Section>
    </div>;
}

export default DiversityQuestionnaire;