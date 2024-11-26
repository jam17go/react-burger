import styles from "./error.module.css";

export function Error({errorText}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>{errorText}</div>
      </div>
    </>
  );
}
