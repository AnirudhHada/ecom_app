import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./modules/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product/Product";
import Products from "./modules/Products/Products";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/products" element={<Products />} />
				<Route path="*" element={<div>404</div>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
