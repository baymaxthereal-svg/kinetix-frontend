import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateAdmin } from '../backend/hooks';

export default function Settings() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  
  const { mutate: createAdmin, isLoading: isSubmitting } = useCreateAdmin();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Payload: only username (email) and password (backend requirement)
    const payload = {
      username: formData.email,
      password: formData.password,
    };

    createAdmin(payload, {
      onSuccess: () => {
        toast.success('Admin created successfully!', {
          position: 'bottom-right',
          autoClose: 3000,
        });
        // Reset form
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
        });
      },
      onError: (err) => {
        toast.error(err.message || 'Failed to create admin', {
          position: 'bottom-right',
          autoClose: 4000,
        });
      },
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Settings</h1>
        <p className="text-on-surface-variant mt-2">Manage system settings and administrator accounts.</p>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/15 overflow-hidden">
        <div className="px-6 py-4 border-b border-outline-variant/10 bg-surface-container-low">
          <h2 className="text-lg font-bold text-on-surface">Create New Administrator</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email (used as username) */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant">
                Email Address / Username <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all ${
                  errors.email ? 'ring-2 ring-error' : ''
                }`}
                placeholder="admin@example.com"
              />
              {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant">
                Password <span className="text-error">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all ${
                  errors.password ? 'ring-2 ring-error' : ''
                }`}
                placeholder="••••••"
              />
              {errors.password && <p className="text-error text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant">
                Confirm Password <span className="text-error">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all ${
                  errors.confirmPassword ? 'ring-2 ring-error' : ''
                }`}
                placeholder="••••••"
              />
              {errors.confirmPassword && <p className="text-error text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div className="pt-4 border-t border-outline-variant/10 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary text-on-primary rounded-xl font-bold shadow-md hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                  Creating...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  Create Admin
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}