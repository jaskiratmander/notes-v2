import Image from "next/image";
import styles from "./NotesHeader.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const NotesHeader = () => {
  return (
    <motion.header className={styles["notes-header"]} layout>
      <motion.form className={styles["search-form"]}>
        <Image
          src="icons/search.svg"
          alt="Search Icon"
          height={20}
          width={20}
        />
        <motion.input placeholder="Search Notes"></motion.input>
      </motion.form>
      <motion.div className={styles["action-area"]}>
        <Link href="/notes/new" className={styles["action-item"]}>
          <Image src="icons/add.svg" alt="Add icon" height={22} width={22} />
          New
        </Link>
        <motion.button className={styles["action-item"]}>
          <motion.img
            src="icons/sort.svg"
            alt="Sort icon"
            height={22}
            width={22}
          ></motion.img>
          Sort
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default NotesHeader;
