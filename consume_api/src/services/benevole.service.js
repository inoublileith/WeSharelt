import http from '../http-common'
class BenevoleDataService {
  getAll() {
    return http.get('/benevoles/')
  }
  get(id) {
    return http.get(`/benevoles/${id}`)
  }
  create(data) {
    return http.post('/benevoles/create', data)
  }
  update(id, data) {
    return http.put(`/benevoles/${id}`, data)
  }
  delete(id) {
    return http.delete(`/benevoles/${id}`)
  }
  deleteAll() {
    return http.delete(`/benevoles`)
  }
  findByNom(nom) {
    return http.get(`/benevoles?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/benevoles/transition/${id}/${etat}`)
  }
}
export default new BenevoleDataService()
