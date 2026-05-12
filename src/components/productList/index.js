import { Link, useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useGetProductsByCat } from "../../backend/hooks";

export default function ProductList() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsByCat(id);
  const dispatch = useDispatch();

  // State for search and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured"); // featured, price_asc, price_desc

  // Process products: filter by search term, then sort
  const filteredProducts = useMemo(() => {
    if (!data) return [];
    let products = [...data];

    // Filter by search term (title or description)
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      products = products.filter(
        (p) =>
          p.title?.toLowerCase().includes(term) ||
          p.description?.toLowerCase().includes(term) ||
          p.tags?.join(" ").toLowerCase().includes(term)
      );
    }

    // Sorting
    switch (sortBy) {
      case "price_asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        products.sort((a, b) => b.price - a.price);
        break;
      default:
        // Featured: keep original order (or sort by id if needed)
        break;
    }
    return products;
  }, [data, searchTerm, sortBy]);

  // Helper to get the first image URL or placeholder
  const getImageUrl = (product) => {
    if (product.images && product.images.length > 0) {
      return process.env.REACT_APP_BE_URL + product.images[0];
    }
    return "https://via.placeholder.com/400x500?text=No+Image";
  };

  // Rating display (if product has rating, else show 5 stars as placeholder)
  const renderRating = (product) => {
    const rating = product.rating || 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span
          key={i}
          className="material-symbols-outlined text-tertiary text-sm"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span
          key="half"
          className="material-symbols-outlined text-tertiary text-sm"
          style={{ fontVariationSettings: "'FILL' 0.5" }}
        >
          star_half
        </span>
      );
    }
    for (let i = stars.length; i < totalStars; i++) {
      stars.push(
        <span
          key={i}
          className="material-symbols-outlined text-outline-variant text-sm"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      );
    }
    return (
      <div className="flex items-center gap-1 mb-3">
        {stars}
        <span className="text-xs text-on-surface-variant ml-1 font-medium">
          ({product.reviewCount || 0})
        </span>
      </div>
    );
  };

  if (isLoading) {
    return (
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
        <div className="text-lg text-on-surface-variant">Loading products...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
        <div className="text-lg text-error">Error: {error.message}</div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant opacity-70 mb-2 block">
              Premium Equipment
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              {data?.categoryName || "Therapeutic Recovery"}
            </h1>
          </div>
          <p className="max-w-md text-on-surface-variant text-lg leading-relaxed">
            {data?.categoryDescription ||
              "Curated sensory and rehabilitation tools designed for clinical precision and domestic comfort."}
          </p>
        </div>
      </header>

      {/* Filters and search bar */}
      <section className="bg-surface-container-low p-4 rounded-xl mb-12 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full md:w-auto">
          <span
            className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"
            data-icon="search"
          >
            search
          </span>
          <input
            type="text"
            className="w-full bg-surface-container-lowest border-none ring-0 focus:ring-2 focus:ring-primary rounded-lg pl-12 pr-4 py-3 text-sm transition-all"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex bg-surface-container-lowest rounded-lg p-1">
            <button className="px-4 py-2 text-sm font-semibold bg-primary text-on-primary rounded-md shadow-sm">
              Grid
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high rounded-md transition-colors">
              List
            </button>
          </div>
          <div className="relative flex-grow md:flex-grow-0">
            <select
              className="appearance-none w-full bg-surface-container-lowest border-none ring-0 focus:ring-2 focus:ring-primary rounded-lg pl-4 pr-10 py-3 text-sm font-medium cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Sort: Featured</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-sm">
              expand_more
            </span>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {filteredProducts.map((product, index) => (
          <article
            key={product.id}
            className={`group ${index % 2 === 1 ? "lg:translate-y-8" : ""}`}
          >
            <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={product.title}
                  src={getImageUrl(product)}
                />
              </div>
              <div className="p-6">
                {renderRating(product)}
                <Link
                  to={`/ProductDetail/${product.id}`}
                  className="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors"
                >
                  {product.title}
                </Link>
                <p className="text-primary font-extrabold text-xl mb-5">
                  ${Number(product.price).toFixed(2)}
                </p>
                <button
                  className="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <span className="material-symbols-outlined text-xl">
                    add_shopping_cart
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Optional: Pagination (if needed) – can be added later */}
      {filteredProducts.length === 0 && !isLoading && (
        <div className="text-center py-12 text-on-surface-variant">
          No products found.
        </div>
      )}

      {/* Pagination UI – placeholder, you can implement later */}
      <nav className="mt-20 flex justify-center gap-2">
        <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-primary-fixed transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold">
          1
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-primary-fixed transition-colors">
          2
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-primary-fixed transition-colors">
          3
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-primary-fixed transition-colors">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </nav>
    </main>
  );
}