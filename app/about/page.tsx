'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
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

export default function About() {
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
              Who We Are
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className={styles.title}>
              The Strategic <span className="text-gradient">Advantage.</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className={styles.subtitle}>
              Understanding the origin and philosophy of Neeti Collective—a vanguard in data-back electoral intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin and Philosophy */}
      <section className={`section-padding ${styles.philosophySection}`}>
        <div className="container">
          <div className={styles.twoColumnGrid}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <h2 className={styles.sectionTitle}>Precision <br/>over noise.</h2>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className={styles.textContent}
            >
              <p>
                In an era where electoral outcomes are increasingly shaped by highly local, booth-level turnout and rapidly shifting narratives, traditional marketing approaches are no longer sufficient. Winning requires <strong>precision, rapid intervention, and an unyielding foundation of hard data</strong>.
              </p>
              <p>
                Neeti Collective was founded on a singular philosophy: political campaigns must operate with the efficiency of modern agile organizations, leveraging deep research and tactical war-room maneuvering to secure victory. We transcend standard consulting by operating as an embedded intelligence partner capable of altering electoral momentum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`section-padding ${styles.visionRiskSection}`}>
        <div className="container">
          <motion.div 
            className={styles.cardGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className={styles.glassCard}>
              <div className={styles.iconWrapper}><Target size={32} /></div>
              <h3>Our Vision</h3>
              <p>To be the premier intelligence and strategic advisory institution defining the modern standard for political campaigns across India.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.glassCard}>
              <div className={styles.iconWrapper}><Lightbulb size={32} /></div>
              <h3>Our Mission</h3>
              <p>To empower political leadership with actionable, data-driven electoral insights and narrative discipline, turning complex constituencies into predictable victories.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Approach */}
      <section className={`section-padding ${styles.approachSection}`}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className={styles.centerHeader}
          >
            <h2 className={styles.sectionTitle}>The Intelligence Engine</h2>
            <p className={styles.sectionSubtitle}>Our methodology combines rigorous academic-level research with aggressive tactical execution.</p>
          </motion.div>

          <motion.div 
            className={styles.approachSteps}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className={styles.stepItem}>
              <div className={styles.stepNumber}>01</div>
              <h4>Deep Qualitative Research</h4>
              <p>Surface-level sentiment analysis always fails. We conduct exhaustive constituency reconnaissance to map core voter anxieties, historical divides, and hidden inflection points.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.stepItem}>
              <div className={styles.stepNumber}>02</div>
              <h4>Strategic Blueprinting</h4>
              <p>Armed with raw intelligence, we formulate the 'Path to Victory' blueprint: an actionable master plan dictating where exactly every operational resource must be deployed.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.stepItem}>
              <div className={styles.stepNumber}>03</div>
              <h4>Execution & War-Room Mastery</h4>
              <p>Strategy is useless without enforcement. We embed our teams to oversee campaign operations, narrative defense, crisis mitigation, and booth-level mobilization.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Snapshot */}
      <section className={`section-padding ${styles.leadershipSection}`}>
        <div className={`container ${styles.leadershipContainer}`}>
          <div className={styles.leadershipText}>
            <h2>Led by Expertise</h2>
            <p>The core leadership of Neeti Collective comprises veterans of national and state-level political strategy, data science, and systemic communication. We operate with strict confidentiality, maintaining the absolute integrity of our clients' campaigns.</p>
            <p className={styles.highlight}>*Detailed leadership profiles provided upon direct consultation.*</p>
          </div>
        </div>
      </section>
    </div>
  );
}
