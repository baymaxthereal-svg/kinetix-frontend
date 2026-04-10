import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
                <Link className="text-2xl font-extrabold text-sky-800 dark:text-sky-300 tracking-tighter font-headline" to="/">Kinetix
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {/* Shop Page Link - Separate */}
                    <Link
                        className="text-sky-800 dark:text-sky-300 border-b-2 border-sky-800 dark:border-sky-300 pb-1 font-['Manrope'] font-bold tracking-tight hover:text-sky-600 dark:hover:text-sky-200 transition-colors duration-300"
                        to="/"
                    >
                        Shop
                    </Link>

                    {/* Categories with Dropdown */}
                    <div className="relative">
                        <Link
                            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                            onMouseEnter={() => setIsCategoriesOpen(true)}
                            onMouseLeave={() => setIsCategoriesOpen(false)}
                            to="/Categories"
                            className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-200 font-['Manrope'] font-bold tracking-tight transition-colors duration-300"
                        >
                            Categories
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        {/* Dropdown Menu */}
                        {isCategoriesOpen && (
                            <div
                                onMouseEnter={() => setIsCategoriesOpen(true)}
                                onMouseLeave={() => setIsCategoriesOpen(false)}
                                className="absolute left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-2 z-50 animate-fadeIn"
                            >
                                <Link
                                    to="/Categories"
                                    className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700 font-['Manrope'] transition-colors duration-200"
                                >
                                    Sensory Room
                                </Link>
                                <Link
                                    to="/Categories"
                                    className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700 font-['Manrope'] transition-colors duration-200"
                                >
                                    Rehab
                                </Link>

                                {/* See All Categories - Bottom option with top border */}
                                <div className="border-t border-slate-200 dark:border-slate-700 mt-1 pt-1">
                                    <Link
                                        href="/categories"
                                        className="block px-4 py-2 text-sky-700 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 font-['Manrope'] font-semibold transition-colors duration-200"
                                    >
                                        See all categories →
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <a
                        className="text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-200 font-['Manrope'] font-bold tracking-tight transition-colors duration-300"
                        href="/bulk-order"
                    >
                        <Link to="/BulkOrder">
                            Bulk Order
                        </Link>
                    </a>
                     <a
                        className="text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-200 font-['Manrope'] font-bold tracking-tight transition-colors duration-300"
                        href="/bulk-order"
                    >
                        <Link to="/about">
                            About Us
                        </Link>
                    </a>
                </div>
                <div className="flex items-center space-x-5">
                    <Link
                        to="/Cart"
                        className="p-2 text-sky-800 dark:text-sky-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-full transition-all"
                    >
                        <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                    </Link>
                    <button className="md:hidden p-2 text-sky-800">
                        <span className="material-symbols-outlined" data-icon="menu">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}