import { useCreateQuery } from '../../backend/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {
    return (
        <main className="pt-20">
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary-container opacity-5"></div>
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-tertiary-fixed rounded-full blur-3xl opacity-20">
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
                                About Us
                            </span>
                            <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface mb-8 leading-[1.1]">
                                Innovative Therapy & Medical Training Solutions
                            </h1>
                            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                                Kinetix is a manufacturing-based company focused on producing functional, durable, and user-friendly therapy and medical simulation products. We combine practical design with quality craftsmanship to create equipment that improves therapy sessions, rehabilitation exercises, and medical training experiences.
                                <br /><br />
                                Whether you need ready-made products or custom-built solutions, our team works closely with therapists, healthcare professionals, educational institutes, and distributors to manufacture products that meet real-world needs.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform active:opacity-80">
                                    View Our Facilities
                                </button>
                                <button className="px-8 py-4 bg-surface-container-high text-primary rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors">
                                    Meet the Team
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                <img alt="Kinetix Facility" className="w-full h-[500px] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD94kq0lDJ9qcnlGYYbw_npe4FCJsp6K3c1BLuJdBn3qr9nNjkoBF1hOuJxLD_JkxRSZ12iTr4Fa2_2XmHwDUz14-ai3Ty5BFUo4qQZj1PwdtWoRf10myZC4gZRyGqoXgx_JkBh4QOJKebERtGR0RdZ1CHxhpOyBCekjDsyHOMmac9OJWFNd8bXsfl_pUJ-4DyWASoJnmeOmwATgPS-WbHlNpUA2lZJlCHvPvqcYjM1xnHg0v85vs0uSk6irS7J7SpM8n7Ni8Vrkxc" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl max-w-xs border border-white/20 hidden md:block">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="material-symbols-outlined text-tertiary text-3xl">spa</span>
                                    <p className="font-bold text-on-surface">Holistic Care</p>
                                </div>
                                <p className="text-sm text-on-surface-variant">Merging sensory stimulation with orthopedic precision for faster pediatric progress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Updated Core Principles Section */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight mb-4">Core Principles</h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Quality First */}
                        <div className="bg-surface-container-lowest p-8 rounded-3xl transition-shadow hover:shadow-lg">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">verified</span>
                            <h3 className="text-2xl font-bold font-headline mb-4">Quality First</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                We are committed to delivering durable, reliable, and professionally tested therapy and rehabilitation equipment that ensures safety and long-term performance in every care environment.
                            </p>
                        </div>

                        {/* Innovation in Care */}
                        <div className="bg-surface-container-lowest p-8 rounded-3xl transition-shadow hover:shadow-lg">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">lightbulb</span>
                            <h3 className="text-2xl font-bold font-headline mb-4">Innovation in Care</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                We focus on modern and smart solutions that enhance physiotherapy, occupational therapy, sensory integration, and home care experiences for better outcomes.
                            </p>
                        </div>

                        {/* Patient-Centered Approach */}
                        <div className="bg-surface-container-lowest p-8 rounded-3xl transition-shadow hover:shadow-lg">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">favorite</span>
                            <h3 className="text-2xl font-bold font-headline mb-4">Patient-Centered Approach</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                Every product is designed with the needs of patients, children, therapists, and caregivers in mind to support comfort, recovery, and independence.
                            </p>
                        </div>

                        {/* Trust & Reliability */}
                        <div className="bg-surface-container-lowest p-8 rounded-3xl transition-shadow hover:shadow-lg">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">handshake</span>
                            <h3 className="text-2xl font-bold font-headline mb-4">Trust & Reliability</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                We build long-term trust with healthcare professionals, schools, and families by providing consistent quality, dependable service, and proven therapy solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}