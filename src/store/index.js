import { createStore } from 'vuex';

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload;
    },
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch('https://countries-api-service.vercel.app/api/countries');
        const response = await res.json();
        commit('setPaises', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    filtrarRegion({ commit, state }, region) {
      const filtro = state.paises.filter(pais => pais.region.includes(region));
      commit('setPaisesFiltrados', filtro);
    },
    filtroNombre({ commit, state }, texto) {
      const textoCliente = texto.toLowerCase();
      const filtro = state.paises.filter(pais => {
        // Buscar en el nombre común
        const textoApi = pais.name.common.toLowerCase();
        // También buscar en el nombre oficial
        const textoOficial = pais.name.official.toLowerCase();

        return textoApi.includes(textoCliente) || textoOficial.includes(textoCliente);
      });
      commit('setPaisesFiltrados', filtro);
    },
  },
  getters: {
    topPaisesPoblacion(state) {
      return state.paisesFiltrados.sort((a, b) => (a.population < b.population ? 1 : -1));
    },
  },
  modules: {},
});
