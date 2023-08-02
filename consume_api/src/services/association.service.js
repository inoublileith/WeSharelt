import http from '../http-common'
class AssociationDataService {
  getAll() {
    return http.get('/associations/')
  }
  get(id) {
    return http.get(`/associations/${id}`)
  }
  create(data) {
    return http.post('/associations/create', data)
  }
  update(id, data) {
    return http.put(`/associations/${id}`, data)
  }
  delete(id) {
    return http.delete(`/associations/${id}`)
  }
  deleteAll() {
    return http.delete(`/associations`)
  }
  findByNom(nom) {
    return http.get(`/associations?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/associations/transition/${id}/${etat}`)
  }
}
export default new AssociationDataService()
