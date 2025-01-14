import React from "react";
import styles from "./loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};
