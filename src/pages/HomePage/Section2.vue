<script setup>
import { ref } from 'vue';

const stats = ref([
    { number: "500K+", label: "Masyarakat Terbantu", desc: "Dampak langsung terukur" },
    { number: "1,200+", label: "Relawan Aktif", desc: "Network di seluruh Indonesia" },
    { number: "300+", label: "Organisasi Mitra", desc: "Kolaborasi lintas sektor" },
    { number: "98%", label: "Satisfaction Rate", desc: "Tingkat kepuasan beneficiary" }
]);
</script>
<template>
    <section class="py-20 bg-white/90 backdrop-blur-sm">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="stat in stats" :key="stat.label" class="text-center group">
                    <div
                        class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {{ stat.number }}
                    </div>
                    <div class="text-gray-800 font-semibold mb-1">{{ stat.label }}</div>
                    <div class="text-gray-600 text-sm">{{ stat.desc }}</div>
                </div>
            </div>
        </div>
    </section>
</template>