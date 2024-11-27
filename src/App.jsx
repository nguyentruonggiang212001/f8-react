import './App.module.css'
import Header from "./Components/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Shop from "./pages/Shop.jsx";




// function ProductList() {
// 	useEffect(() => {
// 		console.log("trong useEffect");
// 		return () => {
// 			console.log("trong return cua useEffect");
// 			// function dọn dẹp ngay trước khi component ProductList được unmounting
// 		};
// 	}, []);
// 	return <h1>Danh sach san pham</h1>;
// }

// function App(){
//   const [count, setCount] = useState(0);
// 	const [showProducts, setShowProducts] = useState([]);
//   const[product,setProducts] = useState([]);
//   useEffect(()=>{
//     fetch("http://localhost:3000/products")
//     .then((res)=> res.json())
//     .then((data)=>{
//       console.log(data);
//       setProducts(data);
//     })
//   },[])

//   return(
// <>
// 			<Header />
//        {JSON.stringify(product)}
// 			<button
// 				onClick={() => {
// 					setCount(count + 1);
// 				}}
// 			>
// 				Tăng
// 			</button>
// 			{count}

// 			<button
// 				onClick={() => {
// 					setShowProducts(!showProducts);
// 				}}
// 			>
// 				Toogle Products
// 			</button>

// 			{showProducts && <ProductList />}
// 			<Footer />
// 		</>
//   )
// }

function App() {
	return (
		<>
			<Header />
       <h2 style={{marginTop:"100px"}}>Danh Sach San Pham</h2>
			<Shop />
			<Footer />
		</>
	);
}


export default App;