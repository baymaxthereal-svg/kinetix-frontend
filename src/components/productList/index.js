import { Link } from "react-router-dom"
export default function ProductList() {
    return (
        <main class="pt-32 pb-24 px-6 max-w-7xl mx-auto">

            <header class="mb-12">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span
                            class="text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant opacity-70 mb-2 block">Premium
                            Equipment</span>
                        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">Therapeutic Recovery
                        </h1>
                    </div>
                    <p class="max-w-md text-on-surface-variant text-lg leading-relaxed">
                        Curated sensory and rehabilitation tools designed for clinical precision and domestic comfort.
                    </p>
                </div>
            </header>

            <section class="bg-surface-container-low p-4 rounded-xl mb-12 flex flex-col md:flex-row gap-4 items-center">
                <div class="relative flex-grow w-full md:w-auto">
                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"
                        data-icon="search">search</span>
                    <input
                        class="w-full bg-surface-container-lowest border-none ring-0 focus:ring-2 focus:ring-primary rounded-lg pl-12 pr-4 py-3 text-sm transition-all"
                        placeholder="Search products..." type="text" />
                </div>
                <div class="flex items-center gap-3 w-full md:w-auto">
                    <div class="flex bg-surface-container-lowest rounded-lg p-1">
                        <button
                            class="px-4 py-2 text-sm font-semibold bg-primary text-on-primary rounded-md shadow-sm">Grid</button>
                        <button
                            class="px-4 py-2 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high rounded-md transition-colors">List</button>
                    </div>
                    <div class="relative flex-grow md:flex-grow-0">
                        <select
                            class="appearance-none w-full bg-surface-container-lowest border-none ring-0 focus:ring-2 focus:ring-primary rounded-lg pl-4 pr-10 py-3 text-sm font-medium cursor-pointer">
                            <option>Sort: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Top Rated</option>
                        </select>
                        <span
                            class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-sm"
                            data-icon="expand_more">expand_more</span>
                    </div>
                </div>
            </section>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">

                <article class="group">
                    <div
                        class="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="professional sensory weighted blanket in soft grey fabric draped over a minimalist wooden chair in a bright sunlit room"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Aa9fK3l-6KnRuuWlRUKd-uJn0hqgah9ZuvKlEc1MZE9VSoxSEgT2t8Fkchdy1Bfkjz8iLWK0hS7OCynRvTAj5ntIFBn6aQP2EptBvZP5LMxRZv7KTT-9B5ZmG5piQI5VvM0gdkx0uGEPNvSJ_w9wVY-5dWkCdIFggNnbICOmLDBj91fgd3JSo10x7stcB6HSU_RkvNHDBUkL6D2IiEcNJCviBdrc7konlCedxiEeSTA_XmMfyjqwXD2XOVUUR_eaIAsNFcRHzY4" />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-1 mb-3">
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="text-xs text-on-surface-variant ml-1 font-medium">(128)</span>
                            </div>
                            <Link
                            to="/ProductDetail"
                                class="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors">
                                NeuralCalm Weighted Blanket</Link>
                            <p class="text-primary font-extrabold text-xl mb-5">$189.00</p>
                            <button
                                class="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                                <span class="material-symbols-outlined text-xl"
                                    data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>

                <article class="group">
                    <div
                        class="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="vibrant therapeutic exercise ball with textured surface for sensory feedback sitting on a clean clinical floor"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg9w2-ymnV4AleQE9kJIS0x8dg7MTADsN5GZisQqUlCkbiUnQMgTslu2OxDeFNAls1bwB6pXXxJzh73WUHs5KopR-_UlmpWPl2KR5GRrZT5BIGLuAtl65QAQq6u4VEbmIAHek-Xvu74RBCETqY9O9E_sYyjFGMDwA9uoiSZcEtggx1AD_i0JyajMB_3V_Tx5rcK-dRInXxaRrLoV7IZW--edjULLSpGEwLKqqPNM9HKDwjDDzkupUfa2h-DjsO5spDlW3V7sD4iMU" />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-1 mb-3">
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="text-xs text-on-surface-variant ml-1 font-medium">(45)</span>
                            </div>
                            <h3
                                class="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors">
                                Tactile Balance Sphere</h3>
                            <p class="text-primary font-extrabold text-xl mb-5">$45.00</p>
                            <button
                                class="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                                <span class="material-symbols-outlined text-xl"
                                    data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>

                <article class="group lg:translate-y-8">
                    <div
                        class="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="modern sensory LED bubble tube glowing with soft blue light in a darkened sensory room setting"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC17mbYzyiXPF2G7BNmIcQ5_2gbwIK3TjxzCTt9oWC1csMTbhW0TTrFN7U_2viarldj9Mp-d8lFA9P4Zo8JGM_rcVp7B9PQsYWBuJ149Ljw4tvDZ7pTmsxh3P1GgGoJFsFNu-gukDM-UoWPBhCe5y0KygcPMLxzIaJ13x8ztlW55Zp7g2u1iRMObs_uhFlt30i8xLeAe-iMsmt671QLaJAktg654OFyH41-lIa4NJO52_DSd7qmjrz3eHGBPiM_MLWXPVMefxWt7tE" />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-1 mb-3">
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-outline-variant text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="text-xs text-on-surface-variant ml-1 font-medium">(210)</span>
                            </div>
                            <h3
                                class="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors">
                                Lumina Sensory Column</h3>
                            <p class="text-primary font-extrabold text-xl mb-5">$599.00</p>
                            <button
                                class="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                                <span class="material-symbols-outlined text-xl"
                                    data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>

                <article class="group">
                    <div
                        class="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="professional grade rehabilitation resistant bands in various colors neatly organized on a clean wooden surface"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB24wuQ68V6HlKsiqsWYPZlchB66uaIH-FoRuuS-W25_zhtAnkOQ7GcztpLjXOqhS64sgKmKVfhvampKQGrL6e_S6wdQsiArJVd3sRD_vaYfhX2on3RJwCgb8xYoIv1LkAQQrBAJJrMzNQJI2jBmeRLtTdR2WhthjUp8iN9oHENaFFGMvis_RENdo3XEYsGF_Iv131VOGNtqYYYrtMBz0O8Jjek9YuAuXX0mm52xJDXz7Wu9QlU_tyZMX5M42-fKkt4XitBy3-qwtY" />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-1 mb-3">
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="text-xs text-on-surface-variant ml-1 font-medium">(89)</span>
                            </div>
                            <h3
                                class="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors">
                                Kinetix Pro Band Set</h3>
                            <p class="text-primary font-extrabold text-xl mb-5">$32.50</p>
                            <button
                                class="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                                <span class="material-symbols-outlined text-xl"
                                    data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>

                <article class="group">
                    <div
                        class="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="ergonomic therapeutic massage roller with deep blue foam texture on a soft yoga mat background"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB8Wy9B7wfI1TLBJMe2M_MtNaUZOO1s3zJfikw73JkHh5CIkX1YROqIMscX5QQseBuCLgFQ0uGARqJEQuQZnN0y1hWjEIyaog0aT2wUKeUBjOkz5yYIjXGPHVx1vdorFaVWsKUfkYnHBSCoKqZ-gqdfqIptqvoE08eaEc8j9b7VYkbYh_2LNdtv213CttCpAImukhdl1vxDUAN9_yKFfaBxMASoOGJ1b9Q6_XXrCwjH-BDb1WlU_8fru1b-skvPTbqeqNdPmUuIcg" />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-1 mb-3">
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="text-xs text-on-surface-variant ml-1 font-medium">(12)</span>
                            </div>
                            <h3
                                class="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors">
                                DeepTissue Relief Roller</h3>
                            <p class="text-primary font-extrabold text-xl mb-5">$58.00</p>
                            <button
                                class="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                                <span class="material-symbols-outlined text-xl"
                                    data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>

                <article class="group lg:translate-y-8">
                    <div
                        class="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="high-quality rehabilitation parallel bars for walking practice in a bright professional clinic"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRFXhV1EusJNASL5NHZOZ6sFZ2KmDqtJB6BDrrFfF5qUEyPxvTonQNZjBuK3JlAorGJcDuofei8oXbr5ZPGLwc9I2ywIsDEyKsXy5HDVPXWphjETxlIFqaaEhU5Hz4XcC32UChC_J2i0Nim-9Fmo2zsSmc19pp8VuKKsBtMsNGXCkxMMX1BqFSnHdVobWrD0yyzXPUFqEfxrOqpqUBtkuLJqIaw1cwQ-Eq-8ekLy_2iCLmHKAK83fT0cyZopC8DtFuCRS_1Rx56c4" />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-1 mb-3">
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="text-xs text-on-surface-variant ml-1 font-medium">(34)</span>
                            </div>
                            <h3
                                class="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors">
                                SturdyStep Parallel Bars</h3>
                            <p class="text-primary font-extrabold text-xl mb-5">$1,250.00</p>
                            <button
                                class="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                                <span class="material-symbols-outlined text-xl"
                                    data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>

                <article class="group">
                    <div
                        class="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="box of various tactile sensory toys with different textures and shapes for child development"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGqNLscsHzIxkK0m6bc4-Yb-ErlTn7CgNRBxuqe15sdyounJpD4g-tO-a3DkqE-VRCYyoP6lL0oUADbha3y6La6jmu0Ski8c6J7JAk8kNieQOjUYXNxzUIVZGCvgaxbH4CUkJ4K-dT6ivX0QXCTpu6LkrhR-pbr-4xGcCGPes4BD7SHDxoBK729N6stB0tybFQKb1y-J-NKC7-UmBfgHQfjcu4t1n5YWSpcIHNd73ybIzg3cncwCtKuzn4mu-cx1ET31bdujv96bQ" />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-1 mb-3">
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="text-xs text-on-surface-variant ml-1 font-medium">(156)</span>
                            </div>
                            <h3
                                class="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors">
                                Discovery Texture Pack</h3>
                            <p class="text-primary font-extrabold text-xl mb-5">$84.00</p>
                            <button
                                class="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                                <span class="material-symbols-outlined text-xl"
                                    data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>

                <article class="group">
                    <div
                        class="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="professional TENS unit for physical therapy with electrodes and a digital interface on a medical tray"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyGiGF7n4ILAPxL2kLU07EnI91XwkYd5LdlSD1ytAv8qWVkc2Z8c9fI4ZCLG-Mx5IS1kMFwCqVLXYx8_O9zo99yCgKiQ_s0JxsPfh5eQk8Iw2QhWGy9jFx5skwxS2nDgx37V5pKtOH0eYyyvSyo2oNxQyIG_nwHW2lesAqgDMnM639KYYwCV8udqMXOH1H8IlXjXVM9bqxouAbXZcEDqhqJp3ZdgRDybpzNWytAI7pMwglAxwcFr-ZpC5cYFGF-DTGU5L-WXWqkJc" />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-1 mb-3">
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="material-symbols-outlined text-tertiary text-sm" data-icon="star"
                                    style={{fontVariationSettings: 'FILL'}}>star</span>
                                <span class="text-xs text-on-surface-variant ml-1 font-medium">(78)</span>
                            </div>
                            <h3
                                class="text-lg font-bold text-on-surface mb-1 tracking-tight group-hover:text-primary transition-colors">
                                NeuroPulse Recovery Unit</h3>
                            <p class="text-primary font-extrabold text-xl mb-5">$215.00</p>
                            <button
                                class="w-full py-3 px-6 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                                <span class="material-symbols-outlined text-xl"
                                    data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <nav class="mt-20 flex justify-center gap-2">
                <button
                    class="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-primary-fixed transition-colors">
                    <span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <button
                    class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold">1</button>
                <button
                    class="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-primary-fixed transition-colors">2</button>
                <button
                    class="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-primary-fixed transition-colors">3</button>
                <button
                    class="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-primary-fixed transition-colors">
                    <span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
            </nav>
        </main>
    )
}