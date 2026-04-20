import { Link } from "react-router-dom";

export default function InventoryProduct() {
    return (
        <main className="min-h-screen py-2 px-2">
            <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2 block">
                        Tactile Inventory
                    </span>
                    <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">
                        Product Management
                    </h2>
                </div>
                <Link
                    to="/dashboard/add-product"
                    className="inline-flex items-center px-6 py-3 bg-primary text-on-primary rounded-xl font-bold transition-transform active:scale-95 duration-200"
                >
                    <span className="material-symbols-outlined mr-2">add_circle</span>
                    Add New Product
                </Link>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-surface-container-lowest p-6 rounded-2xl transition-all hover:bg-white flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center">
                        <span
                            className="material-symbols-outlined text-primary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            inventory_2
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-on-surface-variant">Total Products</p>
                        <p className="text-2xl font-bold text-on-surface">1,284</p>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl transition-all hover:bg-white flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-tertiary-fixed/40 flex items-center justify-center">
                        <span
                            className="material-symbols-outlined text-tertiary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            warning
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-on-surface-variant">Low Stock Items</p>
                        <p className="text-2xl font-bold text-on-surface">12</p>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl transition-all hover:bg-white flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-error-container/50 flex items-center justify-center">
                        <span
                            className="material-symbols-outlined text-error"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            error
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-on-surface-variant">Out of Stock</p>
                        <p className="text-2xl font-bold text-on-surface">3</p>
                    </div>
                </div>
            </section>

            <div className="bg-surface-container-low p-1 rounded-3xl">
                <div className="bg-surface-container-lowest rounded-[1.25rem] overflow-hidden">
                    <div className="px-6 py-5 flex flex-wrap items-center justify-between gap-4">
                        <div className="relative w-full max-w-md">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                                search
                            </span>
                            <input
                                className="w-full pl-12 pr-4 py-2.5 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-outline"
                                placeholder="Search by name, SKU or category..."
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container-high rounded-xl transition-colors">
                                <span className="material-symbols-outlined mr-2 text-lg">filter_list</span>
                                Filters
                            </button>
                            <button className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container-high rounded-xl transition-colors">
                                <span className="material-symbols-outlined mr-2 text-lg">file_download</span>
                                Export
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-low text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4">SKU</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Stock Level</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-container-high">
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    alt="weighted sensory compression vest in dark blue fabric displayed on a minimalist white background"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6umM2Osbo8w_wLOXK-KgQtn7QLHGDaPdjod_xCC0AzQkzW0aZHgDBJ6wL6u6BnncEzVrhi1oYql8aZYwMvryRyFWyka455kGvqzn5RcrTD-JAasQKOuBnHcw6G0j73Pf6vGL4e74vllaKv139_Zp6nkm09zX-VGXYdexYRU5yk8Cg5AOjd-8Ss_PgUMhhT069gzdmKKKaw9xhTssTIuHXHYwFD4jlhw_YAzW47HeuLukTo13P7RjSlFeagH_hUFPlRAaNLeXKjnc"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-on-surface">Weighted Sensory Compression Vest</p>
                                                <p className="text-xs text-on-surface-variant">Calming Wearables</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-mono text-outline">TE-SV-2024</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold rounded-full">
                                            Sensory
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center justify-between text-[10px] font-bold text-on-surface-variant">
                                                <span>45 Units</span>
                                                <span>Good</span>
                                            </div>
                                            <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                                <div className="h-full bg-secondary w-3/4 rounded-full"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-on-surface">$129.00</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                            Active
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-outline hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    alt="professional 2 meter sensory bubble tube with multi-color led lights and floating plastic fish in a studio setting"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiBky7LBTT7tOIyiykEguOP6K2tDxFs1vDSsWluGJQC4OG2ybbX2xvoenhyqXd0ciyB4JcU2cKDcg4JUq9k7dpG88hvAvqZwKABY_X5QsEHmkA_uFnCcwYDW9zvfwTyA3u8xfy51n64ewkf0q8Mh_0JtBsc4TMFovDIbUt4VctoyTNH7w1qKy6O5t2k1EzoftXtOKm9S67JXVoFAkLPXhy4xPYOiQY4kY94nzpmpojOrMbpR3XpYLigIa2M_HUn3_xGmlDfE-7FMA"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-on-surface">Bubble Tube 2m</p>
                                                <p className="text-xs text-on-surface-variant">Visual Equipment</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-mono text-outline">TE-BT-0912</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold rounded-full">
                                            Visual
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center justify-between text-[10px] font-bold text-tertiary">
                                                <span>4 Units</span>
                                                <span>Low</span>
                                            </div>
                                            <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                                <div className="h-full bg-tertiary w-1/5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-on-surface">$895.00</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                            Active
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-outline hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    alt="bright blue textured stability ball for physical therapy on a clean gym floor with soft natural lighting"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAx8X8pfQfANPq8lzMcq5m6PyaxO3ze-KVY8XWmGfyikfNoYwXWOkupfzLpP0tEgmOQLyiQ_NWOrE9VhTSMnkOVwu4KO8sbiPUx_0O839zswNvmSy7A_1JKksXro6BCz1kKTgyLHJOKcsmNEYIGpiIZdHzK75uE6AHH124OTLoxkbFFRCMIuzxOXN3bzZ21SSA2ZsxMVlo7xCzWq3tUwzuoAJvjDpq7iDmku8M2atYYR5LLS_7ttXI-TefX5F5svAopBxsVFKWMjA"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-on-surface">Stability Ball</p>
                                                <p className="text-xs text-on-surface-variant">Motor Skills</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-mono text-outline">TE-SB-4421</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold rounded-full">
                                            Rehab
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center justify-between text-[10px] font-bold text-error">
                                                <span>0 Units</span>
                                                <span>Stockout</span>
                                            </div>
                                            <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                                <div className="h-full bg-error w-0 rounded-full"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-on-surface">$45.00</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm font-medium text-outline">
                                            <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                                            Inactive
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-outline hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="px-6 py-4 bg-surface-container-low/30 flex items-center justify-between border-t border-surface-container-high">
                        <p className="text-sm text-on-surface-variant">Showing 1 to 3 of 1,284 results</p>
                        <div className="flex items-center gap-2">
                            <button
                                className="p-2 rounded-lg hover:bg-surface-container-highest transition-colors disabled:opacity-30"
                                disabled
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="w-8 h-8 rounded-lg bg-primary text-on-primary text-sm font-bold">1</button>
                            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-sm font-medium transition-colors">2</button>
                            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-sm font-medium transition-colors">3</button>
                            <button className="p-2 rounded-lg hover:bg-surface-container-highest transition-colors">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}