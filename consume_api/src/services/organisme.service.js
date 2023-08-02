import http from '../http-common'
class OrganismeDataService {
  getAll() {
    return http.get('/organismes/')
  }
  get(id) {
    return http.get(`/organismes/${id}`)
  }
  create(data) {
    return http.post('/organismes/create', data)
  }
  update(id, data) {
    return http.put(`/organismes/${id}`, data)
  }
  delete(id) {
    return http.delete(`/organismes/${id}`)
  }
  deleteAll() {
    return http.delete(`/organismes`)
  }
  findByNom(nom) {
    return http.get(`/organismes?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/organismes/transition/${id}/${etat}`)
  }
}
export default new OrganismeDataService()
