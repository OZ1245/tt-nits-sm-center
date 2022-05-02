import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded: false,
    users: [],
    perView: 10,
    page: 1
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
    }
  },
  actions: {
    async setUsers({ commit, state }) {
      console.log('--- setUsers action ---')
      const fetchData = await fetchUsers(state.perView, state.page)
      console.log('fetchData:', fetchData)
      commit('SET_USERS', fetchData.results)
    },
    setLoadedStatus({ commit }, state) {
      commit('SET_LOADED_STATUS', state)
    },
    setPerView({ commit }, value) {
      commit('SET_PERVIEW', value)
    }
  },
  getters: {
    isLoaded: state => state.isLoaded,
    getUsers: state => state.users,
    getPerView: state => state.perView,
    getPage: state => state.page
  }
})

async function fetchUsers(perView, page) {
  console.log('--- fetchUsers action ---')
  console.log('perView:', perView)
  console.log('page:', page)

  const response = await axios.get('https://randomuser.me/api/', {
    params: {
      results: perView,
      page: page
    }
  })

  return response.data
}
