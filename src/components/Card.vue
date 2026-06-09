<template>
  <PvCard class="country-card">
    <template #header>
      <div class="flag-wrapper">
        <img :src="pais.flags.svg" :alt="`Bandera de ${pais.name.common}`" class="flag-img" loading="lazy" />
      </div>
    </template>
    <template #content>
      <p class="card-country-name">{{ pais.name.common }}</p>
      <p class="card-official-name">{{ pais.name.official }}</p>
      <div class="card-data">
        <div class="data-row">
          <span class="data-label"><i class="pi pi-map-marker" />Capital</span>
          <PvTag :value="pais.capital ? pais.capital[0] : 'N/A'" severity="success" />
        </div>
        <div class="data-row">
          <span class="data-label"><i class="pi pi-users" />Población</span>
          <PvTag :value="numeroFormato(pais.population)" severity="info" />
        </div>
        <div class="data-row">
          <span class="data-label"><i class="pi pi-globe" />Continente</span>
          <PvTag :value="pais.region" severity="warn" />
        </div>
      </div>
    </template>
  </PvCard>
</template>

<script>
import PvCard from 'primevue/card';
import PvTag from 'primevue/tag';

export default {
  name: 'Card',
  components: { PvCard, PvTag },
  props: {
    pais: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const numeroFormato = num => new Intl.NumberFormat('es-ES').format(num);
    return { numeroFormato };
  },
};
</script>
