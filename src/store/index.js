import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isLoaded: false,
    users: [],
    perView: 10,
    page: 1,
    seed: null,
    uuid: null
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
    },
    SET_UUID (state, value) {
      state.uuid = value
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
    },
    setUUID({ commit }, value) {
      commit('SET_UUID', value)
    },
    clearUUID({ commit }) {
      commit('SET_UUID', null)
    }
  },
  getters: {
    isLoaded: state => state.isLoaded,
    getUsers: state => state.users,
    getUser: state => {
      console.log('--- getUser getter ---')
      console.log('uuid:', state.uuid)
      let user

      if (state.uuid) {
        user = state.users.find((user) => {
          return user.login.uuid === state.uuid
        })
      } else {
        user = user[0]
      }
      console.log('user:', user)

      return user
    },
    getPerView: state => state.perView,
    getPage: state => state.page,
  }
})

async function fetchUsers(params) {
  const response = await axios.get('https://randomuser.me/api/', {
    params: params
  })

  return response.data
}
