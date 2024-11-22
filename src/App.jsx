import Courses from "./components/Courses.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header";
import styles from "./App.module.css"
function App() {
	return (
		<>
			<Header />
			<Courses />
			<button className={styles.btn}>Sign In</button>
			<Footer />
		</>
	);
}

export default App;