"use client";

export default function NamazIframe() {
  return (
    <iframe
      src="https://timing.athanplus.com/masjid/widgets/embed?theme=2&masjid_id=Edorb9A7"
      title="Namaz Timings"
      width="100%"
      height="505"
      frameBorder="0"
      allowtransparency="true"
      style={{
        maxWidth: 500,
        width: "100%",
        borderRadius: 8,
        background: "#fff",
      }}
      loading="lazy"
    />
  );
}
