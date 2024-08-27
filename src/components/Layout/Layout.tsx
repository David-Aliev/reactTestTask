import React from "react";
import Header from "../Header/Header";
import styles from "./styles.module.css";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <hr />
      <div className={styles.user__container}>{children}</div>
    </div>
  );
};

export default Layout;
