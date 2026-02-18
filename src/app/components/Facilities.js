import styles from "./Facilities.module.css";

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      icon: "🕌",
      title: "Prayer Facilities",
      items: [
        "Prayer hall for Brothers only",
        "Five Daily Prayers (Salah)",
        "Taraweeh Prayers (Ramadan)",
      ],
    },
    {
      id: 2,
      icon: "📚",
      title: "Community Programs",
      items: [
        "Mashwaira Daily (After Fajr Prayer)",
        "Taleem Daily (After Isha Prayer)",
        "Weekly Jawla/Gasht (Every Monday)",
      ],
    },
  ];

  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Facilities & Services</h2>
        <p className={styles.subheading}>
          Experience spiritual growth with our comprehensive facilities and
          services
        </p>

        <div className={styles.cardsGrid}>
          {facilities.map((facility) => (
            <div key={facility.id} className={styles.card}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{facility.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{facility.title}</h3>
              <ul className={styles.itemsList}>
                {facility.items.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
