'use client';

import { motion } from 'framer-motion';
import styles from './WhatsAppFAB.module.css';

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/919213220433?text=Hello%20Neeti%20Collective%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFAB}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={styles.icon}
      >
        <path d="M12.012 2c-5.506 0-9.97 4.464-9.97 9.97 0 1.962.569 3.79 1.554 5.342L2 22l4.81-1.556c1.5.894 3.25 1.41 5.202 1.41 5.505 0 9.97-4.465 9.97-9.97 0-5.507-4.464-9.97-9.97-9.97zm5.544 14.288c-.244.686-1.22 1.25-1.68 1.28-.456.03-.92.155-2.924-.658-2.563-1.04-4.22-3.655-4.348-3.826-.128-.17-1.04-1.39-1.04-2.65 0-1.26.653-1.88.887-2.13.234-.25.512-.313.682-.313.17 0 .34 0 .49.006.157.005.37-.06.577.45.213.528.728 1.77.79 1.9.064.13.106.28.02.45-.084.17-.127.276-.254.425-.128.15-.27.33-.385.45-.13.132-.266.276-.117.532.15.255.66 1.085 1.415 1.758.973.868 1.79 1.137 2.046 1.265.255.127.404.106.553-.063.15-.17.638-.744.808-.998.17-.255.34-.213.574-.127.234.085 1.488.702 1.743.83.256.127.426.19.49.3.064.106.064.616-.18 1.302z" />
      </svg>
    </motion.a>
  );
}
