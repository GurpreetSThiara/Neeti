'use client';

import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
            <FileText size={28} />
          </div>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-text)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Last Updated: July 9, 2026
          </p>
        </div>

        {/* Content Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--color-text)', lineHeight: 1.7, fontSize: '1.025rem' }}>
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              By accessing this platform, requesting briefings, or submitting consultation forms, you confirm that you accept these Terms of Service in full. If you disagree with any segment of these terms, you must cease using our digital services immediately.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              2. Intellectual Property Rights
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Unless stated otherwise, Neeti Collective owns the intellectual property and copyright for all research outlines, strategic design structures, logos, website copy, and animated gallery components. All rights are reserved. You are prohibited from copying, distributing, republishing, or replicating any content from this platform for competitive political advisory use without explicit authorization.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              3. Client Engagements & Non-Disclosure
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              All internal electoral strategies, polling methodologies, and war-room systems are highly sensitive and subject to comprehensive Non-Disclosure Agreements (NDAs). These Terms of Service serve as a baseline framework; formal client contracts contain strict strategic confidentiality stipulations that override default platform declarations.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              4. Disclaimer of Liability
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Electoral outcomes are inherently volatile and dependent on diverse socio-political developments. While Neeti Collective uses rigorous data-driven analytics and research models, we make no guarantees, warranties, or absolute representations regarding election victories, voter swings, or specific strategic outcomes.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              5. Governing Law
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              These terms are governed by and construed in accordance with the laws of New Delhi, India. Any disputes arising from your use of this digital platform shall fall under the exclusive jurisdiction of the competent courts of New Delhi.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              6. Contact Information
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              If you have any questions regarding these Terms of Service, please direct your inquiries to our strategy desk at:
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
