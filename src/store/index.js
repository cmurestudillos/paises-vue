import { createStore } from 'vuex';

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
    loading: false,
    selectedRegion: 'Europe',
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload;
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setSelectedRegion(state, region) {
      state.selectedRegion = region;
    },
  },
  actions: {
    async getPaises({ commit }) {
      commit('setLoading', true);
      try {
        const res = await fetch('https://countries-api-service.vercel.app/api/countries');
        const response = await res.json();
        commit('setPaises', response.data);
      } catch (error) {
        console.error(error);
      } finally {
        commit('setLoading', false);
      }
    },
    filtrarRegion({ commit, state }, region) {
      commit('setSelectedRegion', region);
      const filtro = state.paises.filter(pais => pais.region.includes(region));
      commit('setPaisesFiltrados', filtro);
    },
    filtroNombre({ commit, state }, texto) {
      commit('setSelectedRegion', null);
      const textoCliente = texto.toLowerCase();
      const filtro = state.paises.filter(pais => {
        const textoApi = pais.name.common.toLowerCase();
        const textoOficial = pais.name.official.toLowerCase();
        return textoApi.includes(textoCliente) || textoOficial.includes(textoCliente);
      });
      commit('setPaisesFiltrados', filtro);
    },
  },
  getters: {
    topPaisesPoblacion(state) {
      return [...state.paisesFiltrados].sort((a, b) => b.population - a.population);
    },
    isLoading(state) {
      return state.loading;
    },
  },
  modules: {},
});
