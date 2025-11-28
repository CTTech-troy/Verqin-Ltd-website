import React from 'react';
import { Section } from '../components/layout/Section';
function Terms() {
  return <div className="min-h-screen bg-gray-bg">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-text mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-muted">
            <p className="text-sm text-gray-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Verqin Ltd's services, you accept and
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                2. Services
              </h2>
              <p>
                Verqin Ltd provides recruitment and staffing services, including
                permanent placements, contract roles, casual staffing, and
                workforce solutions. We act as an intermediary between employers
                and candidates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                3. Candidate Obligations
              </h2>
              <p>As a candidate, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide accurate and truthful information in your application
                </li>
                <li>Have the legal right to work in the UK</li>
                <li>
                  Notify us immediately of any changes to your circumstances
                </li>
                <li>Attend interviews and assignments as agreed</li>
                <li>Maintain professional conduct at all times</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                4. Employer Obligations
              </h2>
              <p>As an employer, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate job descriptions and requirements</li>
                <li>Comply with all employment laws and regulations</li>
                <li>Pay agreed fees for successful placements</li>
                <li>Provide a safe working environment</li>
                <li>Notify us of any issues with placed candidates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                5. Fees and Payment
              </h2>
              <p>
                Our fees are agreed upon before any placement is made. Payment
                terms are typically 30 days from invoice date. We reserve the
                right to charge interest on late payments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                Verqin Ltd will not be liable for any indirect, consequential,
                or incidental damages arising from the use of our services. Our
                total liability shall not exceed the fees paid for the specific
                service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                7. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend access to our
                services at any time for violation of these terms or for any
                other reason at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                8. Governing Law
              </h2>
              <p>
                These Terms of Service are governed by the laws of England and
                Wales. Any disputes shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-text mb-4">
                9. Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us
                at:
              </p>
              <p className="mt-2">
                Email: hello@verqin.co.uk
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

export default Terms;