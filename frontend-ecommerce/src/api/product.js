import axios from 'axios';

export const createProduct = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post('http://localhost:8000/api/product/add', data, config);

    return response;
};
