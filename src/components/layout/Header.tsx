import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <h1>
        <Link href={"/"} className={styles["home-link"]}>
          Notefy
        </Link>
      </h1>
      <button className={`${styles["theme-btn"]} ${styles["btn"]}`}></button>
      <button className={`${styles["user-btn"]} ${styles["btn"]}`}>
        <Image
          src="/icons/Vector.svg"
          alt="Profile Icon"
          height={32}
          width={32}
        ></Image>
      </button>
    </header>
  );
};

export default Header;
