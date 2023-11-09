import Header from "@/layouts/Header";
import Intro from "@/layouts/Intro";
import Nav from "@/layouts/Nav";
import Main from "@/layouts/Main";
import Footer from "@/layouts/Footer";

import styles from "./styles.modules.scss";
import cx from "classnames";

const Wrapper = () => (
  <div className={cx(styles.wrapper, styles["fade-in"])}>
    <Intro />
    <Header />
    <Nav />
    <Main />
    <Footer />
  </div>
);

export default Wrapper;
