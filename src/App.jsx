import Courses from "./Components/Courses.jsx";
import './App.module.css'
import Header from "./Components/Header.jsx";
// import ProductList from './Components/Productlist.jsx';
import { useEffect, useState } from "react";
import { datas } from './data/datas';
import Footer from "./components/footer/Footer.jsx";

// function Button(props) {
// 	console.log(props);
// 	return <button className={props.variant}>{props.children}</button>;
// }

// function Welcome(props){
// 	// props.name = props.name +"aha";
    
//     const [count,setCount] = useState(0);

	

// 	function handleClick(){
// 		// count++;
// 		console.log(count);
// 		setCount((prev)=> prev +1);
// 		setCount((prev)=> prev +1);
// 		// setCount(count + 1)
// 	}

// 	return(
// 		<>
// 		{/* <h1>Xin chao</h1> */}
// 		<button onClick={handleClick}>Click me</button>
// 		{count}
// 		</>
// 	)
// }

// function App() {  

// 	return (
// 		<>  
// 		    {/* <ProductList /> */}
// 			{/* <Header /> */}
// 			<Welcome name="Hoang">Hoang</Welcome>
// 			{/* <Button variant="btn btn-primary">
// 				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt!</p>
// 			</Button>
// 			<Button variant="btn btn-secondary">Btn Secondary</Button>
// 			<Button variant="btn btn-warning">Btn Warning</Button>
// 			<Button variant="btn btn-danger">Btn Danger</Button>
// 			<Button variant="btn btn-link">Btn Link</Button>
// 			<Footer /> */}
// 		</>
// 	);
// }


// function App() {
//   const [toggleProductsList, setProductListVisible] = useState(true);
//   const [visibleProducts, setVisibleProducts] = useState(10);
//   const [theme, setTheme] = useState('light');

//   const handletoggleProductList = () => {
//     setProductListVisible((toggleProductsList) => !toggleProductsList);
//   };

//   const handleSeemore = () => {
//     setVisibleProducts((visibleProducts) => visibleProducts + 10);
//   };

//   function toggleTheme() {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else {
//       setTheme('light');
//     }
//   }

//   return (
//     <>
//       <div className={theme}> 
//         <Header toggleDarkLight={toggleTheme} theme={theme} />
//         <button onClick={handletoggleProductList} style={{margintop:"100px"}} >
//           {toggleProductsList ? "Ẩn danh sách sản phẩm" : "Hiện thị danh sách sản phẩm"}
//         </button>
//         {toggleProductsList && (
//           <>
//             <ProductList visibleProducts={visibleProducts} />
//             {visibleProducts < datas.length && (
//               <button onClick={handleSeemore} style={{ margin: "10px" }}>
//                 See More
//               </button>
//             )}
//           </>
//         )}
//         <Footer/>
//       </div>
//     </>
//   );
// }



// function ComponentA() {
// 	useEffect(() => {
// 		console.log("trong useEffect cua component A");
// 	});
// 	return <h2>Noi dung component A</h2>;
// }

function App(){
  const[product,setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://localhost:3000/products")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setProducts(data);
    })
  })

  return(
   <>
			<Header />
			<h1>Hello</h1>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
				Toggle
			</button>
			<Footer />
		</>
  )
}




export default App;