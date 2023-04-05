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
         return this.store.cardListApi.data.length;
      }
   }
}
</script>

<template>
   <div class="container d-flex align-items-center justify-content-between">
      <img
         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fanime-arts%2Fimages%2F8%2F85%2FYugioh_logo3.gif%2Frevision%2Flatest%3Fcb%3D20130421005416&f=1&nofb=1&ipt=e30754ed1b0b56357aea02072b8e80707f602150df67cc4635f44bc902ab0af6&ipo=images"
         alt="Logo Yu-Gi-Oh">
      <h1 class="border border-5 border-black fw-bold p-3 rounded-2 ms-5">Yu-Gi-Oh API</h1>
      <h2> {{ numeroCarte }} <i class="fa-regular fa-copy"></i></h2>
   </div>
</template>

<style scoped>
h1 {
   box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
}
</style>