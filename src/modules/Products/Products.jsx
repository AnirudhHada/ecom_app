import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./products.css";

const Products = () => {
	const [categories, setCategories] = useState([]);

   useEffect(() => {
      const fetchCategories = async () => {
         const response = await fetch('https://fakestoreapi.com/products/categories');
         const data = response.json();         
         setCategories(data);
      }
      fetchCategories();
   }, [])

   if(categories.length === 0) return <div className="loader"></div>

   return (
		<div>
         <FeatureCard cards={categories} />
			<ProductCard/>
		</div>
	);
};

export default Products;
