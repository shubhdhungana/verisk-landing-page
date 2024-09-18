import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import styles from "../styles/landing-page.module.scss";
import transparentImage from '../transparent-image.png';  // Adjust the path as needed


export default function Home() {
  return (
    <main>
      <Navbar />
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          Leading IT Solutions for Businesses
        </h1>
        <p className={styles.heroSubtitle}>
          Empowering innovation with cutting-edge technology
        </p>
        <button className={styles.ctaButton}>Learn More</button>
        {/* Add the transparent image */}
        <div className={styles.imageContainer}>
          
        </div>
      </section>
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
