<script>
import { store } from '../store.js';

export default {
   name: "TheHeader",
   components: {

   },
   data() {
      return {
         store,
      }
   },
   computed: {
      numeroCarte() {
         
      }
   }
}
</script>

<template>
   <div class="container d-flex align-items-center justify-content-between">
      <img src="http://images5.fanpop.com/image/photos/25000000/Yu-Gi-Oh-yu-gi-oh-25008237-1024-768.jpg"
         alt="Logo Yu-Gi-Oh">
      <h1>Yu-Gi-Oh API</h1>

   </div>
</template>

<style scoped>
h1 {
   box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
}

img {
   width: 300px;
   height: 100px;
}
</style>