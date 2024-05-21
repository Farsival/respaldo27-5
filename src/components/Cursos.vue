<template>
    
    
    <v-card
      class="mx-auto"
      max-width="800"
    >
     <v-container fluid class="tarjetas"  >
        <v-row dense>
          <v-col 
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.img"
                class="align-end imagen"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
                @click="entrar_cursos(card.ruta)"
              >
              <v-card-title class="text-white">{{ card.title }}</v-card-title>
                <v-card-title class="text-white" :v-text="card.title"></v-card-title>
              </v-img>
              <v-card-text><b>{{ card.description }}</b></v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn size="small" color="blue" variant="text" icon="fa-sharp fa solid fa-heart"></v-btn>
  
                <v-btn size="small" color="surface-variant" variant="text" icon="fa-solid fa-bookmark"></v-btn>
  
                <v-btn size="small" color="surface-variant" variant="text" icon="fa-solid fa-share"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script setup>

  



</script>

<style scoped>
.titulo{
    text-align:center;
    color: rgba(35, 33, 33, 0.906); text-shadow: black 0.1em 0.1em 0.2em
}
.imagen{
  cursor: pointer;
}
</style>