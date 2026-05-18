import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    adminLogin, createCategory, getCategory, updateCategory, deleteCategory, createProduct, getProducts, updateProduct, deleteProduct, CreateQuery, CreateBulkOrder, getProductsByCatId
    , getProductsById, createOrder, geTotalOrders, geTotalCompleteOrders, geTotalPendingOrders, geTotalBusiness, geTotalCategories, geTotalProducts, geTotalQueries, geTotabulkOrders
    , getAllOrders, getAllOrdersByID, getAllBulkOrder , getAllQueries , adminCreate
} from './functions';
export function useAdminLogin() {
    return useMutation({
        mutationFn: ({ username, password }) => adminLogin({ username, password })
    });
}
export function useCreateCategory() {
    return useMutation({
        mutationFn: (formData) => createCategory(formData)
    });
}
export function useGetCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => getCategory(),
    });
}
export function useUpdateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, formData }) => updateCategory(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries(['categories']);
        }
    });
}
export function useDeleteCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => deleteCategory(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['categories']);
        }
    });
}
export function useCreateProduct() {
    return useMutation({
        mutationFn: (formData) => createProduct(formData)
    });
}
export function useGetProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(),
    });
}
export function useUpdateProduct() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, formData }) => updateProduct(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        }
    });
}
export function useDeleteProduct() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        }
    });
}
export function useCreateQuery() {
    return useMutation({
        mutationFn: (formData) => CreateQuery(formData)
    });
}
export function useCreateBuildOrder() {
    return useMutation({
        mutationFn: (formData) => CreateBulkOrder(formData)
    });
}
export function useGetProductsByCat(id) {
    return useQuery({
        queryKey: ['productsByCat', id],
        queryFn: () => getProductsByCatId(id),
    });
}
export function useGetProductsByID(id) {
    return useQuery({
        queryKey: ['productsByID', id],
        queryFn: () => getProductsById(id),
    });
}
export function useCreateOrder() {
    return useMutation({
        mutationFn: (formData) => createOrder(formData)
    });
}
export function useGetTotalOrders() {
    return useQuery({
        queryKey: ['totalOrders'],
        queryFn: () => geTotalOrders(),
    });
}
export function useGetCompletedOrders() {
    return useQuery({
        queryKey: ['totalCompleteOrder'],
        queryFn: () => geTotalCompleteOrders(),
    });
}
export function useGetPendingOrders() {
    return useQuery({
        queryKey: ['totalPendingOrder'],
        queryFn: () => geTotalPendingOrders(),
    });
}
export function useGetTotalBusiness() {
    return useQuery({
        queryKey: ['totalBusiness'],
        queryFn: () => geTotalBusiness(),
    });
}
export function useGetTotalQueries() {
    return useQuery({
        queryKey: ['totalQueries'],
        queryFn: () => geTotalQueries(),
    });
}
export function useGetTotalBulkOrders() {
    return useQuery({
        queryKey: ['totalBulkOrders'],
        queryFn: () => geTotabulkOrders(),
    });
}
export function useGetTotalCategories() {
    return useQuery({
        queryKey: ['totalCat'],
        queryFn: () => geTotalCategories(),
    });
}
export function useGetTotalProducts() {
    return useQuery({
        queryKey: ['totalProducts'],
        queryFn: () => geTotalProducts(),
    });
}
export function useGetTotalOrdersDetails() {
    return useQuery({
        queryKey: ['totalProductsDetails'],
        queryFn: () => getAllOrders(),
    });
}
export function useGetOrdersDetails(id) {
    return useQuery({
        queryKey: ['ProductsDetails', id],
        queryFn: () => getAllOrdersByID(id),
    });
}
export function useGetBulkOrders() {
    return useQuery({
        queryKey: ['getBulkOrders'],
        queryFn: () => getAllBulkOrder(),
    });
}
export function useGetAllQueries() {
    return useQuery({
        queryKey: ['getQueries'],
        queryFn: () => getAllQueries(),
    });
}
export function useCreateAdmin() {
    return useMutation({
        mutationFn: ({ username, password }) => adminCreate({ username, password })
    });
}