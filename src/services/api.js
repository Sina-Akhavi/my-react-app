import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';
const api = axios.create({
    baseURL: BASE_URL,
});

let isRefreshing = false;
let refreshSubscribers = [];

function subscribeTokenRefresh(cb) {
    refreshSubscribers.push(cb);
}

function onRefreshed(token) {
    refreshSubscribers.forEach(cb => cb(token));
    refreshSubscribers = [];
}

api.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    async error => {
        const { config, response } = error;
        if (response && response.status === 401 && !config._retry) {
            if (isRefreshing) {
                return new Promise(resolve => {
                    subscribeTokenRefresh(token => {
                        config.headers.Authorization = `Bearer ${token}`;
                        resolve(api(config));
                    });
                });
            }
            config._retry = true;
            isRefreshing = true;
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const res = await axios.post(`${BASE_URL}auth/refresh/token/`, { refresh: refreshToken });
                const newAccessToken = res.data.access;
                localStorage.setItem('access_token', newAccessToken);
                api.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                onRefreshed(newAccessToken);
                return api(config);
            } catch (refreshError) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
);

export default api;
