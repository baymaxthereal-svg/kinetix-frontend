import axios from 'axios';

// Helper to get token from cookie
const getTokenFromCookie = () => {
    const match = document.cookie.match(/(^|;) ?token=([^;]*)(;|$)/);
    return match ? match[2] : null;
};

// Helper to remove token cookie
const removeTokenCookie = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Request interceptor: attach token to Authorization header
apiClient.interceptors.request.use(
    (config) => {
        const token = getTokenFromCookie();
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor: handle 401 (unauthorized)
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid – clear cookie and redirect to login
            removeTokenCookie();
            // Redirect to login page (only once, avoid loops)
            if (window.location.pathname !== '/dashboard') {
                window.location.href = '/dashboard';
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;