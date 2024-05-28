<template>
  <div>
    <Toolbar/>
    <Menu/>
    
    <Router-view/>
    <Footer/>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { useRouter } from "vue-router";
import Toolbar from "@/components/Toolbar.vue";
import Menu from "@/components/Menu.vue";

import Footer from "@/components/Footer.vue";

const router = useRouter();
const drawer = ref(false);
provide("drawer", drawer);
</script>

