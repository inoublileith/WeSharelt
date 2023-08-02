import http from '../http-common'
class ForumDataService {
  getAll() {
    return http.get('/forums/')
  }
  get(id) {
    return http.get(`/forums/${id}`)
  }
  create(data) {
    return http.post('/forums/create', data)
  }
  update(id, data) {
    return http.put(`/forums/${id}`, data)
  }
  delete(id) {
    return http.delete(`/forums/${id}`)
  }
  deleteAll() {
    return http.delete(`/forums`)
  }
  findBySujet(sujet) {
    return http.get(`/forums?sujet=${sujet}`)
  }
  transition(id, etat) {
    return http.put(`/forums/transition/${id}/${etat}`)
  }
}
export default new ForumDataService()
