import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetCategories, useCreateProduct } from "../backend/hooks";
import { toast } from "react-toastify";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

// Validation schema
const productValidationSchema = Yup.object({
  name: Yup.string()
    .required("Product name is required")
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name cannot exceed 100 characters"),
  categoryId: Yup.string().required("Please select a category"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
  technicalDescription: Yup.string().nullable(),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive")
    .typeError("Price must be a number"),
  inStock: Yup.boolean(),
  tags: Yup.string(),
  heroImage: Yup.mixed().nullable(),
  image1: Yup.mixed().nullable(),
  image2: Yup.mixed().nullable(),
  image3: Yup.mixed().nullable(),
  image4: Yup.mixed().nullable(),
});

export default function AddProduct() {
  const { data: categoriesData } = useGetCategories();
  const { mutate: createProduct, isLoading: isProductLoading } = useCreateProduct();
  const navigate = useNavigate();

  // Refs for file inputs
  const heroInputRef = useRef();
  const img1InputRef = useRef();
  const img2InputRef = useRef();
  const img3InputRef = useRef();
  const img4InputRef = useRef();

  // Preview states
  const [heroPreview, setHeroPreview] = useState(null);
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2Preview, setImage2Preview] = useState(null);
  const [image3Preview, setImage3Preview] = useState(null);
  const [image4Preview, setImage4Preview] = useState(null);

  const handleImageUpload = (file, fieldName, setPreview) => {
    if (file) {
      formik.setFieldValue(fieldName, file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      formik.setFieldValue(fieldName, null);
      setPreview(null);
    }
  };

  const triggerFileInput = (ref) => ref.current.click();

  const formik = useFormik({
    initialValues: {
      name: "",
      categoryId: "",
      description: "",
      technicalDescription: "",
      price: "",
      inStock: true,
      tags: "",
      heroImage: null,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
    },
    validationSchema: productValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const productData = new FormData();
      productData.append("title", values.name);
      productData.append("category_id", values.categoryId);
      productData.append("description", values.description);
      productData.append("technical_description", values.technicalDescription);
      productData.append("price", values.price);
      productData.append("in_stock", values.inStock);
      productData.append("tags", values.tags);

      const allImages = [
        values.heroImage,
        values.image1,
        values.image2,
        values.image3,
        values.image4,
      ].filter((img) => img !== null);

      allImages.forEach((image) => {
        productData.append("images", image);
      });

      setSubmitting(true);

      createProduct(productData, {
        onSuccess: (response) => {
          toast.success(response?.message || "Product created successfully!");
          resetForm();
          setHeroPreview(null);
          setImage1Preview(null);
          setImage2Preview(null);
          setImage3Preview(null);
          setImage4Preview(null);
          setSubmitting(false);
          navigate('/dashboard/product');
        },
        onError: (error) => {
          const errorMsg = error?.response?.data?.message || error.message || "Failed to create product";
          toast.error(errorMsg);
          setSubmitting(false);
        },
      });
    },
  });

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };
  const quillFormats = ["header", "bold", "italic", "underline", "list"];

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      <form onSubmit={formik.handleSubmit} className="py-4 max-w-7xl mx-auto w-full grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-8 space-y-8">
          {/* Identity Section */}
          <section className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Identity
              </span>
              <div className="h-[1px] flex-1 bg-surface-container"></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-bold text-on-surface mb-2">Product Name</label>
                <input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all ${formik.touched.name && formik.errors.name ? "ring-2 ring-error" : ""
                    }`}
                  placeholder="e.g. Weighted Sensory Compression Vest"
                  type="text"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-error text-xs mt-1">{formik.errors.name}</p>
                )}
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold text-on-surface mb-2">Category</label>
                <select
                  name="categoryId"
                  value={formik.values.categoryId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all appearance-none ${formik.touched.categoryId && formik.errors.categoryId ? "ring-2 ring-error" : ""
                    }`}
                >
                  <option value="">Select category</option>
                  {categoriesData?.data?.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {formik.touched.categoryId && formik.errors.categoryId && (
                  <p className="text-error text-xs mt-1">{formik.errors.categoryId}</p>
                )}
              </div>
            </div>
          </section>

          {/* Clinical Data Section */}
          <section className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Clinical Data
              </span>
              <div className="h-[1px] flex-1 bg-surface-container"></div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Description</label>
                <textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all ${formik.touched.description && formik.errors.description ? "ring-2 ring-error" : ""
                    } h-40 md:h-24`}
                  placeholder="Detail the therapeutic benefits, pressure mapping, and patient use cases..."
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-error text-xs mt-1">{formik.errors.description}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Technical Description</label>
                <div className="min-h-[200px] md:min-h-[120px]">
                  <ReactQuill
                    theme="snow"
                    value={formik.values.technicalDescription}
                    onChange={(content) => formik.setFieldValue("technicalDescription", content)}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Enter ISO certifications, material safety data, weight limits, etc."
                    className="bg-surface-container-highest rounded-lg h-full"
                  />
                </div>
                <p className="text-xs text-on-surface-variant mt-1">
                  Tip: Use bold, lists, and headings to structure the technical description.
                </p>
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Tags (comma separated)</label>
                <input
                  name="tags"
                  value={formik.values.tags}
                  onChange={formik.handleChange}
                  className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all"
                  placeholder="e.g., sensory, weighted, compression"
                  type="text"
                />
                <p className="text-xs text-on-surface-variant mt-1">Helps with search and filtering</p>
              </div>
            </div>
          </section>

          {/* Media Assets Section */}
          <section className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Media Assets
              </span>
              <div className="h-[1px] flex-1 bg-surface-container"></div>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-80">
              {/* Hero image (large) */}
              <div
                onClick={() => triggerFileInput(heroInputRef)}
                className="col-span-2 row-span-2 bg-surface-container-high rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors group cursor-pointer overflow-hidden relative"
              >
                {heroPreview ? (
                  <img src={heroPreview} alt="Hero preview" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary mb-2">
                      add_a_photo
                    </span>
                    <span className="text-sm font-semibold text-slate-500">Hero Product Shot</span>
                  </>
                )}
                <input
                  type="file"
                  ref={heroInputRef}
                  onChange={(e) => handleImageUpload(e.target.files[0], "heroImage", setHeroPreview)}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              {/* Small image 1 */}
              <div
                onClick={() => triggerFileInput(img1InputRef)}
                className="bg-surface-container-high rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer overflow-hidden"
              >
                {image1Preview ? (
                  <img src={image1Preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-slate-400">add</span>
                )}
                <input
                  type="file"
                  ref={img1InputRef}
                  onChange={(e) => handleImageUpload(e.target.files[0], "image1", setImage1Preview)}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              {/* Small image 2 */}
              <div
                onClick={() => triggerFileInput(img2InputRef)}
                className="bg-surface-container-high rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer overflow-hidden"
              >
                {image2Preview ? (
                  <img src={image2Preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-slate-400">add</span>
                )}
                <input
                  type="file"
                  ref={img2InputRef}
                  onChange={(e) => handleImageUpload(e.target.files[0], "image2", setImage2Preview)}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              {/* Small image 3 */}
              <div
                onClick={() => triggerFileInput(img3InputRef)}
                className="bg-surface-container-high rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer overflow-hidden"
              >
                {image3Preview ? (
                  <img src={image3Preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-slate-400">add</span>
                )}
                <input
                  type="file"
                  ref={img3InputRef}
                  onChange={(e) => handleImageUpload(e.target.files[0], "image3", setImage3Preview)}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              {/* Small image 4 */}
              <div
                onClick={() => triggerFileInput(img4InputRef)}
                className="bg-surface-container-high rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer overflow-hidden"
              >
                {image4Preview ? (
                  <img src={image4Preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-slate-400">add</span>
                )}
                <input
                  type="file"
                  ref={img4InputRef}
                  onChange={(e) => handleImageUpload(e.target.files[0], "image4", setImage4Preview)}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-12 md:col-span-4 space-y-8">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-sky-900">Inventory Status</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Clinical Price (PKR)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">Rs</span>
                  <input
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full pl-8 bg-surface-container-highest border-none rounded-lg p-3 text-on-surface font-bold ${formik.touched.price && formik.errors.price ? "ring-2 ring-error" : ""
                      }`}
                    placeholder="0.00"
                    type="number"
                    step="0.01"
                  />
                </div>
                {formik.touched.price && formik.errors.price && (
                  <p className="text-error text-xs mt-1">{formik.errors.price}</p>
                )}
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium">In Stock</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    name="inStock"
                    type="checkbox"
                    className="sr-only peer"
                    checked={formik.values.inStock}
                    onChange={formik.handleChange}
                  />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Catalog Preview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Catalog Preview
              </span>
              <div className="h-[1px] flex-1 bg-surface-container"></div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/40">
              <div className="aspect-square bg-slate-200 overflow-hidden relative group">
                {heroPreview ? (
                  <img className="w-full h-full object-cover" src={heroPreview} alt="Product preview" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-5xl">image</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold rounded-full uppercase">
                  {formik.values.inStock ? "In Stock" : "Out of Stock"}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-on-surface leading-tight">
                    {formik.values.name || "Product Name"}
                  </h4>
                  <span className="text-primary font-bold">Rs {formik.values.price || "0.00"}</span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {formik.values.description || "Product description will appear here."}
                </p>
                {formik.values.tags && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {formik.values.tags.split(",").map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-surface-container px-2 py-0.5 rounded-full text-on-surface-variant"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formik.isSubmitting || isProductLoading}
            className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formik.isSubmitting || isProductLoading ? "Creating..." : "Create Product"}
          </button>
        </div>
      </form>
    </main>
  );
}