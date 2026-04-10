export default function Footer() {
    return (
        <footer class="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
                <div class="col-span-1 md:col-span-1">
                    <div class="text-xl font-bold text-slate-900 dark:text-white mb-6">Kinetix</div>
                    <p class="text-slate-500 dark:text-slate-400 font-['Inter'] text-sm leading-relaxed mb-8">
                        Elevating standard care through intentional sensory design and professional physical therapy
                        equipment.
                    </p>
                    <div class="flex gap-4">
                        <a class="text-sky-800 dark:text-sky-400 hover:opacity-80 transition-opacity" href="#"><span
                            class="material-symbols-outlined" data-icon="facebook">social_leaderboard</span></a>
                        <a class="text-sky-800 dark:text-sky-400 hover:opacity-80 transition-opacity" href="#"><span
                            class="material-symbols-outlined" data-icon="photo_camera">photo_camera</span></a>
                        <a class="text-sky-800 dark:text-sky-400 hover:opacity-80 transition-opacity" href="#"><span
                            class="material-symbols-outlined" data-icon="work">work</span></a>
                    </div>
                </div>
                <div class="space-y-4">
                    <h5 class="font-bold text-sky-800 dark:text-sky-400 mb-6">Explore</h5>
                    <ul class="space-y-3 font-['Inter'] text-sm leading-relaxed">
                        <li><a class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
                            href="#">Shop</a></li>
                        <li><a class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
                            href="#">Sensory Room</a></li>
                        <li><a class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
                            href="#">Bulk Order Program</a></li>
                        <li><a class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
                            href="#">Rehab Centers</a></li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h5 class="font-bold text-sky-800 dark:text-sky-400 mb-6">Company</h5>
                    <ul class="space-y-3 font-['Inter'] text-sm leading-relaxed">
                        <li><a class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
                            href="#">About Kinetix</a></li>
                        <li><a class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
                            href="#">Contact Us</a></li>
                        <li><a class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
                            href="#">Privacy Policy</a></li>
                        <li><a class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
                            href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h5 class="font-bold text-sky-800 dark:text-sky-400 mb-6">Newsletter</h5>
                    <p class="text-slate-500 dark:text-slate-400 font-['Inter'] text-sm leading-relaxed mb-4">Subscribe for
                        sensory room design tips and exclusive offers.</p>
                    <div class="flex gap-2">
                        <input
                            class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 w-full text-sm"
                            placeholder="Email" type="email" />
                        <button class="bg-sky-800 text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-8 py-8 border-t border-slate-100 dark:border-slate-900 text-center">
                <p class="text-slate-500 dark:text-slate-400 font-['Inter'] text-xs">© 2024 Kinetix Physiotherapy &amp;
                    Sensory. All rights reserved.</p>
            </div>
        </footer>
    )
}