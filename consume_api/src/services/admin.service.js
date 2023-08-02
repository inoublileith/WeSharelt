import http from '../http-common'
class AdminDataService {
  getAll() {
    return http.get('/admin/')
  }
  get(id) {
    return http.get(`/admin/${id}`)
  }
  create(data) {
    return http.post('/admin', data)
  }
  update(id, data) {
    return http.put(`/admin/${id}`, data)
  }
  delete(id) {
    return http.delete(`/admin/${id}`)
  }
  deleteAll() {
    return http.delete(`/admins`)
  }
  findByNom(nom) {
    return http.get(`/admin?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/admin/transition/${id}/${etat}`)
  }
}
export default new AdminDataService()
