"use client";

import styles from "./NamazIframe.module.css";

export default function NamazIframe() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://timing.athanplus.com/masjid/widgets/embed?theme=1&masjid_id=Edorb9A7"
        title="Namaz Timings"
        width="100%"
        allowtransparency="true"
        className={styles.iframe}
        loading="lazy"
      />
    </div>
  );
}
