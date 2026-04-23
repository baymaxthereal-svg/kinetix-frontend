import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminLogin, createCategory, getCategory, updateCategory, deleteCategory } from './functions';
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