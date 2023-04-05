<script>
import { store } from '../store.js';
export default {
   name: 'Loading',
   data() {
      return {
         store
      }
   }
}
</script>

<template>
   <div class="loading h-100 w-100 d-flex flex-column justify-content-center align-items-center" v-if="store.loading">
      <h1 class="fw-bold">Loading...</h1>
      <div class="well">
         <i class="icon fas fa-circle-notch fw-bold"></i>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use '../styles/General.scss' as *;

.loading {
   background-color: $marroncino;
   position: fixed;
   top: 0;
   left: 0;
}

h1 {
   font-size: 5rem;
   animation: titolo 3s linear infinite;
}

.icon {
   animation: gira linear 2s infinite, titolo 4s linear infinite;
   font-size: 3.5rem;
}

@keyframes gira {
   0% {
      rotate: 0deg;
   }

   50% {
      rotate: 180deg;
   }

   100% {
      rotate: 360deg;
   }
}

@keyframes titolo {

   0% {
      color: rgb(255, 255, 255);
   }

   25% {
      color: rgb(255, 0, 72);
   }

   50% {
      color: rgb(87, 128, 0);
   }

   75% {
      color: blue
   }

   100% {
      color: white;
   }
}
</style>