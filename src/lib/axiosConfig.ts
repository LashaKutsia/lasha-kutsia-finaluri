import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_MIVIES_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIES_API_KEY}`
    },
});

export default api;
