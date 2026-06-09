import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../backend/hooks';

export default function Store() {
  const { data, isLoading, error } = useGetCategories();
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-error/10 text-error p-4 rounded-xl">
            Failed to load categories. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  const categories = data?.data || [];

  if (categories.length === 0) {
    return (
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-on-surface-variant">No categories found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">
            Our Specialized Categories
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto md:mx-0">
            Browse a wide range of physiotherapy equipment, occupational therapy products,
            sensory integration tools, and home healthcare solutions.
          </p>
        </div>

        {/* Slider container with navigation */}
        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/90 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all -ml-4 opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={process.env.REACT_APP_BE_URL + category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-headline font-bold text-gray-900 mb-2 line-clamp-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3 text-sm">
                    {category.description}
                  </p>
                  <Link
                    to={`/ProductList/${category.id}`}
                    className="w-12 h-12 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 hover:shadow transition-all self-end"
                    aria-label={`Explore ${category.name}`}
                  >
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/90 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all -mr-4 opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Next"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {categories.map((_, idx) => (
            <button
              key={idx}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary transition-all"
              onClick={() => {
                if (!scrollContainerRef.current) return;
                const cardWidth =
                  scrollContainerRef.current.children[0]?.offsetWidth + 24;
                scrollContainerRef.current.scrollTo({
                  left: idx * cardWidth,
                  behavior: 'smooth',
                });
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}