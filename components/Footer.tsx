// components/Footer.tsx

import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Verisk Nepal. All Rights Reserved.</p>
      <ul className={styles.socialLinks}>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </footer>
  );
}
