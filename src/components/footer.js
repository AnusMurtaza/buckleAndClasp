import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Challenge by{" "}
        <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </Link>
        . Coded by <Link href="https://github.com/kennylun123">Kenny Ng</Link>.
      </footer>
    </>
  );
}
