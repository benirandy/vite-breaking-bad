<script>
import axios from 'axios';
import { store } from './store.js';
import TheHeader from './components/TheHeader.vue';
import TheFilter from './components/TheFilter.vue';
import CardList from './components/CardList.vue';
import Loading from './components/Loading.vue';

export default {
  components: {
    Loading,
    TheHeader,
    TheFilter,
    CardList,

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {

      let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0';

      if (store.selezioneFiltro.length > 0) {
        urlApi += `?archetype=${store.selezioneFiltro}`;
        console.log("la funzione getCard è entrata nel if")
      }


      axios.get(urlApi)
        .then(response => {
          this.store.cardListApi = response.data;
          this.store.loading = false;
        });
      store.selezioneFiltro = ""
      console.log("la funzione getCard è terminata")
    },
    getFilter() {
      axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
        .then(response => {
          this.store.archetypeListApi = response.data;
        });
    },
  },
  created() {
    this.getCards();
    this.getFilter();
  }
}

</script>

<template>
  <Loading />
  <TheHeader />
  <div class="sfondo">
    <TheFilter @filtraCard="getCards" />
    <CardList />
  </div>
</template>

<style lang="scss">
@use './styles/General.scss' as *;

.sfondo {
  background-color: $marroncino;
}
</style>
