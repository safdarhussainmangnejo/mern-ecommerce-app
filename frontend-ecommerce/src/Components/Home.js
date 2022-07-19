import React, { useState, useEffect } from 'react';
import { showLoading } from '../Helper/loading';
import Card from './Card';
import Axios from "axios";
import { getNewArrivals } from '../redux/actions/filterActions';
// import { getProductsByCount } from '../redux/actions/productActions';

const Home = () => {
	
    const [products, setProducts] = useState([]);
    const [newProducts, setnewProducts] = useState([]);
    const {loading} = false;

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

	useEffect(() => {
		setnewProducts(getNewArrivals());
	},[]);

	// useEffect(() => {
	// 	getProductsByCount();
	// }, []);

	const { newArrivals } = newProducts;

	return (
		<section className='home-page'>
			<div className='banner-image'></div>
			{loading ? (
				<div className='text-center'>{showLoading()}</div>
			) : (
				<>
					<div className='container'>
						<hr className='py-4' />
						<h3 className='py-4'>New Arrivals</h3>
						<div className='row'>
							{newArrivals &&
								newArrivals.map(newArrival => (
									<Card
										key={newArrival._id}
										product={newArrival}
										homePage={true}
									/>
								))}
						</div>

						<hr className='py-4' />
						<h3 className='py-4'>Menu</h3>
						<div className='row'>
							{products &&
								products.map(product => (
									<Card
										key={product._id}
										product={product}
										homePage={true}
									/>
								))}
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Home;
