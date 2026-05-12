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
export const createCategory = async (formData) => {
    try {
        const response = await apiClient.post('/api/categories', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to create category';
        throw new Error(message);
    }
};
export const getCategory = async () => {
    try {
        const response = await apiClient.get('/api/categories');
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to get category';
        throw new Error(message);
    }
};
export const updateCategory = async (id, formData) => {
    const response = await apiClient.put(`/api/categories/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
};
export const deleteCategory = async (id) => {
    const response = await apiClient.delete(`/api/categories/${id}`);
    return response.data;
};
export const createProduct = async (formData) => {
    try {
        const response = await apiClient.post('/api/products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to add product';
        throw new Error(message);
    }
};
export const getProducts = async () => {
    try {
        const response = await apiClient.get('/api/products');
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to get products';
        throw new Error(message);
    }
};
export const updateProduct = async (id, formData) => {
    const response = await apiClient.put(`/api/products/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
};
export const deleteProduct = async (id) => {
    const response = await apiClient.delete(`/api/products/${id}`);
    return response.data;
};
export const CreateQuery = async (formData) => {
    try {
        const response = await apiClient.post('/api/contacts', formData);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Unable to send query.';
        throw new Error(message);
    }
};
export const CreateBulkOrder = async (formData) => {
    try {
        const response = await apiClient.post('/api/bulk-orders', formData);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Unable to send query.';
        throw new Error(message);
    }
};
export const getProductsByCatId = async (id) => {
    try {
        const response = await apiClient.get(`/api/products/category/${id}`);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Unable to send query.';
        throw new Error(message);
    }
};
export const getProductsById = async (id) => {
    try {
        const response = await apiClient.get(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || 'Unable to send query.';
        throw new Error(message);
    }
};