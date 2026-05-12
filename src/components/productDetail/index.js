import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useGetProductsByID } from "../../backend/hooks";

export default function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsByID(id);
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getTagsArray = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) {
      return tags.flatMap(item => item.split(',').map(s => s.trim()));
    }
    return tags.split(',').map(s => s.trim());
  };

  if (data && !mainImage && data.images?.length) {
    setMainImage(data.images[0]);
  }

  if (isLoading) {
    return (
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6 text-center">
        <div className="text-lg text-on-surface-variant">Loading product...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6 text-center">
        <div className="text-lg text-error">Error: {error.message}</div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6 text-center">
        <div className="text-lg text-on-surface-variant">Product not found.</div>
      </main>
    );
  }

  const product = data;
  const images = product.images || [];
  const tagsArray = getTagsArray(product.tags);
  const inStock = product.in_stock === "yes";
  const categoryName = product.category_name || "Products";

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    // Dispatch product with selected quantity
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-on-surface-variant">
        <span>Shop</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span>{categoryName}</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary font-bold">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column – images */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-xl overflow-hidden bg-surface-container-low aspect-video relative group">
            <img
              alt={product.title}
              className="w-full h-full object-cover"
              src={mainImage ? process.env.REACT_APP_BE_URL + mainImage : "https://via.placeholder.com/800x450"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(img)}
                className={`rounded-lg overflow-hidden border-2 bg-surface-container-low aspect-square cursor-pointer transition-all ${mainImage === img ? "border-primary" : "border-transparent hover:border-outline-variant"
                  }`}
              >
                <img
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  src={process.env.REACT_APP_BE_URL + img}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right column – product info */}
        <div className="lg:col-span-5 space-y-8">
          <header className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              {tagsArray.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
              <span
                className={`${inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  } px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest`}
              >
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-on-surface leading-tight tracking-tight">
              {product.title}
            </h1>
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-primary">${Number(product.price).toFixed(2)}</span>
            </div>
          </header>

          {/* Description (plain text) */}
          <div className="space-y-6 text-on-surface-variant leading-relaxed font-body">
            <p className="text-lg">{product.description}</p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4 pt-4">
            <div className="flex gap-4">
              <div className="flex items-center bg-surface-container-highest rounded-xl px-4 py-2">
                <button onClick={decreaseQuantity} className="p-1 hover:text-primary">
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="px-6 font-bold text-on-surface">{quantity}</span>
                <button onClick={increaseQuantity} className="p-1 hover:text-primary">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!inStock}
                className={`flex-1 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all scale-100 active:scale-95 flex justify-center items-center gap-2 ${!inStock ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                <span className="material-symbols-outlined">add_shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Description with overflow fix */}
      {product.technical_description && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-on-surface mb-6">Technical Description</h2>
          <div className="bg-surface-container-lowest p-4 md:p-8 rounded-xl overflow-x-auto">
            <div
              className="prose prose-sm md:prose-lg max-w-none text-on-surface-variant
                         [&_img]:max-w-full [&_img]:h-auto
                         [&_table]:w-full [&_td]:border [&_th]:border [&_td]:px-2 [&_th]:px-2 [&_td]:py-1 [&_th]:py-1
                         [&_pre]:overflow-x-hidden [&_code]:break-words"
              dangerouslySetInnerHTML={{ __html: product.technical_description }}
            />
          </div>
        </div>
      )}
    </main>
  );
}