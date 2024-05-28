<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu">
    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail class="bg-blue-darken-4">
          <v-list>
            <v-list-item
              prepend-avatar="https://www.sincrack.com/wp-content/uploads/2019/03/root-linux-1.jpg"
              title="Usuario Root"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              v-for="(lista, index) in listas"
              :key="index"
              :prepend-icon="lista.icono"
              :title="lista.nombre"
              @click="navigateTo(lista.pagina)"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style scoped>
.menu {
  width: 20%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  overflow: hidden; /* Ocultar el fondo */
  transition: transform 0.3s ease-in-out; /* Transición suave */
}
.v-card--variant-elevated, .v-card--variant-flat {
  background: none;
  box-shadow: none;
}
.bg-blue-darken-4 {
  background-color: #0d47a1; /* Usando un color azul oscuro como ejemplo */
}
</style>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const listas = ref([
  { nombre: "Cursos", icono: "mdi mdi-account-box-multiple", pagina: "cursos" },
  { nombre: "Noticias", icono: "mdi mdi-store-clock", pagina: "noticias" },
  { nombre: "Exámenes", icono: "mdi mdi-google-classroom", pagina: "examenes" },
  { nombre: "Horarios", icono: "mdi mdi-hours-24", pagina: "horarios" },
  { nombre: "Proyectos", icono: "mdi mdi-pencil-ruler", pagina: "proyectos" },
  { nombre: "Editar correo", icono: "mdi mdi-gmail", pagina: "editarcorreo" },
  { nombre: "Editar dirección", icono: "mdi mdi-map-marker-outline", pagina: "editardireccion" }
]);

const navigateTo = (page) => {
  router.push(`/${page}`);
}
</script>
