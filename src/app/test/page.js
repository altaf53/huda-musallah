"use client";
import Image from "next/image";
import { useState } from "react";

export default function TestPage() {
  // Sample prayer data - this should come from an API or props in production
  const [prayerData] = useState({
    date: "Tuesday, Oct 28, 2025",
    hijriDate: "Jumada Al-Awwal 6, 1447",
    prayers: [
      { name: "Fajr", starts: "6:09 AM", iqamah: "6:45 AM" },
      { name: "Sunrise", starts: "7:49 AM", iqamah: "-" },
      { name: "Dhuhr", starts: "1:01 PM", iqamah: "1:45 PM" },
      { name: "Asr", starts: "3:48 PM", iqamah: "4:30 PM" },
      {
        name: "Maghrib",
        starts: "6:17 PM",
        iqamah: "6:20 PM",
        highlight: true,
      },
      { name: "Isha", starts: "7:44 PM", iqamah: "8:00 PM" },
      { name: "Jumuah 1", starts: "1:30 PM", iqamah: "-", isJumuah: true },
      { name: "Jumuah 2", starts: "2:30 PM", iqamah: "-", isJumuah: true },
      { name: "Jumuah 3", starts: "3:20 PM", iqamah: "-", isJumuah: true },
    ],
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
      {/* Header Section */}
      <header
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #e8f5e9 100%)",
          borderBottom: "3px solid #2d5f3f",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          {/* Bismillah */}
          <div
            style={{
              fontSize: "1.3rem",
              marginBottom: "1rem",
              fontFamily: "serif",
              color: "#2d5f3f",
              fontWeight: "500",
            }}
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </div>

          {/* Logo and Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              marginBottom: "1. 5rem",
              flexWrap: "wrap",
            }}
          >
            <Image
              src="/logo.jpg"
              alt="Masjid Nouh Logo"
              width={100}
              height={80}
              style={{ objectFit: "contain" }}
            />
            <div style={{ textAlign: "left" }}>
              <h1
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#2d5f3f",
                  margin: 0,
                  letterSpacing: "0.5px",
                }}
              >
                NOUH ISLAMIC CENTRE OF CANADA
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#d4812f",
                  margin: "0.3rem 0 0 0",
                  fontWeight: "500",
                }}
              >
                مسجد نوح
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  margin: "0.5rem 0 0 0",
                }}
              >
                📍 2480 Kingston Road, Scarborough, ON, M1N 1V3
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav
            style={{
              background: "#2d5f3f",
              borderRadius: 8,
              padding: "0.8rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                justifyContent: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {[
                "HOME",
                "ABOUT",
                "SERVICES",
                "GALLERY",
                "LEARNING",
                "DONATION",
                "CONTACT",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      padding: "0.6rem 1.2rem",
                      display: "block",
                      fontWeight: "600",
                      fontSize: "0.95rem",
                      borderRadius: 4,
                      transition: "background 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.15)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Opening Soon Banner */}
          <div
            style={{
              background: "#e6e6a2",
              color: "#2d5f3f",
              fontWeight: "bold",
              fontSize: "1.3rem",
              padding: "0.8rem",
              margin: "1.5rem 0 0 0",
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            🌟 INSHA-ALLAH — OPENING SOON! 🌟
          </div>
        </div>
      </header>

      {/* Main Content - First Fold */}
      <main style={{ maxWidth: 1200, margin: "2rem auto", padding: "0 1rem" }}>
        {/* Mission Statement */}
        <section
          style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#333",
              margin: 0,
              fontWeight: "400",
            }}
          >
            The Nouh Islamic Centre of Canada - Masjid Nouh is committed to
            building a united community through faith, education, and outreach.
            Join us in growing together with purpose and compassion.
          </p>
        </section>

        {/* Prayer Timings and Services Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Prayer Timings Table */}
          <section
            style={{
              background: "#2d5f3f",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            }}
          >
            {/* Prayer Timings Header */}
            <div
              style={{
                background: "#4a7c59",
                padding: "1.2rem",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  margin: 0,
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                PRAYER TIMINGS
              </h2>
            </div>

            {/* Date Info */}
            <div
              style={{
                background: "#3d4e44",
                padding: "1rem",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                {prayerData.date}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  marginTop: "0.3rem",
                  opacity: 0.9,
                }}
              >
                {prayerData.hijriDate}
              </div>
            </div>

            {/* Table Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                background: "#2d5f3f",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1rem",
                padding: "0.8rem 0",
                borderBottom: "2px solid #4a7c59",
              }}
            >
              <div style={{ textAlign: "center" }}></div>
              <div style={{ textAlign: "center" }}>STARTS</div>
              <div style={{ textAlign: "center" }}>IQAMAH</div>
            </div>

            {/* Prayer Rows */}
            {prayerData.prayers.map((prayer, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  background: prayer.highlight
                    ? "#4a7c59"
                    : index % 2 === 0
                    ? "#3d4e44"
                    : "#354239",
                  color: "#fff",
                  padding: "0.9rem 0",
                  fontSize: "1rem",
                  borderBottom:
                    prayer.isJumuah && index === prayerData.prayers.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: prayer.name === "Maghrib" ? "bold" : "600",
                  }}
                >
                  {prayer.name}
                </div>
                <div style={{ textAlign: "center" }}>{prayer.starts}</div>
                <div style={{ textAlign: "center", fontWeight: "bold" }}>
                  {prayer.iqamah}
                </div>
              </div>
            ))}

            {/* Footer */}
            <div
              style={{
                padding: "1rem",
                textAlign: "center",
                background: "#3d4e44",
              }}
            >
              <button
                style={{
                  background: "#4a7c59",
                  color: "#fff",
                  border: "none",
                  padding: "0.7rem 1.5rem",
                  borderRadius: 6,
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginBottom: "0.8rem",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#5a8c69")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#4a7c59")
                }
              >
                VIEW MONTHLY CALENDAR
              </button>
              <div style={{ fontSize: "0.85rem", color: "#ccc" }}>
                Powered by <span style={{ fontWeight: "bold" }}>Masjidal</span>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <ServiceCategory
              title="Prayer Facilities"
              icon="🕌"
              items={[
                "Separate prayer Halls/Room and entrances for Brothers and Sisters",
              ]}
            />
            <ServiceCategory
              title="Spiritual Services"
              icon="✨"
              items={[
                "Five Daily Prayers (Salah)",
                "Jumu'ah (Friday) Prayer",
                "Taraweeh Prayers (Ramadan)",
                "Qiyam-ul-Lail (Night Prayers)",
                "Eid Prayers",
              ]}
            />
            <ServiceCategory
              title="Youth & Community Engagement"
              icon="🤝"
              items={[
                "Youth Programs & Camps",
                "Sports & Recreational Activities",
                "Community Iftars (during Ramadan)",
                "Family Nights",
                "Counseling Services",
                "Volunteer Opportunities",
              ]}
            />
          </section>

          {/* Educational & Social Services */}
          <section
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              gridColumn: "span 1",
            }}
          >
            <ServiceCategory
              title="Educational Programs"
              icon="📚"
              items={[
                "Maktab for Children (Weekday & Weekend)",
                "Hifz Programs",
                "Tafsir & Hadith Classes",
                "Adult Islamic Education",
                "Arabic Language Courses",
                "Workshops & Seminars",
              ]}
            />
            <ServiceCategory
              title="Social Services"
              icon="❤️"
              items={[
                "Food Bank",
                "Sadaqah & Zakat Distribution",
                "Support for New Muslims (Reverts)",
                "Refugee & Immigrant Support",
                "Health Clinics",
              ]}
            />
          </section>
        </div>

        {/* Call to Action & Donation */}
        <section
          style={{
            background: "linear-gradient(135deg, #e8f5e9 0%, #fff 100%)",
            padding: "2.5rem",
            borderRadius: 12,
            marginTop: "2rem",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              color: "#2d5f3f",
              marginBottom: "1.5rem",
              fontWeight: "bold",
            }}
          >
            All are welcome! Join us in building a vibrant, faith-filled
            community
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <Image
              src="/qr-code.png"
              alt="Donation QR Code"
              width={120}
              height={120}
              style={{ border: "3px solid #2d5f3f", borderRadius: 8 }}
            />
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#2d5f3f",
                  marginBottom: "0.5rem",
                }}
              >
                Support Our Masjid
              </div>
              <div style={{ fontSize: "1. 1rem", color: "#1976d2" }}>
                <strong>E-Transfer:</strong>{" "}
                <a
                  href="mailto:nouh.icc@gmail.com"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  nouh.icc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.4rem !important;
          }
          nav ul {
            gap: 4px !important;
          }
          nav ul li a {
            padding: 0.5rem 0.8rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
}

function ServiceCategory({ title, icon, items }) {
  return (
    <div style={{ marginBottom: "1.8rem" }}>
      <h3
        style={{
          color: "#1976d2",
          fontSize: "1.15rem",
          fontWeight: "bold",
          marginBottom: "0.8rem",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: "1.3rem" }}>{icon}</span>
        {title}
      </h3>
      <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "0.5rem",
              color: "#555",
              fontSize: "0.98rem",
              lineHeight: "1.6",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
