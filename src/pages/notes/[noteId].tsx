import { DUMMY } from "@/DATA";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import styles from "./note.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

const findNote = (query: ParsedUrlQuery) => {
  return DUMMY.find((note) => note.id === query.noteId);
};

const NotePage = () => {
  const router = useRouter();
  const note = findNote(router.query);

  return (
    <AnimatePresence>
      <Head>
        <title>{note?.title}</title>
      </Head>
      <motion.div
        className={styles["note"]}
        layoutId={note?.id}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.div className={styles["note_header"]}>
          <motion.h2
            layoutId={note?.title}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {note?.title}
          </motion.h2>
          <motion.div className={styles["note_actions"]}>
            <motion.button>Edit</motion.button>
            <motion.button>Delete</motion.button>
          </motion.div>
          <Link href={"/notes"} className={styles["note_close"]}>
            <Image
              src="/icons/close.svg"
              alt="Close Icon"
              width={32}
              height={32}
            />
          </Link>
        </motion.div>
        <motion.p
          className={styles["note_content"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {note?.content}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default NotePage;
