import http from '../http-common'
class SondageDataService {
  getAll() {
    return http.get('/sondages/')
  }
  get(id) {
    return http.get(`/sondages/${id}`)
  }
  create(data) {
    return http.post('/sondages/create', data)
  }
  update(id, data) {
    return http.put(`/sondages/${id}`, data)
  }
  delete(id) {
    return http.delete(`/sondages/${id}`)
  }
  deleteAll() {
    return http.delete(`/sondages`)
  }
  findByQuestion(question) {
    return http.get(`/sondages?question=${question}`)
  }
  transition(id, etat) {
    return http.put(`/sondages/transition/${id}/${etat}`)
  }
}
export default new SondageDataService()
