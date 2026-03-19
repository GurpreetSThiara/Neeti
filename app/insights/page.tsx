import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, BarChart2, TrendingUp } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Insights & Research | Neeti Collective',
  description: 'Data-driven electoral insights, strategic analysis, and thought leadership from the vanguard in political intelligence.',
};

export default function InsightsPage() {
  const categories = [
    { name: 'Election Analysis', icon: <BarChart2 size={20} /> },
    { name: 'Political Strategy', icon: <BookOpen size={20} /> },
    { name: 'Data & Electoral Trends', icon: <TrendingUp size={20} /> },
  ];

  const featuredInsight = {
    title: 'The Shrinking Margins of Victory: Why Micro-Targeting is the New Mandate',
    excerpt: 'An analysis of recent electoral outcomes reveals a distinct trend toward narrower victory margins. In this environment, generalized mass communication strategies are failing. Discover how granular booth-level intelligence is dictating the modern political battlefield.',
    category: 'Election Analysis',
    date: 'March 2026',
    readTime: '8 min read',
  };

  const insights = [
    {
      title: 'Beyond the Wave: Decoding Silent Voter Shifts',
      excerpt: 'Mass rallies often mask underlying discontent. Our proprietary survey methodologies highlight how tracking localized sentiment shifts can accurately predict "silent" vote transfers weeks before polling day.',
      category: 'Data & Electoral Trends',
      date: 'February 2026',
      readTime: '6 min read',
    },
    {
      title: 'The Blueprint for Rapid Crisis Mitigation in the Final 72 Hours',
      excerpt: 'In the crucial window preceding an election, misinformation can derail months of strategic gains. A strategic framework for establishing a War-Room capable of rapid narrative correction and crisis containment.',
      category: 'Political Strategy',
      date: 'January 2026',
      readTime: '10 min read',
    },
    {
      title: 'Weaponizing Narrative: Crafting Messages That Persuade the Centrist',
      excerpt: 'Elections are won in the middle. This paper explores the psychological and socioeconomic triggers that resonate with swing voters, detailing how to construct narratives that appeal to cautious pragmatists.',
      category: 'Political Strategy',
      date: 'December 2025',
      readTime: '7 min read',
    },
  ];

  return (
    <main className={styles.main}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
              <span className={styles.badge}>Our Intelligence Hub</span>
              <h1 className={styles.title}>Strategic Insights.</h1>
              <p className={styles.subtitle}>
                Cutting-edge research, data-driven election analysis, and thought leadership 
                from the forefront of modern political intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className={styles.categoriesBar}>
        <div className="container">
          <div className={styles.categoriesWrapper}>
            <span className={styles.categoriesLabel}>Filter by Topic:</span>
            <div className={styles.categoryPills}>
              {categories.map((category) => (
                <button key={category.name} className={styles.categoryPill}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className="container">
          {/* Featured Insight */}
          <div className={styles.featuredInsight}>
            <div className={styles.featuredVisual}>
              <div className={styles.placeholderVisual}>
                {/* Visual grid placeholder representing data/charts */}
                <div className={styles.gridOverlay}></div>
              </div>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.insightMeta}>
                <span className={styles.metaCategory}>{featuredInsight.category}</span>
                <span className={styles.metaDivider}>•</span>
                <span className={styles.metaDate}>{featuredInsight.date}</span>
                <span className={styles.metaDivider}>•</span>
                <span className={styles.metaTime}>{featuredInsight.readTime}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featuredInsight.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredInsight.excerpt}</p>
              <Link href="/contact" className={styles.readArticleBtn}>
                Request Full Report <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Insights Grid */}
          <div className={styles.insightsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Latest Analysis</h2>
              <div className={styles.divider}></div>
            </div>
            
            <div className={styles.insightsGrid}>
              {insights.map((insight, index) => (
                <article key={index} className={styles.insightCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.insightMeta}>
                      <span className={styles.metaCategory}>{insight.category}</span>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{insight.title}</h3>
                    <p className={styles.cardExcerpt}>{insight.excerpt}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.footerMeta}>
                      <span className={styles.metaDate}>{insight.date}</span>
                      <span className={styles.metaTime}>{insight.readTime}</span>
                    </div>
                    <Link href="/contact" className={styles.cardLink}>
                      Read <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Require Bespoke Intelligence?</h2>
            <p>
              Our most sensitive electoral data and constituency-level analyses are strictly 
              confidential. Contact us to commission tailored political research.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Commission Research
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
