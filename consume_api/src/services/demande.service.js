import http from '../http-common'
class DemandeDataService {
  getAll() {
    return http.get('/demandes/')
  }
  get(id) {
    return http.get(`/demandes/${id}`)
  }
  create(data) {
    return http.post('/demandes/create', data)
  }
  update(id, data) {
    return http.put(`/demandes/${id}`, data)
  }
  delete(id) {
    return http.delete(`/demandes/${id}`)
  }
  deleteAll() {
    return http.delete(`/demandes`)
  }
  findByType(type) {
    return http.get(`/demandes?type=${type}`)
  }
  updateDemande(id) {
    return http.put(`/demandes/valider/${id}/`)
  }
}
export default new DemandeDataService()
