import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image
              className={styles.logoImage}
              src="/masjid-huda-logo.jpeg"
              alt="Masjid Huda"
              width={260}
              height={173}
              priority
            />
            <h1 className={styles.visuallyHidden}>Masjid Huda</h1>
            <p className={styles.subtitle}>Prayer Times & Information in Scarborough</p>
          </div>
        </div>
      </div>
    </header>
  );
}
