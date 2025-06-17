<template>
    <section id="home" class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>

        <!-- Floating Elements -->
        <div class="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full animate-ping"></div>

        <div class="relative container mx-auto px-6 py-32">
            <div class="max-w-6xl mx-auto text-center">
                <div
                    class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
                    <span class="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    Team ImpactEra • Building Real Impact Solutions
                </div>

                <h1
                    class="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
                    Membangun Solusi<br />
                    <span class="text-yellow-300">Berdampak Nyata</span><br />
                    Untuk Masyarakat
                </h1>

                <p class="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed max-w-5xl mx-auto">
                    Platform <span class="font-bold text-green-300">Manajemen Relawan & Distribusi Bantuan</span>
                    yang menggunakan teknologi untuk menciptakan <span class="font-bold text-yellow-300">dampak sosial
                        terukur</span>
                    dan berkelanjutan bagi masyarakat Indonesia
                </p>

                <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                    <button
                        class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                        🎯 Lihat Dampak Nyata
                    </button>
                    <button
                        class="border-2 border-white/50 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                        📚 Pelajari Metodologi
                    </button>
                </div>

                <!-- Competition Badge -->
                <div
                    class="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-yellow-400/30">
                    <div class="text-yellow-300 font-bold text-lg mb-2">
                        🏆 Competition Entry
                    </div>
                    <p class="text-blue-100">
                        "Building Solutions that Make a Real Impact on Society"
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>