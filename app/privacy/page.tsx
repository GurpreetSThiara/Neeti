'use client';

import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
            <ArrowLeft size={16} /> Return to Home
          </Link>
        </div>

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(197, 168, 128, 0.1)', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
            <Shield size={28} />
          </div>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-text)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Last Updated: July 9, 2026
          </p>
        </div>

        {/* Content Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--color-text)', lineHeight: 1.7, fontSize: '1.025rem' }}>
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              1. Information We Collect
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              We collect information that you voluntarily provide to us when you request a strategic consultation, submit an inquiry through our contact portal, or send us email communications. This may include your full name, political organization/affiliation, email address, phone number, and any descriptive strategic inquiries or documents you provide.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              We process your details based on legitimate interest or in preparation for establishing a client relationship. The information is utilized solely to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
              <li>Evaluate strategic consultation and briefing requests.</li>
              <li>Provide tailored campaign advice and electoral intelligence reports.</li>
              <li>Manage and maintain records of our communications.</li>
              <li>Improve the functional layout and strategic services offered on our platform.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              3. Strict Confidentiality & Data Security
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Given the sensitive nature of election strategy and political advisory, Neeti Collective operates under strict confidentiality protocols. We do not sell, lease, trade, or share your strategic inquiries or contact information with any external vendors, advertising networks, or third parties without explicit legal consent. Internal systems are fortified with modern access controls and encryption models.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              4. Cookies and Analytical Metrics
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Our platform uses minor browser cookies and basic analytical scripts to examine traffic volumes and ensure site accessibility. These metrics help verify styling states (like light/dark preferences) and do not harvest identifiable geographic, private, or biographical information.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              5. Contact Us
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              For legal inquiries, data rights requests, or to clarify our privacy guidelines, please contact our administrative desk directly at:
              <br />
              <a href="mailto:info@neeticollective.com" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>
                info@neeticollective.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
