import axios from 'axios';

const API_URL = process.env.REACT_APP_HOST_URL;


const axiosClient = axios.create({  
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
    });
export const endpoints = {
    products:{
        list:'/products',
    }

}


export default axiosClient;