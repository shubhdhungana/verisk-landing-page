// components/Features.tsx

import styles from "../styles/features.module.scss";

export default function Features() {
  return (
    <section id="services" className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <h3>Custom Software Development</h3>
          <p>
            We provide tailored solutions to help you scale and automate your
            business.
          </p>
        </div>
        <div className={styles.featureItem}>
          <h3>Cloud Integration</h3>
          <p>Streamline operations with secure cloud-based solutions.</p>
        </div>
        <div className={styles.featureItem}>
          <h3>Data Analytics</h3>
          <p>
            Leverage data-driven insights to make smarter business decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
