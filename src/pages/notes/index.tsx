import NotesHeader from "@/components/notes/NotesHeader";
import NotesGrid from "@/components/notes/NotesGrid";
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "./notesPage.module.css";

const NotesPage = () => {
  return (
    <motion.div className={styles["notes-page"]}>
      <Head>
        <title>Notes</title>
      </Head>
      <NotesHeader />
      <NotesGrid />
    </motion.div>
  );
};

export default NotesPage;
