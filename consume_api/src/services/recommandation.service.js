import http from '../http-common'
class RecommandationDataService {
  getAll() {
    return http.get('/recommandations/')
  }
  get(id) {
    return http.get(`/recommandations/${id}`)
  }
  create(data) {
    return http.post('/recommandations/create', data)
  }
  update(id, data) {
    return http.put(`/recommandations/${id}`, data)
  }
  delete(id) {
    return http.delete(`/recommandations/${id}`)
  }
  deleteAll() {
    return http.delete(`/recommandations`)
  }
  findByTitre(titre) {
    return http.get(`/recommandations?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/recommandations/transition/${id}/${etat}`)
  }

}
export default new RecommandationDataService()
