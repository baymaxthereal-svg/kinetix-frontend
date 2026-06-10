import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetProducts, useUpdateProduct, useDeleteProduct } from "../backend/hooks";
import { toast } from "react-toastify";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

// Helper component to embed Quill editor inside Swal modal
const QuillEditorWrapper = ({ initialValue, onReady }) => {
  const [value, setValue] = React.useState(initialValue || "");

  React.useEffect(() => {
    if (onReady) {
      onReady(() => value);
    }
  }, [value, onReady]);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder="Enter technical description..."
      modules={{
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "clean"],
        ],
      }}
      style={{ height: "200px", marginBottom: "40px" }}
    />
  );
};

export default function InventoryProduct() {
  const { data, isLoading, error, refetch } = useGetProducts();
  const { mutate: updateProduct } = useUpdateProduct();
  const { mutate: deleteProduct } = useDeleteProduct();
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const getTagsArray = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) {
      return tags.flatMap((item) => item.split(",").map((s) => s.trim()));
    }
    return tags.split(",").map((s) => s.trim());
  };

  const buildCurrentImagesHtml = (images) => {
    if (!images || images.length === 0)
      return `<p class="text-sm text-gray-500">No images uploaded yet.</p>`;
    const imgTags = images
      .map(
        (img, idx) => `
      <div class="relative inline-block">
        <img src="${process.env.REACT_APP_BE_URL + img}" class="h-20 w-20 object-cover rounded-lg border shadow-sm" />
        <span class="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center">${idx + 1}</span>
      </div>
    `
      )
      .join("");
    return `<div class="flex gap-3 flex-wrap">${imgTags}</div>`;
  };

  const handleEdit = (product) => {
    const tagString = getTagsArray(product.tags).join(", ");
    const currentImagesHtml = buildCurrentImagesHtml(product.images);

    let getQuillContent = null;
    let quillRoot = null;

    Swal.fire({
      title: `Edit Product: ${product.title}`,
      width: "950px",
      customClass: {
        popup: "rounded-xl",
        htmlContainer: "overflow-visible",
      },
      html: `
        <div class="text-left p-5 max-h-[70vh] overflow-y-auto">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Product Name *</label>
              <input id="edit-title" class="swal2-input w-full" value="${product.title.replace(
                /"/g,
                "&quot;"
              )}" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Category ID *</label>
              <input id="edit-category_id" class="swal2-input w-full" value="${product.category_id}" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Description</label>
              <textarea id="edit-description" class="swal2-textarea w-full" rows="3">${(
                product.description || ""
              ).replace(/"/g, "&quot;")}</textarea>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Technical Description</label>
              <div id="quill-editor-container"></div>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Price (PKR) *</label>
              <input id="edit-price" type="number" step="0.01" class="swal2-input w-full" value="${product.price}" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">In Stock</label>
              <select id="edit-in_stock" class="swal2-select w-full">
                <option value="yes" ${product.in_stock === "yes" ? "selected" : ""}>Yes</option>
                <option value="no" ${product.in_stock === "no" ? "selected" : ""}>No</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Tags (comma separated)</label>
              <input id="edit-tags" class="swal2-input w-full" value="${tagString}" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Current Images (max 5)</label>
              ${currentImagesHtml}
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Upload New Images (max 5)</label>
              <input type="file" id="edit-new-images" accept="image/*" multiple class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
              <div id="new-images-preview" class="flex gap-2 mt-2 flex-wrap"></div>
              <p class="text-xs text-gray-500 mt-1">If you upload new images, they will <strong>replace all current images</strong>. You can upload up to 5 images. Use Ctrl/Cmd to select multiple.</p>
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Update Product",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#0F67FE",
      didOpen: () => {
        const fileInput = document.getElementById("edit-new-images");
        const previewContainer = document.getElementById("new-images-preview");
        if (fileInput && previewContainer) {
          fileInput.addEventListener("change", (e) => {
            const files = Array.from(e.target.files);
            if (files.length > 5) {
              Swal.showValidationMessage("You can upload a maximum of 5 images.");
              fileInput.value = "";
              previewContainer.innerHTML = "";
              return;
            }
            previewContainer.innerHTML = "";
            files.forEach((file) => {
              const reader = new FileReader();
              reader.onload = (ev) => {
                const img = document.createElement("img");
                img.src = ev.target.result;
                img.className = "h-16 w-16 object-cover rounded border";
                previewContainer.appendChild(img);
              };
              reader.readAsDataURL(file);
            });
          });
        }

        const container = document.getElementById("quill-editor-container");
        if (container) {
          quillRoot = ReactDOM.createRoot(container);
          quillRoot.render(
            <QuillEditorWrapper
              initialValue={product.technical_description || ""}
              onReady={(getFn) => {
                getQuillContent = getFn;
              }}
            />
          );
        }
      },
      willClose: () => {
        if (quillRoot) {
          quillRoot.unmount();
          quillRoot = null;
        }
      },
      preConfirm: () => {
        const title = document.getElementById("edit-title")?.value.trim();
        const category_id = document.getElementById("edit-category_id")?.value.trim();
        const description = document.getElementById("edit-description")?.value.trim();
        const technical_description = getQuillContent ? getQuillContent() : "";
        const price = parseFloat(document.getElementById("edit-price")?.value);
        const in_stock = document.getElementById("edit-in_stock")?.value;
        const tags = document.getElementById("edit-tags")?.value.trim();
        const newImages = document.getElementById("edit-new-images")?.files;

        if (!title) {
          Swal.showValidationMessage("Product name is required");
          return false;
        }
        if (!category_id) {
          Swal.showValidationMessage("Category ID is required");
          return false;
        }
        if (isNaN(price) || price <= 0) {
          Swal.showValidationMessage("Price must be a positive number");
          return false;
        }
        if (newImages && newImages.length > 5) {
          Swal.showValidationMessage("You can only upload up to 5 images.");
          return false;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category_id", category_id);
        formData.append("description", description);
        if (technical_description) formData.append("technical_description", technical_description);
        formData.append("price", price);
        formData.append("in_stock", in_stock);
        formData.append("tags", tags);

        if (newImages && newImages.length) {
          for (let i = 0; i < newImages.length; i++) {
            formData.append("images", newImages[i]);
          }
        }
        return formData;
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const formData = result.value;
        updateProduct(
          { id: product.id, formData },
          {
            onSuccess: () => {
              Swal.fire("Updated!", "Product has been updated.", "success");
              refetch();
              setOpenDropdownId(null);
            },
            onError: (err) => {
              Swal.fire("Error", err.message || "Update failed", "error");
            },
          }
        );
      }
    });
  };

  const handleDelete = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete "${product.title}"? This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleting...",
          text: "Please wait",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });
        deleteProduct(product.id, {
          onSuccess: () => {
            Swal.fire("Deleted!", "Product has been deleted.", "success");
            refetch();
            setOpenDropdownId(null);
          },
          onError: (err) => {
            Swal.fire("Error", err.message || "Delete failed", "error");
          },
        });
      }
    });
  };

  if (isLoading) return <div className="p-8 text-center">Loading products...</div>;
  if (error) return <div className="p-8 text-center text-error">Error: {error.message}</div>;

  return (
    <main className="min-h-screen py-2 px-2">
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2 block">
            Tactile Inventory
          </span>
          <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">
            Product Management
          </h2>
        </div>
        <Link
          to="/dashboard/add-product"
          className="inline-flex items-center px-6 py-3 bg-primary text-on-primary rounded-xl font-bold transition-transform active:scale-95 duration-200"
        >
          <span className="material-symbols-outlined mr-2">add_circle</span>
          Add New Product
        </Link>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface-container-lowest p-6 rounded-2xl transition-all hover:bg-white flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              inventory_2
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-on-surface-variant">Total Products</p>
            <p className="text-2xl font-bold text-on-surface">{data?.count || 0}</p>
          </div>
        </div>
      </section>

      <div className="bg-surface-container-low p-1 rounded-3xl">
        <div className="bg-surface-container-lowest rounded-[1.25rem] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  <th className="px-6 py-4 min-w-[220px]">Product</th>
                  <th className="px-6 py-4 min-w-[120px]">Category</th>
                  <th className="px-6 py-4 min-w-[180px]">Tags</th>
                  <th className="px-6 py-4 min-w-[100px]">Stock</th>
                  <th className="px-6 py-4 min-w-[100px]">Price (PKR)</th>
                  <th className="px-6 py-4 text-right min-w-[100px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {data?.products?.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 min-w-[220px]">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            alt={prod.title}
                            src={prod.images?.[0] ? process.env.REACT_APP_BE_URL + prod.images[0] : "https://via.placeholder.com/56"}
                          />
                        </div>
                        <div>
                          <p className="font-bold text-on-surface break-words">{prod.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-outline min-w-[120px]">{prod.category_id}</td>
                    <td className="px-6 py-4 min-w-[180px]">
                      <div className="flex flex-wrap gap-1">
                        {getTagsArray(prod.tags).map((tag, idx) => (
                          <span key={idx} className="inline-flex items-center px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold rounded-full whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 min-w-[100px]">
                      {prod.in_stock === "yes" ? (
                        <span className="text-green-600 font-semibold whitespace-nowrap">In Stock</span>
                      ) : (
                        <span className="text-red-500 whitespace-nowrap">Out of Stock</span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-bold text-on-surface min-w-[100px]">
                      Rs {prod.price}
                    </td>
                    <td className="px-6 py-4 text-right relative min-w-[100px]">
                      <button onClick={() => toggleDropdown(prod.id)} className="p-2 text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                      {openDropdownId === prod.id && (
                        <div className="absolute right-8 mt-2 w-36 bg-surface-container-high rounded-lg shadow-lg z-10 border border-outline-variant/20 overflow-hidden">
                          <button onClick={() => { handleEdit(prod); setOpenDropdownId(null); }} className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-primary-fixed/20 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">edit</span> Edit
                          </button>
                          <button onClick={() => { handleDelete(prod); setOpenDropdownId(null); }} className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error/10 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">delete</span> Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}