import Wrapper from "@/layouts/Wrapper";
import styles from "./styles.module.scss";

function Home() {
  return (
    <>
      <div className={styles["is-preload"]}>
        <Wrapper />
      </div>
    </>
  );
}

export default Home;
