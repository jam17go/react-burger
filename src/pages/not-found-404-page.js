import styles from "./login-page.module.css";

export function NotFound404Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Ошибка 404 - страница не найдена</div>
      </div>
    </>
  );
}
