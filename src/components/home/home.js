import homeImg from '../../assets/images/home.jpeg';
import starIcon from '../../assets/icon/star.svg';
export default function Home() {
    return (
        <section class="relative pt-32 pb-20 overflow-hidden bg-surface-container-low">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-6 z-10">
                    <span
                        class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-on-secondary-fixed-variant bg-secondary-fixed uppercase rounded-full">Physiotherapy Equipment</span>
                    <h1
                        class="font-headline text-5xl md:text-5xl font-extra font-bold text-on-surface leading-[1.1] mb-8 tracking-tight">
                        Advanced Therapy Equipment for Clinics, Schools & Homes
                    </h1>
                    <p class="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                        Kinetix delivers innovative physiotherapy and occupational therapy equipment for rehabilitation centers, special education schools, sensory rooms, and home care environments. From sensory integration products to therapy furniture, we provide reliable solutions focused on comfort, recovery, and development.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <button
                            class="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all scale-100 active:scale-95">
                            Shop Collection
                        </button>
                    </div>
                </div>
                <div class="lg:col-span-6 relative">
                    <div class="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <img alt="Kids in sensory room" class="w-full h-full object-cover"
                            src={homeImg} width="auto" height="auto" />
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                    </div>
                    <div
                        class="absolute -bottom-6 -left-6 md:-left-12 p-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl max-w-xs hidden md:block">
                        <div class="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-[#60CE80]">
                                <img src={starIcon} width="20" height="auto" alt="star" className="invert brightness-0" />
                            </div>
                            <div>
                                <p class="text-sm font-bold text-on-surface">Trusted by Clinics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}