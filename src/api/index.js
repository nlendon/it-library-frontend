import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_LOCAL_API,
    headers: {
        'Access-Control-Allow-Methods': '*',
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

api.interceptors.response.use((config) => {
    return config;
}, (error) => Promise.reject(error));

export  default  api;
