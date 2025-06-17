<script setup>
import { ref } from 'vue';

const realImpacts = ref([
    {
        title: "Respons Bencana Alam",
        description: "Koordinasi bantuan darurat yang cepat dan tepat sasaran",
        icon: "🌪️",
        cases: ["Tanggap darurat banjir Jakarta 2024", "Distribusi bantuan gempa Cianjur"],
        metrics: {
            beneficiary: "50,000+ korban terbantu",
            time: "Response time <script 2 jam",
            efficiency: "Efisiensi distribusi 85%"
        },
        testimonial: "Platform ini menyelamatkan banyak nyawa dengan koordinasi yang sangat cepat"
    },
    {
        title: "Pemberdayaan Ekonomi",
        description: "Program bantuan UMKM dan pemberdayaan ekonomi masyarakat",
        icon: "💼",
        cases: ["Program bantuan modal UMKM", "Pelatihan keterampilan digital"],
        metrics: {
            beneficiary: "15,000+ UMKM diberdayakan",
            time: "Proses verifikasi 1 hari",
            efficiency: "Tingkat keberhasilan 92%"
        },
        testimonial: "Usaha saya berkembang pesat berkat bantuan yang tepat waktu dan tepat sasaran"
    },
    {
        title: "Kesehatan Masyarakat",
        description: "Distribusi bantuan kesehatan dan mobilisasi tenaga medis",
        icon: "🏥",
        cases: ["Program vaksinasi massal COVID-19", "Bantuan APD untuk faskes"],
        metrics: {
            beneficiary: "500,000+ masyarakat tervaksin",
            time: "Coverage 95% dalam 6 bulan",
            efficiency: "Zero waste distribusi vaksin"
        },
        testimonial: "Sistem koordinasi yang luar biasa, membuat program vaksinasi berjalan sempurna"
    },
    {
        title: "Pendidikan Darurat",
        description: "Penyediaan akses pendidikan untuk anak-anak di daerah terdampak",
        icon: "📚",
        cases: ["Sekolah darurat pasca bencana", "Program laptop untuk siswa"],
        metrics: {
            beneficiary: "25,000+ siswa terbantu",
            time: "Setup sekolah darurat 3 hari",
            efficiency: "98% tingkat kehadiran"
        },
        testimonial: "Anak-anak bisa terus belajar meski dalam kondisi darurat, terima kasih!"
    }
]);

</script>
<template>
    <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Dampak <span
                        class="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Nyata</span>
                    Yang Terukur
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Studi kasus implementasi solusi dengan hasil yang dapat diverifikasi dan berdampak langsung bagi
                    masyarakat
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="impact in realImpacts" :key="impact.title"
                    class="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group">
                    <div class="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                        {{ impact.icon }}
                    </div>

                    <h3 class="text-2xl font-bold text-gray-800 mb-3 text-center">{{ impact.title }}</h3>
                    <p class="text-gray-600 mb-6 text-center">{{ impact.description }}</p>

                    <!-- Cases -->
                    <div class="space-y-2 mb-6">
                        <h4 class="font-semibold text-gray-800 text-sm">Studi Kasus:</h4>
                        <div v-for="case_ in impact.cases" :key="case_" class="flex items-start">
                            <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span class="text-gray-700 text-sm">{{ case_ }}</span>
                        </div>
                    </div>

                    <!-- Metrics -->
                    <div class="space-y-3 mb-6">
                        <div class="bg-green-50 rounded-lg px-4 py-2 border border-green-200">
                            <span class="text-green-800 font-semibold text-sm">{{ impact.metrics.beneficiary }}</span>
                        </div>
                        <div class="bg-blue-50 rounded-lg px-4 py-2 border border-blue-200">
                            <span class="text-blue-800 font-semibold text-sm">{{ impact.metrics.time }}</span>
                        </div>
                        <div class="bg-purple-50 rounded-lg px-4 py-2 border border-purple-200">
                            <span class="text-purple-800 font-semibold text-sm">{{ impact.metrics.efficiency }}</span>
                        </div>
                    </div>

                    <!-- Testimonial -->
                    <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-yellow-400">
                        <p class="text-gray-700 italic text-sm">"{{ impact.testimonial }}"</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>