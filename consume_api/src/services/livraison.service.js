import http from '../http-common'
class LivraisonDataService {
  getAll() {
    return http.get('/livraisons/')
  }
  get(id) {
    return http.get(`/livraisons/${id}`)
  }
  create(data) {
    return http.post('/livraisons/create', data)
  }
  update(id, data) {
    return http.put(`/livraisons/${id}`, data)
  }
  delete(id) {
    return http.delete(`/livraisons/${id}`)
  }
  deleteAll() {
    return http.delete(`/livraisons`)
  }
  findByType(type) {
    return http.get(`/livraisons?type=${type}`)
  }
  transition(id, etat) {
    return http.put(`/livraisons/transition/${id}/${etat}`)
  }
}
export default new LivraisonDataService()
