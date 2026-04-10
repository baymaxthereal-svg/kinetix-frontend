export default function Home() {
    return (
        <section class="relative pt-32 pb-20 overflow-hidden bg-surface-container-low">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-6 z-10">
                    <span
                        class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-on-secondary-fixed-variant bg-secondary-fixed uppercase rounded-full">New
                        Arrivals</span>
                    <h1
                        class="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
                        Empowering <span class="text-primary italic">Growth</span> with Sensory Solutions
                    </h1>
                    <p class="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                        Scientifically designed environments and equipment that nurture cognitive development through
                        tactile play and professional physical therapy.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <button
                            class="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all scale-100 active:scale-95">
                            Shop Collection
                        </button>
                        <button
                            class="px-8 py-4 bg-surface-container-high text-primary rounded-xl font-bold hover:bg-surface-container-highest transition-all">
                            Explore Sensory Rooms
                        </button>
                    </div>
                </div>
                <div class="lg:col-span-6 relative">
                    <div class="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <img alt="Kids in sensory room" class="w-full h-full object-cover"
                            data-alt="joyful children interacting with colorful fiber optic lights and soft play equipment in a professionally designed sensory therapy room"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcCdvTry-g8pb5FNZY2losRJXy_YYH62mn3uEYJjT_e7KD3eWlQ7fClik99Q5FzROD0VUEZPKiydep_4Bb2H3LmVFhpU5YS2TVG77VCI4jCiDSAsblyVRtTeKoR88h88gIObeeKa3K6aPfRj-hLcFc1t9L4NRO7ICYdkRfLCTqg5yytyOkLeKdbnJp_7N110QKXxZ_bWRVaFfYWSvFaMww66mTYLGbo-R8f_OL-5e1PQJg3jEJoUyaEle2ooHu1wrsElL_6etzXdE" />
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                    </div>
                    <div
                        class="absolute -bottom-6 -left-6 md:-left-12 p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl max-w-xs hidden md:block">
                        <div class="flex items-center gap-4">
                            <div class="bg-tertiary-fixed p-3 rounded-full">
                                <span class="material-symbols-outlined text-tertiary"
                                    data-icon="trusted_stepper">steppers</span>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-on-surface">Trusted by Clinics</p>
                                <p class="text-xs text-on-surface-variant">500+ institutions worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}