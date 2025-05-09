import Image from "next/image";
import styles from "./page.module.css";
import NamazIframe from "./components/NamazIframe";

export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NamazIframe />
    </section>
  );
}
