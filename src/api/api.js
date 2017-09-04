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

export function getComments(id, start, count) {
  return get(`subject/${id}/comments`, { start: start, count: count })
}

export function getReviews(id, start, count) {
  return get(`subject/${id}/reviews`, { start: start, count: count })
}

export function getReview(id) {
  return get(`review/${id}`)
}
