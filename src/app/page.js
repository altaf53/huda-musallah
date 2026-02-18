import styles from "./page.module.css";
import NamazIframe from "./components/NamazIframe";
import Donation from "./components/Donation";
import Facilities from "./components/Facilities";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.namazSection}>
        <NamazIframe />
      </section>
      <Donation />
      <section className={styles.facilitiesSection}>
        <Facilities />
      </section>
    </main>
  );
}
