import Header from "../Header";
import Footer from "../Footer";

import styles from "./index.module.scss";

export type ComponentProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: ComponentProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
