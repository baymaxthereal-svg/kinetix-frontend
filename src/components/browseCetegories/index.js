import { Link } from "react-router-dom";

export default function BrowseCetegories() {
    return (
        <main class="pt-28 pb-20 px-6 max-w-7xl mx-auto">

            <header class="mb-12">
                <span class="text-on-surface-variant font-label text-xs font-bold uppercase tracking-[0.2em] block mb-2">Curated
                    Collections</span>
                <h1 class="text-display-lg font-headline font-extrabold text-primary leading-tight tracking-tight mb-4 text-5xl">
                    Explore by Category</h1>
                <p class="max-w-2xl text-on-surface-variant leading-relaxed">Discover a world of specialized solutions designed
                    for rehabilitation, sensory exploration, and inclusive learning environments.</p>
            </header>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                <aside class="lg:col-span-3 space-y-8">
                    <div class="bg-surface-container-low p-6 rounded-xl space-y-8 sticky top-28">
                        <section>
                            <h3 class="font-headline font-bold text-sm uppercase tracking-wider mb-4">Age Group</h3>
                            <div class="space-y-3">
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        class="rounded-sm border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest"
                                        type="checkbox" />
                                    <span class="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Early
                                        Intervention (0-3)</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        class="rounded-sm border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest"
                                        type="checkbox" />
                                    <span class="text-sm text-on-surface-variant group-hover:text-primary transition-colors">School Age
                                        (4-12)</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        class="rounded-sm border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest"
                                        type="checkbox" />
                                    <span class="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Adolescent
                                        (13-18)</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        class="rounded-sm border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest"
                                        type="checkbox" />
                                    <span class="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Adult
                                        Care</span>
                                </label>
                            </div>
                        </section>
                        <section>
                            <h3 class="font-headline font-bold text-sm uppercase tracking-wider mb-4">Therapy Type</h3>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:opacity-80">Gross
                                    Motor</span>
                                <span
                                    class="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-outline-variant transition-colors">Fine
                                    Motor</span>
                                <span
                                    class="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-outline-variant transition-colors">Tactile</span>
                                <span
                                    class="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-outline-variant transition-colors">Auditory</span>
                            </div>
                        </section>
                        <section>
                            <h3 class="font-headline font-bold text-sm uppercase tracking-wider mb-4">Price Range</h3>
                            <input class="w-full h-1 bg-surface-variant appearance-none rounded-lg accent-primary cursor-pointer"
                                type="range" />
                            <div class="flex justify-between mt-2 text-xs text-on-surface-variant font-medium">
                                <span>$0</span>
                                <span>$2,500+</span>
                            </div>
                        </section>
                        <button
                            class="w-full bg-primary text-on-primary py-3 rounded-xl font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Apply Filters
                        </button>
                    </div>
                </aside>

                <div class="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">

                    <article class="md:col-span-2 relative group overflow-hidden rounded-xl h-[400px]">
                        <img alt=""
                            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            data-alt="vibrant sensory room with soft glowing fiber optic lights, bubble tubes, and plush velvet floor mats in a calming therapeutic environment"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkkQK13PrpLLnUFg7_NIKr37NLvxWnrYIIze4PFIOYjF3UVjXNs7Ieyf7--swFjvgcGjUKV7hKFz_-YmYo6sK-JjDSRlbGkvbecfAtIwPqiYhPle19-OJsW8X9bMG2twgQB5zzmZ_Bvxi4HMfmyTuaL_F0LKcqjcNYaCkdLKFyMMZKXmeSdIjvcX1LYFBGfT-wmT8eIMWNbiLyFyZh1Qbaz3ggezSFKOgWOyVzKrHZlTcvf_CPEVjBQcW1x1OESqi_q0OBI4wsecE" />
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 p-8 w-full max-w-xl">
                            <span
                                class="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">Best
                                Seller</span>
                            <h2 class="text-white text-4xl font-headline font-extrabold mb-3">Sensory Integration</h2>
                            <p class="text-white/90 text-sm mb-6 leading-relaxed">Engineered environments and tools designed to help
                                process sensory information effectively. From bubble tubes to tactile wall panels.</p>
                            <Link class="inline-flex items-center gap-2 text-white font-bold border-b-2 border-white pb-1 hover:gap-4 transition-all"
                                to="/ProductList">
                                View Collection <span class="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    <article class="bg-surface-container-lowest p-2 rounded-xl flex flex-col group transition-all">
                        <div class="aspect-square w-full rounded-lg overflow-hidden mb-4 relative">
                            <img alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="close-up of child's hands working with colorful therapy putty and wooden pegboard for fine motor skill development"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsnrNu5WRqOUzOJJAnZu8OvPqAUH4G-ku45mhgwa72YdRhE5ewhppFPorK-lmmXJdAryB5TwGQo64duV6nVFSJhmRTkyF_er_kzRAG8_YvpJ7HixBGfa2OgQcRNUZ1uXSEuiTHhuXs8UQblhTl4QYdxmRzluG0chMrqdJeD7xhjbE3Yc-8kCjgyW-x424kko3Z-OZ1j26Og5MXfIr8UxAhxdB0uTjATdRTdDS5fcprme25UF9QfeJUVegLvjIy7kFr7jwOYfsO3Cs" />
                            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                        </div>
                        <div class="px-4 pb-6">
                            <h3 class="text-xl font-headline font-bold text-primary mb-2">Occupational Therapy</h3>
                            <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">Tools for independence: grip aids, weighted
                                blankets, and fine motor coordination equipment for all skill levels.</p>
                            <span class="text-xs font-bold text-secondary uppercase tracking-widest">142 Products</span>
                        </div>
                    </article>

                    <article class="bg-surface-container-lowest p-2 rounded-xl flex flex-col group transition-all">
                        <div class="aspect-square w-full rounded-lg overflow-hidden mb-4 relative">
                            <img alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="artistic display of vibrant multi-textured sensory toys and adaptive art supplies in an organized modern studio setting"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQZOKHjQcNivIQ7aOkqTg_at78rL0kFfLSkz1PDHJXYMyUwReTTfj8l_AJxt5hoxIf2XI25Lf2Xm92Rj4TRxpibQsUz5qqvnYfSix_yQSV-dWMxMdRxsJ9Gxoo-UbWy4FLeWeiAKJ1017jNjBvLS1SfbOeafiRqgy-f9wSRpH2wrvHCt9QbXPAnveCSETHJ_nJMUut74mbXYG_kL11Ky4jW-uqFG3GODqlfojnfcGr2kDn0qipcEQ1lgy4DOZvhjnsjA0vgDI4Nz8" />
                            <div class="absolute inset-0 bg-tertiary/0 group-hover:bg-tertiary/10 transition-colors"></div>
                        </div>
                        <div class="px-4 pb-6">
                            <h3 class="text-xl font-headline font-bold text-primary mb-2">Creative Store</h3>
                            <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">Where imagination meets development.
                                Specialty art supplies and interactive kits for creative therapy.</p>
                            <span class="text-xs font-bold text-secondary uppercase tracking-widest">88 Products</span>
                        </div>
                    </article>

                    <article class="bg-surface-container-lowest p-2 rounded-xl flex flex-col group transition-all">
                        <div class="aspect-square w-full rounded-lg overflow-hidden mb-4 relative">
                            <img alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="minimalist home learning space with ergonomic child's desk, visual schedules on the wall, and organized educational manipulatives"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4VAHU_iFeEjp3TCu6z3r9rT72YPKEdC1TJVlXL6MKWdyXMrHqV56vMDAhgovraOHUAccVMzl1-Zb-jmBAIslaXOOMl4IQ2g95pwMc-EJ1f6sacBpjIMp6JsDbC9YrXn7TFOSbGaSifNK1iWiPhieCdDDlC8JP9gKEHt0-Dzo5VuaXyiRS0GZ_X_HZvwC2ZiQMpKC4v3gNJftoKPrNLQZwr18Zv1uc1qHWFDEqNpkD1EOI4EFD70DG0iFF4XO0L_mQncn_kxZ2vN4" />
                            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                        </div>
                        <div class="px-4 pb-6">
                            <h3 class="text-xl font-headline font-bold text-primary mb-2">Home Schooling</h3>
                            <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">Specialized curricula and adaptive learning
                                materials designed for neurodivergent students learning at home.</p>
                            <span class="text-xs font-bold text-secondary uppercase tracking-widest">210 Products</span>
                        </div>
                    </article>

                    <article class="bg-surface-container-lowest p-2 rounded-xl flex flex-col group transition-all">
                        <div class="aspect-square w-full rounded-lg overflow-hidden mb-4 relative">
                            <img alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="modern adaptive lounge chair with organic shapes and soft grey fabric in a brightly lit sunroom"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWhgzv_ziNs617Va2B1I4R6naoBF01-RKwct_it3Z7Dl2B3KA6t2_m74wac-7yI9mk7j_umNgOI6jUy9BpMf_pYlZjHKttJ8JlnOx-D827XPS40IeglRTRHvqMGdtylOfCr9mGKrwFuXsMWO-fZcf5766o5FGnd3ibQ4MRfYmj7ZOoiKGEtm3RACbl_BYdOAFGhxVwnAu1lxtFjTjsMWXvndFE05tjJLdkhv-w1ufISLMfPVV0tToikmN3R80J4datE75yqewroKc" />
                            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                        </div>
                        <div class="px-4 pb-6">
                            <h3 class="text-xl font-headline font-bold text-primary mb-2">Home Furniture</h3>
                            <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">Ergonomic seating, height-adjustable tables,
                                and specialized storage that blends therapy into your home aesthetic.</p>
                            <span class="text-xs font-bold text-secondary uppercase tracking-widest">56 Products</span>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    )
}