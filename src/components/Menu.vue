<template>
    <div class="menu">
          <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
             <v-list-item  v-for="(lista, index) in listas" :key="index" :prepend-icon="lista.icono" :title="lista.nombre" :value="lista.valor" @click="cursos(lista.pagina)"></v-list-item>
       <!-- <v-list-item prepend-icon="mdi mdi-account-box-multiple" title="Cursos" value="mdi mdi-account-box-multiple" @click="cursos"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-store-clock" title="Noticias" value="mdi mdi-store-clock"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-google-classroom" title="Exámenes" value="mdi mdi-google-classroom"></v-list-item>
           <v-list-item prepend-icon="mdi mdi-hours-24" title="Horarios" value="mdi mdi-hours-24"></v-list-item>
            <v-list-item prepend-icon="mdi mdi-pencil-ruler" title="Proyectos" value="myfiles"></v-list-item>
           <v-list-item prepend-icon="mdi mdi-gmail" title="Editar correo" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi mdi-map-marker-outline" title="Editar dirección" value="myfiles"></v-list-item>
           --> 
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
.v-card--variant-elevated, .v-card--variant-flat{
    background: none;
    box-shadow: none;
}
.boton{
    width: 100%;
    height: 100%;
    background-color: brown;
}
</style>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
    const listas = ref([
        {nombre:"Cursos", icono:"mdi mdi-account-box-multiple", valor:"mdi mdi-account-box-multiple", funcion:"cursos",pagina:"cursos" },
        {nombre:"Noticias", icono:"mdi mdi-store-clock", valor:"mdi mdi-store-clock", funcion:"noticias",pagina:"noticias" },
        {nombre:"Exámenes", icono:"mdi mdi-google-classroom", valor:"mdi mdi-google-classroom", funcion:"examenes", pagina:"examenes"},
        {nombre:"Horarios", icono:"mdi mdi-hours-24", valor:"mdi mdi-hours-24", funcion:"horarios", pagina:"horarios"},
        {nombre:"Proyectos", icono:"mdi mdi-pencil-ruler", valor:"mdi mdi-pencil-ruler", funcion:"proyectos", pagina:"proyectos"},
        {nombre:"Editar correo", icono:"mdi mdi-gmail", valor:"mdi mdi-gmail", funcion:"editar_correo", pagina:"editar_correo"},
        {nombre:"Editar dirección", icono:"mdi mdi-map-marker-outline", valor:"mdi mdi-map-marker-outline", funcion:"editar_direccion", pagina:"editar_direccion"}
    ])
    const cursos = (e)=>{
       router.push(`/${e}`)
    }
  
    
</script>