import { useCreateQuery } from '../../backend/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {
    const { mutate: createQuery, isLoading } = useCreateQuery();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            interested_in: 'Sensory Room Design',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            interested_in: Yup.string(),
            message: Yup.string().required('Message is required')
        }),
        onSubmit: (values, { resetForm }) => {
            createQuery(values, {
                onSuccess: () => {
                    toast.success('Message sent! We’ll get back to you within 24 hours.', {
                        position: 'top-right',
                        autoClose: 4000
                    });
                    resetForm();
                },
                onError: (err) => {
                    toast.error(err.message || 'Failed to send message. Please try again.', {
                        position: 'top-right',
                        autoClose: 5000
                    });
                }
            });
        }
    });

    return (
        <main className="pt-20">
            <ToastContainer />

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
                                Our Mission
                            </span>
                            <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface mb-8 leading-[1.1]">
                                The Therapeutic <br /><span className="text-primary">Sanctuary</span> for Growth.
                            </h1>
                            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                                At Kinetix, we believe physiotherapy is more than recovery—it's about rediscovering movement
                                in an environment designed with empathy and clinical excellence.
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

            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight mb-4">Core Principles</h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-3xl">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">psychology</span>
                            <h3 className="text-2xl font-bold font-headline mb-4">Tactile Empathy</h3>
                            <p className="text-on-surface-variant leading-relaxed">We don't just provide equipment; we understand the tactile needs of every child and patient. Our sensory rooms are curated to soothe over-stimulated minds.</p>
                        </div>
                        <div className="md:col-span-2 bg-primary text-on-primary p-10 rounded-3xl relative overflow-hidden">
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6">clinical_notes</span>
                                <h3 className="text-2xl font-bold font-headline mb-4 text-white">Clinical Integrity</h3>
                                <p className="text-primary-fixed opacity-90 leading-relaxed">Every piece of rehab gear in our catalog is vetted by practicing therapists for anatomical safety and durability.</p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        </div>
                        <div className="md:col-span-4 lg:col-span-1 bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between">
                            <span className="material-symbols-outlined text-secondary text-4xl mb-4">diversity_3</span>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">Community</h3>
                                <p className="text-sm text-on-surface-variant">Supporting 200+ local clinics.</p>
                            </div>
                        </div>
                        <div className="md:col-span-4 lg:col-span-3 bg-surface-container-lowest p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <img alt="Therapist Team" className="w-full h-32 object-cover rounded-xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8czdGOT63VHbQ4v710HvTSMPXCj1XENRvqG3_uUyFTsXzS0f4c8LP1inBUWf2_TRedoW9dkVHOG0bMn0NILPdbbi6zt8SUc4DZ36g3fZyAK7MXFCX_bst1gfeLh6kjiq2Sf2iKDrPR2mEQLhjNj-j7i3_VL-b0-LGCCaSpyrD2JngSTvvP8JiPAiJBZRPNDt0pQ2x1hMledIsV9WMA23c_wnmaecIyk5VAlEQfxvoA9oS6ew-e4VUcuOBHjG9xIlrJ2_rvvVyeM" />
                            <div className="md:col-span-2">
                                <h3 className="text-xl font-bold font-headline mb-2">Expert Consultation</h3>
                                <p className="text-on-surface-variant">Our team offers on-site evaluations for sensory room installations in schools and hospitals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-on-surface mb-8">Get in Touch</h2>
                            <p className="text-lg text-on-surface-variant mb-12">Whether you're a parent seeking guidance or a hospital coordinator looking for bulk rehab equipment, our specialists are ready to assist.</p>
                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface text-lg mb-1">HQ &amp; Flagship Showroom</h4>
                                        <p className="text-on-surface-variant leading-relaxed">1292 Therapeutic Way, Wellness District<br />Portland, OR 97201</p>
                                        <a className="text-primary font-semibold text-sm mt-2 inline-block hover:underline" href="#">View on Map</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">call</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface text-lg mb-1">Phone Support</h4>
                                        <p className="text-on-surface-variant">General: (555) 123-4567<br />Rehab Specialists: (555) 987-6543</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface text-lg mb-1">Email Inquiries</h4>
                                        <p className="text-on-surface-variant">General: hello@kinetix.care<br />Bulk Orders: clinical@kinetix.care</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 rounded-3xl overflow-hidden h-64 grayscale opacity-80 hover:grayscale-0 transition-all duration-500 shadow-lg">
                                <img alt="Location Map" className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGN38pEp3tnJX6gcz_cau_UNqA-0VY6W3cYzZIWJYbAUwfuyEhGEkiFZkt1FSY_DiC1e_HHoSevtmRUuv2jtNMJ0yph3UUxR5N39VBLvgqjY1tf1FhiqdbxLwZe4xMZuT-zmvjRcaaf2t6LNg_VmMlhlX3PWZIYHCjxd93T4vgrxlBUkqxKmVNH7IN9YHrftdXxPBHpBjsjiBldk0qsfPCbTYGOKYM_2RdJx7FY2TFeITJDFGANip4BOOX5XoiPAEKCrOSEiZH2qo" />
                            </div>
                        </div>

                        <div className="bg-surface-container p-8 md:p-12 rounded-[2.5rem]">
                            <h3 className="text-2xl font-bold font-headline mb-8">Send an Inquiry</h3>
                            <form onSubmit={formik.handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                        {formik.touched.name && formik.errors.name && (
                                            <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">I am interested in...</label>
                                    <select
                                        name="interested_in"
                                        className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                        onChange={formik.handleChange}
                                        value={formik.values.interested_in}
                                    >
                                        <option value="Sensory Room Design">Sensory Room Design</option>
                                        <option value="Bulk Rehab Equipment">Bulk Rehab Equipment</option>
                                        <option value="Clinical Consultation">Clinical Consultation</option>
                                        <option value="Individual Product Support">Individual Product Support</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="How can we help you achieve your therapy goals?"
                                        className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message}
                                    />
                                    {formik.touched.message && formik.errors.message && (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.message}</div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-5 bg-primary text-on-primary font-bold text-lg rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <span className="material-symbols-outlined">send</span>
                                        </>
                                    )}
                                </button>
                            </form>
                            <p className="text-center text-sm text-on-surface-variant mt-6">Typically responds within 24 business hours.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-surface-container-lowest">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold font-headline text-on-surface mb-4">Our Regional Hubs</h2>
                        <p className="text-on-surface-variant">Visit our regional partners for in-person demos.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group cursor-pointer">
                            <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                                <img alt="Seattle Hub" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ApeJhAId9_ad-fdL59Qa4vMN-nIztCgkt0bL56LIzWIcJl9frkm22a_KTrHRvcqjPyycFz4y7_39SxGHyd9QawSCo34BYvf3s4MO8bM_t3rYoDFzyOlLys7BE4cVzV1N7ujkYxaA356NcYiymkWZxb8YY4AF-5P6tShwFa3DZLPcfkqgsnoFG296XDxhRVOWX-ywEEZEfSLpAl9MRSzWty8vy13_JJg1KrBLmv7sysJbfPJ7qf0eHJtYGXLL2AGmTu3kDeNehgw" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-6 text-white">
                                    <h4 className="font-bold text-xl">Seattle</h4>
                                    <p className="text-sm opacity-80">Pacific Northwest Division</p>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                                <img alt="SF Hub" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Zy-7-SwMDnW5jgFXDlNc1-zaa6w9-1qt4WW1qLZU5fj7yKGxzENfoew7ma01DGciWP8pY_sIzEJx1ppbpVbcudZtl_CItcW9QP8nDqwux1m00FEVS6H6Zbz7V8gvUKKbDzJGYoADKH2QLX-9XVn---jKKlKWqAuMXaThuJc14qXU3e-ZbrwXpU3JrDyfmNL5qRS2-tQLThj6jFS8x-9Wn3SBj86te7IHjFI7l1E4dGIf9avLVJ6XeebjIaVCzhobiG96BOz3jRc" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-6 text-white">
                                    <h4 className="font-bold text-xl">San Francisco</h4>
                                    <p className="text-sm opacity-80">Innovation &amp; R&amp;D Center</p>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                                <img alt="Denver Hub" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLSG9_AY7oc7HU16QzUYtd628Pea3s4qDrspdDjfsxyyr-oXHYB8_ayCdla5CcYwIm_YynKLP3kp5MGv6MCyhnkVOIlRmj4JqKbNsfvjvI-m4ZZrSlfE0nW0bg_fgqMkH9DG2UqCBlC5YwlKVs26vA2q4Ann1IKrZUyavUXkpTZYz8wJVgCGgEkHBDSOr4CCCg4l-vjUGbQjvJrwKIw6sxe9WBx3Jmb09mY7-v21w68ih5_0GQx6uTS40W7Nx2tanNot5HEZpfFO0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-6 text-white">
                                    <h4 className="font-bold text-xl">Denver</h4>
                                    <p className="text-sm opacity-80">Mountain West Logistics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}