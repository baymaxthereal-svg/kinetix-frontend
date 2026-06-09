import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/cartSlice';
import { useGetCategories } from '../backend/hooks';
import logo from '../assets/logo/logo.png';

export default function Navbar() {
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const { data, loading, error } = useGetCategories();
    const cartCount = useSelector(selectCartCount);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
                <NavLink
                    className="text-2xl font-extrabold text-sky-800 dark:text-sky-300 tracking-tighter font-headline"
                    to="/"
                >
                    <img src={logo} width={150} height="auto" alt="Logo" />
                </NavLink>

                <div className="hidden md:flex items-center space-x-8">
                    {/* Home - fixed with end prop only */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `text-sky-800 dark:text-sky-300 font-['Manrope'] font-bold tracking-tight hover:text-sky-600 dark:hover:text-sky-200 transition-colors duration-300 pb-1 ${
                                isActive
                                    ? 'border-b-2 border-sky-800 dark:border-sky-300'
                                    : 'border-b-2 border-transparent'
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    {/* Shop with Categories Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                            onMouseEnter={() => setIsShopDropdownOpen(true)}
                            onMouseLeave={() => setIsShopDropdownOpen(false)}
                            className={`flex items-center gap-1 font-['Manrope'] font-bold tracking-tight transition-colors duration-300 bg-transparent pb-1 ${
                                isShopDropdownOpen
                                    ? 'text-sky-700 dark:text-sky-200 border-b-2 border-sky-800 dark:border-sky-300'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-200 border-b-2 border-transparent'
                            }`}
                        >
                            Shop
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isShopDropdownOpen && (
                            <div
                                onMouseEnter={() => setIsShopDropdownOpen(true)}
                                onMouseLeave={() => setIsShopDropdownOpen(false)}
                                className="absolute left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-2 z-50 animate-fadeIn"
                            >
                                {loading && (
                                    <div className="px-4 py-2 text-sm text-slate-500 dark:text-slate-400">
                                        Loading...
                                    </div>
                                )}
                                {error && (
                                    <div className="px-4 py-2 text-sm text-red-500">
                                        Failed to load categories
                                    </div>
                                )}
                                {data?.data?.map((cat) => (
                                    <NavLink
                                        to={`/ProductList/${cat.id}`}
                                        key={cat.id}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 font-['Manrope'] transition-colors duration-200 ${
                                                isActive
                                                    ? 'bg-sky-100 dark:bg-slate-700 text-sky-800 dark:text-sky-200'
                                                    : 'text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700'
                                            }`
                                        }
                                    >
                                        {cat?.name}
                                    </NavLink>
                                ))}
                                {/* See All Categories link */}
                                <div className="border-t border-slate-200 dark:border-slate-700 mt-1 pt-1">
                                    <NavLink
                                        to="/Categories"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 font-['Manrope'] font-semibold transition-colors duration-200 ${
                                                isActive
                                                    ? 'bg-sky-100 dark:bg-slate-700 text-sky-800 dark:text-sky-200'
                                                    : 'text-sky-700 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700'
                                            }`
                                        }
                                    >
                                        See all categories →
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bulk Order */}
                    <NavLink
                        to="/BulkOrder"
                        className={({ isActive }) =>
                            `font-['Manrope'] font-bold tracking-tight transition-colors duration-300 pb-1 ${
                                isActive
                                    ? 'border-b-2 border-sky-800 dark:border-sky-300 text-sky-800 dark:text-sky-300'
                                    : 'border-b-2 border-transparent text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-200'
                            }`
                        }
                    >
                        Bulk Order
                    </NavLink>

                    {/* About Us */}
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `font-['Manrope'] font-bold tracking-tight transition-colors duration-300 pb-1 ${
                                isActive
                                    ? 'border-b-2 border-sky-800 dark:border-sky-300 text-sky-800 dark:text-sky-300'
                                    : 'border-b-2 border-transparent text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-200'
                            }`
                        }
                    >
                        About Us
                    </NavLink>

                    {/* Contact Us */}
                    <NavLink
                        to="/contactus"
                        className={({ isActive }) =>
                            `font-['Manrope'] font-bold tracking-tight transition-colors duration-300 pb-1 ${
                                isActive
                                    ? 'border-b-2 border-sky-800 dark:border-sky-300 text-sky-800 dark:text-sky-300'
                                    : 'border-b-2 border-transparent text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-200'
                            }`
                        }
                    >
                        Contact Us
                    </NavLink>
                </div>

                <div className="flex items-center space-x-5">
                    <NavLink
                        to="/Cart"
                        className={({ isActive }) =>
                            `relative p-2 rounded-full transition-all ${
                                isActive
                                    ? 'text-sky-800 dark:text-sky-200 bg-slate-100/50 dark:bg-slate-800/50'
                                    : 'text-sky-800 dark:text-sky-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {cartCount > 9 ? '9+' : cartCount}
                            </span>
                        )}
                    </NavLink>
                    <button className="md:hidden p-2 text-sky-800">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}