<script setup>
import NavbarLayoutVue from "../layout/NavbarLayout.vue";
import Section1 from "./HomePage/Section1.vue";
import Section2 from "./HomePage/Section2.vue";
import Section3 from "./HomePage/Section3.vue";
import Section4 from "./HomePage/Section4.vue";
import Section5 from "./HomePage/Section5.vue";
import Section6 from "./HomePage/Section6.vue";
import Section7 from "./HomePage/Section7.vue";
import FooterLayout from "../layout/FooterLayout.vue";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <NavbarLayoutVue />

    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />

    <FooterLayout />
  </div>
</template>