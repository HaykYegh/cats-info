import styles from './Loader.module.css';
const Loader = () => {
  return (
    <div className={styles.loader_content}>
      <div className={`${styles.loader} ${styles.line_loader}`}>
        <div className={`${styles.line} ${styles.line1}`} />
        <div className={`${styles.line} ${styles.line2}`} />
        <div className={`${styles.line} ${styles.line3}`} />
      </div>
    </div>
  );
};

export default Loader;
