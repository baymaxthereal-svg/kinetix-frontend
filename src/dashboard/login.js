import { useState } from 'react';
import { useAdminLogin } from '../backend/hooks';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Helper to set a cookie with expiry in hours
const setCookie = (name, value, hours = 1) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

export default function DashboardLogin() {
    const navigate = useNavigate();
    const { mutate: login, isLoading } = useAdminLogin();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            remember: true
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: (values, { resetForm }) => {
            login(
                { username: values.username, password: values.password },
                {
                    onSuccess: (data) => {
                        // Save token to cookie (expires in 1 hour)
                        if (data.token) {
                            setCookie('token', data.token, 1); // 1 hour expiry
                        }
                        toast.success('Login successful! Redirecting...', {
                            position: "top-right",
                            autoClose: 2000,
                        });
                        setTimeout(() => {
                            navigate('/dashboard/home');
                        }, 1500);
                    },
                    onError: (err) => {
                        toast.error(err.message || 'Login failed. Please check your credentials.', {
                            position: "top-right",
                            autoClose: 4000,
                        });
                        resetForm();
                    }
                }
            );
        }
    });

    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <ToastContainer />

            <div className="absolute inset-0 z-0">
                <img
                    alt="modern minimalist sensory room with soft architectural lighting, smooth rounded surfaces, and a calming neutral palette"
                    className="w-full h-full object-cover opacity-20 grayscale brightness-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlgdUhjmT9aSQ-aEIZg-To7S4t63dIuYOPrxkQClNg3lf5QaLM1zlFc07s4Jack8MyzsJNwyo6AgH-3DXKELVJiJvWI6GsG8pmCMDFhfWZsRGuvB17Z-yEmmfEwYPcnU3Z4sAuclz66HbFyjrfEMlzM6tcoO-ona4-Tjb3DJfmtnH_ynbZ7XkNf2MD1BvjVST_tK-5S-CYCw5aumbLCCzj3PQ0QTTP5Kkogz6fD24ha3nUKdd3-jgQOV7MJL2anqxrwOD7LfSdydo"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/80 to-transparent"></div>
            </div>

            <main className="relative z-10 w-full max-w-md px-6 py-12">
                <div className="flex flex-col items-center mb-10">
                    <h1 className="text-3xl font-extrabold tracking-tighter text-primary">KINETIX</h1>
                    <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">
                        Clinical Dashboard
                    </p>
                </div>

                <div className="glass-panel p-10 rounded-xl shadow-[0_32px_64px_-12px_rgba(0,99,138,0.08)]">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-on-surface tracking-tight">Welcome back</h2>
                        <p className="text-on-surface-variant text-sm mt-1">
                            Please enter your credentials to access the clinic system.
                        </p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 ml-1"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="w-full px-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-bright transition-all text-on-surface placeholder:text-outline/50"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username && (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.username}</div>
                            )}
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2 ml-1">
                                <label
                                    htmlFor="password"
                                    className="block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-bright transition-all text-on-surface placeholder:text-outline/50"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                            )}
                        </div>

                        <div className="flex items-center space-x-3 ml-1">
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-highest"
                                onChange={formik.handleChange}
                                checked={formik.values.remember}
                            />
                            <label
                                htmlFor="remember"
                                className="text-sm text-on-surface-variant font-medium cursor-pointer"
                            >
                                Remember this device
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 px-6 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In to Dashboard
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </main>

            <footer className="fixed bottom-0 w-full flex justify-center py-6 z-10">
                <p className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-outline/50">
                    © {new Date().getFullYear()} copy right reserved.
                </p>
            </footer>
        </div>
    );
}