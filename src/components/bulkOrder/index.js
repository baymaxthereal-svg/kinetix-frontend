export default function BulkOrder() {
    return (
        <main class="pt-20">

            <section class="relative min-h-[409px] flex items-center overflow-hidden bg-surface-container-low">
                <div class="absolute inset-0 z-0">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-container/20"></div>
                    <img class="w-full h-full object-cover mix-blend-overlay opacity-30"
                        data-alt="minimalist modern medical warehouse with neatly organized sensory equipment and physiotherapy tools in soft blue light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEBIi50O_7g8l1GeA1T-ecIe7wwLk14TV7Auuq_8b0s4C_onl04w5v8fpTMqAHDdfxx8tAxJoy3mIct1_6nONE97k9d_13BgArgf_y3by-nSI4uR1bmaSEsEu65w_FTsq1j9k2bO0lKLDiBanikcMaDIYXFeofLWeRagKmDhlu8e0Y4S4y69BHcKJ4n6qsy74kvgdOdFt00UBFS5fM42L63tSoTyUCfo-ii2DFYWYwacxtA6Iv_H9bN5oync__VnVrCQfappVcTBY" />
                </div>
                <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <div class="max-w-2xl">
                        <span
                            class="text-sm font-bold tracking-widest text-primary uppercase mb-4 block font-label">Institutional
                            Partners</span>
                        <h1
                            class="text-5xl md:text-6xl font-extrabold text-on-surface font-headline leading-tight tracking-tighter mb-6">
                            Empowering Growth at <span class="text-primary">Scale.</span>
                        </h1>
                        <p class="text-lg text-on-surface-variant leading-relaxed mb-8">
                            Dedicated procurement solutions for schools, rehab centers, and healthcare networks. Access
                            specialized pricing and tailored logistics for high-volume sensory and physiotherapy equipment.
                        </p>
                    </div>
                </div>
            </section>

            <section class="max-w-7xl mx-auto px-6 py-16 lg:-mt-24 relative z-20">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <div class="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl font-bold font-headline mb-8 text-on-surface">Request a Quote</h2>
                        <form class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="text-sm font-semibold text-on-surface-variant px-1 font-label">Institution
                                        Name</label>
                                    <input
                                        class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="e.g. St. Jude's Rehab Center" type="text" />
                                </div>
                                <div class="space-y-2">
                                    <label class="text-sm font-semibold text-on-surface-variant px-1 font-label">Contact
                                        Person</label>
                                    <input
                                        class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="Full Name" type="text" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="text-sm font-semibold text-on-surface-variant px-1 font-label">Work
                                        Email</label>
                                    <input
                                        class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="name@institution.com" type="email" />
                                </div>
                                <div class="space-y-2">
                                    <label class="text-sm font-semibold text-on-surface-variant px-1 font-label">Expected
                                        Quantity</label>
                                    <input
                                        class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="Total Units" type="number" />
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-on-surface-variant px-1 font-label">Specific
                                    Product Interests</label>
                                <select
                                    class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all">
                                    <option>Full Sensory Room Fit-out</option>
                                    <option>Weighted Therapy Kits</option>
                                    <option>Mobility &amp; Rehab Furniture</option>
                                    <option>Tactile Play Systems</option>
                                    <option>Mixed Bulk Inventory</option>
                                </select>
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-on-surface-variant px-1 font-label">Project
                                    Details</label>
                                <textarea
                                    class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="Tell us about your facility or specific requirements..."
                                    rows="4"></textarea>
                            </div>
                            <button
                                class="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all scale-100 active:scale-95"
                                type="submit">
                                Submit Quote Request
                            </button>
                        </form>
                    </div>

                    <div class="lg:col-span-5 grid grid-cols-1 gap-8">

                        <div class="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden group">
                            <div class="relative z-10">
                                <span class="material-symbols-outlined text-4xl mb-4"
                                    style={{ fontVariationSettings: 'FILL' }}>verified_user</span>
                                <h3 class="text-2xl font-bold font-headline mb-2">Verified Supplier</h3>
                                <p class="text-primary-fixed/80 leading-relaxed">
                                    We are registered vendors for over 200 school districts and private healthcare networks
                                    globally.
                                </p>
                            </div>
                            <div
                                class="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <span class="material-symbols-outlined text-[200px]">domain</span>
                            </div>
                        </div>

                        <div class="bg-surface-container-high p-8 rounded-xl">
                            <h3 class="text-xl font-bold font-headline mb-6 text-on-surface">The Bulk Process</h3>
                            <div class="space-y-6">
                                <div class="flex gap-4">
                                    <div
                                        class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                                        <span class="text-secondary font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-on-surface">Request Quote</h4>
                                        <p class="text-sm text-on-surface-variant">Submit your needs and institutional
                                            details.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4">
                                    <div
                                        class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                                        <span class="text-secondary font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-on-surface">Custom Proposal</h4>
                                        <p class="text-sm text-on-surface-variant">Our team prepares a tiered pricing list
                                            within 24 hours.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4">
                                    <div
                                        class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                                        <span class="text-secondary font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-on-surface">Fulfillment</h4>
                                        <p class="text-sm text-on-surface-variant">Priority logistics and setup support for
                                            your facility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="bg-tertiary-fixed text-on-tertiary-fixed p-8 rounded-xl flex items-center justify-between border-none">
                            <div>
                                <h4 class="font-bold font-headline">Need immediate help?</h4>
                                <p class="text-sm opacity-80">Call our institutional desk</p>
                            </div>
                            <span class="material-symbols-outlined text-4xl">support_agent</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-24 bg-surface-container-low overflow-hidden">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                        <div class="max-w-xl">
                            <h2 class="text-4xl font-bold font-headline text-on-surface tracking-tight mb-4">Popular Bulk
                                Categories</h2>
                            <p class="text-on-surface-variant">Scalable solutions for every therapeutic environment.</p>
                        </div>
                        <div class="flex gap-2">
                            <button
                                class="p-3 bg-surface rounded-full shadow-sm hover:bg-surface-container-high transition-colors">
                                <span class="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button
                                class="p-3 bg-primary text-on-primary rounded-full shadow-sm hover:opacity-90 transition-opacity">
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div class="flex gap-8 overflow-x-auto pb-8 no-scrollbar">

                        <div
                            class="min-w-[320px] bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div class="h-64 relative">
                                <img class="w-full h-full object-cover"
                                    data-alt="a collection of soft colorful sensory blocks and liquid floor tiles in a clean bright room"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5JQ8uFLW-3P3IUkHPTDPM1CfYfssy1KCvsTZHWiG1eY8oFw3xIvi_qFJokQ92r_CS-dArFzF2tz71twTKWoJyv4ULL587mSCXkNYiak3L4hsTSkDQHlkZCmT2eyBnaGroEmZLdl_-E1kzoHWlGj0KyiDUv1LnSu5Mn32BFKYJNzfnExXX6azl3bozJxDm7WMVYzGCC_SzNOnuiHfWL430wv46-ZBM3NHUHGy4RWhyD9QPkYi_esqOXSwF5K4PC2yOFcgLCrynO5k" />
                                <div class="absolute top-4 left-4">
                                    <span
                                        class="bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold font-label uppercase">School
                                        Kits</span>
                                </div>
                            </div>
                            <div class="p-6">
                                <h3 class="font-bold font-headline text-xl mb-2">Sensory Play Packs</h3>
                                <p class="text-sm text-on-surface-variant mb-4">Curated sets for special education
                                    classrooms.</p>
                                <a class="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline"
                                    href="#">
                                    View Bundle Details <span class="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>

                        <div
                            class="min-w-[320px] bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div class="h-64 relative">
                                <img class="w-full h-full object-cover"
                                    data-alt="professional physiotherapy clinical space with several treatment tables and exercise balls"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAIZwHwnI7rbdCEH0tBo3H2Kz3dewCLF3xrpQqmjfI0UZUfioWYaHZ6jbHpC0MmEtFe9KMW0G7gwmShqU3AgpLdo5aWaFD0OzD4PumSVK6mCRWpkYBC6_pC93U2czkU-aYFpEkJlD226wjzjU_-3hBzwozRlZWig1oLBph-SpLnr4NYpZqUsVrYECLuLtHFSLLU6RER1vuMh4L5Pc4zuyaYm0pD4hQBBtkn2jTDnwujEsxHGO6wGvwNDTNKQrA8teHmhEtc4uBUv0" />
                                <div class="absolute top-4 left-4">
                                    <span
                                        class="bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold font-label uppercase">Clinical
                                        Hub</span>
                                </div>
                            </div>
                            <div class="p-6">
                                <h3 class="font-bold font-headline text-xl mb-2">Rehab Center Fit-outs</h3>
                                <p class="text-sm text-on-surface-variant mb-4">Complete equipment suites for physical
                                    therapy clinics.</p>
                                <a class="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline"
                                    href="#">
                                    View Bundle Details <span class="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>

                        <div
                            class="min-w-[320px] bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div class="h-64 relative">
                                <img class="w-full h-full object-cover"
                                    data-alt="close up of various tactile textured disks for therapeutic floor use in a studio"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2jJCzUycVx5bJwVX7rm4fWt5mFKsvr8YoDknNtLNZyXsD9Sq4bgIP7Fi20vMg96avMM4LrjrdIMxlfiUAxLkfZW0Xrl2a9ZMqQ5GaU93SpQOt9LDDN3aVRgP1hy9vmzpn7j-VFDlLoqpqw7CPmPXU2OBaNSD7depbEkXD1bCKFx6BdPQMYiLrHRYU6DfPJl7Ao82dWPPAVyGKRXlEIAl7tWz-8GZQfC9Zbeix9KGTxaePJOcXWUc8U3JsgTrvSk0Ypkd2d6VQedE" />
                                <div class="absolute top-4 left-4">
                                    <span
                                        class="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold font-label uppercase">Tactile
                                        Lab</span>
                                </div>
                            </div>
                            <div class="p-6">
                                <h3 class="font-bold font-headline text-xl mb-2">Early Intervention Tools</h3>
                                <p class="text-sm text-on-surface-variant mb-4">Large-scale tactile equipment for sensory
                                    integration.</p>
                                <a class="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline"
                                    href="#">
                                    View Bundle Details <span class="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
} 