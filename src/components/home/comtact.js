export default function Contact() {
    return (
        <section class="py-24 bg-surface-container-low">
            <div class="max-w-5xl mx-auto px-6">
                <div
                    class="bg-surface-container-lowest rounded-[3rem] p-10 md:p-20 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="font-headline text-4xl font-extrabold text-on-surface mb-6">Need a Custom Solution?</h2>
                        <p class="text-on-surface-variant mb-10">Looking for a full sensory room design or a bulk order
                            quote? Our specialists are ready to help.</p>
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full">
                                    <span class="material-symbols-outlined text-primary" data-icon="mail">mail</span>
                                </div>
                                <p class="font-semibold">hello@kinetixrehab.com</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-full">
                                    <span class="material-symbols-outlined text-secondary" data-icon="call">call</span>
                                </div>
                                <p class="font-semibold">1-800-KINETIX-GROW</p>
                            </div>
                        </div>
                    </div>
                    <form class="space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-xs font-bold uppercase text-on-surface-variant">Name</label>
                                <input
                                    class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name" type="text" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold uppercase text-on-surface-variant">Email</label>
                                <input
                                    class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                                    placeholder="email@example.com" type="email" />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase text-on-surface-variant">Interested In</label>
                            <select
                                class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary">
                                <option>Bulk Order Program</option>
                                <option>Sensory Room Design</option>
                                <option>Equipment Consultation</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase text-on-surface-variant">Message</label>
                            <textarea
                                class="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                                placeholder="How can we help your space?" rows="4"></textarea>
                        </div>
                        <button
                            class="w-full py-4 bg-primary text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20 scale-100 active:scale-95 transition-all">Send
                            Inquiry</button>
                    </form>
                </div>
            </div>
        </section>
    )
}