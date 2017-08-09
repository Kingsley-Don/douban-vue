import * as api from '@/api/api'
import * as types from '../types'

const state = {
  inTheaters: {
    count: 0,
    total: 0,
    subjects: []
  },
  comingSoon: {
    count: 0,
    total: 0,
    subjects: []
  }
}

const getters = {

}

const mutations = {
  [types.GET_MOVIES](state, payload) {
    state[payload.name].subjects = state[payload.name].subjects.concat(payload.subjects)
    state[payload.name].count = state[payload.name].subjects.length
    state[payload.name].total = payload.total
  }
}

const actions = {
  [types.GET_MOVIES](context, payload) {
    api.getMovies(payload.name, payload.start, payload.count)
      .then(data => context.commit(types.GET_MOVIES, {
        name: payload.name,
        subjects: data.subjects,
        total: data.total
      }))
  }
}

export default {
  state,
  mutations,
  actions
}
