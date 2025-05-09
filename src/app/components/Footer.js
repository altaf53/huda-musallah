export default function Footer() {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });

  return (
    <footer
      style={{
        background: "#198754",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
        fontSize: "0.95rem",
      }}
    >
      <div>
        <strong>Address:</strong> 411, 301 Prudential Drive, M1P 4V3
        <br />
        <strong>Buzzer:</strong> 1050
      </div>
      <div style={{ marginTop: "0.5rem", fontSize: "0.9em", opacity: 0.85 }}>
        {formattedDate}
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        &copy; {now.getFullYear()} Huda Musallah
      </div>
    </footer>
  );
}
