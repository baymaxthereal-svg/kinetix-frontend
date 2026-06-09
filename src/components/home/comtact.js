import { useCreateQuery } from '../../backend/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const { mutate: createQuery, isLoading } = useCreateQuery();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            interested_in: 'Bulk Order Program',
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
                    toast.success('Your inquiry has been sent! We’ll get back to you soon.', {
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
        <section className="py-24 bg-surface-container-low">
            <ToastContainer />
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-surface-container-lowest rounded-[3rem] p-10 md:p-20 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6">Need a Custom Solution?</h2>
                        <p className="text-on-surface-variant mb-10">
                            Looking for a full sensory room design or a bulk order quote? Our specialists are ready to help.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                </div>
                                <p className="font-semibold">hello@kinetixrehab.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-full">
                                    <span className="material-symbols-outlined text-secondary">call</span>
                                </div>
                                <p className="font-semibold">0314-4201005</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-on-surface-variant">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-on-surface-variant">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
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
                            <label className="text-xs font-bold uppercase text-on-surface-variant">Interested In</label>
                            <select
                                name="interested_in"
                                className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                                onChange={formik.handleChange}
                                value={formik.values.interested_in}
                            >
                                <option value="Bulk Order Program">Bulk Order Program</option>
                                <option value="Sensory Room Design">Sensory Room Design</option>
                                <option value="Equipment Consultation">Equipment Consultation</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-on-surface-variant">Message</label>
                            <textarea
                                name="message"
                                placeholder="How can we help your space?"
                                rows="4"
                                className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
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
                            className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20 scale-100 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                'Send Inquiry'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}