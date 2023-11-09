import { ReactNode } from "react";
import styles from "./styles.modules.scss";
import cx from "classnames";

type PostProps = {
  readonly isFeatured?: boolean;
  readonly title?: string;
  readonly date?: string;
  readonly imageSrc?: string;
  readonly buttonText?: string;
  readonly buttonUrl?: string;
  readonly children?: ReactNode;
};

const Post = ({
  isFeatured,
  children,
  title,
  date,
  imageSrc,
  buttonText,
  buttonUrl,
}: PostProps) => (
  <article
    className={cx(styles.post, {
      [styles.featured]: !!isFeatured,
    })}
  >
    <header
      className={cx({
        [styles.major]: !!isFeatured,
      })}
    >
      {date && <span className={styles.date}>{date}</span>}
      {title && (
        <h2>
          <a href="#">{title}</a>
        </h2>
      )}
      <p>{children}</p>
    </header>
    {imageSrc && (
      <a href="#" className={cx(styles.image, styles.main)}>
        <img src={imageSrc} alt="" />
      </a>
    )}

    <ul className={cx(styles.actions, styles.special)}>
      <li>
        <a
          href={buttonUrl}
          className={cx(styles.button, {
            [styles.large]: !!isFeatured,
          })}
        >
          {buttonText || "Full Story"}
        </a>
      </li>
    </ul>
  </article>
);

export default Post;
