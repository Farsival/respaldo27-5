<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-layout>
   <v-navigation-drawer 
      v-model="drawer" 
      temporary
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/lego/6.jpg"
        title="USUARIO ROOT"
        class="bg-blue-darken-4"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="fa-solid fa-plus" title="Agregar Curso" value="add_course" @click="addCourse"></v-list-item>
        <v-list-item prepend-icon="fa-solid fa-trash" title="Eliminar Curso" value="delete_course" @click="deleteCourse"></v-list-item>
        <v-list-item prepend-icon="fa-solid fa-newspaper" title="Agregar Noticias" value="add_news" @click="addNews"></v-list-item>
        <v-list-item prepend-icon="fa-solid fa-edit" title="Editar Noticias" value="edit_news" @click="editNews"></v-list-item>
        <v-list-item prepend-icon="fa-solid fa-save" title="Guardar Cursos" value="save_courses" @click="saveCourses"></v-list-item>
        <v-list-item prepend-icon="fa-solid fa-save" title="Guardar Noticias" value="save_news" @click="saveNews"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from 'vue-router';

const drawer = inject("drawer")
const router = useRouter();

const addCourse = () => {
  router.push("/add_course");
}

const deleteCourse = () => {
  router.push("/delete_course");
}

const addNews = () => {
  router.push("/add_news");
}

const editNews = () => {
  router.push("/edit_news");
}

const saveCourses = () => {
  // Lógica para guardar cursos
  console.log("Guardando cursos...");
}

const saveNews = () => {
  // Lógica para guardar noticias
  console.log("Guardando noticias...");
}
</script>
