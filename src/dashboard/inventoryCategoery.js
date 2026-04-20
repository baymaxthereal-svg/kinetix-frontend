import { Link } from "react-router-dom";

export default function InventoryCategory() {
    return (
        <section class=" py-3 px-3 flex-1">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <span
                        class="label-md uppercase tracking-widest text-on-surface-variant font-semibold text-xs mb-2 block">Organization
                        System</span>
                    <h2 class="text-4xl font-extrabold text-on-surface tracking-tight leading-tight">Category Management
                    </h2>
                    <p class="text-on-surface-variant/70 mt-2 max-w-xl font-body">Define and organize clinical equipment
                        categories for efficient tracking and allocation across physiotherapy units.</p>
                </div>
                <div>
                    <Link
                        to="/dashboard/add-category"
                        class="bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                        <span class="material-symbols-outlined text-xl">add</span>
                        Add New Category
                    </Link>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">

                <div
                    class="md:col-span-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm border-l-4 border-primary">
                    <p class="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Total Categories
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-4xl font-black text-on-surface">24</span>
                        <div
                            class="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined" data-icon="category">category</span>
                        </div>
                    </div>
                    <p class="text-xs text-secondary font-medium mt-4 flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">trending_up</span>
                        2 new this month
                    </p>
                </div>

                <div class="md:col-span-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm">
                    <p class="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Active Items</p>
                    <div class="flex items-center justify-between">
                        <span class="text-4xl font-black text-on-surface">1,284</span>
                        <div
                            class="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                            <span class="material-symbols-outlined" data-icon="inventory">inventory</span>
                        </div>
                    </div>
                    <p class="text-xs text-on-surface-variant/60 font-medium mt-4">Across all active categories</p>
                </div>

                <div
                    class="md:col-span-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden relative group">
                    <div class="relative z-10">
                        <p class="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Utilization
                            Rate</p>
                        <div class="flex items-center justify-between">
                            <span class="text-4xl font-black text-on-surface">92%</span>
                            <div
                                class="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                                <span class="material-symbols-outlined" data-icon="analytics">analytics</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent">
                    </div>
                </div>

                <div class="md:col-span-12 glass-card rounded-xl shadow-sm overflow-hidden">
                    <div
                        class="px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-low/30 border-b border-outline-variant/15">
                        <div>
                            <h3 class="text-lg font-bold text-on-surface">All Categories</h3>
                            <p class="text-sm text-on-surface-variant/60">Manage equipment classifications and
                                visibility</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <button
                                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors">
                                <span class="material-symbols-outlined text-lg">filter_list</span>
                                Filter
                            </button>
                            <button
                                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors">
                                <span class="material-symbols-outlined text-lg">download</span>
                                Export
                            </button>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-surface-container-lowest">
                                    <th
                                        class="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                                        Category Name</th>
                                    <th
                                        class="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                                        Description</th>
                                    <th
                                        class="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                                        Number of Products</th>
                                    <th
                                        class="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                                        Status</th>
                                    <th
                                        class="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant/10">

                                <tr class="hover:bg-primary-fixed/10 transition-colors group">
                                    <td class="px-8 py-5">
                                        <div class="flex items-center gap-4">
                                            <div
                                                class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                                                <span class="material-symbols-outlined">fitness_center</span>
                                            </div>
                                            <span class="font-bold text-on-surface">Sensory Integration</span>
                                        </div>
                                    </td>
                                    <td class="px-8 py-5">
                                        <p class="text-sm text-on-surface-variant max-w-xs line-clamp-1">Tactile boards,
                                            weighted vests, and calming tools.</p>
                                    </td>
                                    <td class="px-8 py-5">
                                        <div class="flex items-center gap-2">
                                            <span class="text-sm font-semibold text-on-surface">142</span>
                                            <span
                                                class="text-[10px] text-secondary bg-secondary-fixed/30 px-1.5 rounded-sm">+4</span>
                                        </div>
                                    </td>
                                    <td class="px-8 py-5">
                                        <span
                                            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-secondary-fixed text-on-secondary-fixed">
                                            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            Active
                                        </span>
                                    </td>
                                    <td class="px-8 py-5 text-right">
                                        <button class="text-slate-400 hover:text-primary transition-colors">
                                            <span class="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>

                                <tr class="hover:bg-primary-fixed/10 transition-colors group">
                                    <td class="px-8 py-5">
                                        <div class="flex items-center gap-4">
                                            <div
                                                class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                                                <span
                                                    class="material-symbols-outlined">airline_seat_recline_extra</span>
                                            </div>
                                            <span class="font-bold text-on-surface">Mobility &amp; Seating</span>
                                        </div>
                                    </td>
                                    <td class="px-8 py-5">
                                        <p class="text-sm text-on-surface-variant max-w-xs line-clamp-1">Custom
                                            wheelchairs and ergonomic support cushions.</p>
                                    </td>
                                    <td class="px-8 py-5">
                                        <span class="text-sm font-semibold text-on-surface">86</span>
                                    </td>
                                    <td class="px-8 py-5">
                                        <span
                                            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-secondary-fixed text-on-secondary-fixed">
                                            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            Active
                                        </span>
                                    </td>
                                    <td class="px-8 py-5 text-right">
                                        <button class="text-slate-400 hover:text-primary transition-colors">
                                            <span class="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>

                                <tr class="hover:bg-primary-fixed/10 transition-colors group">
                                    <td class="px-8 py-5">
                                        <div class="flex items-center gap-4">
                                            <div
                                                class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                                                <span class="material-symbols-outlined">electric_bolt</span>
                                            </div>
                                            <span class="font-bold text-on-surface">Electrotherapy</span>
                                        </div>
                                    </td>
                                    <td class="px-8 py-5">
                                        <p class="text-sm text-on-surface-variant max-w-xs line-clamp-1">TENS units,
                                            ultrasound, and muscle stimulators.</p>
                                    </td>
                                    <td class="px-8 py-5">
                                        <span class="text-sm font-semibold text-on-surface">34</span>
                                    </td>
                                    <td class="px-8 py-5">
                                        <span
                                            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-surface-container-highest text-on-surface-variant">
                                            <span class="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                            Inactive
                                        </span>
                                    </td>
                                    <td class="px-8 py-5 text-right">
                                        <button class="text-slate-400 hover:text-primary transition-colors">
                                            <span class="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>

                                <tr class="hover:bg-primary-fixed/10 transition-colors group">
                                    <td class="px-8 py-5">
                                        <div class="flex items-center gap-4">
                                            <div
                                                class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                                                <span class="material-symbols-outlined">pool</span>
                                            </div>
                                            <span class="font-bold text-on-surface">Aquatic Therapy</span>
                                        </div>
                                    </td>
                                    <td class="px-8 py-5">
                                        <p class="text-sm text-on-surface-variant max-w-xs line-clamp-1">Water weights,
                                            flotation devices, and subaquatic mats.</p>
                                    </td>
                                    <td class="px-8 py-5">
                                        <span class="text-sm font-semibold text-on-surface">58</span>
                                    </td>
                                    <td class="px-8 py-5">
                                        <span
                                            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-secondary-fixed text-on-secondary-fixed">
                                            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            Active
                                        </span>
                                    </td>
                                    <td class="px-8 py-5 text-right">
                                        <button class="text-slate-400 hover:text-primary transition-colors">
                                            <span class="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div
                        class="px-8 py-5 bg-surface-container-lowest border-t border-outline-variant/10 flex items-center justify-between">
                        <span class="text-xs text-on-surface-variant font-medium">Showing 4 of 24 categories</span>
                        <div class="flex gap-2">
                            <button
                                class="p-2 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30"
                                disabled="">
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button
                                class="p-2 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    class="md:col-span-12 p-8 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                    <div class="relative z-10 md:w-2/3">
                        <h4 class="text-2xl font-bold mb-2">Need help organizing your inventory?</h4>
                        <p class="text-on-primary/80 mb-6 font-body leading-relaxed">Our clinical taxonomy guide helps
                            you categorize therapeutic equipment according to the latest healthcare standards and
                            sensory processing research.</p>
                        <button
                            class="bg-surface-container-lowest text-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-on-primary-container transition-colors">
                            Download Taxonomy Guide
                        </button>
                    </div>
                    <div class="md:w-1/3 relative h-40 w-full md:h-auto overflow-hidden rounded-xl">
                        <img alt="Clinician using a tablet"
                            class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                            data-alt="Modern therapist in a bright airy studio reviewing inventory on a sleek digital tablet with physical therapy equipment in soft background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX4vH1jbIj85cjIF3xLIv4vlo-9GddjhtJFmMdtTsOjn53dvltsVS50gFYCiCPJnQD05Ay0xRpnaSs-N4iXgJMEOsBqrB00soOodCOttNabcg7FhVIVj-hezSOzifahlfQVixqOAn4LNYem20-JwuZDt7XsZ7Z8H74JlzFcbQHzSFOPc_BbsMPyao27Cx2VkHvgyZsVP9Y0FEefXNuWUsXzgbUpCsvmSHIVyO2ckycKlfU_A6sFuNuTaojVM2T-dbPHsib0Skd7IE" />
                    </div>
                </div>
            </div>
        </section>
    )
}