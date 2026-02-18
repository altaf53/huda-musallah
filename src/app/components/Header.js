import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🕌</span>
            <div>
              <h1 className={styles.title}>Huda Musallah</h1>
              <p className={styles.subtitle}>Prayer Times & Information</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
