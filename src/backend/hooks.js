import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminLogin, createCategory, getCategory, updateCategory, deleteCategory, createProduct, getProducts, updateProduct, deleteProduct, CreateQuery, CreateBulkOrder, getProductsByCatId 
,getProductsById

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
        queryKey: ['productsByCat',id],
        queryFn: () => getProductsByCatId(id),
    });
}
export function useGetProductsByID(id) {
    return useQuery({
        queryKey: ['productsByID',id],
        queryFn: () => getProductsById(id),
    });
}