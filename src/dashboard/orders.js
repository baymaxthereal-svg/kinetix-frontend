import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useGetTotalOrdersDetails } from "../backend/hooks";

export default function Orders() {
    const { data: ordersData, isLoading, error } = useGetTotalOrdersDetails();
    const [searchTerm, setSearchTerm] = useState("");

    // Compute items count and total amount per order
    const processedOrders = useMemo(() => {
        if (!ordersData) return [];
        return ordersData.map(order => {
            let itemsArray = order.items || [];
            if (itemsArray.length === 0 && order.items_json) {
                try {
                    itemsArray = JSON.parse(order.items_json);
                } catch (e) {
                    itemsArray = [];
                }
            }
            const totalItems = itemsArray.reduce((sum, item) => sum + (item.quantity || 0), 0);
            const totalAmount = itemsArray.reduce((sum, item) => sum + (item.quantity || 0) * (item.unit_price || 0), 0);
            return { ...order, totalItems, totalAmount, itemsArray };
        });
    }, [ordersData]);

    // Filter orders by search term
    const filteredOrders = useMemo(() => {
        if (!searchTerm.trim()) return processedOrders;
        const term = searchTerm.toLowerCase();
        return processedOrders.filter(order =>
            order.name?.toLowerCase().includes(term) ||
            order.id?.toString().includes(term) ||
            order.phone?.includes(term) ||
            order.city?.toLowerCase().includes(term)
        );
    }, [processedOrders, searchTerm]);

    const formatDate = (dateStr) => {
        if (!dateStr) return "N/A";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    };

    const getInitials = (name) => {
        return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
    };

    const OrderStatus = ({ isComplete }) => {
        if (isComplete) {
            return (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-tight whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Completed
                </span>
            );
        }
        return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-bold uppercase tracking-tight whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                Pending
            </span>
        );
    };

    if (isLoading) {
        return (
            <main className="p-8 space-y-8">
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="p-8 space-y-8">
                <div className="bg-error/10 text-error p-4 rounded-xl text-center">
                    Failed to load orders. Please try again later.
                </div>
            </main>
        );
    }

    return (
        <main className="p-8 space-y-8">
            {/* Search Bar */}
            <section className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96 group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                        search
                    </span>
                    <input
                        className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-bright transition-all text-sm"
                        placeholder="Search orders, names, phone, or city..."
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </section>

            {/* Orders Table – improved column widths for small screens */}
            <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low">
                                <th className="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest min-w-[100px]">Order ID</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest min-w-[110px]">Date</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest min-w-[180px]">Customer Name</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest min-w-[80px]">Items</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest min-w-[120px]">Total Amount</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest min-w-[110px]">Status</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-right min-w-[100px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-variant/20">
                            {filteredOrders.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="px-6 py-12 text-center text-on-surface-variant">
                                        No orders found.
                                    </td>
                                </tr>
                            ) : (
                                filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-surface-bright transition-colors group">
                                        <td className="px-6 py-5 font-mono text-sm text-primary font-bold whitespace-nowrap">#{order.id}</td>
                                        <td className="px-6 py-5 text-sm text-on-surface-variant whitespace-nowrap">{formatDate(order.created_at)}</td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3 min-w-[160px]">
                                                <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold text-xs flex-shrink-0">
                                                    {getInitials(order.name)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-on-surface break-words">{order.name}</p>
                                                    <p className="text-[10px] text-on-surface-variant uppercase">{order.city}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm whitespace-nowrap">{order.totalItems} unit{order.totalItems !== 1 ? 's' : ''}</td>
                                        <td className="px-6 py-5 text-sm font-bold text-on-surface whitespace-nowrap">${order.totalAmount.toFixed(2)}</td>
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <OrderStatus isComplete={order.order_complete === 1} />
                                        </td>
                                        <td className="px-6 py-5 text-right whitespace-nowrap">
                                            <Link
                                                to={`/dashboard/OrdersDetails/${order.id}`}
                                                className="text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4"
                                            >
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}