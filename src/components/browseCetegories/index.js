import { Link } from "react-router-dom";
import { useGetCategories } from "../../backend/hooks";

export default function BrowseCategories() {
  const { data, isLoading, error } = useGetCategories();

  if (isLoading) {
    return (
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="text-lg text-on-surface-variant">Loading categories...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="text-lg text-error">Error: {error.message}</div>
      </main>
    );
  }

  const categories = data?.data || [];
  if (categories.length === 0) {
    return (
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="text-lg text-on-surface-variant">No categories found.</div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* Grid of cards – no header, all categories equal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <article
            key={category.id}
            className="bg-surface-container-lowest p-2 rounded-xl flex flex-col group transition-all"
          >
            <div className="aspect-square w-full rounded-lg overflow-hidden mb-4 relative">
              <img
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={process.env.REACT_APP_BE_URL + category.image}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
            </div>
            <div className="px-4 pb-6">
              <h3 className="text-xl font-headline font-bold text-primary mb-2">{category.name}</h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed line-clamp-3">
                {category.description}
              </p>
              <Link
                to={`/ProductList/${category.id}`}
                className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore Category <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}