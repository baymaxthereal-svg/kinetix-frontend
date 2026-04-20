export default function OrderDetails() {
    return (
        <main class="min-h-screen bg-surface">
            <div class="max-w-7xl mx-auto  space-y-8">

                <div
                    class="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-8 rounded-2xl shadow-sm border-none">
                    <div class="space-y-2">
                        <div class="flex items-center gap-3">
                            <span
                                class="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full">Order
                                Details</span>
                            <span class="text-slate-400 font-medium">•</span>
                            <span class="text-sm text-slate-500 font-medium">May 24, 2024</span>
                        </div>
                        <h1 class="text-4xl font-extrabold text-sky-900 tracking-tight">#ORD-2024-001</h1>
                        <div class="flex items-center gap-2">
                            <span class="flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold">
                                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                                Processing
                            </span>
                            <span class="text-sm text-slate-400">Updated 2 hours ago</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <button
                            class="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high text-on-surface-variant font-bold text-sm rounded-xl hover:bg-slate-200 transition-all">
                            <span class="material-symbols-outlined text-lg">print</span>
                            Print Slip
                        </button>
                        <button
                            class="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high text-on-surface-variant font-bold text-sm rounded-xl hover:bg-slate-200 transition-all">
                            <span class="material-symbols-outlined text-lg">download</span>
                            Invoice
                        </button>
                        <button
                            class="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                            <span class="material-symbols-outlined text-lg">edit</span>
                            Edit Status
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div class="bg-white p-6 rounded-2xl space-y-4">
                        <div class="flex items-center gap-3 text-primary">
                            <span class="material-symbols-outlined">person</span>
                            <h3 class="font-bold text-slate-900">Customer Details</h3>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <p class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Primary Contact</p>
                                <p class="text-sm font-semibold text-slate-900">Dr. Julianne Moore</p>
                            </div>
                            <div>
                                <p class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Clinic</p>
                                <p class="text-sm font-semibold text-slate-900">Evergreen Pediatric Rehab</p>
                            </div>
                            <div class="flex gap-4">
                                <div class="flex-1">
                                    <p class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Email</p>
                                    <p class="text-xs font-medium text-sky-700 underline underline-offset-2">j.moore@evergreen.com</p>
                                </div>
                                <div class="flex-1">
                                    <p class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Phone</p>
                                    <p class="text-xs font-medium text-slate-900">+1 (555) 012-3456</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Shipping Address</p>
                                <p class="text-xs leading-relaxed text-slate-600">42 Clinical Way, Suite 100<br />North Portland, OR
                                    97203<br />United States</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-2xl space-y-4">
                        <div class="flex items-center gap-3 text-tertiary">
                            <span class="material-symbols-outlined">payments</span>
                            <h3 class="font-bold text-slate-900">Payment Status</h3>
                        </div>
                        <div class="bg-tertiary-fixed p-3 rounded-xl border border-tertiary/10">
                            <div class="flex items-center justify-between mb-1">
                                <p class="text-[10px] font-bold text-on-tertiary-fixed uppercase">Payment Progress</p>
                                <p class="text-[10px] font-bold text-on-tertiary-fixed">50%</p>
                            </div>
                            <div class="w-full bg-white/50 h-1.5 rounded-full overflow-hidden">
                                <div class="bg-tertiary h-full w-1/2"></div>
                            </div>
                            <p class="mt-2 text-xs font-bold text-on-tertiary-fixed-variant">50% Advance Payment Received</p>
                        </div>
                        <div class="space-y-3 pt-2">
                            <div class="flex justify-between items-center">
                                <p class="text-xs text-slate-500 font-medium">Method</p>
                                <p class="text-xs font-bold text-slate-900">Bank Transfer</p>
                            </div>
                            <div
                                class="flex justify-between items-center p-2 bg-slate-50 rounded-lg group cursor-pointer hover:bg-slate-100 transition-colors">
                                <div class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-slate-400 text-lg">image</span>
                                    <span class="text-[10px] font-bold text-slate-600">Payment Screenshot.png</span>
                                </div>
                                <span class="material-symbols-outlined text-primary text-sm">open_in_new</span>
                            </div>
                            <div class="grid grid-cols-2 gap-4 pt-2">
                                <div class="p-3 bg-slate-50 rounded-xl">
                                    <p class="text-[10px] text-slate-400 font-bold">TOTAL</p>
                                    <p class="text-sm font-extrabold text-slate-900">$4,850.00</p>
                                </div>
                                <div class="p-3 bg-secondary-fixed/30 rounded-xl">
                                    <p class="text-[10px] text-secondary font-bold">PAID</p>
                                    <p class="text-sm font-extrabold text-secondary">$2,425.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-2xl space-y-4">
                        <div class="flex items-center gap-3 text-secondary">
                            <span class="material-symbols-outlined">local_shipping</span>
                            <h3 class="font-bold text-slate-900">Shipping Details</h3>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border-none">
                                <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    <span class="material-symbols-outlined text-slate-400">inventory</span>
                                </div>
                                <div>
                                    <p class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Tracking Number</p>
                                    <p class="text-sm font-bold text-sky-700">FX-9002-1844-Z</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <p class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Carrier</p>
                                    <p class="text-sm font-semibold text-slate-900">FedEx Health</p>
                                </div>
                                <div>
                                    <p class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Est. Delivery</p>
                                    <p class="text-sm font-semibold text-slate-900">May 28, 2024</p>
                                </div>
                            </div>
                            <div class="relative pt-4 pl-4 border-l-2 border-slate-100 space-y-4">
                                <div class="relative">
                                    <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-white"></div>
                                    <p class="text-xs font-bold text-slate-900">Order Dispatched</p>
                                    <p class="text-[10px] text-slate-400 font-medium">May 25, 10:30 AM</p>
                                </div>
                                <div class="relative">
                                    <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></div>
                                    <p class="text-xs font-bold text-slate-400">In Transit</p>
                                    <p class="text-[10px] text-slate-300 font-medium">Awaiting update...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-3xl overflow-hidden shadow-sm border-none">
                    <div class="p-6 border-b border-slate-50 flex items-center justify-between">
                        <h3 class="font-['Manrope'] font-bold text-slate-900">Order Items (3)</h3>
                        <span class="text-xs text-slate-400 font-medium">Managed by Warehouse A</span>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50/50">
                                    <th class="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product</th>
                                    <th class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">SKU</th>
                                    <th class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Unit Price</th>
                                    <th class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Qty</th>
                                    <th class="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-50">

                                <tr class="group hover:bg-slate-50/30 transition-colors">
                                    <td class="px-8 py-5">
                                        <div class="flex items-center gap-4">
                                            <div class="w-14 h-14 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                                                <img alt="Weighted Blanket" class="w-full h-full object-cover"
                                                    data-alt="High-quality weighted blanket for sensory therapy with textured fabric in a calm teal color"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt_isF9UlCvFtrwtP4zNU2nuM-oCvjKlmOECNA1DQNePQZozQjb9DoCwVo5Qo96t5lfqVqzss1kOHpffsvu8-6wFMTVI64nugSOQs7U6u2RZjOyYZYPr5OWV2wJ4HWdXrnpqyzLAd9PeCZNPRNN1lL6GfIwh6CC9BF1qW9e_98InPEnkfySXStxVngVYCX60HcKj8rHCfuTzZX4pB13hI33fJIeDw9aH8EcUTuQ4GWokJkj53Gtb95_qgo7gQm05Vq224js1qUxZc" />
                                            </div>
                                            <div>
                                                <p class="text-sm font-bold text-slate-900">Deep Pressure Weighted Blanket</p>
                                                <p class="text-xs text-slate-500">Premium 15lb Edition - Teal</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5 text-sm font-medium text-slate-500">SEN-WP-15LB</td>
                                    <td class="px-6 py-5 text-sm font-semibold text-slate-900">$250.00</td>
                                    <td class="px-6 py-5">
                                        <span class="px-3 py-1 bg-slate-100 rounded-lg text-sm font-bold text-slate-700">02</span>
                                    </td>
                                    <td class="px-8 py-5 text-sm font-bold text-slate-900 text-right">$500.00</td>
                                </tr>

                                <tr class="group hover:bg-slate-50/30 transition-colors">
                                    <td class="px-8 py-5">
                                        <div class="flex items-center gap-4">
                                            <div class="w-14 h-14 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                                                <img alt="Balance Beam" class="w-full h-full object-cover"
                                                    data-alt="Modular wooden balance beam for children's physiotherapy exercise, minimalist studio setting"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsi-ZQXHMItbqdhEt-6XFX2EDy7uMpqWDazE2Xbn4gWMCK86_yknyuJMtIcFfn75_RlJS6OAOcPhunQEFXYbKySwqq9kNNLayrixELgZgZcgGlciKe_u4LvCkt4bzuw0N0IvOu7hnNfh97UFffGEEH-C2adyEr5-rqa-0ag_rrpAxP-95G4GRfRPqKbNAD1S42l0PjhrsSfvJLMicchXD9mTb2hA7l-4AFvlcKCEiBszfzd6e93ZOYCbCHWJAD2yrJsbOqNXvpybE" />
                                            </div>
                                            <div>
                                                <p class="text-sm font-bold text-slate-900">Modular Therapy Balance Beam</p>
                                                <p class="text-xs text-slate-500">Oak Wood / Non-slip Base</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5 text-sm font-medium text-slate-500">REH-BAM-04</td>
                                    <td class="px-6 py-5 text-sm font-semibold text-slate-900">$1,250.00</td>
                                    <td class="px-6 py-5">
                                        <span class="px-3 py-1 bg-slate-100 rounded-lg text-sm font-bold text-slate-700">01</span>
                                    </td>
                                    <td class="px-8 py-5 text-sm font-bold text-slate-900 text-right">$1,250.00</td>
                                </tr>

                                <tr class="group hover:bg-slate-50/30 transition-colors">
                                    <td class="px-8 py-5">
                                        <div class="flex items-center gap-4">
                                            <div class="w-14 h-14 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                                                <img alt="Sensory Wall Panel" class="w-full h-full object-cover"
                                                    data-alt="Interactive sensory wall panel with various light-up buttons and tactile surfaces in a modern therapy clinic"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCJ8j4xIm50Rg_febyMn7aXFaOMn6trHgQbwUGwFxduJ7_ziuw4c6RnazIVNCN4IF6znOEe8-Oz341vrxsxxWlAX7Krx4u1HyGLUFFrOX9BbB2OR6Gp6srIwtZwIgkU1UF49vlUFBh2Te7tWBb7qhmnIMqVrUQBTW8T6OJVfEh5C6JtStVgbDo8ALgQ4LdkxJ-mGPj2A92CF5hjCWrxl2OQ6cOiUECsVdkACDFqs0WZheyEN5giB7dcsdSTU3CK37munm8CqMsFGY" />
                                            </div>
                                            <div>
                                                <p class="text-sm font-bold text-slate-900">Interactive LED Sensory Wall</p>
                                                <p class="text-xs text-slate-500">48" x 72" Multi-Touch Panel</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5 text-sm font-medium text-slate-500">SEN-LED-WAL</td>
                                    <td class="px-6 py-5 text-sm font-semibold text-slate-900">$3,100.00</td>
                                    <td class="px-6 py-5">
                                        <span class="px-3 py-1 bg-slate-100 rounded-lg text-sm font-bold text-slate-700">01</span>
                                    </td>
                                    <td class="px-8 py-5 text-sm font-bold text-slate-900 text-right">$3,100.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="p-8 bg-slate-50/50 flex flex-col md:flex-row justify-between gap-8 border-t border-slate-100">
                        <div class="max-w-xs text-xs text-slate-400 font-medium leading-relaxed italic">
                            All items are checked for clinical safety standards and sanitized prior to shipping. Please review the
                            return policy for sensory hygiene products.
                        </div>
                        <div class="w-full md:w-80 space-y-3">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-slate-500 font-medium">Subtotal</span>
                                <span class="text-slate-900 font-semibold">$4,850.00</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-slate-500 font-medium">Shipping (Insured)</span>
                                <span class="text-slate-900 font-semibold">$0.00</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-slate-500 font-medium">Applied Tax (Exempt)</span>
                                <span class="text-slate-900 font-semibold">$0.00</span>
                            </div>
                            <div class="pt-4 border-t border-slate-200">
                                <div class="flex justify-between items-center">
                                    <span class="font-['Manrope'] font-extrabold text-lg text-slate-900">Grand Total</span>
                                    <span class="font-['Manrope'] font-extrabold text-2xl text-primary">$4,850.00</span>
                                </div>
                                <div class="mt-2 text-right">
                                    <span
                                        class="text-[10px] font-bold text-secondary-container bg-secondary px-2 py-0.5 rounded-full uppercase tracking-widest">Balance
                                        Due: $2,425.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] px-4">
                    <span>Tactile Empathy ERP System</span>
                    <div class="flex gap-4">
                        <span>Generated: 2024-05-24 14:22:10</span>
                        <span>Server: Oregon-01</span>
                    </div>
                </div>
            </div>
        </main>
    )
}