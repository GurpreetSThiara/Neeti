'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BarChart3, Target, MessageSquare, Map, PieChart, ShieldAlert } from 'lucide-react';
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

export default function Home() {
  const services = [
    { icon: <BarChart3 size={32} />, title: "Political Research & Electoral Intelligence", link: "/services#research" },
    { icon: <Target size={32} />, title: "Campaign Strategy & War-Room Consulting", link: "/services#strategy" },
    { icon: <MessageSquare size={32} />, title: "Narrative & Communication Strategy", link: "/services#narrative" },
    { icon: <Map size={32} />, title: "Booth-Level Strategy", link: "/services#booth" },
    { icon: <PieChart size={32} />, title: "Political Surveys & Voter Research", link: "/services#surveys" },
    { icon: <ShieldAlert size={32} />, title: "Reputation & Crisis Strategy", link: "/services#reputation" }
  ];

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className={styles.badge}>
              Political Intelligence & Election Strategy
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className={styles.heroTitle}>
              Data-Driven Strategy for <br/><span className="text-gradient">Modern Elections.</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className={styles.heroSubtitle}>
              In modern elections, victory is determined by marginal shifts. We provide the strategic intelligence, booth-level insights, and narrative discipline required to win.
            </motion.p>
            <motion.div variants={fadeUpVariant} className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                Schedule Consultation
              </Link>
              <Link href="/services" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                Explore Capabilities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className={`section-padding ${styles.aboutSection}`}>
        <div className={`container ${styles.aboutContainer}`}>
          <motion.div 
            className={styles.aboutText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className={styles.sectionTitle}>The Architecture of Victory</h2>
            <p className={styles.leadText}>
              Neeti Collective is positioned at the intersection of political insight and strategic intelligence.
            </p>
            <p className={styles.bodyText}>
              We are not a traditional marketing agency. We are a strategic advisory institution providing data-backed electoral intelligence and rigorous campaign structuring. We partner with political leadership, candidates, and campaign organizations to transform data into definitive electoral outcomes.
            </p>
            <Link href="/about" className={styles.textLink}>
              Discover our philosophy <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.aboutStats}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className={styles.statCard}>
              <h3 className={styles.statNumber}>100+</h3>
              <p className={styles.statLabel}>Constituencies Analyzed</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.statCard}>
              <h3 className={styles.statNumber}>Data</h3>
              <p className={styles.statLabel}>Driven War-Rooms</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.statCard}>
              <h3 className={styles.statNumber}>Booth</h3>
              <p className={styles.statLabel}>Level Intelligence</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.statCard}>
              <h3 className={styles.statNumber}>Zero</h3>
              <p className={styles.statLabel}>Compromise Strategy</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={`section-padding ${styles.servicesSection}`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className={styles.sectionTitleCenter}>Core Capabilities</h2>
            <p className={styles.sectionDescCenter}>
              Comprehensive strategic capabilities designed for rapid deployment in high-stakes electoral environments.
            </p>
          </motion.div>

          <motion.div 
            className={styles.servicesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUpVariant} className={styles.serviceCard}>
                <div className={styles.serviceIconWrapper}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceItemTitle}>{service.title}</h3>
                <div className={styles.serviceCardFooter}>
                  <Link href={service.link} className={styles.serviceLink}>
                    Learn Methodology <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding ${styles.ctaSection}`}>
        <div className="container">
          <motion.div 
            className={styles.ctaCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to build your war-room?</h2>
              <p className={styles.ctaDesc}>
                Partner with Neeti Collective to secure the strategic edge in your upcoming election.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                Initiate Dialogue
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
