import styles from "./error.module.css";

type ErrorProps = {
  errorText: string;
};

export function Error({errorText}: ErrorProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>{errorText}</div>
      </div>
    </>
  );
}
