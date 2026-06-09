import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import './assets/main.css';

const GreenAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}',
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(PrimeVue, {
  theme: {
    preset: GreenAura,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
});

app.mount('#app');
