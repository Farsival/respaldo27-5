<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12" md="4" sm="6" v-for="(action, index) in actions" :key="index">
        <v-btn 
          :color="action.color" 
          dark :rounded="action.rounded" size="x-large" block 
          @click="goTo(action.route)"
          @mouseover="toggleColors(index)"
          :style="{ backgroundColor: action.currentColor }">
          {{ action.label }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        { label: 'Agregar Curso', route: '/add_course', color: 'blue darken-2', rounded: '0', currentColor: 'blue darken-2' },
        { label: 'Editar Curso', route: '/edit_course', color: 'blue darken-2', rounded: 'xs', currentColor: 'blue darken-2' },
        { label: 'Guardar Curso', route: '/save_course', color: 'blue darken-2', rounded: 'sm', currentColor: 'blue darken-2' },
        { label: 'Agregar Noticias', route: '/add_news', color: 'red darken-2', rounded: '', currentColor: 'red darken-2' },
        { label: 'Editar Noticias', route: '/edit_news', color: 'red darken-2', rounded: 'lg', currentColor: 'red darken-2' },
        { label: 'Guardar Noticias', route: '/save_news', color: 'red darken-2', rounded: 'xl', currentColor: 'red darken-2' },
        { label: 'Agregar Examanes', route: '/add_exams', color: 'blue darken-2', rounded: '0', currentColor: 'blue darken-2' },
        { label: 'Fecha de Examenes', route: '/exams_date', color: 'blue darken-2', rounded: 'xs', currentColor: 'blue darken-2' },
        { label: 'Agregar Proyectos', route: '/add_proyets', color: 'blue darken-2', rounded: 'sm', currentColor: 'blue darken-2' },
        { label: 'Editar Correo', route: '/edit_mail', color: 'red darken-2', rounded: '', currentColor: 'red darken-2' },
        { label: 'Horarios de Asignaturas', route: '/timetables_subjets', color: 'red darken-2', rounded: 'lg', currentColor: 'red darken-2' },
        { label: 'Editar Direccion', route: '/edit_address', color: 'red darken-2', rounded: 'xl', currentColor: 'red darken-2' },
        { label: 'Becas🤑 ', route: '/add_course', color: 'blue darken-2', rounded: '0', currentColor: 'blue darken-2' },
      ]
    };
  },
  methods: {
    goTo(url) {
      this.$router.push(url);
    },
    toggleColors(index) {
      const tempColor = this.actions[index].color;
      this.actions[index].color = this.actions[index].currentColor;
      this.actions[index].currentColor = tempColor;
    }
  }
};
</script>

<style scoped>
</style>
