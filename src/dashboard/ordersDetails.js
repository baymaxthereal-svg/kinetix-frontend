import { useParams } from "react-router-dom";
import { useGetOrdersDetails } from "../backend/hooks";

export default function OrderDetails() {
    const { id } = useParams();
    const { data: order, isLoading, error } = useGetOrdersDetails(id);

    // Helper: format date
    const formatDate = (dateStr) => {
        if (!dateStr) return "N/A";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // Helper: compute total amount from items
    const getOrderTotal = (items) => {
        if (!items || !items.length) return 0;
        return items.reduce((sum, item) => sum + (item.quantity || 0) * (item.unit_price || 0), 0);
    };

    // Helper: extract items array (could be items or items_json)
    const getItemsArray = (orderData) => {
        if (orderData.items && orderData.items.length) return orderData.items;
        if (orderData.items_json) {
            try {
                return JSON.parse(orderData.items_json);
            } catch (e) {
                return [];
            }
        }
        return [];
    };

    if (isLoading) {
        return (
            <main className="min-h-screen bg-surface p-8">
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            </main>
        );
    }

    if (error || !order) {
        return (
            <main className="min-h-screen bg-surface p-8">
                <div className="bg-error/10 text-error p-4 rounded-xl text-center">
                    Failed to load order details. Please try again later.
                </div>
            </main>
        );
    }

    const items = getItemsArray(order);
    const totalAmount = getOrderTotal(items);
    const paidAmount = totalAmount * 0.5; // 50% advance required
    const balanceDue = totalAmount - paidAmount;

    // Determine order status
    const isComplete = order.order_complete === 1;
    const statusDisplay = isComplete
        ? { label: "Completed", color: "bg-green-100 text-green-800", dot: "bg-green-500" }
        : { label: "Pending", color: "bg-amber-100 text-amber-800", dot: "bg-amber-500" };

    // Payment screenshot URL (adjust path as needed)
    const paymentScreenshotUrl = order.payment_screen_short
        ? `${process.env.REACT_APP_BE_URL}/${order.payment_screen_short.replace(/\\/g, '/')}`
        : null;

    // Check if file is an image (by extension)
    const isImage = (url) => {
        if (!url) return false;
        const ext = url.split('.').pop().toLowerCase();
        return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext);
    };

    return (
        <main className="min-h-screen bg-surface">
            <div className="max-w-7xl mx-auto space-y-8 p-4 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-8 rounded-2xl shadow-sm border-none">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full">
                                Order Details
                            </span>
                            <span className="text-slate-400 font-medium">•</span>
                            <span className="text-sm text-slate-500 font-medium">
                                {formatDate(order.created_at)}
                            </span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-sky-900 tracking-tight">
                            #{order.id}
                        </h1>
                        <div className="flex items-center gap-2">
                            <span className={`flex items-center gap-1.5 px-3 py-1 ${statusDisplay.color} rounded-lg text-xs font-bold`}>
                                <span className={`w-2 h-2 rounded-full ${statusDisplay.dot}`}></span>
                                {statusDisplay.label}
                            </span>
                            <span className="text-sm text-slate-400">Updated {formatDate(order.created_at)}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                            <span className="material-symbols-outlined text-lg">edit</span>
                            Edit Status
                        </button>
                    </div>
                </div>

                {/* Three column info cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Customer Details */}
                    <div className="bg-white p-6 rounded-2xl space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <span className="material-symbols-outlined">person</span>
                            <h3 className="font-bold text-slate-900">Customer Details</h3>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Primary Contact</p>
                                <p className="text-sm font-semibold text-slate-900">{order.name}</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Phone</p>
                                    <p className="text-xs font-medium text-slate-900">{order.phone}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Shipping Address</p>
                                <p className="text-xs leading-relaxed text-slate-600">
                                    {order.address}<br />
                                    {order.city}, {order.postal_code || ""}<br />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Status */}
                    <div className="bg-white p-6 rounded-2xl space-y-4">
                        <div className="flex items-center gap-3 text-tertiary">
                            <span className="material-symbols-outlined">payments</span>
                            <h3 className="font-bold text-slate-900">Payment Status</h3>
                        </div>
                        <div className="bg-tertiary-fixed p-3 rounded-xl border border-tertiary/10">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-[10px] font-bold text-on-tertiary-fixed uppercase">Payment Progress</p>
                                <p className="text-[10px] font-bold text-on-tertiary-fixed">50%</p>
                            </div>
                            <div className="w-full bg-white/50 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-tertiary h-full w-1/2"></div>
                            </div>
                            <p className="mt-2 text-xs font-bold text-on-tertiary-fixed-variant">
                                50% Advance Payment Received
                            </p>
                        </div>
                        <div className="space-y-3 pt-2">
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-slate-500 font-medium">Method</p>
                                <p className="text-xs font-bold text-slate-900">JazzCash / Bank Transfer</p>
                            </div>
                            {paymentScreenshotUrl && isImage(paymentScreenshotUrl) && (
                                <a
                                    href={paymentScreenshotUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-between items-center p-2 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">image</span>
                                        <span className="text-[10px] font-bold text-slate-600">Payment Screenshot</span>
                                    </div>
                                    <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
                                </a>
                            )}
                            {paymentScreenshotUrl && !isImage(paymentScreenshotUrl) && (
                                <a
                                    href={paymentScreenshotUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-between items-center p-2 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">picture_as_pdf</span>
                                        <span className="text-[10px] font-bold text-slate-600">Payment Screenshot (PDF)</span>
                                    </div>
                                    <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
                                </a>
                            )}
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="p-3 bg-slate-50 rounded-xl">
                                    <p className="text-[10px] text-slate-400 font-bold">TOTAL</p>
                                    <p className="text-sm font-extrabold text-slate-900">${totalAmount.toFixed(2)}</p>
                                </div>
                                <div className="p-3 bg-secondary-fixed/30 rounded-xl">
                                    <p className="text-[10px] text-secondary font-bold">PAID</p>
                                    <p className="text-sm font-extrabold text-secondary">${paidAmount.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Details */}
                    <div className="bg-white p-6 rounded-2xl space-y-4">
                        <div className="flex items-center gap-3 text-secondary">
                            <span className="material-symbols-outlined">location_on</span>
                            <h3 className="font-bold text-slate-900">Shipping Address</h3>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Full Address</p>
                                <p className="text-sm leading-relaxed text-slate-700 mt-1">
                                    {order.address}<br />
                                    {order.city}, {order.postal_code ? order.postal_code : ""}<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Items Table */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border-none">
                    <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">Order Items ({items.length})</h3>
                        <span className="text-xs text-slate-400 font-medium">Managed by Warehouse A</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Unit Price</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Qty</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {items.map((item, idx) => {
                                    const itemTotal = (item.quantity || 0) * (item.unit_price || 0);
                                    return (
                                        <tr key={idx} className="group hover:bg-slate-50/30 transition-colors">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900">{item.product_name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-sm font-semibold text-slate-900">
                                                ${(Number(item.unit_price) || 0).toFixed(2)}
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-bold text-slate-700">
                                                    {item.quantity || 0}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-sm font-bold text-slate-900 text-right">
                                                ${itemTotal.toFixed(2)}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Totals section */}
                    <div className="p-8 bg-slate-50/50 flex flex-col md:flex-row justify-between gap-8 border-t border-slate-100">
                        <div className="max-w-xs text-xs text-slate-400 font-medium leading-relaxed italic">
                            All items are checked for clinical safety standards and sanitized prior to shipping. Please review the
                            return policy for sensory hygiene products.
                        </div>
                        <div className="w-full md:w-80 space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500 font-medium">Subtotal</span>
                                <span className="text-slate-900 font-semibold">${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500 font-medium">Shipping (Insured)</span>
                                <span className="text-slate-900 font-semibold">$0.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500 font-medium">Applied Tax (Exempt)</span>
                                <span className="text-slate-900 font-semibold">$0.00</span>
                            </div>
                            <div className="pt-4 border-t border-slate-200">
                                <div className="flex justify-between items-center">
                                    <span className="font-extrabold text-lg text-slate-900">Grand Total</span>
                                    <span className="font-extrabold text-2xl text-primary">${totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="mt-2 text-right">
                                    <span className="text-[10px] font-bold text-secondary-container bg-secondary px-2 py-0.5 rounded-full uppercase tracking-widest">
                                        Balance Due: ${balanceDue.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer meta */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] px-4">
                    <span>Tactile Empathy ERP System</span>
                    <div className="flex gap-4">
                        <span>Generated: {new Date().toLocaleString()}</span>
                        <span>Order ID: {order.id}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}