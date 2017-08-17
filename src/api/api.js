import get from './baseConfig'

const LIST_URL = {
  inTheaters: 'in_theaters',
  comingSoon: 'coming_soon'
}

export function getMovies(name, start, count) {
  return get(LIST_URL[name], { start: start, count: count })
}

export function getSubject(id) {
  return get(`subject/${id}`)
}
