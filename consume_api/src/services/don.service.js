import http from '../http-common'
class DonDataService {
  getAll() {
    return http.get('/dons/')
  }
  get(id) {
    return http.get(`/dons/${id}`)
  }
  create(data) {
    return http.post('/dons/create', data)
  }
  update(id, data) {
    return http.put(`/dons/${id}`, data)
  }
  delete(id) {
    return http.delete(`/dons/${id}`)
  }
  deleteAll() {
    return http.delete(`/dons`)
  }
  findByType(type) {
    return http.get(`/dons?type=${type}`)
  }

  
  validerDon(id) {
    return http.put(`/dons/valider/${id}`)
  }

}
export default new DonDataService()
