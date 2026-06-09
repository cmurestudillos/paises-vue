<template>
  <Navbar />
  <main class="main-content">
    <Buscador />
    <CardList />
  </main>
  <AppFooter />
</template>

<script>
import Navbar from './components/Navbar.vue';
import CardList from './components/CardList.vue';
import Buscador from './components/Buscador.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    CardList,
    Buscador,
    AppFooter,
  },
};
</script>
