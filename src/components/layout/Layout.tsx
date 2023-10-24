import { ReactNode } from "react";
import Header from "./Header";
import styles from "./Layout.module.css";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <motion.div className={styles["container"]} layout>
      <Header />
      <motion.main layout className={styles["main"]}>
        {children}
      </motion.main>
    </motion.div>
  );
};

export default Layout;
