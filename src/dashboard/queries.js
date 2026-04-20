export default function Queries() {
    return (
        <div class="p-6 lg:p-10 space-y-8">

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 class="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">Contact Queries</h2>
                    <p class="text-on-surface-variant mt-2 max-w-xl">Manage therapist inquiries, patient feedback, and
                        equipment support requests from one central hub.</p>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex bg-surface-container-highest rounded-lg p-1">
                        <button
                            class="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-surface-container-lowest text-primary rounded shadow-sm">Real-Time</button>
                        <button
                            class="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface">History</button>
                    </div>
                    <button
                        class="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/10 hover:translate-y-[-1px] transition-transform">
                        <span class="material-symbols-outlined text-sm" data-icon="download">download</span>
                        Export Data
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                    class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-6xl" data-icon="forum">forum</span>
                    </div>
                    <p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total Queries</p>
                    <h3 class="text-4xl font-extrabold mt-2 text-on-surface">1,284</h3>
                    <div class="mt-4 flex items-center gap-1 text-secondary text-sm font-medium">
                        <span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        <span>12% this week</span>
                    </div>
                </div>
                <div
                    class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-6xl text-primary"
                            data-icon="mark_chat_unread">mark_chat_unread</span>
                    </div>
                    <p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Unread Queries</p>
                    <h3 class="text-4xl font-extrabold mt-2 text-primary">28</h3>
                    <div class="mt-4 flex items-center gap-1 text-tertiary text-sm font-medium">
                        <span class="material-symbols-outlined text-xs" data-icon="priority_high">priority_high</span>
                        <span>Requires attention</span>
                    </div>
                </div>
                <div
                    class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-6xl" data-icon="schedule">schedule</span>
                    </div>
                    <p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Avg. Response</p>
                    <h3 class="text-4xl font-extrabold mt-2 text-on-surface">4.2h</h3>
                    <div class="mt-4 flex items-center gap-1 text-secondary text-sm font-medium">
                        <span class="material-symbols-outlined text-xs" data-icon="check_circle">check_circle</span>
                        <span>Within target KPI</span>
                    </div>
                </div>
                <div
                    class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-6xl" data-icon="psychiatry">psychiatry</span>
                    </div>
                    <p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Frequent Subject</p>
                    <h3 class="text-2xl font-extrabold mt-2 text-on-surface leading-tight">Sensory Room Design</h3>
                    <div class="mt-4 flex items-center gap-1 text-on-surface-variant text-sm font-medium">
                        <span class="material-symbols-outlined text-xs" data-icon="bar_chart">bar_chart</span>
                        <span>32% of inquiries</span>
                    </div>
                </div>
            </div>

            <div class="bg-surface-container-low rounded-2xl p-4 flex flex-col lg:flex-row items-center gap-4">
                <div class="relative w-full lg:w-96">
                    <span
                        class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                        data-icon="search">search</span>
                    <input
                        class="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 placeholder-on-surface-variant/60"
                        placeholder="Search by name, email or keyword..." type="text" />
                </div>
                <div class="flex items-center gap-2 overflow-x-auto w-full lg:w-auto">
                    <select
                        class="bg-surface-container-lowest border-none rounded-xl text-xs font-bold uppercase tracking-wider py-2.5 px-4 focus:ring-2 focus:ring-primary/20 cursor-pointer">
                        <option>Status: All</option>
                        <option>Pending</option>
                        <option>Responded</option>
                        <option>Archived</option>
                    </select>
                    <select
                        class="bg-surface-container-lowest border-none rounded-xl text-xs font-bold uppercase tracking-wider py-2.5 px-4 focus:ring-2 focus:ring-primary/20 cursor-pointer">
                        <option>Date: Latest First</option>
                        <option>Oldest First</option>
                        <option>Last 7 Days</option>
                    </select>
                    <select
                        class="bg-surface-container-lowest border-none rounded-xl text-xs font-bold uppercase tracking-wider py-2.5 px-4 focus:ring-2 focus:ring-primary/20 cursor-pointer">
                        <option>Category: All</option>
                        <option>Clinical Advice</option>
                        <option>Technical Support</option>
                        <option>Order Inquiry</option>
                    </select>
                </div>
                <button
                    class="lg:ml-auto p-2.5 hover:bg-surface-container-high rounded-xl transition-colors text-on-surface-variant">
                    <span class="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                </button>
            </div>

            <div
                class="bg-surface-container-lowest rounded-2xl border border-outline-variant/15 shadow-sm overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-surface-container-low/50 border-b border-outline-variant/10">
                                <th
                                    class="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                                    Sender Name</th>
                                <th
                                    class="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                                    Subject &amp; Preview</th>
                                <th
                                    class="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant text-center">
                                    Date</th>
                                <th
                                    class="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant text-center">
                                    Status</th>
                                <th
                                    class="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant text-right">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-outline-variant/5">

                            <tr class="hover:bg-surface-container-low/30 transition-colors group">
                                <td class="px-6 py-5">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-sm">
                                            JS</div>
                                        <div>
                                            <p class="font-bold text-sm text-on-surface">Jane Smith</p>
                                            <p class="text-xs text-on-surface-variant">jane.s@clinicnet.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-5 max-w-xs">
                                    <p class="font-bold text-sm text-on-surface truncate">Sensory Kit Setup Inquiry</p>
                                    <p class="text-xs text-on-surface-variant truncate">We recently ordered the premium
                                        tactile kit and need assistance with...</p>
                                </td>
                                <td class="px-6 py-5 text-center">
                                    <p class="text-sm font-medium text-on-surface">Oct 24, 2023</p>
                                    <p class="text-[10px] text-on-surface-variant">09:42 AM</p>
                                </td>
                                <td class="px-6 py-5">
                                    <div class="flex justify-center">
                                        <span
                                            class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-error-container text-on-error-container">
                                            <span class="w-1 h-1 bg-error rounded-full mr-1.5"></span>
                                            Pending
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-5 text-right">
                                    <div class="flex items-center justify-end gap-1">
                                        <button
                                            class="p-2 hover:bg-primary-fixed text-primary rounded-lg transition-colors"
                                            title="Reply">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="reply">reply</span>
                                        </button>
                                        <button
                                            class="p-2 hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-colors"
                                            title="View Detail">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="visibility">visibility</span>
                                        </button>
                                        <button
                                            class="p-2 hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-colors"
                                            title="Archive">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="archive">archive</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-surface-container-low/30 transition-colors group">
                                <td class="px-6 py-5">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-sm">
                                            RM</div>
                                        <div>
                                            <p class="font-bold text-sm text-on-surface">Robert Miller</p>
                                            <p class="text-xs text-on-surface-variant">r.miller@wellness.edu</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-5 max-w-xs">
                                    <p class="font-bold text-sm text-on-surface truncate">Custom Physiotherapy Plan</p>
                                    <p class="text-xs text-on-surface-variant truncate">Interested in our specialized
                                        school-wide programs for students with...</p>
                                </td>
                                <td class="px-6 py-5 text-center">
                                    <p class="text-sm font-medium text-on-surface">Oct 23, 2023</p>
                                    <p class="text-[10px] text-on-surface-variant">02:15 PM</p>
                                </td>
                                <td class="px-6 py-5">
                                    <div class="flex justify-center">
                                        <span
                                            class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-secondary-container text-on-secondary-container">
                                            <span class="w-1 h-1 bg-secondary rounded-full mr-1.5"></span>
                                            Responded
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-5 text-right">
                                    <div class="flex items-center justify-end gap-1">
                                        <button
                                            class="p-2 hover:bg-primary-fixed text-primary rounded-lg transition-colors"
                                            title="Reply">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="reply">reply</span>
                                        </button>
                                        <button
                                            class="p-2 hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-colors"
                                            title="View Detail">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="visibility">visibility</span>
                                        </button>
                                        <button
                                            class="p-2 hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-colors"
                                            title="Archive">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="archive">archive</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-surface-container-low/30 transition-colors group">
                                <td class="px-6 py-5">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-bold text-sm">
                                            AW</div>
                                        <div>
                                            <p class="font-bold text-sm text-on-surface">Alice Wong</p>
                                            <p class="text-xs text-on-surface-variant">alice.w@techrehab.io</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-5 max-w-xs">
                                    <p class="font-bold text-sm text-on-surface truncate">API Integration for Clinics
                                    </p>
                                    <p class="text-xs text-on-surface-variant truncate">Could we request documentation
                                        regarding the V2 API endpoints for...</p>
                                </td>
                                <td class="px-6 py-5 text-center">
                                    <p class="text-sm font-medium text-on-surface">Oct 22, 2023</p>
                                    <p class="text-[10px] text-on-surface-variant">11:05 AM</p>
                                </td>
                                <td class="px-6 py-5">
                                    <div class="flex justify-center">
                                        <span
                                            class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-surface-container-highest text-on-surface-variant">
                                            <span class="w-1 h-1 bg-outline rounded-full mr-1.5"></span>
                                            Archived
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-5 text-right">
                                    <div class="flex items-center justify-end gap-1">
                                        <button
                                            class="p-2 hover:bg-primary-fixed text-primary rounded-lg transition-colors"
                                            title="Reply">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="reply">reply</span>
                                        </button>
                                        <button
                                            class="p-2 hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-colors"
                                            title="View Detail">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="visibility">visibility</span>
                                        </button>
                                        <button
                                            class="p-2 hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-colors"
                                            title="Archive">
                                            <span class="material-symbols-outlined text-xl"
                                                data-icon="unarchive">unarchive</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div
                    class="px-6 py-4 bg-surface-container-low/30 flex items-center justify-between border-t border-outline-variant/10">
                    <p class="text-xs text-on-surface-variant font-medium">Showing <span
                        class="text-on-surface">1-3</span> of 1,284 queries</p>
                    <div class="flex items-center gap-2">
                        <button
                            class="p-1.5 rounded-lg border border-outline-variant/30 text-on-surface-variant disabled:opacity-30"
                            disabled="">
                            <span class="material-symbols-outlined text-lg" data-icon="chevron_left">chevron_left</span>
                        </button>
                        <div class="flex items-center px-2 font-bold text-xs">
                            <span
                                class="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded-lg">1</span>
                            <span
                                class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-lg cursor-pointer">2</span>
                            <span
                                class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-lg cursor-pointer">3</span>
                            <span class="mx-1 text-on-surface-variant">...</span>
                            <span
                                class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-lg cursor-pointer">42</span>
                        </div>
                        <button
                            class="p-1.5 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high">
                            <span class="material-symbols-outlined text-lg"
                                data-icon="chevron_right">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="relative rounded-3xl p-8 overflow-hidden bg-primary/5 border border-primary/10">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 opacity-50">
                </div>
                <div class="relative flex flex-col lg:flex-row items-center gap-8">
                    <div class="lg:w-2/3">
                        <h4 class="text-xl font-bold text-primary mb-3">Efficiency Tip: Saved Responses</h4>
                        <p class="text-sm text-on-surface-variant leading-relaxed mb-6">
                            Did you know you can cut response time by 40% using predefined templates for common clinical
                            inquiries? Access them via the reply window or the Settings menu.
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <span
                                class="px-4 py-2 bg-surface-container-lowest rounded-full text-xs font-bold text-on-surface-variant shadow-sm border border-outline-variant/10">Setup
                                Guides</span>
                            <span
                                class="px-4 py-2 bg-surface-container-lowest rounded-full text-xs font-bold text-on-surface-variant shadow-sm border border-outline-variant/10">Clinical
                                FAQ</span>
                            <span
                                class="px-4 py-2 bg-surface-container-lowest rounded-full text-xs font-bold text-on-surface-variant shadow-sm border border-outline-variant/10">Order
                                Tracking</span>
                        </div>
                    </div>
                    <div class="lg:w-1/3 flex justify-center">
                        <div
                            class="w-48 h-48 rounded-full bg-surface-container-lowest/40 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                            <span class="material-symbols-outlined text-7xl text-primary/40"
                                data-icon="auto_awesome">auto_awesome</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}