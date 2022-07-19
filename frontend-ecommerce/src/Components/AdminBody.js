import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
// redux
import { useSelector } from 'react-redux';

const AdminBody = () => {
	// const { products } = useSelector(state => state.products);
	const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  },[]); 
	const loadProducts = async () => {
		const result = await Axios.get(
		  `http://localhost:8000/api/product/products`
		);
		setProducts(result.data.products);
		console.log(result.data.products);
	  };
	  
	
	return (
		<div className='container'>
			<div className='row'>
				<div className='card-deck'>
					{products &&
						products.map(product => (
							<Card
								key={product._id}
								product={product}
								adminPage={true}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default AdminBody;
