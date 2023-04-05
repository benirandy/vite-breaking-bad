import { reactive } from 'vue';

export const store = reactive(
   {
      cardListApi: [],
      archetypeListApi: [],
      selezioneFiltro: '',
      loading: true,
   }
);