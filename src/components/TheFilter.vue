<script>

import { store } from '../store';
export default {
   name: "TheFilter",
   props: {

   },
   data() {
      return {
         store
      }
   }
}
</script>

<template>
   <div class="container">
      <div class="input-group mb-3 pt-4">
         <label class="input-group-text" for="ScegliArchetipo">Scegli una carta</label>
         <select class="form-select" id="ScegliArchetipo" v-model="store.selezioneFiltro" @change="$emit('filtraCard')">
            <option selected="">Scegli...</option>
            <option :key="index" v-for="(archertipo, index) in store.archetypeListApi" :value="archertipo.archetype_name">
               {{ archertipo.archetype_name }}
            </option>
         </select>
      </div>
   </div>
</template> 


<style>
</style>
