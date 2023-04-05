<script>

import { store } from '../store';
export default {
   name: "Card",
   props: {
      image: String,
      name: String,
      type: String
   },
   data() {
      return {
         store
      }
   },
}
</script>

<template>
   <div class="card p-2The-2 text-center">
      <img :src="image" alt="`Immagine ${name}`">
      <h6 class="text-white py-2 fw-bold">{{ name }}</h6>
      <span class="py-1">{{ type }}</span>
   </div>
</template>

<style lang="scss" scoped>
@use '../styles/General.scss' as *;

.card {
   background-color: $marroncino;
   height: 23rem;
}

h6 {
   height: 3rem;
}
</style>