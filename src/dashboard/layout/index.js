import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Helper functions for cookie management
const getTokenFromCookie = () => {
    const match = document.cookie.match(/(^|;) ?token=([^;]*)(;|$)/);
    return match ? match[2] : null;
};

const removeTokenCookie = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

export default function DashboardLayout({ children, pageTitle = "Dashboard" }) {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        removeTokenCookie();
        localStorage.removeItem('user');
        navigate('/dashboard');
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="bg-surface text-on-surface min-h-screen flex relative">
            <ToastContainer />

            {/* Mobile overlay backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar – fixed on large screens, off‑canvas on mobile */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-slate-50 dark:bg-slate-950 flex flex-col py-6 px-4 z-50 shadow-lg transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 lg:fixed`}
            >
                <div className="mb-10 px-2 flex justify-between items-center lg:justify-start">
                    <div>
                        <h1 className="text-lg font-black text-sky-900 dark:text-sky-100 uppercase tracking-tighter">
                            Admin Dashboard
                        </h1>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Admin Terminal</p>
                    </div>
                    <button
                        onClick={closeSidebar}
                        className="lg:hidden p-2 text-slate-500 hover:text-slate-700"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <nav className="flex-1 space-y-1">
                    <NavLink
                        to="/dashboard/home"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive
                                ? 'bg-sky-100/50 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 font-bold border-r-4 border-sky-600'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm font-medium">Dashboard</span>
                    </NavLink>

                    {/* Inventory section */}
                    <div>
                        <NavLink
                            to="/dashboard/product"
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive
                                    ? 'bg-sky-100/50 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 font-bold border-r-4 border-sky-600'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span className="text-sm font-medium">Inventory</span>
                        </NavLink>
                        <div className="ml-9 mt-1 space-y-1">
                            <NavLink
                                to="/dashboard/product"
                                onClick={closeSidebar}
                                className={({ isActive }) =>
                                    `block text-xs py-1 ${isActive ? 'text-sky-700 font-bold' : 'text-slate-500 hover:text-sky-600'}`
                                }
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/dashboard/category"
                                onClick={closeSidebar}
                                className={({ isActive }) =>
                                    `block text-xs py-1 ${isActive ? 'text-sky-700 font-bold' : 'text-slate-500 hover:text-sky-600'}`
                                }
                            >
                                Categories
                            </NavLink>
                        </div>
                    </div>

                    <NavLink
                        to="/dashboard/orders"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive
                                ? 'bg-sky-100/50 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 font-bold border-r-4 border-sky-600'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span className="text-sm font-medium">Orders</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/bulkOrders"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive
                                ? 'bg-sky-100/50 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 font-bold border-r-4 border-sky-600'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">inventory</span>
                        <span className="text-sm font-medium">Bulk Orders</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/queries"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive
                                ? 'bg-sky-100/50 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 font-bold border-r-4 border-sky-600'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">help_outline</span>
                        <span className="text-sm font-medium">Queries</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/settings"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive
                                ? 'bg-sky-100/50 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 font-bold border-r-4 border-sky-600'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-medium">Settings</span>
                    </NavLink>
                </nav>

                <div className="mt-auto border-t border-slate-200/50 pt-4">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main content – add left margin on large screens to accommodate fixed sidebar */}
            <main className="flex-1 min-h-screen w-full lg:ml-64">
                <header className="sticky top-0 z-40 w-full px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            aria-label="Toggle sidebar"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <h2 className="text-xl font-bold tracking-tight text-sky-800 dark:text-sky-300">
                            {pageTitle}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                </header>

                <div className="p-6">{children}</div>
            </main>

            {/* Floating action button (optional) */}
            <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined">save</span>
            </button>
        </div>
    );
}