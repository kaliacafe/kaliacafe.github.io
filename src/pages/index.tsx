import Wrapper from "@/layouts/Wrapper";
import styles from "./styles.modules.scss";

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
        <Wrapper />

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
