import styles from "./NotesGrid.module.css";
import { DUMMY } from "@/DATA";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Notes = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = gridRef.current;
    if (node !== null) {
      const storedPosition = localStorage.getItem("scrollPosition");
      if (storedPosition !== null) {
        node.scrollTop = parseInt(storedPosition);
      }

      const handleScroll = () => {
        localStorage.setItem("scrollPosition", node.scrollTop.toString());
      };

      node.addEventListener("scroll", handleScroll);
      return () => {
        node.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <motion.div className={styles["notes-grid"]} ref={gridRef}>
      {DUMMY.map((note) => (
        <motion.div
          layoutId={note.id}
          key={note.id}
          className={styles["grid-item"]}
          transition={{ duration: 0.5, type: "spring" }}
          style={{ borderRadius: 10 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link href={`/notes/${note.id}`}>
            <motion.span
              layoutId={note?.title}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {note.title}
            </motion.span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Notes;
