import Link from 'next/link';
import { Mail, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <span className={styles.logomark}>NC</span>
              <span className={styles.logotext}>Neeti Collective</span>
            </div>
            <p className={styles.brandDesc}>
              A Political Intelligence and Strategy Institution operating at the intersection of data-driven insights and electoral victory.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="X (Twitter)" className={styles.socialIcon}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className={styles.linkGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Navigation</h4>
              <Link href="/about" className={styles.footerLink}>About Us</Link>
              <Link href="/services" className={styles.footerLink}>Services</Link>
              <Link href="/case-studies" className={styles.footerLink}>Case Studies</Link>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Knowledge</h4>
              <Link href="/insights" className={styles.footerLink}>Insights & Analysis</Link>
              <Link href="/resources" className={styles.footerLink}>Research Reports</Link>
              <Link href="/media" className={styles.footerLink}>Media & Press</Link>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <Link href="/contact" className={styles.footerLink}>Consultation</Link>
              <Link href="/careers" className={styles.footerLink}>Careers</Link>
              <div className={styles.contactItem}>
                <Mail size={16} />
                <span>strategy@neeticollective.in</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} Neeti Collective. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
