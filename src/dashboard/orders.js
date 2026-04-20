import { Link } from "react-router-dom";

export default function Orders() {
    return (
        <main class="p-8 space-y-8">

            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div
                    class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-0 relative overflow-hidden group">
                    <div
                        class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-110">
                    </div>
                    <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total
                            Orders</span>
                        <span class="text-3xl font-extrabold text-on-surface">1,284</span>
                        <div class="mt-4 flex items-center gap-1 text-secondary text-xs font-semibold">
                            <span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                            <span>12% from last month</span>
                        </div>
                    </div>
                </div>

                <div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-0">
                    <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Pending
                            Fulfillment</span>
                        <span class="text-3xl font-extrabold text-on-surface">42</span>
                        <div class="mt-4 flex items-center gap-2">
                            <div class="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                                <div class="bg-tertiary h-full w-[65%]"></div>
                            </div>
                            <span class="text-[10px] font-bold text-on-surface-variant">65%</span>
                        </div>
                    </div>
                </div>

                <div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-0">
                    <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Completed
                            Orders</span>
                        <span class="text-3xl font-extrabold text-on-surface">1,198</span>
                        <div class="mt-4 flex items-center gap-1 text-secondary text-xs font-semibold">
                            <span class="material-symbols-outlined text-xs" data-icon="check_circle">check_circle</span>
                            <span>High efficiency</span>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-0 bg-gradient-to-br from-primary to-primary-container">
                    <div class="flex flex-col gap-1">
                        <span class="text-xs font-bold text-on-primary/70 uppercase tracking-widest">Total
                            Revenue</span>
                        <span class="text-3xl font-extrabold text-on-primary">$142,500</span>
                        <div class="mt-4 flex items-center gap-1 text-on-primary/90 text-xs font-semibold">
                            <span class="material-symbols-outlined text-xs" data-icon="payments">payments</span>
                            <span>Q3 Fiscal Period</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div class="relative w-full md:w-96 group">
                    <span
                        class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors"
                        data-icon="search">search</span>
                    <input
                        class="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-bright transition-all text-sm"
                        placeholder="Search orders, clinics, or IDs..." type="text" />
                </div>
                <div class="flex items-center gap-3 w-full md:w-auto">
                    <button
                        class="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-surface-container-high text-on-surface font-semibold text-sm rounded-xl hover:bg-surface-variant transition-colors">
                        <span class="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
                        Filter
                    </button>
                    <button
                        class="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-surface-container-high text-on-surface font-semibold text-sm rounded-xl hover:bg-surface-variant transition-colors">
                        <span class="material-symbols-outlined text-lg" data-icon="download">download</span>
                        Export
                    </button>
                </div>
            </section>

            <section class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border-0">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-surface-container-low">
                                <th
                                    class="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                                    Order ID</th>
                                <th
                                    class="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                                    Date</th>
                                <th
                                    class="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                                    Customer Name</th>
                                <th
                                    class="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                                    Items</th>
                                <th
                                    class="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                                    Total Amount</th>
                                <th
                                    class="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                                    Status</th>
                                <th
                                    class="px-6 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-right">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-surface-variant/20">

                            <tr class="hover:bg-surface-bright transition-colors group">
                                <td class="px-6 py-5 font-mono text-sm text-primary font-bold">#ORD-2024-001</td>
                                <td class="px-6 py-5 text-sm text-on-surface-variant">Oct 12, 2023</td>
                                <td class="px-6 py-5">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold text-xs">
                                            SM</div>
                                        <div>
                                            <p class="text-sm font-semibold text-on-surface">St. Mary's Rehab</p>
                                            <p class="text-[10px] text-on-surface-variant uppercase">Clinic</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-5 text-sm">5 units</td>
                                <td class="px-6 py-5 text-sm font-bold text-on-surface">$1,450.00</td>
                                <td class="px-6 py-5">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-tight">
                                        <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        Paid
                                    </span>
                                </td>
                                <td class="px-6 py-5 text-right">
                                    <Link
                                        to="/dashboard/OrdersDetails"
                                        class="text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4">View
                                        Details</Link>
                                </td>
                            </tr>

                            <tr class="hover:bg-surface-bright transition-colors group">
                                <td class="px-6 py-5 font-mono text-sm text-primary font-bold">#ORD-2024-002</td>
                                <td class="px-6 py-5 text-sm text-on-surface-variant">Oct 14, 2023</td>
                                <td class="px-6 py-5">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs">
                                            EJ</div>
                                        <div>
                                            <p class="text-sm font-semibold text-on-surface">Emma Johnson</p>
                                            <p class="text-[10px] text-on-surface-variant uppercase">Individual</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-5 text-sm">2 units</td>
                                <td class="px-6 py-5 text-sm font-bold text-on-surface">$425.50</td>
                                <td class="px-6 py-5">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-bold uppercase tracking-tight">
                                        <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                        Processing
                                    </span>
                                </td>
                                <td class="px-6 py-5 text-right">
                                    <button
                                        class="text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4">View
                                        Details</button>
                                </td>
                            </tr>

                            <tr class="hover:bg-surface-bright transition-colors group">
                                <td class="px-6 py-5 font-mono text-sm text-primary font-bold">#ORD-2024-003</td>
                                <td class="px-6 py-5 text-sm text-on-surface-variant">Oct 15, 2023</td>
                                <td class="px-6 py-5">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold text-xs">
                                            BP</div>
                                        <div>
                                            <p class="text-sm font-semibold text-on-surface">Bright Path Therapy</p>
                                            <p class="text-[10px] text-on-surface-variant uppercase">Clinic</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-5 text-sm">12 units</td>
                                <td class="px-6 py-5 text-sm font-bold text-on-surface">$4,120.00</td>
                                <td class="px-6 py-5">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-tight">
                                        <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                        Shipped
                                    </span>
                                </td>
                                <td class="px-6 py-5 text-right">
                                    <button
                                        class="text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4">View
                                        Details</button>
                                </td>
                            </tr>

                            <tr class="hover:bg-surface-bright transition-colors group">
                                <td class="px-6 py-5 font-mono text-sm text-primary font-bold">#ORD-2024-004</td>
                                <td class="px-6 py-5 text-sm text-on-surface-variant">Oct 16, 2023</td>
                                <td class="px-6 py-5">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold text-xs">
                                            LH</div>
                                        <div>
                                            <p class="text-sm font-semibold text-on-surface">Liberty Health</p>
                                            <p class="text-[10px] text-on-surface-variant uppercase">Clinic</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-5 text-sm">1 unit</td>
                                <td class="px-6 py-5 text-sm font-bold text-on-surface">$120.00</td>
                                <td class="px-6 py-5">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] font-bold uppercase tracking-tight">
                                        <span class="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span>
                                        Pending
                                    </span>
                                </td>
                                <td class="px-6 py-5 text-right">
                                    <button
                                        class="text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4">View
                                        Details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div
                    class="px-6 py-4 flex items-center justify-between border-t border-surface-variant/20 bg-surface-container-lowest">
                    <span class="text-xs text-on-surface-variant">Showing 1-4 of 1,284 orders</span>
                    <div class="flex items-center gap-2">
                        <button class="p-2 rounded-lg hover:bg-surface-container-high disabled:opacity-30" disabled="">
                            <span class="material-symbols-outlined text-lg" data-icon="chevron_left">chevron_left</span>
                        </button>
                        <button class="w-8 h-8 rounded-lg bg-primary text-on-primary text-xs font-bold">1</button>
                        <button class="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold">2</button>
                        <button class="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold">3</button>
                        <span class="px-2 text-on-surface-variant">...</span>
                        <button class="p-2 rounded-lg hover:bg-surface-container-high">
                            <span class="material-symbols-outlined text-lg"
                                data-icon="chevron_right">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>
            <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div
                    class="lg:col-span-2 bg-secondary-fixed/30 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                    <div class="z-10 flex-1">
                        <span class="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">Clinician
                            Insight</span>
                        <h3 class="text-2xl font-extrabold text-on-surface mb-4 leading-tight">Optimizing Sensory
                            Equipment Fulfillment</h3>
                        <p class="text-on-surface-variant text-sm mb-6 leading-relaxed">Recent data suggests that
                            clinics ordering tactile sensory tools during Q3 see a 15% increase in patient engagement
                            metrics. Explore our latest therapeutic inventory.</p>
                        <button
                            class="bg-secondary text-on-secondary px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all">View
                            Inventory Report</button>
                    </div>
                    <div class="w-48 h-48 md:w-64 md:h-48 rounded-2xl overflow-hidden shadow-xl rotate-3 flex-shrink-0">
                        <img alt="Therapeutic sensory equipment" class="w-full h-full object-cover"
                            data-alt="Collection of colorful tactile sensory therapy tools and textures for pediatric physiotherapy in a soft lit studio setting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrFIJ1v5XPPqsTs1GeBmy7DXvwve9m-DPEIlFhP8aR2xG1-D6uaAVVE-Vr31HL1tRnpQJUrQsMsfHDT1sEfkJBeilpmFAH0FaU0jsYQXChvOXED0jDlOFL82nW0qdx1MUF-CO6H7Qf9537FdsbBBOKiieqHZ8HdEqYvgRGHJl4bnWFq3vR0GqI4twUyLj5vZUazaF24DnRQiwQY-PuKe2D1OWxn_SA2J8NVgERgoNs-TtJgon03m9q3s51lOI9S6Rhjls6JXe7JtQ" />
                    </div>
                    <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                </div>
                <div class="bg-surface-container-high p-8 rounded-2xl flex flex-col justify-center border-0">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
                            <span class="material-symbols-outlined text-tertiary" data-icon="bolt">bolt</span>
                        </div>
                        <h4 class="font-bold text-on-surface">Quick Actions</h4>
                    </div>
                    <div class="space-y-3">
                        <button
                            class="w-full text-left px-4 py-3 bg-surface-container-lowest hover:translate-x-1 transition-transform rounded-xl text-sm font-medium text-on-surface shadow-sm">Bulk
                            Status Update</button>
                        <button
                            class="w-full text-left px-4 py-3 bg-surface-container-lowest hover:translate-x-1 transition-transform rounded-xl text-sm font-medium text-on-surface shadow-sm">Print
                            Shipping Labels</button>
                        <button
                            class="w-full text-left px-4 py-3 bg-surface-container-lowest hover:translate-x-1 transition-transform rounded-xl text-sm font-medium text-on-surface shadow-sm text-error">Cancel
                            Selected Orders</button>
                    </div>
                </div>
            </section>
        </main>
    )
}