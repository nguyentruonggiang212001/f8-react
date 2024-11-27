import './App.module.css'
import Header from "./Components/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Shop from "./pages/Shop.jsx";
import ShopPage from './pages/Shop.jsx';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import ServicesPage from './pages/Services.jsx';
import ContactPage from './pages/Contact.jsx';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsLists from './admin/ProductsLists.jsx';
import DashBoardPage from './admin/DashBoardPage.jsx';




function App() {
	return (
		<>
			<Header />
       <h2 style={{marginTop:"100px"}}>Danh Sach San Pham</h2>
			 <Routes>
				<Route path="/" element ={<HomePage/>}/>
				<Route path="/shop"  element ={<ShopPage/>}/>
				{/* <Route path="/products/laptop"  element ={<LaptopPage/>}/>
				<Route path="/products/desktop"  element ={<DesktopPage/>}/> */}
				<Route path="/products/:id"  element ={<ProductDetailPage/>}/>
				<Route path="/services"  element ={<ServicesPage/>}/>
				<Route path="/contact"  element ={<ContactPage/>}/>
                <Route path="/admin"  element ={<DashBoardPage/>}>
				<Route path="/admin/prouducts"  element ={<ProductsLists/>}/>
				</Route>

				
				

				<Route path="*" element={<NotFoundPage/>}/>
			 </Routes>
			<Footer />
		</>
	);
}


export default App;