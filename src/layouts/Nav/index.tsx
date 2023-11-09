import styles from "./styles.module.scss";
import cx from "classnames";

const Nav = () => (
  <nav className={styles["nav"]}>
    <ul className={styles["links"]}>
      <li className={styles["active"]}>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="elements.html">Elements Reference</a>
      </li>
    </ul>
    <ul className={cx(styles["icons"], styles["links"])}>
      <li className={styles.highlight}>
        <a href="https://cafe-a-la-plage.square.site">Order Now</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
