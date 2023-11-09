import styles from './styles.module.scss';
import cx from classNames;

const Intro = () => (
	<div id={styles["intro"]}>
		<h1>Kalia Cafe</h1>
		<h2>Sandwich, Espresso, Internet Cafe</h2>
		<h2>Kihei, Maui, Hawaii</h2>
		<p>
			Formerly Cafe @ la Plage<br />
			6:45am-1:30pm<br />
			Closed Tuesdays
		</p>
		<ul className={styles["actions"]}>
			<li>
				<a href="#header" className={"button icon solid solo fa-arrow-down scrolly">Continue</a>
			</li>
		</ul>
	</div>
)

export default Intro;