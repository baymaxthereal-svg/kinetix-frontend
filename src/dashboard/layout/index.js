import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function DashboardLayout({ children, pageTitle = "Dashboard" }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add logout logic (clear tokens, etc.)
        navigate('/dashboard');
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen flex">
            <ToastContainer />

            {/* Fixed Sidebar */}
            <aside className="fixed top-0 left-0 h-full w-64 bg-slate-50 dark:bg-slate-950 flex flex-col py-6 px-4 z-50 shadow-lg">
                <div className="mb-10 px-2">
                    <h1 className="text-lg font-black text-sky-900 dark:text-sky-100 uppercase tracking-tighter">
                        Admin Dashboard
                    </h1>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Admin Terminal</p>
                </div>

                <nav className="flex-1 space-y-1">
                    <NavLink
                        to="/dashboard/home"
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
                                className={({ isActive }) =>
                                    `block text-xs py-1 ${isActive ? 'text-sky-700 font-bold' : 'text-slate-500 hover:text-sky-600'}`
                                }
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/dashboard/category"
                                className={({ isActive }) =>
                                    `block text-xs py-1 ${isActive ? 'text-sky-700 font-bold' : 'text-slate-500 hover:text-sky-600'}`
                                }
                            >
                                Categories
                            </NavLink>
                        </div>
                    </div>

                    {/* Orders */}
                    <NavLink
                        to="/dashboard/orders"
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

                    {/* Bulk Orders - new item */}
                    <NavLink
                        to="/dashboard/bulkOrders"
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

                    {/* Queries */}
                    <NavLink
                        to="/dashboard/queries"
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

            {/* Main content */}
            <main className="flex-1 min-h-screen ml-64">
                <header className="sticky top-0 z-40 w-full px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center shadow-sm">
                    <h2 className="text-xl font-bold tracking-tight text-sky-800 dark:text-sky-300">
                        {pageTitle}
                    </h2>
                    <div className="flex items-center gap-3">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                </header>

                <div className="p-6">{children}</div>
            </main>

            {/* Floating action button */}
            <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined">save</span>
            </button>
        </div>
    );
}