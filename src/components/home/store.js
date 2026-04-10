export default function Store() {
    return (
        <section class="py-24 bg-surface">
            <div class="max-w-7xl mx-auto px-6">
                <div class="mb-16">
                    <h2 class="font-headline text-4xl font-extrabold text-on-surface mb-4">Curated Specialized Care</h2>
                    <p class="text-on-surface-variant max-w-xl">Tailored equipment selections designed for specific
                        developmental and rehabilitative outcomes.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] md:h-[700px]">

                    <div class="md:col-span-4 bg-tertiary-fixed rounded-3xl overflow-hidden relative group">
                        <img alt="Creative Stores"
                            class="w-full h-full object-cover mix-blend-multiply opacity-40 group-hover:scale-105 transition-transform duration-700"
                            data-alt="close-up of wooden Montessori toys and creative educational tools arranged on a shelf with soft natural lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUQIJp23hXIAv-f0GMIF6T7Gmfi0lvIM9-MngBeJR9j6BRn9urFsNKWLgq4yYoZPxqxZKKvAnW0ycdOoBxf3md2TCiLgqADWCz7gq8o9c5FiQau693RXJm1Hfq63dOw1RY9O9z1IzRvUuDS0luCJExOxQEOpFYLgGEc4J-beaEl6TQ6dq4edldJ77wW6NfNahSMe5GF7Er7SeHObREFnw2QNddW4ttxEvXPFDqnruV_krp6IOqTfY2382693hMIKfd8j2qMEJn_Ng" />
                        <div class="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 class="text-3xl font-headline font-bold text-on-tertiary-fixed mb-2">Creative Stores</h3>
                            <p class="text-on-tertiary-fixed-variant mb-6">Playful learning tools for early development.</p>
                            <button
                                class="w-12 h-12 bg-on-tertiary-fixed text-tertiary-fixed rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div class="md:col-span-8 grid grid-rows-2 gap-6">

                        <div class="bg-secondary-fixed rounded-3xl overflow-hidden relative group">
                            <img alt="Occupational Therapy"
                                class="w-full h-full object-cover mix-blend-multiply opacity-30 group-hover:scale-105 transition-transform duration-700"
                                data-alt="modern clinical therapy room with tactile wall panels and physical therapy equipment in soft greens and whites"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf12UqBzJKx5_PZXrfgT0YImvcJhkV-PjGhkr6kocInBLsh18WJ7-8j5f04BzO5EGcGJD9Vi_gmHiuaE5dpzHEErNpai7RQUN08j2CLFszMuSbtYMHB0kGUR8OFQWkIk0_0kTwwW7u2AUqmGtedXPB2RuNmhry5SisD49HucRWGwpCgc9XpcYmRGQqBYeew4DZWgpQZtvXmq1kJg2jCHJxCuqGljve3wMt_rqVYGtUCwBQlEB57iXliSLJFOvRURArdyyFCqbvm9E" />
                            <div class="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 class="text-3xl font-headline font-bold text-on-secondary-fixed mb-2">Occupational
                                    Therapy</h3>
                                <p class="text-on-secondary-fixed-variant max-w-md">Professional grade tools for sensory
                                    motor rehabilitation.</p>
                            </div>
                        </div>

                        <div class="bg-primary-fixed rounded-3xl overflow-hidden relative group">
                            <img alt="Sensory Integration"
                                class="w-full h-full object-cover mix-blend-multiply opacity-30 group-hover:scale-105 transition-transform duration-700"
                                data-alt="abstract view of vibrant sensory liquid tiles and fiber optic light strands in a dark room setting"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJM3qeiZjV2klHhNygfkew-v-WTXXf0UpTKieZKsrhTqJDHMKQJSeIjJelHT0cyvVN3uk0Mg6aEQDSOYonzq-8CvEuaR_po_v_goIwoOZ3dZV0w9KSPUyGHKa3pFrIDTwInsMjL9vpUFqa5ACPwvwpOqbuBOqSfxitULjnGvcsM4ETdOMaFruT2yDJmvZLz4mx4BEli7tnMD83Nq5Us9NxuK8a059vDZwwGfp1ur9Ly2BcSxKa1p5laYAihzX4fWnB17dVlk_gUS8" />
                            <div class="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 class="text-3xl font-headline font-bold text-on-primary-fixed mb-2">Sensory Integration
                                </h3>
                                <p class="text-on-primary-fixed-variant max-w-md">Deep pressure and visual stimulation
                                    systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}