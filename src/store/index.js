import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded: false,
    users: [],
    perView: 10,
    page: 1,
    seed: null
  },
  mutations: {
    SET_USERS (state, data) {
      state.users = data
    },
    SET_LOADED_STATUS (state, data) {
      state.isLoaded = data
    },
    SET_PERVIEW (state, value) {
      state.perView = value
    },
    SET_PAGE (state, value) {
      state.page = value
    },
    SET_SEED (state, value) {
      state.seed = value
    }
  },
  actions: {
    async setUsers({ commit, state }) {
      const params = {
        results: state.perView,
        page: state.page,
        seed: state.seed
      }

      const fetchData = await fetchUsers(params)

      commit('SET_USERS', fetchData.results)
      commit('SET_SEED', fetchData.info.seed)
    },
    setLoadedStatus({ commit }, state) {
      commit('SET_LOADED_STATUS', state)
    },
    setPerView({ commit }, value) {
      commit('SET_PERVIEW', value)
    },
    setPage({ commit }, value) {
      console.log('--- setPage action ---')
      console.log('value:', value)
      commit('SET_PAGE', value)
    }
  },
  getters: {
    isLoaded: state => state.isLoaded,
    getUsers: state => state.users,
    getPerView: state => state.perView,
    getPage: state => state.page
  }
})

async function fetchUsers(params) {
  const response = await axios.get('https://randomuser.me/api/', {
    params: params
  })

  return response.data
}
