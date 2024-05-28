<template>
    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="12" md="4" sm="6" v-for="(action, index) in actions" :key="index">
          <v-card
            class="mx-auto"
            max-width="500"
            :style="{ backgroundColor: action.currentColor }"
            @mouseover="toggleColors(index)"
            @click="handleActionClick(action)"
          >
            <v-container fluid>
              <v-row dense>
                <v-col :cols="12">
                    <v-img
                      :src="action.src"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                      cover
                    >
                      <v-card-title class="text-white">{{ action.label }}</v-card-title>
                    </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="medium-emphasis"
                        icon="mdi mdi-pen-plus"
                        size="small"
                      ></v-btn>
                      <v-btn
                        color="medium-emphasis"
                        icon="mdi mdi-book-edit"
                        size="small"
                      ></v-btn>
                      <v-btn
                        color="medium-emphasis"
                        icon="mdi mdi-delete-alert"
                        size="small"
                      ></v-btn>
                    </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        actions: [
          // Tus otras acciones...
          { 
            label: 'Editar correo', 
            route: '/add_course', 
            color: 'blue darken-2', 
            rounded: '0', 
            currentColor: 'blue darken-2', 
            src: 'https://static.vecteezy.com/system/resources/previews/001/871/176/non_2x/design-for-writing-edit-send-and-using-an-email-finding-target-can-also-be-used-for-business-icon-design-and-graphic-elements-free-vector.jpg' // Imagen de ejemplo, cambia según sea necesario
          },
          // Tus otras acciones...
        ]
      };
    },
    methods: {
      handleActionClick(action) {
        if (action.route) {
          this.$router.push(action.route);
        } else {
          // Aquí puedes manejar otras acciones si es necesario
        }
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
  