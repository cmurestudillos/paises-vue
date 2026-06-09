<template>
  <div class="search-wrapper">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="texto" class="search-input" placeholder="Buscar país por nombre..." @input="procesarInput" />
    </IconField>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

export default {
  name: 'Buscador',
  components: { IconField, InputIcon, InputText },
  setup() {
    const texto = ref('');
    const store = useStore();

    const procesarInput = () => {
      if (texto.value.trim() === '') {
        store.dispatch('filtrarRegion', store.state.selectedRegion ?? 'Europe');
      } else {
        store.dispatch('filtroNombre', texto.value);
      }
    };

    return { texto, procesarInput };
  },
};
</script>
