export default function CheckOut() {
    return (
        <main class="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div class="mb-12 max-w-3xl mx-auto">
                <div class="flex items-center justify-between relative">
                    <div class="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -z-10 -translate-y-1/2">
                    </div>

                    <div class="flex flex-col items-center gap-2">
                        <div
                            class="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">
                            <span class="material-symbols-outlined text-sm">check</span>
                        </div>
                        <span class="text-xs font-bold uppercase tracking-widest text-secondary">Shipping</span>
                    </div>

                    <div class="flex flex-col items-center gap-2">
                        <div
                            class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold ring-4 ring-primary-fixed">
                            2</div>
                        <span class="text-xs font-bold uppercase tracking-widest text-primary">Payment</span>
                    </div>

                    <div class="flex flex-col items-center gap-2">
                        <div
                            class="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">
                            3</div>
                        <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Review</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

                <div class="lg:col-span-7 space-y-12">

                    <section class="space-y-6">
                        <div class="flex items-center gap-4">
                            <span
                                class="text-label-md uppercase tracking-widest text-on-surface-variant text-xs font-bold">Step
                                02</span>
                            <h2 class="text-3xl font-extrabold tracking-tight text-primary">Billing Details</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low p-8 rounded-xl">
                            <div class="space-y-2">
                                <label class="block text-sm font-semibold text-on-surface-variant">First Name</label>
                                <input
                                    class="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                    placeholder="Enter first name" type="text" />
                            </div>
                            <div class="space-y-2">
                                <label class="block text-sm font-semibold text-on-surface-variant">Last Name</label>
                                <input
                                    class="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                    placeholder="Enter last name" type="text" />
                            </div>
                            <div class="md:col-span-2 space-y-2">
                                <label class="block text-sm font-semibold text-on-surface-variant">Clinic or Facility Name
                                    (Optional)</label>
                                <input
                                    class="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                    placeholder="Healthcare center name" type="text" />
                            </div>
                            <div class="md:col-span-2 space-y-2">
                                <label class="block text-sm font-semibold text-on-surface-variant">Street Address</label>
                                <input
                                    class="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                    placeholder="House number and street name" type="text" />
                            </div>
                            <div class="space-y-2">
                                <label class="block text-sm font-semibold text-on-surface-variant">City</label>
                                <input
                                    class="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                    placeholder="City" type="text" />
                            </div>
                            <div class="space-y-2">
                                <label class="block text-sm font-semibold text-on-surface-variant">Postal Code</label>
                                <input
                                    class="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                    placeholder="ZIP" type="text" />
                            </div>
                        </div>
                    </section>

                    <section class="space-y-6">
                        <div class="flex items-center gap-4">
                            <span
                                class="text-label-md uppercase tracking-widest text-tertiary text-xs font-bold">Mandatory</span>
                            <h2 class="text-3xl font-extrabold tracking-tight text-on-surface">Advance Payment</h2>
                        </div>
                        <div
                            class="bg-tertiary-fixed rounded-xl p-8 border-l-8 border-tertiary shadow-lg shadow-tertiary/5">
                            <div class="flex flex-col md:flex-row gap-8">
                                <div class="flex-1 space-y-4">
                                    <h3 class="text-xl font-bold text-on-tertiary-fixed">50% Commitment Required</h3>
                                    <p class="text-on-tertiary-fixed-variant leading-relaxed">
                                        To finalize your clinical order, a <span class="font-bold">50% advance payment
                                            ($1,440.00)</span> is required. This ensures priority logistics for
                                        medical-grade equipment.
                                    </p>
                                    <div class="bg-white/40 p-4 rounded-lg space-y-2 text-sm text-on-tertiary-fixed">
                                        <p class="font-bold">Bank Transfer Details:</p>
                                        <p>Kinetix Medical Solutions Ltd.</p>
                                        <p>SWIFT: KNTXUS33 | Account: 8829-1002-4451</p>
                                    </div>
                                </div>

                                <div class="w-full md:w-64">
                                    <div
                                        class="h-full border-2 border-dashed border-tertiary/30 rounded-xl flex flex-col items-center justify-center p-6 text-center bg-white/20 hover:bg-white/40 transition-all cursor-pointer group">
                                        <span
                                            class="material-symbols-outlined text-4xl text-tertiary mb-3 group-hover:scale-110 transition-transform">cloud_upload</span>
                                        <p
                                            class="text-xs font-bold text-on-tertiary-fixed-variant uppercase tracking-tighter">
                                            Upload Confirmation</p>
                                        <p class="text-[10px] text-on-tertiary-fixed-variant/70 mt-1">PNG, JPG or PDF</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="flex justify-between items-center pt-6">
                        <button
                            class="text-primary font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                            <span class="material-symbols-outlined">arrow_back</span>
                            Back to Shipping
                        </button>
                        <button
                            class="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            Review Final Order
                        </button>
                    </div>
                </div>

                <aside class="lg:col-span-5">
                    <div
                        class="sticky top-32 glass-panel p-8 rounded-xl shadow-xl shadow-slate-900/5 space-y-8 border border-white/50">
                        <h3 class="text-2xl font-extrabold tracking-tight text-on-surface">Order Summary</h3>

                        <div class="space-y-6">

                            <div class="flex gap-4">
                                <div class="w-20 h-20 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                    <img class="w-full h-full object-cover"
                                        data-alt="professional sensory compression swing for therapy clinic with soft blue fabric and sturdy mounting hardware"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7u7UtH0ZVTRDtSHKTs26F3m_7t2McYTiiu1vB-fDcrdKVQkA6XEJoWaqK2hlgYUXD6G_gzjX8FL873dbmzl5NOUGgeI5jDVWY69bNpbyqZBXdBTisHt7aCPGHEhYYd_7mHlHfygZbwD0pEqGvt5xx_t98cICSzLCq6KR9z2YEF1FCj6hg3DI_-fUMILi1Xq25rdcJtAtEaCPVadLKSFiMnD9y3RVqH75xz-xa7ZRhy5Iy0hitOsayhXhyQQuHDnqntCghR_XNf_8" />
                                </div>
                                <div class="flex-grow">
                                    <h4 class="font-bold text-on-surface">Tactile Pressure Swing</h4>
                                    <p class="text-sm text-on-surface-variant">Unit: XL Clinical Grade</p>
                                    <div class="flex justify-between items-center mt-1">
                                        <span
                                            class="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">Qty:
                                            1</span>
                                        <span class="font-bold text-primary">$1,280.00</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="w-20 h-20 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                    <img class="w-full h-full object-cover"
                                        data-alt="set of textured weighted therapy balls in various calming earth tones on a clean white background"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB94UM78qevHws0txiF-fav7wCscRZ_SQxxSxbDI-SY50EMicEdg8nqKt_N4kswoXLxJC2BIqa9lCUAWp-Xhsvd0F0meYnPTqbpYWjXvv90VqU_5Q5tE_3LaC8HAGD6suoqgEljl1c1F1mHqdkVxZOM53ud9ROXCHCqmEqpYxY2kbSW82-Ra68xNsw1EDOoHlqglGZmKsZHlsK71miIg4uOfL0pjy09Z5rO_HE8vsuure-Gzpj67dbCsrjffdHZUBNmi8Big7eOHOQ" />
                                </div>
                                <div class="flex-grow">
                                    <h4 class="font-bold text-on-surface">Proprioceptive Set</h4>
                                    <p class="text-sm text-on-surface-variant">Includes 6 textured balls</p>
                                    <div class="flex justify-between items-center mt-1">
                                        <span
                                            class="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">Qty:
                                            2</span>
                                        <span class="font-bold text-primary">$1,600.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4 pt-6 border-t border-on-surface/5">
                            <div class="flex justify-between text-on-surface-variant">
                                <span>Subtotal</span>
                                <span class="font-medium">$2,880.00</span>
                            </div>
                            <div class="flex justify-between text-on-surface-variant">
                                <span>Clinical Shipping</span>
                                <span class="font-medium">Calculated next</span>
                            </div>
                            <div class="flex justify-between text-on-surface-variant">
                                <span>Tax (Exempt)</span>
                                <span class="font-medium">$0.00</span>
                            </div>
                            <div
                                class="flex justify-between text-xl font-extrabold text-on-surface pt-4 border-t border-on-surface/5">
                                <span>Total</span>
                                <span>$2,880.00</span>
                            </div>
                        </div>

                        <div class="bg-primary/5 p-4 rounded-lg space-y-2 border border-primary/10">
                            <div class="flex justify-between text-sm font-bold text-primary">
                                <span>Due Today (50%)</span>
                                <span>$1,440.00</span>
                            </div>
                            <div class="flex justify-between text-xs text-on-surface-variant">
                                <span>Due upon Dispatch</span>
                                <span>$1,440.00</span>
                            </div>
                        </div>
                        <div
                            class="flex items-center gap-3 p-4 bg-surface-container-highest rounded-lg text-xs text-on-surface-variant italic">
                            <span class="material-symbols-outlined text-secondary">verified_user</span>
                            Your clinical data is encrypted and HIPAA compliant.
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}