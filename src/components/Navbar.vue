<template>
  <header class="app-header">
    <div class="header-content">
      <div class="brand">
        <img src="/img/logo.png" alt="InfoPaíses" />
        <span class="brand-title">InfoPaíses</span>
      </div>
      <div class="filters">
        <span class="filter-label">Filtrar por continente</span>
        <SelectButton
          :model-value="selectedRegion"
          :options="regiones"
          option-label="label"
          option-value="value"
          :allow-empty="false"
          @change="onRegionChange" />
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SelectButton from 'primevue/selectbutton';

export default {
  name: 'Navbar',
  components: { SelectButton },
  setup() {
    const store = useStore();

    const regiones = [
      { label: 'Europa', value: 'Europe' },
      { label: 'América', value: 'Americas' },
      { label: 'Asia', value: 'Asia' },
      { label: 'Oceanía', value: 'Oceania' },
      { label: 'África', value: 'Africa' },
    ];

    const selectedRegion = computed(() => store.state.selectedRegion);

    const onRegionChange = event => {
      if (event.value) {
        store.dispatch('filtrarRegion', event.value);
      }
    };

    return { regiones, selectedRegion, onRegionChange };
  },
};
</script>
