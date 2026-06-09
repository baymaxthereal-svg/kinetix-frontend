import { useState, useEffect } from 'react';
import { useGetProducts } from '../../backend/hooks';

// Product Card with auto image slider (no heart icon)
const ProductCard = ({ product }) => {
  const images = product.images || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getImageUrl = (path) => {
    if (!path) return 'https://via.placeholder.com/400x400?text=No+Image';
    return process.env.REACT_APP_BE_URL + path;
  };

  const shortDescription = product.description?.length > 100
    ? product.description.substring(0, 100) + '...'
    : product.description;

  return (
    <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all p-4 flex flex-col">
      {/* Image carousel – heart icon removed */}
      <div className="aspect-square rounded-2xl overflow-hidden bg-surface mb-6 relative group">
        <img
          src={getImageUrl(images[currentImageIndex])}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Image navigation dots (only if more than one image) */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToImage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="px-2 pb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-outline mb-1 block">
          {product.category_name || 'General'}
        </span>
        <h4 className="font-headline font-bold text-lg text-on-surface mb-1 line-clamp-2">
          {product.title}
        </h4>
        <p className="text-on-surface-variant text-sm mb-3 line-clamp-2">
          {shortDescription}
        </p>
        <p className="text-primary font-bold mb-4">${Number(product.price).toFixed(2)}</p>
        <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-semibold active:opacity-80 transition-opacity">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function BestSeller() {
  const { data, isLoading, error } = useGetProducts();
  const products = data?.products || [];

  if (isLoading) {
    return (
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-error/10 text-error p-4 rounded-xl">
            Failed to load products. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-on-surface-variant">No products found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-2">
              Recently Added Products
            </h2>
            <p className="text-on-surface-variant">
              Discover the latest therapy equipment, rehabilitation solutions, and home care
              products added to the Kinetix collection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}