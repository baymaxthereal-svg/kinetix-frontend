import { useCreateBuildOrder } from '../../backend/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BulkOrder() {
    const { mutate: CreateBulkOrder, isLoading } = useCreateBuildOrder();

    const formik = useFormik({
        initialValues: {
            institution_name: '',
            contact_person: '',
            work_email: '',
            expected_quantity: '',
            specific_product_interests: 'Full Sensory Room Fit-out',
            project_details: ''
        },
        validationSchema: Yup.object({
            institution_name: Yup.string().required('Institution name is required'),
            contact_person: Yup.string().required('Contact person is required'),
            work_email: Yup.string().email('Invalid email address').required('Work email is required'),
            expected_quantity: Yup.string(),
            specific_product_interests: Yup.string(),
            project_details: Yup.string().required('Project details are required')
        }),
        onSubmit: (values, { resetForm }) => {
            CreateBulkOrder(values, {
                onSuccess: () => {
                    toast.success('Quote request submitted successfully! Our team will contact you within 24 hours.', {
                        position: 'top-right',
                        autoClose: 5000
                    });
                    resetForm();
                },
                onError: (err) => {
                    toast.error(err.message || 'Failed to submit request. Please try again.', {
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
            <section className="relative min-h-[409px] flex items-center overflow-hidden">
                {/* Linear gradient background (#154360, #1A1A1A) */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#154360] to-[#1A1A1A]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold font-headline leading-tight tracking-tighter mb-6">
                            <span className="text-[#60CE80]">Bulk Supplier</span>{' '}
                            <span className="text-white">of Therapy & Medical Simulation Equipment</span>
                        </h1>
                        <p className="text-lg leading-relaxed mb-8 text-white">
                            Kinetix is a reliable bulk manufacturer and wholesale supplier of occupational therapy equipment, physiotherapy products, rehabilitation tools, and medical simulation mannequins for clinics, hospitals, universities, distributors, and healthcare institutions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 lg:-mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold font-headline mb-8 text-on-surface">Request a Quote</h2>
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-on-surface-variant px-1 font-label">
                                        Institution Name
                                    </label>
                                    <input
                                        type="text"
                                        name="institution_name"
                                        placeholder="e.g. St. Jude's Rehab Center"
                                        className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.institution_name}
                                    />
                                    {formik.touched.institution_name && formik.errors.institution_name && (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.institution_name}</div>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-on-surface-variant px-1 font-label">
                                        Contact Person
                                    </label>
                                    <input
                                        type="text"
                                        name="contact_person"
                                        placeholder="Full Name"
                                        className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.contact_person}
                                    />
                                    {formik.touched.contact_person && formik.errors.contact_person && (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.contact_person}</div>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-on-surface-variant px-1 font-label">
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        name="work_email"
                                        placeholder="name@institution.com"
                                        className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.work_email}
                                    />
                                    {formik.touched.work_email && formik.errors.work_email && (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.work_email}</div>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-on-surface-variant px-1 font-label">
                                        Expected Quantity
                                    </label>
                                    <input
                                        type="text"
                                        name="expected_quantity"
                                        placeholder="e.g. 50 units, 1000 sq ft"
                                        className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.expected_quantity}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-on-surface-variant px-1 font-label">
                                    Specific Product Interests
                                </label>
                                <select
                                    name="specific_product_interests"
                                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                    onChange={formik.handleChange}
                                    value={formik.values.specific_product_interests}
                                >
                                    <option value="Full Sensory Room Fit-out">Full Sensory Room Fit-out</option>
                                    <option value="Weighted Therapy Kits">Weighted Therapy Kits</option>
                                    <option value="Mobility & Rehab Furniture">Mobility & Rehab Furniture</option>
                                    <option value="Tactile Play Systems">Tactile Play Systems</option>
                                    <option value="Mixed Bulk Inventory">Mixed Bulk Inventory</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-on-surface-variant px-1 font-label">
                                    Project Details
                                </label>
                                <textarea
                                    name="project_details"
                                    placeholder="Tell us about your facility or specific requirements..."
                                    rows="4"
                                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.project_details}
                                />
                                {formik.touched.project_details && formik.errors.project_details && (
                                    <div className="text-red-500 text-xs mt-1">{formik.errors.project_details}</div>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all scale-100 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Quote Request'
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 gap-8">
                        <div className="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-4xl mb-4">verified_user</span>
                                <h3 className="text-2xl font-bold font-headline mb-2">Manufacture Under Your Brand</h3>
                                <p className="text-primary-fixed/80 leading-relaxed">
                                    Kinetix also offers OEM and private label manufacturing services for businesses and distributors who want to sell therapy or medical simulation products under their own brand name.
                                </p>
                            </div>
                            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <span className="material-symbols-outlined text-[200px]">domain</span>
                            </div>
                        </div>

                        <div className="bg-surface-container-high p-8 rounded-xl">
                            <h3 className="text-xl font-bold font-headline mb-6 text-on-surface">The Bulk Process</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                                        <span className="text-secondary font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface">Share Your Requirements</h4>
                                        <p className="text-sm text-on-surface-variant">Tell Us What You Need</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                                        <span className="text-secondary font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface">Design & Quotation Approval</h4>
                                        <p className="text-sm text-on-surface-variant">Get Custom Plan & Pricing</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                                        <span className="text-secondary font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface">Production & Delivery</h4>
                                        <p className="text-sm text-on-surface-variant">We Manufacture & Deliver to You</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Need immediate help - clickable with phone number */}
                        <a
                            href="tel:03144201005"
                            className="bg-tertiary-fixed text-on-tertiary-fixed p-8 rounded-xl flex items-center justify-between border-none hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            <div>
                                <h4 className="font-bold font-headline">Need immediate help?</h4>
                                <p className="text-sm opacity-80">Call our institutional desk</p>
                                <p className="text-lg font-bold mt-2">0314 4201005</p>
                            </div>
                            <span className="material-symbols-outlined text-4xl">support_agent</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}