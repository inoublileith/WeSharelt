import http from '../http-common'
class SdfDataService {
  getAll() {
    return http.get('/sdfs/')
  }
  get(id) {
    return http.get(`/sdfs/${id}`)
  }
  create(data) {
    return http.post('/sdfs/create', data)
  }
  update(id, data) {
    return http.put(`/sdfs/${id}`, data)
  }
  delete(id) {
    return http.delete(`/sdfs/${id}`)
  }
  deleteAll() {
    return http.delete(`/sdfs`)
  }
  findByNom(nom) {
    return http.get(`/sdfs?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/sdfs/transition/${id}/${etat}`)
  }
}
export default new SdfDataService()
