export default function DashboardLogin() {
    return (
        <div
            class="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

            <div class="absolute inset-0 z-0">
                <img alt="modern minimalist sensory room with soft architectural lighting, smooth rounded surfaces, and a calming neutral palette"
                    class="w-full h-full object-cover opacity-20 grayscale brightness-110"
                    data-alt="modern minimalist sensory room with soft architectural lighting, smooth rounded surfaces, and a calming neutral palette"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlgdUhjmT9aSQ-aEIZg-To7S4t63dIuYOPrxkQClNg3lf5QaLM1zlFc07s4Jack8MyzsJNwyo6AgH-3DXKELVJiJvWI6GsG8pmCMDFhfWZsRGuvB17Z-yEmmfEwYPcnU3Z4sAuclz66HbFyjrfEMlzM6tcoO-ona4-Tjb3DJfmtnH_ynbZ7XkNf2MD1BvjVST_tK-5S-CYCw5aumbLCCzj3PQ0QTTP5Kkogz6fD24ha3nUKdd3-jgQOV7MJL2anqxrwOD7LfSdydo" />
                <div class="absolute inset-0 bg-gradient-to-tr from-surface via-surface/80 to-transparent"></div>
            </div>

            <main class="relative z-10 w-full max-w-md px-6 py-12">

                <div class="flex flex-col items-center mb-10">
                    <div class="mb-4 p-3 rounded-xl bg-primary/5">
                        <span class="material-symbols-outlined text-primary text-4xl"
                            data-icon="spatial_tracking">spatial_tracking</span>
                    </div>
                    <h1 class="text-3xl font-extrabold tracking-tighter text-primary">KINETIX</h1>
                    <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">Clinical
                        Dashboard</p>
                </div>

                <div class="glass-panel p-10 rounded-xl shadow-[0_32px_64px_-12px_rgba(0,99,138,0.08)]">
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-on-surface tracking-tight">Welcome back</h2>
                        <p class="text-on-surface-variant text-sm mt-1">Please enter your credentials to access
                            the clinic system.</p>
                    </div>
                    <form class="space-y-6">

                        <div>
                            <label class="block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 ml-1"
                                for="email">Email Address</label>
                            <input class="w-full px-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-bright transition-all text-on-surface placeholder:text-outline/50"
                                id="email" name="email" placeholder="dr.smith@kinetixrehab.com"
                                type="email" />
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2 ml-1">
                                <label class="block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
                                    for="password">Password</label>
                                <a class="text-xs font-semibold text-primary hover:text-primary-container transition-colors"
                                    href="#">Forgot Password?</a>
                            </div>
                            <div class="relative">
                                <input class="w-full px-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-bright transition-all text-on-surface placeholder:text-outline/50"
                                    id="password" name="password" placeholder="••••••••"
                                    type="password" />
                                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                                    type="button">
                                    <span class="material-symbols-outlined text-xl"
                                        data-icon="visibility">visibility</span>
                                </button>
                            </div>
                        </div>

                        <div class="flex items-center space-x-3 ml-1">
                            <input class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-highest"
                                id="remember" name="remember" type="checkbox" />
                            <label class="text-sm text-on-surface-variant font-medium cursor-pointer"
                                for="remember">Remember this device</label>
                        </div>

                        <button class="w-full py-4 px-6 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            type="submit">
                            Sign In to Dashboard
                            <span class="material-symbols-outlined text-lg"
                                data-icon="arrow_forward">arrow_forward</span>
                        </button>
                    </form>

                    <div class="mt-8 pt-8 border-t border-outline-variant/15 text-center">
                        <p class="text-sm text-on-surface-variant">
                            New clinic partner?
                            <a class="ml-1 text-primary font-bold hover:underline underline-offset-4 decoration-2"
                                href="#">Request Access</a>
                        </p>
                    </div>
                </div>
                <div class="mt-12 flex justify-center items-center gap-6 opacity-60">
                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        <span class="text-[10px] font-label uppercase tracking-widest text-on-surface">Systems
                            Operational</span>
                    </div>
                    <a class="flex items-center gap-1.5 group" href="#">
                        <span class="material-symbols-outlined text-sm"
                            data-icon="help_outline">help_outline</span>
                        <span
                            class="text-[10px] font-label uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">Support</span>
                    </a>
                </div>
            </main>
            <footer class="fixed bottom-0 w-full flex justify-center py-6 z-10">
                <p class="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-outline/50">
                    © 2024 Tactical Empathy Sensory Solutions
                </p>
            </footer>
        </div>
    )
}