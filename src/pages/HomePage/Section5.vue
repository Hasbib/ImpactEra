<script setup>
import { ref } from 'vue';

const methodologyPrinciples = ref([
    {
        title: "Community-Centered",
        description: "Solusi dibangun dengan dan untuk masyarakat",
        icon: "👥",
        principles: [
            "Participatory design dengan melibatkan end-user",
            "Cultural sensitivity dalam setiap implementasi",
            "Local ownership untuk sustainability jangka panjang"
        ]
    },
    {
        title: "Data-Driven",
        description: "Setiap keputusan berbasis data dan evidence",
        icon: "📈",
        principles: [
            "Real-time data collection dan analysis",
            "Transparent reporting untuk accountability",
            "Predictive analytics untuk antisipasi kebutuhan"
        ]
    },
    {
        title: "Technology for Good",
        description: "Teknologi sebagai enabler dampak sosial positif",
        icon: "🌟",
        principles: [
            "Open source untuk aksesibilitas maksimal",
            "Privacy-first dalam handling data sensitif",
            "Scalable architecture untuk replikasi mudah"
        ]
    },
    {
        title: "Sustainable Impact",
        description: "Fokus pada dampak jangka panjang dan berkelanjutan",
        icon: "🌱",
        principles: [
            "Self-sustaining operational model",
            "Capacity building untuk local ownership",
            "Environmental consciousness dalam setiap operasi"
        ]
    }
]);
</script>
<template>
    <section id="methodology" class="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Prinsip <span
                        class="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Metodologi</span>
                    Kami
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Fondasi filosofis yang memastikan setiap solusi teknologi menciptakan dampak sosial yang
                    berkelanjutan
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="principle in methodologyPrinciples" :key="principle.title"
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                    <div class="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                        {{ principle.icon }}
                    </div>

                    <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">{{ principle.title }}</h3>
                    <p class="text-gray-600 mb-6 text-center text-sm">{{ principle.description }}</p>

                    <div class="space-y-3">
                        <div v-for="item in principle.principles" :key="item" class="flex items-start">
                            <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span class="text-gray-700 text-sm">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>