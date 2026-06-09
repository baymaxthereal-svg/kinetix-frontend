import { useCreateQuery } from '../../backend/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
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
        </main>
    );
}