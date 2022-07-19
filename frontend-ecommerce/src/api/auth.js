import axios from 'axios';
import { useState } from 'react';

export const signup = async (data) => {
    console.log("User Data: ", data);
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('http://localhost:8000/signup', data, config);

    return response;
};

export const signin = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('http://localhost:8000/signin', data, config);

    return response;
};

export const users= async () => {
   
    fetch(`http://localhost:8000/users`)
      .then((response) => {
        console.log("Data: ", response)
        return response;
      })
      .catch((err) => {
        console.log("Error generated")
        return "Error";
      })
      .finally(() => {
        console.log("Loading")
        return "Loading";
      });

};
