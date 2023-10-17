import Image from "next/image";
import styles from "./NotesHeader.module.css";
import Link from "next/link";

const NotesHeader = () => {
  return (
    <header className={styles["notes-header"]}>
      <form className={styles["search-form"]}>
        <Image
          src="icons/search.svg"
          alt="Search Icon"
          height={20}
          width={20}
        />
        <input placeholder="Search Notes"></input>
      </form>
      <div className={styles["action-area"]}>
        <Link href="/notes/new" className={styles["action-item"]}>
          <Image src="icons/add.svg" alt="Add icon" height={24} width={24} />
          New
        </Link>
        <button className={styles["action-item"]}>
          <Image
            src="icons/sort.svg"
            alt="Sort icon"
            height={24}
            width={24}
          ></Image>
          Sort
        </button>
      </div>
    </header>
  );
};

export default NotesHeader;
