import axios from 'axios';
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
export const adminLogin = async ({ username, password }) => {
    try {
        const response = await apiClient.post('/api/auth/login', { username, password });
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Login failed';
        throw new Error(message);
    }
};