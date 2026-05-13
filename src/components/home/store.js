export default function Store() {
    // Category data (you can later replace with API data)
    const categories = [
        {
            id: 1,
            title: "Creative Stores",
            description: "Playful learning tools for early development.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUQIJp23hXIAv-f0GMIF6T7Gmfi0lvIM9-MngBeJR9j6BRn9urFsNKWLgq4yYoZPxqxZKKvAnW0ycdOoBxf3md2TCiLgqADWCz7gq8o9c5FiQau693RXJm1Hfq63dOw1RY9O9z1IzRvUuDS0luCJExOxQEOpFYLgGEc4J-beaEl6TQ6dq4edldJ77wW6NfNahSMe5GF7Er7SeHObREFnw2QNddW4ttxEvXPFDqnruV_krp6IOqTfY2382693hMIKfd8j2qMEJn_Ng",
            bgClass: "bg-tertiary-fixed",
            textClass: "text-on-tertiary-fixed",
            buttonBgClass: "bg-on-tertiary-fixed text-tertiary-fixed",
        },
        {
            id: 2,
            title: "Occupational Therapy",
            description: "Professional grade tools for sensory motor rehabilitation.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf12UqBzJKx5_PZXrfgT0YImvcJhkV-PjGhkr6kocInBLsh18WJ7-8j5f04BzO5EGcGJD9Vi_gmHiuaE5dpzHEErNpai7RQUN08j2CLFszMuSbtYMHB0kGUR8OFQWkIk0_0kTwwW7u2AUqmGtedXPB2RuNmhry5SisD49HucRWGwpCgc9XpcYmRGQqBYeew4DZWgpQZtvXmq1kJg2jCHJxCuqGljve3wMt_rqVYGtUCwBQlEB57iXliSLJFOvRURArdyyFCqbvm9E",
            bgClass: "bg-secondary-fixed",
            textClass: "text-on-secondary-fixed",
            buttonBgClass: "bg-on-secondary-fixed text-secondary-fixed",
        },
        {
            id: 3,
            title: "Sensory Integration",
            description: "Deep pressure and visual stimulation systems.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJM3qeiZjV2klHhNygfkew-v-WTXXf0UpTKieZKsrhTqJDHMKQJSeIjJelHT0cyvVN3uk0Mg6aEQDSOYonzq-8CvEuaR_po_v_goIwoOZ3dZV0w9KSPUyGHKa3pFrIDTwInsMjL9vpUFqa5ACPwvwpOqbuBOqSfxitULjnGvcsM4ETdOMaFruT2yDJmvZLz4mx4BEli7tnMD83Nq5Us9NxuK8a059vDZwwGfp1ur9Ly2BcSxKa1p5laYAihzX4fWnB17dVlk_gUS8",
            bgClass: "bg-primary-fixed",
            textClass: "text-on-primary-fixed",
            buttonBgClass: "bg-on-primary-fixed text-primary-fixed",
        },
        {
            id: 4,
            title: "Therapeutic Exercise",
            description: "Rehabilitation equipment for strength and mobility.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALx1ZjEYwzSV5PRHL8cr0axa6MjfG8fRi_TsKmOamucBW310Kfspig8QiEMTh5R9L5VAscauWjx8_2at1Xrx5PUxrATCvlzA-ssDTFWntTKFLKKsv6E_LDyW9MJa9IxyNylhGLtybvytMQ4XPPzHlE4Pk3HllF9-D-o2QRPQ_0Aa4CfrtaShR6xzsGDSWDEemlcTbOz3a0wVpN158nIHMx6L6VqUmQaWDpLkWR_ep5SY2q2Jv1v3MadSYgghXCeHAZJ4sKhXbQxbU",
            bgClass: "bg-tertiary-fixed",
            textClass: "text-on-tertiary-fixed",
            buttonBgClass: "bg-on-tertiary-fixed text-tertiary-fixed",
        },
    ];

    return (
        <section className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">
                        Curated Specialized Care
                    </h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto md:mx-0">
                        Tailored equipment selections designed for specific developmental and rehabilitative outcomes.
                    </p>
                </div>

                {/* 4‑card grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`${category.bgClass} rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full`}
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className={`text-2xl font-headline font-bold ${category.textClass} mb-2`}>
                                    {category.title}
                                </h3>
                                <p className={`${category.textClass.replace('text-', 'text-')?.replace('on-', 'on-') || 'text-on-surface-variant'} opacity-90 mb-6 flex-grow`}>
                                    {category.description}
                                </p>
                                <button
                                    className={`w-12 h-12 ${category.buttonBgClass} rounded-full flex items-center justify-center hover:scale-110 transition-transform self-end`}
                                    aria-label={`Explore ${category.title}`}
                                >
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}