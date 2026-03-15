import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '2rem' }}>
        <div style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Intelligence Vault
        </div>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Confidential Case Studies
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(26, 31, 43, 0.7)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          Due to the strict confidentiality and strategic sensitivity of our engagements, detailed case studies establishing our methodology in past electoral cycles are only presented during high-level internal consultations.
        </p>
        <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1rem 2rem' }}>
          Request Access to Case Studies
        </Link>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
            <ArrowLeft size={16} /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
