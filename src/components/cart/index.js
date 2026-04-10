export default function Cart() {
    return (
        <main class="pt-32 pb-24 max-w-7xl mx-auto px-6">
            <div class="mb-12">
                <span class="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase font-label">Your
                    Selection</span>
                <h1 class="text-5xl font-extrabold text-primary font-headline tracking-tight mt-2">Shopping Cart</h1>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                <div class="lg:col-span-8 space-y-6">

                    <div
                        class="grid grid-cols-12 px-6 py-4 bg-surface-container-low rounded-xl text-xs font-bold text-on-surface-variant uppercase tracking-widest font-label hidden md:grid">
                        <div class="col-span-6">Product Detail</div>
                        <div class="col-span-2 text-center">Quantity</div>
                        <div class="col-span-2 text-right">Price</div>
                        <div class="col-span-2 text-right">Total</div>
                    </div>

                    <div
                        class="bg-surface-container-lowest rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/5">
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div class="md:col-span-6 flex items-center gap-6">
                                <div class="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                    <img class="w-full h-full object-cover"
                                        data-alt="professional weighted therapeutic blanket with soft quilted texture in calming slate blue color"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJVgyeC8nePK-Ozsc5qceCWb5Cxpg0byVO3Ic4dxOR_pBobTuVoGyW5UKc3x0wakJB0r1iKiWOzVuIGXD95rgMZWVq6h6EsC7weKFKdiVok3hgkWQnJbY-DHutnHfzw9JmcoJDjGFsagN7CFOJDlT8sub7WNzqyVstouD7D6TM9jEl4Y8o-FQZoLWAxz1_UYtIwa8FmrUTpSLC8qy6Ohs5l8DxUuIg6Y5M_fQSs13WfaZhpEcdUNPcaloHtkdxjIE5Qk5UmgiW4Ps" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-on-surface font-headline">Deep Pressure Weighted Vest
                                    </h3>
                                    <p class="text-sm text-on-surface-variant mt-1 font-body">Size: Medium | Color: Ocean
                                        Blue</p>
                                    <button
                                        class="text-error text-xs font-semibold mt-3 flex items-center gap-1 hover:opacity-70 transition-opacity">
                                        <span class="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                                        Remove Item
                                    </button>
                                </div>
                            </div>
                            <div class="md:col-span-2 flex justify-center">
                                <div class="flex items-center bg-surface-container-high rounded-full px-3 py-1">
                                    <button class="p-1 hover:text-primary transition-colors"><span
                                        class="material-symbols-outlined text-lg"
                                        data-icon="remove">remove</span></button>
                                    <span class="px-4 font-bold text-on-surface">1</span>
                                    <button class="p-1 hover:text-primary transition-colors"><span
                                        class="material-symbols-outlined text-lg" data-icon="add">add</span></button>
                                </div>
                            </div>
                            <div class="md:col-span-2 text-right">
                                <span class="text-on-surface-variant font-body">$89.00</span>
                            </div>
                            <div class="md:col-span-2 text-right">
                                <span class="text-lg font-bold text-primary font-headline">$89.00</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-surface-container-lowest rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/5">
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div class="md:col-span-6 flex items-center gap-6">
                                <div class="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                    <img class="w-full h-full object-cover"
                                        data-alt="sensory liquid floor tiles with colorful interactive liquid inside bright vibrant green and yellow"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMvmCllwqeW2PHu6M0dKw386LfPrjl5c6O5OujhcG9hHa0qmSGisV4HsLeXDXUcSv5UciTnHFtAhoQgHcp7xLRzDB1pozzViytgWlvRmHC4dv6LQZUW8gZraWf4Izh66Z9FeVAxMTH2KpnABD8eB3u1HV-uuUhBHdR1ViZd_sL4ngrSpyCX31lhcLvQafgTDnwyO7woEjQ33E3khEn0uNllABFIHFweSHxiYV2EuMtbcEXNZJZbOvk5CEzOuFSbZ7yqqQo3CJKWgA" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-on-surface font-headline">Sensory Liquid Floor Tile
                                    </h3>
                                    <p class="text-sm text-on-surface-variant mt-1 font-body">Pack: 4 Tiles | Texture:
                                        Smooth</p>
                                    <button
                                        class="text-error text-xs font-semibold mt-3 flex items-center gap-1 hover:opacity-70 transition-opacity">
                                        <span class="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                                        Remove Item
                                    </button>
                                </div>
                            </div>
                            <div class="md:col-span-2 flex justify-center">
                                <div class="flex items-center bg-surface-container-high rounded-full px-3 py-1">
                                    <button class="p-1 hover:text-primary transition-colors"><span
                                        class="material-symbols-outlined text-lg"
                                        data-icon="remove">remove</span></button>
                                    <span class="px-4 font-bold text-on-surface">2</span>
                                    <button class="p-1 hover:text-primary transition-colors"><span
                                        class="material-symbols-outlined text-lg" data-icon="add">add</span></button>
                                </div>
                            </div>
                            <div class="md:col-span-2 text-right">
                                <span class="text-on-surface-variant font-body">$45.00</span>
                            </div>
                            <div class="md:col-span-2 text-right">
                                <span class="text-lg font-bold text-primary font-headline">$90.00</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-surface-container-lowest rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/5">
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div class="md:col-span-6 flex items-center gap-6">
                                <div class="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                    <img class="w-full h-full object-cover"
                                        data-alt="ergonomic physical therapy foam roller with grid pattern in professional black and silver design"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuALx1ZjEYwzSV5PRHL8cr0axa6MjfG8fRi_TsKmOamucBW310Kfspig8QiEMTh5R9L5VAscauWjx8_2at1Xrx5PUxrATCvlzA-ssDTFWntTKFLKKsv6E_LDyW9MJa9IxyNylhGLtybvytMQ4XPPzHlE4Pk3HllF9-D-o2QRPQ_0Aa4CfrtaShR6xzsGDSWDEemlcTbOz3a0wVpN158nIHMx6L6VqUmQaWDpLkWR_ep5SY2q2Jv1v3MadSYgghXCeHAZJ4sKhXbQxbU" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-on-surface font-headline">High-Density Foam Roller
                                    </h3>
                                    <p class="text-sm text-on-surface-variant mt-1 font-body">Firmness: Extra Firm | Size:
                                        36"</p>
                                    <button
                                        class="text-error text-xs font-semibold mt-3 flex items-center gap-1 hover:opacity-70 transition-opacity">
                                        <span class="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                                        Remove Item
                                    </button>
                                </div>
                            </div>
                            <div class="md:col-span-2 flex justify-center">
                                <div class="flex items-center bg-surface-container-high rounded-full px-3 py-1">
                                    <button class="p-1 hover:text-primary transition-colors"><span
                                        class="material-symbols-outlined text-lg"
                                        data-icon="remove">remove</span></button>
                                    <span class="px-4 font-bold text-on-surface">1</span>
                                    <button class="p-1 hover:text-primary transition-colors"><span
                                        class="material-symbols-outlined text-lg" data-icon="add">add</span></button>
                                </div>
                            </div>
                            <div class="md:col-span-2 text-right">
                                <span class="text-on-surface-variant font-body">$32.50</span>
                            </div>
                            <div class="md:col-span-2 text-right">
                                <span class="text-lg font-bold text-primary font-headline">$32.50</span>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8 flex justify-between items-center">
                        <a class="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" href="#">
                            <span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                            Continue Shopping
                        </a>
                    </div>
                </div>

                <div class="lg:col-span-4 sticky top-32">
                    <div
                        class="bg-surface-container-lowest rounded-xl p-8 shadow-xl shadow-primary/5 border border-outline-variant/15">
                        <h2 class="text-2xl font-bold text-on-surface font-headline mb-8">Order Summary</h2>
                        <div class="space-y-4 font-body">
                            <div class="flex justify-between items-center text-on-surface-variant">
                                <span>Subtotal</span>
                                <span class="font-semibold text-on-surface">$211.50</span>
                            </div>
                            <div class="flex justify-between items-center text-on-surface-variant">
                                <span>Estimated Shipping</span>
                                <span class="font-semibold text-on-surface">$12.00</span>
                            </div>
                            <div class="flex justify-between items-center text-on-surface-variant">
                                <span>Tax (Calculated at checkout)</span>
                                <span class="font-semibold text-on-surface">$18.45</span>
                            </div>
                            <div class="h-px bg-surface-container-high my-6"></div>
                            <div class="flex justify-between items-end mb-8">
                                <div>
                                    <p
                                        class="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-label">
                                        Total Amount</p>
                                    <p class="text-3xl font-extrabold text-primary font-headline mt-1">$241.95</p>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Tax
                                        Inc.</span>
                                </div>
                            </div>
                        </div>
                        <button
                            class="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">
                            Proceed to Checkout
                            <span class="material-symbols-outlined" data-icon="lock">lock</span>
                        </button>
                        <div class="mt-8 space-y-4">
                            <p class="text-xs text-on-surface-variant text-center leading-relaxed">
                                Complimentary shipping on orders over $300. <br />
                                Secure clinical-grade payment processing.
                            </p>
                            <div class="flex justify-center gap-4 opacity-40 grayscale">
                                <span class="material-symbols-outlined" data-icon="credit_card">credit_card</span>
                                <span class="material-symbols-outlined" data-icon="account_balance">account_balance</span>
                                <span class="material-symbols-outlined" data-icon="contactless">contactless</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}