import styles from "./styles.module.scss";
import cx from "classnames";

const Pagination = () => (
  <footer>
    <div className={styles.pagination}>
      {/* <!--<a href="#" className={styles.previous}>Prev</a>--> */}
      <a href="#" className={cx(styles.page, styles.active)}>
        1
      </a>
      <a href="#" className={styles.page}>
        2
      </a>
      <a href="#" className={styles.page}>
        3
      </a>
      <span className={styles.extra}>&hellip;</span>
      <a href="#" className={styles.page}>
        8
      </a>
      <a href="#" className={styles.page}>
        9
      </a>
      <a href="#" className={styles.page}>
        10
      </a>
      <a href="#" className={styles.next}>
        Next
      </a>
    </div>
  </footer>
);

export default Pagination;
