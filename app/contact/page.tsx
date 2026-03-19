'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Twitter, Send } from 'lucide-react';
import styles from './page.module.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiry: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (result.result === 'success') {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', organization: '', inquiry: 'general', message: '' });
      } else {
          setSubmitStatus('error');
      }
    } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.main}>
      {/* Header */}
      <section className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={styles.headerContent}
          >
            <motion.div variants={fadeUpVariant} className={styles.badge}>
              Initiate Dialogue
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className={styles.title}>
              Secure the <br/><span className="text-gradient">Strategic Edge.</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className={styles.subtitle}>
              Contact Neeti Collective for confidential electoral intelligence and war-room consultation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section-padding ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactWrapper}>
            
            {/* Contact Details */}
            <motion.div 
              className={styles.contactInfo}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUpVariant} className={styles.infoBlock}>
                <h3>Direct Communication</h3>
                <p>For immediate campaign inquiries, reach out to our strategy desk.</p>
                <div className={styles.infoItem}>
                  <Mail size={20} className={styles.icon} />
                  <span>strategy@neeticollective.in</span>
                </div>
                <div className={styles.infoItem}>
                  <Phone size={20} className={styles.icon} />
                  <span>Available upon request</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className={styles.infoBlock}>
                <h3>Headquarters</h3>
                <p>Operating from the political center of India.</p>
                <div className={styles.infoItem}>
                  <MapPin size={20} className={styles.icon} />
                  <div>
                    <span>Neeti Collective Strategy Desk</span><br/>
                    <span>New Delhi, India</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className={styles.infoBlock}>
                <h3>Professional Networks</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialBtn}><Linkedin size={20} /> LinkedIn</a>
                  <a href="#" className={styles.socialBtn}><Twitter size={20} /> Twitter (X)</a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className={styles.formContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Consultation Request</h3>
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Professional Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="organization">Political Party / Organization</label>
                  <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="inquiry">Nature of Inquiry</label>
                  <select id="inquiry" name="inquiry" value={formData.inquiry} onChange={handleChange}>
                    <option value="general">General Consultation</option>
                    <option value="research">Electoral Research & Surveys</option>
                    <option value="strategy">War-Room Strategy</option>
                    <option value="narrative">Narrative & Crisis Management</option>
                    <option value="booth">Booth-Level Mobilization</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Confidential Message</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage} style={{ color: '#4caf50', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    Transmission successful. Our strategy desk will contact you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage} style={{ color: '#f44336', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    There was an error sending your transmission. Please try again.
                  </div>
                )}
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting...' : (
                    <>Submit Transmission <Send size={16} style={{ marginLeft: '8px' }} /></>
                  )}
                </button>
                <p className={styles.privacyNote}>*All communications are secured and strictly confidential.</p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
