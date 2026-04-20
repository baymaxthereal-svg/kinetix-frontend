export default function DashboardHome() {
    return (
        <div class="p-8 space-y-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Administrative Overview</span>
                    <h1 class="text-3xl font-headline font-extrabold text-on-surface mt-1">Good Morning, Kinetix Admin</h1>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm group hover:translate-y-[-2px] transition-all">
                    <div class="flex justify-between items-start">
                        <div class="p-2 bg-primary/5 rounded-lg text-primary">
                            <span class="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
                        </div>
                        <span class="text-xs font-bold text-secondary flex items-center gap-1">
                            <span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                            +12%
                        </span>
                    </div>
                    <h3 class="text-on-surface-variant text-sm font-medium mt-4">Total Equipment Managed</h3>
                    <p class="text-2xl font-headline font-bold text-on-surface">1,284</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-secondary shadow-sm group hover:translate-y-[-2px] transition-all">
                    <div class="flex justify-between items-start">
                        <div class="p-2 bg-secondary/5 rounded-lg text-secondary">
                            <span class="material-symbols-outlined" data-icon="groups">groups</span>
                        </div>
                        <span class="text-xs font-bold text-secondary flex items-center gap-1">
                            <span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                            +5%
                        </span>
                    </div>
                    <h3 class="text-on-surface-variant text-sm font-medium mt-4">Active Patient Programs</h3>
                    <p class="text-2xl font-headline font-bold text-on-surface">342</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-tertiary shadow-sm group hover:translate-y-[-2px] transition-all">
                    <div class="flex justify-between items-start">
                        <div class="p-2 bg-tertiary/5 rounded-lg text-tertiary">
                            <span class="material-symbols-outlined" data-icon="pending_actions">pending_actions</span>
                        </div>
                        <span class="text-xs font-bold text-error flex items-center gap-1">
                            <span class="material-symbols-outlined text-xs" data-icon="trending_down">trending_down</span>
                            -2%
                        </span>
                    </div>
                    <h3 class="text-on-surface-variant text-sm font-medium mt-4">Pending Orders</h3>
                    <p class="text-2xl font-headline font-bold text-on-surface">18</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm group hover:translate-y-[-2px] transition-all">
                    <div class="flex justify-between items-start">
                        <div class="p-2 bg-primary/5 rounded-lg text-primary">
                            <span class="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
                        </div>
                        <span class="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase">Optimal</span>
                    </div>
                    <h3 class="text-on-surface-variant text-sm font-medium mt-4">System Health</h3>
                    <p class="text-2xl font-headline font-bold text-on-surface">98.4%</p>
                </div>
            </div>
        </div>
    )
}