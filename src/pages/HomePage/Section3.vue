<script setup>
import { ref } from 'vue';

const impactSteps = ref([
    {
        id: 1,
        step: "01",
        title: "Identifikasi Masalah Nyata",
        description: "Menganalisis kebutuhan masyarakat dan mengidentifikasi gap dalam sistem bantuan sosial",
        icon: "🎯",
        solutions: [
            "Riset lapangan mendalam di komunitas terdampak",
            "Mapping kebutuhan berbasis data dan lokasi geografis",
            "Identifikasi stakeholder dan rantai bantuan existing",
            "Analisis hambatan distribusi bantuan tradisional"
        ],
        color: "from-red-500 to-orange-500",
        impact: "Akurasi identifikasi masalah 95%"
    },
    {
        id: 2,
        step: "02",
        title: "Membangun Solusi Teknologi",
        description: "Mengembangkan platform digital yang mengatasi masalah secara langsung dan terukur",
        icon: "🚀",
        solutions: [
            "Platform manajemen relawan berbasis skill-matching",
            "Sistem inventory real-time untuk tracking bantuan",
            "Dashboard analytics untuk monitoring dampak",
            "Mobile app untuk koordinasi lapangan yang efektif"
        ],
        color: "from-blue-500 to-cyan-500",
        impact: "Efisiensi operasional meningkat 300%"
    },
    {
        id: 3,
        step: "03",
        title: "Implementasi & Kolaborasi",
        description: "Menjalankan solusi dengan melibatkan masyarakat dan stakeholder terkait",
        icon: "🤝",
        solutions: [
            "Partnership dengan organisasi sosial existing",
            "Training dan capacity building untuk user",
            "Pilot project di komunitas target",
            "Feedback loop berkelanjutan dengan beneficiary"
        ],
        color: "from-green-500 to-emerald-500",
        impact: "Network kolaborasi 500+ organisasi"
    },
    {
        id: 4,
        step: "04",
        title: "Mengukur Dampak Nyata",
        description: "Evaluasi sistematis dampak positif dan optimalisasi berkelanjutan",
        icon: "📊",
        solutions: [
            "KPI tracking dengan metrics yang jelas",
            "Impact assessment berbasis data kuantitatif",
            "Testimoni dan feedback dari beneficiary",
            "Continuous improvement berdasarkan hasil evaluasi"
        ],
        color: "from-purple-500 to-violet-500",
        impact: "ROI sosial terukur dan transparan"
    }
]);
</script>
<template>
    <section id="impact" class="py-24 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div class="container mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                    4 Langkah Membangun<br />
                    <span class="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Dampak
                        Nyata</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Metodologi sistematis untuk menciptakan solusi teknologi yang memberikan dampak positif dan terukur
                    bagi
                    masyarakat
                </p>
            </div>

            <div class="space-y-16">
                <div v-for="(step, index) in impactSteps" :key="step.id" class="group">
                    <div
                        :class="['flex flex-col lg:flex-row items-center gap-12', index % 2 === 1 ? 'lg:flex-row-reverse' : '']">
                        <!-- Icon & Step -->
                        <div class="flex-shrink-0">
                            <div
                                :class="['w-56 h-56 rounded-3xl flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-500 shadow-2xl', 'bg-gradient-to-br', step.color]">
                                <div class="text-6xl mb-4">{{ step.icon }}</div>
                                <div class="text-white font-bold text-2xl">Step {{ step.step }}</div>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="flex-1">
                            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{{ step.title }}</h3>
                            <p class="text-gray-600 text-xl mb-8 leading-relaxed">{{ step.description }}</p>

                            <div class="grid md:grid-cols-2 gap-4 mb-6">
                                <div v-for="solution in step.solutions" :key="solution"
                                    class="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200">
                                    <div class="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span class="text-gray-700 font-medium">{{ solution }}</span>
                                </div>
                            </div>

                            <div
                                class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                                <div class="flex items-center">
                                    <span class="text-2xl mr-3">📈</span>
                                    <span class="text-green-800 font-semibold">{{ step.impact }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>