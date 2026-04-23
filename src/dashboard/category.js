import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { useCreateCategory } from '../backend/hooks';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {
  const navigate = useNavigate(); // for React Router v6
  const { mutate: createCategory, isLoading } = useCreateCategory();
  const fileInputRef = useRef(null);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Category name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name cannot exceed 50 characters'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description cannot exceed 500 characters'),
    image: Yup.mixed()
      .nullable()
      .test('fileType', 'Only image files are allowed', (value) => {
        if (!value) return true;
        return ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(value.type);
      })
      .test('fileSize', 'File size must be less than 5MB', (value) => {
        if (!value) return true;
        return value.size <= 5 * 1024 * 1024;
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      image: null,
    },
    validationSchema,
    onSubmit: (values, { resetForm, setFieldValue, setFieldError, setStatus }) => {
      const categoryData = new FormData();
      categoryData.append('name', values.name);
      categoryData.append('description', values.description);
      if (values.image) categoryData.append('image', values.image);

      createCategory(categoryData, {
        onSuccess: (response) => {
          // ✅ Show success toast
          toast.success(`Category "${response.category?.name || values.name}" created successfully!`);

          // Reset form
          resetForm();
          setFieldValue('image', null);
          if (fileInputRef.current) fileInputRef.current.value = '';
          setStatus(null);
          navigate('/dashboard/category');
        },
        onError: (err) => {

          // Safely extract error message
          let errorMsg = '';
          if (err?.response?.data?.message) {
            errorMsg = err.response.data.message;
          } else if (err?.message) {
            errorMsg = err.message;
          } else if (typeof err === 'string') {
            errorMsg = err;
          } else {
            errorMsg = 'An unknown error occurred';
          }

          // Duplicate name → show inline error
          if (errorMsg.toLowerCase().includes('already exists')) {
            setFieldError('name', 'Category name already exists. Please choose a different name.');
            toast.error('Duplicate category name'); // optional toast
          } else {
            // Other errors → show toast + status message
            setStatus(errorMsg);
            toast.error(errorMsg);
          }
        },
      });
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    formik.setFieldValue('image', file);
    formik.setFieldTouched('image', true, false);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleCancel = () => {
    formik.resetForm();
    if (fileInputRef.current) fileInputRef.current.value = '';
    toast('Form cleared', { icon: '🔄' });
  };

  const thumbnailPreview = formik.values.image
    ? URL.createObjectURL(formik.values.image)
    : null;

  return (
    <main className="py-8 max-w-7xl">
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="col-span-8 space-y-8">
          <section className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-headline text-primary">Category Details</h3>
              <p className="text-sm text-on-surface-variant">
                Define the clinical grouping for new inventory items.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-on-surface-variant block">
                  Category Name
                </label>
                <input
                  name="name"
                  value={formik.values.name}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (formik.errors.name === 'Category name already exists. Please choose a different name.') {
                      formik.setFieldError('name', undefined);
                    }
                  }}
                  onBlur={formik.handleBlur}
                  className={`w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all outline-none ${formik.touched.name && formik.errors.name ? 'ring-2 ring-error' : ''
                    }`}
                  placeholder="e.g. Sensory Integration Tools"
                  type="text"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-error text-xs mt-1">{formik.errors.name}</p>
                )}
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-on-surface-variant block">
                  Clinical Focus / Description
                </label>
                <textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all outline-none ${formik.touched.description && formik.errors.description ? 'ring-2 ring-error' : ''
                    }`}
                  placeholder="Describe the therapeutic intent and clinical utility of this category..."
                  rows="5"
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-error text-xs mt-1">{formik.errors.description}</p>
                )}
              </div>
            </div>
          </section>

          {formik.status && (
            <div className="bg-error-container text-on-error-container p-4 rounded-lg text-sm">
              {formik.status}
            </div>
          )}

          <div className="flex items-center gap-6 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-4 bg-primary text-on-primary font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
                }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <span>Create Category</span>
                  <span className="material-symbols-outlined text-sm" data-icon="add_circle">
                    add_circle
                  </span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              disabled={isLoading}
              className="text-primary font-bold hover:text-primary-container transition-colors px-4 py-2 bg-surface-container-high rounded-lg disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Right Column – Thumbnail */}
        <div className="col-span-4 space-y-8">
          <section className="bg-surface-container-lowest p-6 rounded-xl space-y-4">
            <label className="text-xs uppercase font-bold tracking-widest text-on-surface-variant block">
              Category Thumbnail
            </label>
            <div
              onClick={!isLoading ? handleUploadClick : undefined}
              className={`aspect-video w-full bg-surface-container-highest rounded-lg overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-outline-variant transition-colors ${!isLoading ? 'group hover:bg-surface-bright cursor-pointer' : 'opacity-60 cursor-not-allowed'
                }`}
            >
              {thumbnailPreview ? (
                <img src={thumbnailPreview} alt="Thumbnail preview" className="w-full h-full object-cover" />
              ) : (
                <>
                  <span className="material-symbols-outlined text-4xl text-outline mb-2" data-icon="cloud_upload">
                    cloud_upload
                  </span>
                  <p className="text-xs font-medium text-outline">
                    Drag & drop or <span className="text-primary">browse</span>
                  </p>
                </>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              disabled={isLoading}
            />
            {formik.touched.image && formik.errors.image && (
              <p className="text-error text-xs mt-1">{formik.errors.image}</p>
            )}
            <p className="text-[10px] text-on-surface-variant leading-relaxed">
              Recommended: 1200x800px. High-resolution photos of clinical equipment or illustrative sensory patterns
              work best. Supported formats: JPEG, PNG, WEBP, GIF (max 5MB).
            </p>
          </section>
        </div>
      </form>
    </main>
  );
}