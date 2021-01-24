import axios from 'axios';

const api = axios.create({
    baseURL: 'https://checky.vercel.app/'
});

export default api;

