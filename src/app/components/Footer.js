import styles from "./Footer.module.css";

export default function Footer() {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>📍 Location</h3>
            <p className={styles.text}>411, 301 Prudential Drive</p>
            <p className={styles.text}>M1P 4V3, Scarborough</p>
            <p className={styles.buzzer}>
              Buzzer: <strong>1050</strong>
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>ℹ️ Info</h3>
            <p className={styles.text}>{formattedDate}</p>
            <p className={styles.text}>EST (Eastern Standard Time)</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.copyright}>
          &copy; {now.getFullYear()} Huda Musallah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
