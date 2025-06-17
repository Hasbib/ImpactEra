<script setup>
import { ref } from 'vue';

const currentYear = new Date().getFullYear();

const socialLinks = [
  { name: 'GitHub', icon: '📱', href: '#' },
  { name: 'LinkedIn', icon: '💼', href: '#' },
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'Instagram', icon: '📸', href: '#' }
];

const quickLinks = [
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Solusi & Dampak', href: '#solutions' },
  { name: 'Metodologi', href: '#methodology' },
  { name: 'Tim Developer', href: '#team' }
];

const supportLinks = [
  { name: 'Dokumentasi API', href: '#docs' },
  { name: 'FAQ & Bantuan', href: '#faq' },
  { name: 'Dukungan Teknis', href: '#support' },
  { name: 'Komunitas Dev', href: '#community' }
];

const email = ref('');

const subscribe = () => {
  if (email.value) {
    alert('Terima kasih telah berlangganan! 🎉');
    email.value = '';
  }
};
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">IE</span>
            </div>
            <div>
              <h1 class="text-xl font-bold">ImpactEra</h1>
            </div>
          </div>

          <p class="text-gray-300 mb-6 text-sm leading-relaxed">
            Platform manajemen relawan dan distribusi bantuan untuk menciptakan dampak sosial yang terukur.
          </p>

          <div class="flex space-x-3">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href"
              class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              :title="social.name">
              <span class="text-sm">{{ social.icon }}</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Navigasi</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.href" class="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Support Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Support</h3>
          <ul class="space-y-2">
            <li v-for="link in supportLinks" :key="link.name">
              <a :href="link.href" class="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
          <p class="text-gray-400 mb-4 text-sm">
            Dapatkan update terbaru dari platform kami.
          </p>

          <div class="space-y-3">
            <input v-model="email" type="email" placeholder="Email Anda"
              class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">

            <button @click="subscribe"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {{ currentYear }} ImpactEra Team. All rights reserved.
          </p>

          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" class="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" class="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>