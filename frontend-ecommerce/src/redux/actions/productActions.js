import axios from 'axios';

export const createProduct = async formData => {
	try {
		
		const response = await axios.post('http://localhost:8000/api/product/add', formData);
        console.log("success Message: ", response.data.successMessage);
		console.log("success Message: ", response.data.product);
        return response.data.product;
		
	} catch (err) {
		console.log('createProduct api error: ', err);
        console.log("Error Message: ", err.response.data.errorMessage);
        return err.response.data.errorMessage;
	}
};

export const getProducts = async () => {
	try {
		
		const response = await axios.get('http://localhost:8000/api/product/products');
		
			return response.data.products;
	
	} catch (err) {
		console.log('getProducts api error: ', err);
		
			return err.response.data.errorMessage;
	}
};

export const getProductsByCount = async () => {
	try {
		
		const response = await axios.get('http://localhost:8000/api/product/count');
		
			return response.data.products;
		
	} catch (err) {
		console.log('getProducts api error: ', err);
		
			return err.response.data.errorMessage;
		
	}
};

export const getProduct = async productId => {
	try {
		
		const response = await axios.get(`http://localhost:8000/api/product/${productId}`);
        return response.data;
		
	} catch (err) {
		console.log('getProducts api error: ', err);
        return err.response.data.errorMessage
	}
};

export const deleteProduct = async productId  => {
	try {
		
		const response = await axios.delete(`http://localhost:8000/api/product/${productId}`);
		
			return response.data;
		
	} catch (err) {
		console.log('deleteProduct api error: ', err);
			return err.response.data.errorMessage;
		
	}
};
