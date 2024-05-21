<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h1>hola</h1>
      <div v-if="loading">Cargando...</div>
      <div v-else>
        <div v-for="noticia in noticiasFinales" :key="noticia.id">
          {{ noticia.titulo }} - {{ noticia.descripcion }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from "vue"
  
    let loading = ref(true); // Indicador de carga
    let noticiasFinales = ref([]);
  
    const obtenerNoticias = async () => {
      try {
        const response = await fetch("http://localhost");
        if (!response.ok) {
          throw new Error("Hubo un problema al obtener las noticias");
        }
        const data = await response.json();
        noticiasFinales.value = data; // Asignación directa
      } catch (error) {
        console.error("Error:", error);
      } finally {
        loading.value = false; // Marcar como no cargando, independientemente del resultado
      }
    };
  
    obtenerNoticias();
  </script>
  
  