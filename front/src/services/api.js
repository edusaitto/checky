import axios from 'axios';

const api = axios.create({
    baseURL: 'http://checkyapp-net.umbler.net/'
});

export default api;

