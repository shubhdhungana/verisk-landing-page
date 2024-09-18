// components/Testimonials.tsx

import styles from "../styles/testimonials.module.scss";

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <div className={styles.testimonialCard}>
        <p>
          "Verisk Nepal's solutions transformed our workflow and improved
          efficiency by 40%!"
        </p>
        <h4>John Doe, CEO at TechCorp</h4>
      </div>
    </section>
  );
}
