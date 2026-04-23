import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useGetCategories, useUpdateCategory, useDeleteCategory } from '../backend/hooks';

export default function InventoryCategory() {
    const { data, isLoading, error, refetch } = useGetCategories();
    const { mutate: updateCategory } = useUpdateCategory();
    const { mutate: deleteCategory } = useDeleteCategory();
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    // Edit handler with properly styled modal (no overflow)
    const handleEdit = (category) => {
        Swal.fire({
            title: 'Edit Category',
            width: '800px',
            customClass: {
                popup: 'rounded-xl',
                htmlContainer: 'overflow-visible'
            },
            html: `
                <div class="space-y-5 text-left px-2">
                    <!-- Image section -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Category Image</label>
                        <div class="flex flex-col items-start gap-3">
                            ${category.image ? `<img src="${process.env.REACT_APP_BE_URL + category.image}" class="h-28 w-auto object-cover rounded-lg border border-gray-200 shadow-sm" />` : ''}
                            <input type="file" id="swal-image" accept="image/*" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                        </div>
                    </div>
                    <!-- Category Name -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Category Name <span class="text-red-500">*</span></label>
                        <input id="swal-name" class="swal2-input w-full !mt-0" value="${category.name.replace(/"/g, '&quot;')}" placeholder="e.g., Sensory Integration" />
                    </div>
                    <!-- Description -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Description <span class="text-red-500">*</span></label>
                        <textarea id="swal-description" class="swal2-textarea w-full" rows="4">${category.description.replace(/"/g, '&quot;')}</textarea>
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Update Category',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#0F67FE',
            preConfirm: () => {
                const name = (document.getElementById('swal-name')?.value || '').trim();
                const description = (document.getElementById('swal-description')?.value || '').trim();
                const imageFile = document.getElementById('swal-image')?.files[0];

                if (!name) {
                    Swal.showValidationMessage('Category name is required');
                    return false;
                }
                if (!description) {
                    Swal.showValidationMessage('Description is required');
                    return false;
                }

                const formData = new FormData();
                formData.append('name', name);
                formData.append('description', description);
                if (imageFile) formData.append('image', imageFile);
                return { formData };
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                const { formData } = result.value;
                updateCategory(
                    { id: category.id, formData },
                    {
                        onSuccess: () => {
                            Swal.fire({
                                icon: 'success',
                                title: 'Updated!',
                                text: 'Category has been updated.',
                                timer: 2000,
                                showConfirmButton: false
                            });
                            refetch();
                        },
                        onError: (err) => {
                            Swal.fire('Error', err.message || 'Update failed', 'error');
                        }
                    }
                );
            }
        });
    };

    // Delete handler with confirmation and loading indicator
    const handleDelete = (category) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You are about to delete "${category.name}". This action cannot be undone!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleting...',
                    text: 'Please wait',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                deleteCategory(category.id, {
                    onSuccess: () => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Deleted!',
                            text: `Category "${category.name}" has been removed.`,
                            timer: 2000,
                            showConfirmButton: false
                        });
                        refetch(); // refresh the list
                    },
                    onError: (err) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: err.message || 'Failed to delete category. Please try again.'
                        });
                    }
                });
            }
        });
    };

    return (
        <section className="py-3 px-3 flex-1">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
                        Category Management
                    </h2>
                </div>
                <div>
                    <Link
                        to="/dashboard/add-category"
                        className="bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined text-xl">add</span>
                        Add New Category
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm border-l-4 border-primary">
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">
                        Total Categories
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-4xl font-black text-on-surface">{data?.total || 0}</span>
                        <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined" data-icon="category">category</span>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-12 glass-card rounded-xl shadow-sm overflow-hidden">
                    <div className="px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-low/30 border-b border-outline-variant/15">
                        <div>
                            <h3 className="text-lg font-bold text-on-surface">All Categories</h3>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-lowest">
                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Category Name</th>
                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Description</th>
                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Created At</th>
                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/10">
                                {data?.data?.map((cat) => (
                                    <tr key={cat.id} className="hover:bg-primary-fixed/10 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary overflow-hidden">
                                                    {cat.image ? (
                                                        <img src={process.env.REACT_APP_BE_URL + cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="material-symbols-outlined">category</span>
                                                    )}
                                                </div>
                                                <span className="font-bold text-on-surface">{cat.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <p className="text-sm text-on-surface-variant max-w-xs line-clamp-1">{cat.description}</p>
                                        </td>
                                        <td className="px-8 py-5">
                                            <p className="text-sm text-on-surface-variant">
                                                {new Date(cat.created_at).toLocaleString('en-US')}
                                            </p>
                                        </td>
                                        <td className="px-8 py-5 text-right relative">
                                            <button
                                                onClick={() => toggleDropdown(cat.id)}
                                                className="text-slate-400 hover:text-primary transition-colors p-1 rounded-full focus:outline-none"
                                            >
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>

                                            {openDropdownId === cat.id && (
                                                <div className="absolute right-8 mt-2 w-36 bg-surface-container-high rounded-lg shadow-lg z-10 border border-outline-variant/20 overflow-hidden">
                                                    <button
                                                        onClick={() => {
                                                            handleEdit(cat);
                                                            setOpenDropdownId(null);
                                                        }}
                                                        className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-primary-fixed/20 transition-colors flex items-center gap-2"
                                                    >
                                                        <span className="material-symbols-outlined text-base">edit</span>
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            handleDelete(cat);
                                                            setOpenDropdownId(null);
                                                        }}
                                                        className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error/10 transition-colors flex items-center gap-2"
                                                    >
                                                        <span className="material-symbols-outlined text-base">delete</span>
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {(!data?.data || data.data.length === 0) && !isLoading && (
                                    <tr>
                                        <td colSpan="4" className="text-center py-12 text-on-surface-variant">
                                            No categories found. Click "Add New Category" to create one.
                                        </td>
                                    </tr>
                                )}
                                {isLoading && (
                                    <tr>
                                        <td colSpan="4" className="text-center py-12">Loading categories...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}