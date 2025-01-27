import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.content}>
        © {new Date().getFullYear()} Taras Chirkov
      </p>
    </footer>
  );
};

export default Footer;
