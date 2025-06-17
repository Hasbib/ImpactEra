<script setup>
import { ref } from 'vue';

const techStack = ref([
    {
        category: "Frontend Framework",
        tools: ["Vue.js 3", "Composition API", "Reactive System", "Component-based"],
        icon: "💚",
        purpose: "Framework modern untuk UI yang reaktif"
    },
    {
        category: "Styling",
        tools: ["Tailwind CSS", "Responsive Design", "Utility Classes", "Custom Components"],
        icon: "🎨",
        purpose: "Styling yang efisien dan konsisten"
    },
    {
        category: "Development",
        tools: ["Vite", "Hot Module Replacement", "ES6+ Modules", "Single File Components"],
        icon: "⚡",
        purpose: "Development experience yang cepat"
    },
    {
        category: "Features",
        tools: ["Progressive Web App", "Mobile Responsive", "Cross Browser", "SEO Friendly"],
        icon: "🌟",
        purpose: "Pengalaman pengguna yang optimal"
    }
]);
</script>

<template>
    <section id="tech" class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    <span
                        class="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Teknologi</span>
                    yang Digunakan
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Stack teknologi sederhana namun powerful untuk membangun aplikasi web modern
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="tech in techStack" :key="tech.category"
                    class="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
                    <div class="text-4xl mb-4 text-center">{{ tech.icon }}</div>
                    <h3 class="text-lg font-bold text-gray-800 mb-3 text-center">{{ tech.category }}</h3>

                    <div class="space-y-2 mb-4">
                        <div v-for="tool in tech.tools" :key="tool"
                            class="bg-white rounded-lg px-3 py-2 text-center border border-gray-200 hover:border-green-300 transition-colors duration-200">
                            <span class="text-gray-700 text-sm font-medium">{{ tool }}</span>
                        </div>
                    </div>

                    <p class="text-gray-600 text-sm text-center italic">{{ tech.purpose }}</p>
                </div>
            </div>

        </div>
    </section>
</template>