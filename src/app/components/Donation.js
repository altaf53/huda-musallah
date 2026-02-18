import styles from "./Donation.module.css";

export default function Donation() {
  const donationLink = "https://donorchoice.ca/hudamusallah/2565";

  const donationOptions = [
    { amount: "$1", frequency: "Daily" },
    { amount: "$5", frequency: "Weekly" },
    { amount: "$20", frequency: "Monthly" },
  ];

  return (
    <section className={styles.donationSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>💚</span>
          </div>
          <h2 className={styles.title}>Support Our Community</h2>
          <p className={styles.description}>
            Help us maintain and improve our facilities to serve our community
            better. Your generous donation makes a difference.
          </p>

          <div className={styles.optionsGrid}>
            {donationOptions.map((option, index) => (
              <div key={index} className={styles.option}>
                <div className={styles.amount}>{option.amount}</div>
                <div className={styles.frequency}>{option.frequency}</div>
              </div>
            ))}
          </div>

          <a
            href={donationLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
