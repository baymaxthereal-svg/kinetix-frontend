export default function Addproduct() {
  return (
    <main className="flex-1 flex flex-col min-h-screen">
      <div className="py-4 max-w-7xl mx-auto w-full grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8 space-y-8">
          {/* Identity Section */}
          <section className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Identity
              </span>
              <div className="h-[1px] flex-1 bg-surface-container"></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-bold text-on-surface mb-2">Product Name</label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all"
                  placeholder="e.g. Weighted Sensory Compression Vest"
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold text-on-surface mb-2">SKU ID</label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all"
                  placeholder="KNX-VES-001"
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold text-on-surface mb-2">Category</label>
                <select
                  className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all appearance-none"
                >
                  <option>Sensory Integration</option>
                  <option>Mobility Aids</option>
                  <option>Fine Motor Skills</option>
                </select>
              </div>
            </div>
          </section>

          {/* Clinical Data Section */}
          <section className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Clinical Data
              </span>
              <div className="h-[1px] flex-1 bg-surface-container"></div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Clinical Description</label>
                <textarea
                  className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Detail the therapeutic benefits, pressure mapping, and patient use cases..."
                  rows="4"
                ></textarea>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-bold text-on-surface">Safety Specs &amp; Compliance</label>
                  <span
                    className="material-symbols-outlined text-secondary text-lg"
                    data-icon="verified"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <textarea
                  className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter ISO certifications, material safety data, and weight limits..."
                  rows="3"
                ></textarea>
              </div>
            </div>
          </section>

          {/* Media Assets Section */}
          <section className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Media Assets
              </span>
              <div className="h-[1px] flex-1 bg-surface-container"></div>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-80">
              <div className="col-span-2 row-span-2 bg-surface-container-high rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors group cursor-pointer overflow-hidden relative">
                <span
                  className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary mb-2"
                  data-icon="add_a_photo"
                >
                  add_a_photo
                </span>
                <span className="text-sm font-semibold text-slate-500">Hero Product Shot</span>
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity"
                  data-alt="professional clinical product photography of a high-end sensory compression vest on a minimalist white pedestal with soft studio lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_yfgVhkylJYg18CUaAMO0lkVnnvpdbktdGOXbUf1zV-mWXZQaCBz4clYFwKNHo8gY11g6JymE4zTzAsujpUSEtezuhOhsl9zcLbGdkzbWG3OmhYDc2jV4xavQnbuUUO4ntzWyouM6TTJDKrtSVOjdAGsHlSxRNUz1fWYNerC85sHpgTYb2Tek3t9IXfh3jtwjl8gKR4eptbdZlFAyPIqhGEH-8aaaDMqGyU-TWu_Zf66WZyohnYew6Y7CXmxSZkgySMTk7uS2oKA"
                />
              </div>
              <div className="bg-surface-container-high rounded-xl flex items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-slate-400" data-icon="add">
                  add
                </span>
              </div>
              <div className="bg-surface-container-high rounded-xl flex items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-slate-400" data-icon="add">
                  add
                </span>
              </div>
              <div className="bg-surface-container-high rounded-xl flex items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-slate-400" data-icon="add">
                  add
                </span>
              </div>
              <div className="bg-surface-container-high rounded-xl flex items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-slate-400" data-icon="add">
                  add
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar – Inventory Status, Catalog Preview, Tip */}
        <div className="col-span-12 md:col-span-4 space-y-8">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-sky-900">Inventory Status</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Clinical Price (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input
                    className="w-full pl-8 bg-surface-container-highest border-none rounded-lg p-3 text-on-surface font-bold"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Current Stock Level
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-on-surface"
                  placeholder="0"
                  type="number"
                />
              </div>
              <div className="pt-2 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Automatic Restock</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" value="" />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Publicly Visible</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Catalog Preview
              </span>
              <div className="h-[1px] flex-1 bg-surface-container"></div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/40">
              <div className="aspect-square bg-slate-200 overflow-hidden relative group">
                <img
                  className="w-full h-full object-cover"
                  data-alt="modern medical device, sensory compression vest in soft grey fabric, high-tech breathable material, isolated on clean studio background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe0vFtMkeKFBz2qqtjW-fm8QZ9ghtQvW2xUKivv7cvsT5vU_r032sIlWoFWydfoujFudPz1_HajCwgUahppfO_-V9vmTZabOAkRv2orSd-SYks1g7wtd9oHGMf9Xk2oad7xjcCkbZls6kj3liMgCou5aWmmIR6490v0PscW0-aSa07kpWbsdO3FlJk4ZSAW7Jmry7sNxjdzkEKjxXK2a7eu5hds25Gf4nua-SmMrlESo5Wtkp4xYN8byeIQxD5LDqsI5PIP_v0nLE"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold rounded-full uppercase">
                  New Arrival
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-on-surface leading-tight">
                    Weighted Sensory Compression Vest
                  </h4>
                  <span className="text-primary font-bold">$124.00</span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Premium therapeutic compression designed for deep pressure stimulation and calming effects.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white"></div>
                  </div>
                  <span className="text-[10px] text-slate-400">2 Variants</span>
                  <div className="flex-1"></div>
                  <span className="material-symbols-outlined text-lg text-slate-300" data-icon="favorite">
                    favorite
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-xl flex gap-4">
            <span
              className="material-symbols-outlined text-tertiary"
              data-icon="lightbulb"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lightbulb
            </span>
            <div className="space-y-1">
              <p className="text-sm font-bold">Clinical Compliance Tip</p>
              <p className="text-xs leading-relaxed opacity-80">
                Ensure all FDA and ISO compliance IDs are verified before publishing to the patient portal to avoid
                administrative delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}