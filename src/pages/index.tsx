import Footer from "@/layouts/Footer";
import styles from "./styles.modules.scss";

import Header from "@/layouts/Header";
import Intro from "@/layouts/Intro";
import Nav from "@/layouts/Nav";

function Home() {
  return (
    <>
      {/* <head>
			<title>Kalia Cafe</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
			<link rel="stylesheet" href="assets/css/main.css" />
			<noscript>
				<link rel="stylesheet" href="assets/css/noscript.css" />
			</noscript>
		</head> */}

      <div className={styles["is-preload"]}>
        {/* <!-- Wrapper --> */}
        <div id="wrapper" className={styles["fade-in"]}>
          <Intro />
          <Header />
          <Nav />

          {/* <!-- Main --> */}
          <div id="main">
            {/* <!-- Featured Post --> */}
            <article className="post featured">
              <header className="major">
                <span className="date">April 25, 2017</span>
                <h2>
                  <a href="#">
                    And this is a<br />
                    massive headline
                  </a>
                </h2>
                <p>
                  Aenean ornare velit lacus varius enim ullamcorper proin
                  aliquam
                  <br />
                  facilisis ante sed etiam magna interdum congue. Lorem ipsum
                  dolor
                  <br />
                  amet nullam sed etiam veroeros.
                </p>
              </header>
              <a href="#" className="image main">
                <img src="images/pic01.jpg" alt="" />
              </a>
              <ul className="actions special">
                <li>
                  <a href="#" className="button large">
                    Full Story
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- Posts --> */}
            <section className="posts">
              <article>
                <header>
                  <span className="date">April 24, 2017</span>
                  <h2>
                    <a href="#">
                      Sed magna
                      <br />
                      ipsum faucibus
                    </a>
                  </h2>
                </header>
                <a href="#" className="image fit">
                  <img src="images/pic02.jpg" alt="" />
                </a>
                <p>
                  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Pellentesque venenatis dolor imperdiet
                  dolor mattis sagittis magna etiam.
                </p>
                <ul className="actions special">
                  <li>
                    <a href="#" className="button">
                      Full Story
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 22, 2017</span>
                  <h2>
                    <a href="#">
                      Primis eget
                      <br />
                      imperdiet lorem
                    </a>
                  </h2>
                </header>
                <a href="#" className="image fit">
                  <img src="images/pic03.jpg" alt="" />
                </a>
                <p>
                  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Pellentesque venenatis dolor imperdiet
                  dolor mattis sagittis magna etiam.
                </p>
                <ul className="actions special">
                  <li>
                    <a href="#" className="button">
                      Full Story
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 18, 2017</span>
                  <h2>
                    <a href="#">
                      Ante mattis
                      <br />
                      interdum dolor
                    </a>
                  </h2>
                </header>
                <a href="#" className="image fit">
                  <img src="images/pic04.jpg" alt="" />
                </a>
                <p>
                  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Pellentesque venenatis dolor imperdiet
                  dolor mattis sagittis magna etiam.
                </p>
                <ul className="actions special">
                  <li>
                    <a href="#" className="button">
                      Full Story
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 14, 2017</span>
                  <h2>
                    <a href="#">
                      Tempus sed
                      <br />
                      nulla imperdiet
                    </a>
                  </h2>
                </header>
                <a href="#" className="image fit">
                  <img src="images/pic05.jpg" alt="" />
                </a>
                <p>
                  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Pellentesque venenatis dolor imperdiet
                  dolor mattis sagittis magna etiam.
                </p>
                <ul className="actions special">
                  <li>
                    <a href="#" className="button">
                      Full Story
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 11, 2017</span>
                  <h2>
                    <a href="#">
                      Odio magna
                      <br />
                      sed consectetur
                    </a>
                  </h2>
                </header>
                <a href="#" className="image fit">
                  <img src="images/pic06.jpg" alt="" />
                </a>
                <p>
                  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Pellentesque venenatis dolor imperdiet
                  dolor mattis sagittis magna etiam.
                </p>
                <ul className="actions special">
                  <li>
                    <a href="#" className="button">
                      Full Story
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 7, 2017</span>
                  <h2>
                    <a href="#">
                      Augue lorem
                      <br />
                      primis vestibulum
                    </a>
                  </h2>
                </header>
                <a href="#" className="image fit">
                  <img src="images/pic07.jpg" alt="" />
                </a>
                <p>
                  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Pellentesque venenatis dolor imperdiet
                  dolor mattis sagittis magna etiam.
                </p>
                <ul className="actions special">
                  <li>
                    <a href="#" className="button">
                      Full Story
                    </a>
                  </li>
                </ul>
              </article>
            </section>

            {/* <!-- Footer --> */}
            <footer>
              <div className="pagination">
                {/* <!--<a href="#" className="previous">Prev</a>--> */}
                <a href="#" className="page active">
                  1
                </a>
                <a href="#" className="page">
                  2
                </a>
                <a href="#" className="page">
                  3
                </a>
                <span className="extra">&hellip;</span>
                <a href="#" className="page">
                  8
                </a>
                <a href="#" className="page">
                  9
                </a>
                <a href="#" className="page">
                  10
                </a>
                <a href="#" className="next">
                  Next
                </a>
              </div>
            </footer>
          </div>
          <Footer />
        </div>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
      </div>
    </>
  );
}

export default Home;
