import styles from "./styles.module.scss";
import cx from "classnames";

const Footer = () => (
  <>
    <footer className={styles["footer"]}>
      <section>
        <form method="post" action="#">
          <div className={styles["fields"]}>
            <div className={styles["field"]}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className={styles["name"]} />
            </div>
            <div className={styles["field"]}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className={styles["email"]} />
            </div>
            <div className={styles["field"]}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                className={styles["message"]}
                rows={3}
              ></textarea>
            </div>
          </div>
          <ul className={styles["actions"]}>
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </section>
      <section className={cx(styles["split"], styles["contact"])}>
        <section className={styles["alt"]}>
          <h3>Address</h3>
          <p>
            1234 Somewhere Road #87257
            <br />
            Nashville, TN 00000-0000
          </p>
        </section>
        <section>
          <h3>Phone</h3>
          <p>
            <a href="#">(000) 000-0000</a>
          </p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href="#">info@untitled.tld</a>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <ul className={cx(styles["icons"], styles["alt"])}>
            <li>
              <a
                href="#"
                className={cx(
                  styles.icon,
                  styles.brands,
                  styles.alt,
                  styles["fa-twitter"]
                )}
              >
                <span className={styles["label"]}> Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={cx(
                  styles.icon,
                  styles.brands,
                  styles.alt,
                  styles["fa-facebook-f"]
                )}
              >
                <span className={styles["label"]}> Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={cx(
                  styles.icon,
                  styles.brands,
                  styles.alt,
                  styles["fa-instagram"]
                )}
              >
                {" "}
                <span className={styles["label"]}> Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={cx(
                  styles.icon,
                  styles.brands,
                  styles.alt,
                  styles["a-github"]
                )}
              >
                {" "}
                <span className={styles["label"]}> GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>

    {/* <!-- Copyright --> */}
    <div className={styles["copyright"]}>
      <ul>
        <li>&copy; Untitled</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </>
);

export default Footer;
