<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const scrollProgress = ref(0);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  isScrolled.value = scrollTop > 50;
  scrollProgress.value = (scrollTop / docHeight) * 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const menuItems = [
  { name: 'Beranda', href: '#home', icon: '🏠' },
  { name: 'Metodologi', href: '#methodology', icon: '🎯' },
  { name: 'Dampak Nyata', href: '#impact', icon: '📊' },
  { name: 'Teknologi', href: '#tech', icon: '🚀' },
  { name: 'Tim', href: '#team', icon: '👥' }
];
</script>

<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    isScrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50'
      : 'bg-transparent'
  ]">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Enhanced Logo -->
        <div class="flex items-center space-x-4 group">
          <div class="relative">
            <div :class="[
              'w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3',
              'bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700'
            ]">
              <span class="text-white font-bold text-xl">IE</span>
            </div>
            <!-- Competition Badge -->
            <div
              class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <span class="text-xs font-bold text-white">🏆</span>
            </div>
            <!-- Status Indicator -->
            <div
              class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white">
            </div>
          </div>
          <div>
            <h1 :class="[
              'text-2xl font-bold transition-all duration-500 bg-clip-text text-transparent',
              isScrolled
                ? 'bg-gradient-to-r from-gray-800 to-blue-600'
                : 'bg-gradient-to-r from-white to-blue-200'
            ]">
              ImpactEra
            </h1>
            <p :class="[
              'text-xs font-semibold transition-colors duration-500',
              isScrolled ? 'text-blue-600' : 'text-yellow-300'
            ]">
            </p>
          </div>
        </div>

        <!-- Enhanced Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-2">
          <a v-for="item in menuItems" :key="item.name" :href="item.href" :class="[
            'group relative font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 px-4 py-3 rounded-xl',
            isScrolled
              ? 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
              : 'text-white hover:text-yellow-300 hover:bg-white/10 backdrop-blur-sm'
          ]">
            <span class="text-lg group-hover:scale-110 transition-transform duration-300">{{ item.icon }}</span>
            <span>{{ item.name }}</span>
            <!-- Hover underline effect -->
            <div
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300">
            </div>
          </a>

          <!-- Enhanced CTA Button -->
          <button :class="[
            'ml-4 px-8 py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 group relative overflow-hidden',
            isScrolled
              ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
              : 'bg-white text-blue-600 hover:bg-blue-50'
          ]">
            <div
              class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
            <span class="relative z-10 group-hover:scale-110 transition-transform duration-300">🚀</span>
            <span class="relative z-10">Mulai Dampak</span>
          </button>
        </div>

        <!-- Enhanced Mobile Menu Button -->
        <button @click="toggleMenu" class="lg:hidden p-3 rounded-xl transition-all duration-300 relative group" :class="isScrolled
          ? 'text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
          : 'text-white hover:bg-white/10 backdrop-blur-sm'">
          <div class="relative w-6 h-6">
            <span :class="[
              'absolute h-0.5 w-6 bg-current transition-all duration-300 transform',
              isMenuOpen ? 'rotate-45 top-3' : 'top-1'
            ]"></span>
            <span :class="[
              'absolute h-0.5 w-6 bg-current transition-all duration-300',
              isMenuOpen ? 'opacity-0' : 'top-3'
            ]"></span>
            <span :class="[
              'absolute h-0.5 w-6 bg-current transition-all duration-300 transform',
              isMenuOpen ? '-rotate-45 top-3' : 'top-5'
            ]"></span>
          </div>
        </button>
      </div>

      <!-- Enhanced Mobile Menu -->
      <div :class="[
        'lg:hidden transition-all duration-500 overflow-hidden',
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      ]">
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl mt-4 shadow-2xl border border-white/20 overflow-hidden">
          <div class="py-8 px-6">
            <!-- Competition Header -->
            <div
              class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl p-6 mb-6 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16">
              </div>
              <div class="relative">
                <div class="flex items-center justify-center mb-3">
                  <span class="text-3xl mr-2">🏆</span>
                </div>
                <p class="text-center text-blue-100 text-sm">Building Solutions for Real Impact</p>
                <div class="mt-4 flex justify-center">
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Menu Items -->
            <div class="space-y-2">
              <a v-for="item in menuItems" :key="item.name" :href="item.href" @click="isMenuOpen = false"
                class="group flex items-center space-x-4 py-4 px-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-semibold">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl">{{ item.icon }}</span>
                </div>
                <span class="flex-1">{{ item.name }}</span>
                <span class="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">→</span>
              </a>
            </div>

            <!-- Mobile CTA -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <button
                class="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-4 rounded-2xl font-bold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl group"
                @click="isMenuOpen = false">
                <span class="text-xl group-hover:scale-110 transition-transform duration-300">🚀</span>
                <span>Mulai Membuat Dampak</span>
              </button>

              <div class="mt-4 text-center">
                <p class="text-gray-500 text-sm">500K+ masyarakat telah terbantu</p>
                <div class="flex justify-center mt-2">
                  <div class="flex -space-x-2">
                    <div class="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    <div class="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div class="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div
                      class="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                      +</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Progress Bar -->
    <div v-if="isScrolled"
      class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 transition-all duration-300 shadow-lg"
      :style="{ width: `${Math.min(scrollProgress, 100)}%` }"></div>

  </nav>
</template>

<style scoped>
/* Enhanced animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Custom gradient text animation */
@keyframes gradient-shift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-text {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Hover effects */
.group:hover .group-hover\:animate-bounce {
  animation: bounce 1s infinite;
}

/* Smooth transitions for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}
</style>