'use client';

import { motion } from 'framer-motion';
import { Search, Target, MessageSquare, MapPin, PieChart, ShieldAlert, ArrowRight } from 'lucide-react';
import Link from 'next/link';
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

export default function Services() {
  const services = [
    {
      id: "research",
      icon: <Search size={40} />,
      title: "Political Research & Electoral Intelligence",
      description: "Comprehensive data collection defining the current political landscape. We map anti-incumbency factors, demographic alignments, and critical local anxieties to ensure strategy is anchored in undeniable empirical reality.",
    },
    {
      id: "strategy",
      icon: <Target size={40} />,
      title: "Campaign Strategy & War-Room Consulting",
      description: "Development and active execution of the central campaign blueprint. Our war-room framework integrates resource allocation, daily tactical messaging, opposition monitoring, and agile rapid-response interventions.",
    },
    {
      id: "narrative",
      icon: <MessageSquare size={40} />,
      title: "Narrative & Communication Strategy",
      description: "Rigorous messaging architecture designed to dominate the public discourse. We engineer the core offensive arguments, defensive counter-narratives, and cross-channel distribution mechanics required to own the news cycle.",
    },
    {
      id: "booth",
      icon: <MapPin size={40} />,
      title: "Booth-Level Electoral Strategy",
      description: "Hyper-local micro-targeting and mobilization operationalized at the booth level. We build structured systems identifying sympathetic, core, and swing voters, directly translating statistical insights into heightened Election Day turnout.",
    },
    {
      id: "surveys",
      icon: <PieChart size={40} />,
      title: "Political Surveys & Voter Insights",
      description: "High-precision baseline, tracking, and rapid sentiment polling. Utilizing robust statistical methodologies, we provide an unvarnished audit of candidate viability, issue resonance, and momentum shifts over the campaign lifecycle.",
    },
    {
      id: "reputation",
      icon: <ShieldAlert size={40} />,
      title: "Reputation & Crisis Strategy",
      description: "Defensive positioning and immediate damage mitigation frameworks. We monitor emerging vulnerabilities, train leadership on narrative pivots, and aggressively counter opposition attacks before they establish electoral traction.",
    }
  ];

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
              Core Capabilities
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className={styles.title}>
              Strategic Intelligence. <br/>
              <span className="text-gradient">Flawless Execution.</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className={styles.subtitle}>
              We transform raw data into systemic electoral dominance. Explore our comprehensive suite of political intelligence services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                className={styles.serviceItem}
              >
                <div className={styles.iconContainer}>
                  {service.icon}
                </div>
                <div className={styles.textContent}>
                  <h2>{service.title}</h2>
                  <div className={styles.divider}></div>
                  <p>{service.description}</p>
                  
                  {/* Future Hook: Specific link to a detailed service page if it exists later */}
                  <Link href={`/contact?service=${service.id}`} className={styles.inquireLink}>
                    Inquire about this service <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div 
            className={styles.ctaBox}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2>Require a customized strategic approach?</h2>
            <p>Every constituency possesses unique fractures and opportunities. Connect with our principal strategists to discuss bespoke intelligence deployment.</p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', padding: '1rem 2rem' }}>
              Schedule Confidential Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
