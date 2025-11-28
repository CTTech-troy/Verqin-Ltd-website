import React from 'react';
import { Section } from '../components/layout/Section';
 function PrivacyPolicy() {
  return <div className="min-h-screen bg-gray-bg">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-text mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-muted">
            <p className="text-sm text-gray-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                1. Introduction
              </h2>
              <p>
                Verqin Ltd ("we", "our", or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                recruitment services and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                2. Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Personal identification information (name, email address,
                  phone number, address)
                </li>
                <li>Employment history and qualifications</li>
                <li>Right-to-work documentation</li>
                <li>References and background check information</li>
                <li>
                  Diversity and equal opportunities data (stored separately and
                  anonymously)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Process your job applications and match you with suitable
                  opportunities
                </li>
                <li>
                  Communicate with you about job opportunities and application
                  status
                </li>
                <li>
                  Verify your right to work and conduct necessary background
                  checks
                </li>
                <li>Comply with legal obligations and maintain records</li>
                <li>Improve our services and monitor equal opportunities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                4. Data Retention
              </h2>
              <p>
                We retain your personal data for as long as necessary to fulfill
                the purposes outlined in this policy, unless a longer retention
                period is required by law. Candidate applications are typically
                retained for 12 months, after which they are securely deleted
                unless you have given consent for longer retention.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                5. Your Rights
              </h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                6. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. All sensitive documents
                are encrypted at rest and in transit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact us at:
              </p>
              <p className="mt-2">
                Email: privacy@verqin.co.uk
                <br />
                Phone: +44 (0) 20 1234 5678
                <br />
                Address: Verqin Ltd, London, United Kingdom
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>;
}

export default PrivacyPolicy;