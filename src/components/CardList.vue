<template>
  <p class="results-info">
    Mostrando <span>{{ paises.length }}</span> países
  </p>

  <div v-if="loading" class="skeleton-grid">
    <PvSkeleton v-for="n in 6" :key="n" height="360px" border-radius="12px" />
  </div>

  <div v-else class="countries-grid">
    <Card v-for="pais in paises" :key="pais._id || pais.cca3" :pais="pais" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Card from './Card.vue';
import PvSkeleton from 'primevue/skeleton';

export default {
  name: 'CardList',
  components: { Card, PvSkeleton },
  setup() {
    const store = useStore();

    const paises = computed(() => store.getters.topPaisesPoblacion);
    const loading = computed(() => store.getters.isLoading);

    onMounted(async () => {
      await store.dispatch('getPaises');
      await store.dispatch('filtrarRegion', 'Europe');
    });

    return { paises, loading };
  },
};
</script>
