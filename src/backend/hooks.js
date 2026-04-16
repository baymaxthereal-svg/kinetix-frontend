import { useQuery, useMutation } from '@tanstack/react-query';
import { adminLogin } from './functions';
export function useAdminLogin() {
    return useMutation({
        mutationFn: ({ username, password }) => adminLogin({ username, password })
    });
}