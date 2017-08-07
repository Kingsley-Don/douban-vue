import * as api from '@/api/api'
import * as types from '../mutation-types'

const state = {
  inTheaters: {
    count: 0,
    subjects: []
  },
  comingSoon: {
    count: 0,
    subjects: []
  }
}

const getters = {

}

const mutations = {
  [types.GET_MOVIES](state, payload) {
    state[payload.name].subjects = state[payload.name].subjects.concat(payload.subjects)
    state.count = state[payload.name].subjects.length
  }
}

const actions = {
  [types.GET_MOVIES](context, payload) {
    api.getMovies(payload.name, payload.start, payload.count)
      .then(data => context.commit(types.GET_MOVIES, {
        name: payload.name,
        subjects: data.subjects
      }))
  }
}

export default {
  state,
  mutations,
  actions
}
