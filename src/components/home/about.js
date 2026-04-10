export default function About() {
    return (
        <section class="py-24 bg-surface">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div class="order-2 lg:order-1">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-4 pt-12">
                            <div class="aspect-[3/4] rounded-2xl overflow-hidden">
                                <img alt="Therapist working" class="w-full h-full object-cover"
                                    data-alt="professional occupational therapist working gently with a child in a brightly lit, friendly clinic environment"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsMobS7o_hHmceYspDdeN8MuRjxNi7T2b9n1YoFIodUDFVGhTaCfeifCOErQE9YT7sHDC6WglmirOzGc_6d5evrWfTsD-hoG8ZgysmPicdqvA7iEQlHBjz3PHTLRPGdvR5jgkVzDnzJk82j_MSIWcualOvyQFYZ6LeuXRhQrCgpGA1mUzkyUvCxIO3jvBiXWlx3SNMWlyqmI2dSYa_ODTQ0s0xaRIRmlUJ1xZGENM6o6qHTs4afOo5xGpQRvR9NKEAAle2LRyxRpw" />
                            </div>
                            <div class="p-6 bg-secondary-fixed rounded-2xl text-center">
                                <h4 class="text-3xl font-headline font-extrabold text-on-secondary-fixed">12+</h4>
                                <p class="text-xs font-bold text-on-secondary-fixed-variant">Years of Expertise</p>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="p-6 bg-primary-fixed rounded-2xl text-center">
                                <h4 class="text-3xl font-headline font-extrabold text-on-primary-fixed">15k+</h4>
                                <p class="text-xs font-bold text-on-primary-fixed-variant">Spaces Designed</p>
                            </div>
                            <div class="aspect-[3/4] rounded-2xl overflow-hidden">
                                <img alt="Nature play" class="w-full h-full object-cover"
                                    data-alt="natural wood textures and biophilic design elements within a modern sensory development center"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDps8ePbEa5D_UPOuMTuh2DISzbW0L532tT2tb3ZVN1bx_MpmpVD7Zh0hCbEypf08wF-t_45JgRBKpQ0empD7zcL_2IRElVErsxXJvp3puy2iJ_6Tznwt-EXB0JJmZA94F_LWw4bkoPRl94roCCYl3Nkw2VuoibccC9evZQbMZmAIlxjhxUyoPfY5a-DkgJ7bNXK7Z3veM0I5X49nQYOV53OBQ60VAxgOsFkp8-CQ0JlbMLhz9DOHRO8Zke896d90HzPqgcnN6ww8A" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-1 lg:order-2">
                    <span class="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                    <h2 class="font-headline text-4xl font-extrabold text-on-surface mb-8 leading-tight">Better Outcomes
                        through Evidence-Based Design.</h2>
                    <p class="text-on-surface-variant text-lg leading-relaxed mb-8">
                        At Kinetix, we bridge the gap between clinical necessity and creative play. Founded by a team of
                        pediatric physiotherapists, we specialize in high-performance sensory tools that support
                        neurodiversity and physical rehabilitation.
                    </p>
                    <div class="space-y-4 mb-10">
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-secondary"
                                data-icon="check_circle">check_circle</span>
                            <span class="font-bold text-on-surface">Physiotherapist-Approved Equipment</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-secondary"
                                data-icon="check_circle">check_circle</span>
                            <span class="font-bold text-on-surface">Eco-Friendly &amp; Non-Toxic Materials</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-secondary"
                                data-icon="check_circle">check_circle</span>
                            <span class="font-bold text-on-surface">Specialized Support for Schools</span>
                        </div>
                    </div>
                    <button
                        class="px-8 py-4 bg-on-surface text-surface rounded-xl font-bold hover:bg-on-surface-variant transition-all">Learn
                        About Our Mission</button>
                </div>
            </div>
        </section>
    )
}