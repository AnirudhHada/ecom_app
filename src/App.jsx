import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./modules/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/footer" element={<Footer />} />
			</Routes>
		</div>
	);
}

export default App;
