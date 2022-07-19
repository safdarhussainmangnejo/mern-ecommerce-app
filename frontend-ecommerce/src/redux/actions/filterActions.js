import axios from 'axios';

export const getNewArrivals =  async (sortBy = 'desc', limit = 3) => {
		try {
			
			const response = await axios.get(`http://localhost:8000/api/filter?sortBy=${sortBy}&limit=${limit}`);
			
            console.log("Data Received: ", response.data.newArrivals)
		} catch (err) {
			console.log('getNewProducts api error: ', err);
            console.log("payload: ", err.response.data.errorMessage);
		}
	};

export const getProductsByFilter =  async (arg) => {
	try {
		const response = await axios.post('http://localhost:8000/api/filter/search', arg);
        console.log('Data Recieved: ', response.data.products);
		
	} catch (err) {
		console.log('getProductsByFilter api error: ', err);
        console.log('Error Message: ', err.response.data.errorMessage);
	}
};
