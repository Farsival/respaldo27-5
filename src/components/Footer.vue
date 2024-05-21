<!-- eslint-disable vue/multi-word-component-names -->
<template>
<v-layout>
    <div class="footer">
      <v-footer
      class="bg-blue-darken-4 text-center d-flex flex-column"
    >
      <div>

      </div>

      <div class="pt-0">
        Todos los derechos reservados UTU - Instituto de Alta Especialización 
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Cerro Largo</strong>
      </div>
    </v-footer>
    </div>
</v-layout>
</template>

<script setup>
import { ref } from "vue";
  // eslint-disable-next-line no-unused-vars
  const icons = ref([
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
  ])
</script>

<style>
.footer{
  position: fixed;
  bottom:0;
  width: 100%;
  height: 64px;
  background-color: brown;
}
</style>