import React, { useState, useRef } from 'react';

export default function AddCategory() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    parentCategory: 'None (Top Level)',
    description: '',
    activeStatus: true,
    internalOnly: false,
    draftMode: false,
  });

  // Thumbnail file state
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const fileInputRef = useRef(null);

  // Handle text/select inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle toggles (checkbox-like but using custom switch appearance)
  const handleToggle = (field) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setThumbnail(null);
      setThumbnailPreview(null);
    }
  };

  // Trigger hidden file input
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare data for API call
    const categoryData = new FormData();
    categoryData.append('name', formData.name);
    categoryData.append('parentCategory', formData.parentCategory);
    categoryData.append('description', formData.description);
    categoryData.append('activeStatus', formData.activeStatus);
    categoryData.append('internalOnly', formData.internalOnly);
    categoryData.append('draftMode', formData.draftMode);
    if (thumbnail) categoryData.append('thumbnail', thumbnail);

    // Example: console.log or send to backend
    console.log('Submitting category:', Object.fromEntries(categoryData));
    // Add your API call here
  };

  // Cancel / reset
  const handleCancel = () => {
    setFormData({
      name: '',
      parentCategory: 'None (Top Level)',
      description: '',
      activeStatus: true,
      internalOnly: false,
      draftMode: false,
    });
    setThumbnail(null);
    setThumbnailPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <main className="py-8 max-w-7xl">
      <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-12">
        {/* Left Column – Main Form Fields */}
        <div className="col-span-8 space-y-8">
          {/* Category Details Section */}
          <section className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-headline text-primary">Category Details</h3>
              <p className="text-sm text-on-surface-variant">
                Define the clinical grouping for new inventory items.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1 space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-on-surface-variant block">
                  Category Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all outline-none"
                  placeholder="e.g. Sensory Integration Tools"
                  type="text"
                  required
                />
              </div>

              <div className="col-span-2 md:col-span-1 space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-on-surface-variant block">
                  Parent Category
                </label>
                <select
                  name="parentCategory"
                  value={formData.parentCategory}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all outline-none appearance-none"
                >
                  <option>None (Top Level)</option>
                  <option>Occupational Therapy</option>
                  <option>Speech Therapy</option>
                  <option>Physical Therapy</option>
                  <option>Sensory Equipment</option>
                </select>
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-on-surface-variant block">
                  Clinical Focus / Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all outline-none"
                  placeholder="Describe the therapeutic intent and clinical utility of this category..."
                  rows="5"
                  required
                />
              </div>
            </div>
          </section>

          {/* Clinical Validation Section with Draft Mode Toggle */}
          <section className="bg-surface-container-low p-8 rounded-xl flex items-center justify-between">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined" data-icon="verified_user">
                  verified_user
                </span>
              </div>
              <div>
                <h4 className="font-bold font-headline">Clinical Validation</h4>
                <p className="text-sm text-on-surface-variant">
                  Requires head clinician approval for active status.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold font-label uppercase tracking-tighter">Draft Mode</span>
              <div
                onClick={() => handleToggle('draftMode')}
                className={`w-12 h-6 rounded-full relative p-1 cursor-pointer transition-colors ${
                  formData.draftMode ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    formData.draftMode ? 'translate-x-6' : ''
                  }`}
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 pt-4">
            <button
              type="submit"
              className="px-8 py-4 bg-primary-gradient text-on-primary font-bold rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center gap-2"
            >
              <span>Create Category</span>
              <span className="material-symbols-outlined text-sm" data-icon="add_circle">
                add_circle
              </span>
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="text-primary font-bold hover:text-primary-container transition-colors px-4 py-2 bg-surface-container-high rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Right Column – Thumbnail, Status, Info */}
        <div className="col-span-4 space-y-8">
          {/* Thumbnail Upload */}
          <section className="bg-surface-container-lowest p-6 rounded-xl space-y-4">
            <label className="text-xs uppercase font-bold tracking-widest text-on-surface-variant block">
              Category Thumbnail
            </label>
            <div
              onClick={handleUploadClick}
              className="aspect-video w-full bg-surface-container-highest rounded-lg overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-outline-variant group hover:bg-surface-bright transition-colors cursor-pointer"
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
            />
            <p className="text-[10px] text-on-surface-variant leading-relaxed">
              Recommended: 1200x800px. High-resolution photos of clinical equipment or illustrative sensory patterns
              work best.
            </p>
          </section>

          {/* Visibility & Status */}
          <section className="bg-surface-container-lowest p-6 rounded-xl space-y-6">
            <label className="text-xs uppercase font-bold tracking-widest text-on-surface-variant block">
              Visibility & Status
            </label>

            {/* Active Status Toggle */}
            <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleToggle('activeStatus')}>
                <span
                  className={`material-symbols-outlined ${
                    formData.activeStatus ? 'text-secondary' : 'text-outline'
                  }`}
                  data-icon="toggle_on"
                  style={formData.activeStatus ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  toggle_on
                </span>
                <span className="text-sm font-bold">Active Status</span>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                  formData.activeStatus
                    ? 'bg-secondary-fixed text-on-secondary-fixed'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {formData.activeStatus ? 'LIVE' : 'DRAFT'}
              </span>
            </div>

            {/* Internal Only Toggle */}
            <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleToggle('internalOnly')}>
                <span className="material-symbols-outlined text-outline" data-icon="lock">
                  lock
                </span>
                <span className="text-sm font-bold">Internal Only</span>
              </div>
              <div
                onClick={() => handleToggle('internalOnly')}
                className={`w-10 h-5 rounded-full relative p-0.5 cursor-pointer transition-colors ${
                  formData.internalOnly ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    formData.internalOnly ? 'translate-x-5' : ''
                  }`}
                />
              </div>
            </div>

            {/* Info Note */}
            <div className="pt-2 border-t border-surface-container">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-tertiary-fixed/30 border border-tertiary-fixed">
                <span className="material-symbols-outlined text-tertiary text-sm mt-0.5" data-icon="info">
                  info
                </span>
                <p className="text-[11px] text-on-tertiary-fixed-variant leading-tight">
                  Categories with active inventory cannot be archived without re-assigning items.
                </p>
              </div>
            </div>
          </section>

          {/* Inspirational Image Card */}
          <div className="relative overflow-hidden rounded-xl h-48 group">
            <img
              alt="Sensory Room Background"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_OFkobevlNHqqbIhWnS3OtTkYmSiVqIESe2XIxXx9qZzNH92o_6prRMYkkC9Kos2wXlRXI-l95wo5gK177bDCFwGClyfikzD-ey0s0ixxfej9nwGMJ3bQERYeDlKx1N6Dh9UUyvCrZlO2EswhGh1IBabIJ5K75U95Jm6_G0CRPSq53fNajxuAo8m3O7InnaewTsLuq3jwcrX0GKa8x_oWv7ldbXzSsIEmb4iatModnfl8OHg5XKn_Sz7Cv6uZ7DYoVJTh42GsA00"
            />
            <div className="absolute inset-0 bg-primary/40 glass-panel flex flex-col justify-end p-6">
              <h5 className="text-white font-bold font-headline leading-tight">Create Inclusive Hierarchies</h5>
              <p className="text-white/80 text-xs mt-1">
                Our system helps parents find equipment faster through intuitive clinical grouping.
              </p>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}