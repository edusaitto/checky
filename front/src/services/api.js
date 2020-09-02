import axios from 'axios';

const api = axios.create({
    baseURL: 'http://appchecky-com.umbler.net'
});

export default api;

