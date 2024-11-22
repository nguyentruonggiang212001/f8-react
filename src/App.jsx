import Courses from "./components/Courses.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header";
import styles from "./App.module.css"
import { useState } from "react";

function Button(props) {
	console.log(props);
	return <button className={props.variant}>{props.children}</button>;
}

function Welcome(props){
	// props.name = props.name +"aha";
    
    const [count,setCount] = useState(0);

	

	function handleClick(){
		// count++;
		console.log(count);
		setCount((prev)=> prev +1);
		setCount((prev)=> prev +1);
		// setCount(count + 1)
	}

	return(
		<>
		<h1>Xin chao</h1>
		<button onClick={handleClick}>Click me</button>
		{count}
		</>
	)
}

function App() {
	return (
		<>
			<Header />
			<Welcome name="Hoang">Hoang</Welcome>
			<Button variant="btn btn-primary">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt!</p>
			</Button>
			<Button variant="btn btn-secondary">Btn Secondary</Button>
			<Button variant="btn btn-warning">Btn Warning</Button>
			<Button variant="btn btn-danger">Btn Danger</Button>
			<Button variant="btn btn-link">Btn Link</Button>
			<Footer />
		</>
	);
}

export default App;