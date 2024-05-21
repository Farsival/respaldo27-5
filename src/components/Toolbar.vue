<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-toolbar
      dark
      prominent
      class="bg-blue-darken-4"
    >
    <v-container>
      <v-row>
        <v-col cols="2">
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer" ></v-app-bar-nav-icon>
        </v-col>
      <v-col cols="8" class="titulo">
      <v-toolbar-title class="titulo2">Página ROOT - Instituto de Alta Especialización UwU</v-toolbar-title>
      </v-col>
      <v-col cols="2">
        <nav class="menu">
          <Router-link v-for="(boton,index) in botones" :key="index" :to="boton.url">
            <v-btn icon>
                <v-icon :icon="boton.icono"/>
            </v-btn> 
        </Router-link>
        </nav>
      </v-col>
      </v-row>
      </v-container>
    </v-toolbar>
  </div>
</template>

<script setup>
  import { inject, ref } from "vue"
  // eslint-disable-next-line no-unused-vars
  const abrir_menu = inject("abrir_menu")
  const botones = ref([
      {url:"/",icono:"fas fa-home"},
    
  ])
  const drawer = inject ("drawer")
</script>

<style scoped>
    .menu{
        
        display: flex;
        justify-content: flex-end;
    }
    .menu a{
        text-decoration: none;
        color: white;
    }
    .boton{
        position: absolute;
        left: 0;
        margin-left: 8px;
    }
    .titulo{
       
        display: flex;
        align-items: center;
    }
    .titulo2{
        display: flex;
        justify-content: center;
       
    }
    .toolbar{
        position: fixed;
        z-index: 1;
    }


</style>