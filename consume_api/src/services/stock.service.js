import http from '../http-common'
class StockDataService {
  getAll() {
    return http.get('/stocks/')
  }
  get(id) {
    return http.get(`/stocks/${id}`)
  }
  create(data) {
    return http.post('/stocks/create', data)
  }
  update(id, data) {
    return http.put(`/stocks/${id}`, data)
  }
  delete(id) {
    return http.delete(`/stocks/${id}`)
  }
  deleteAll() {
    return http.delete(`/stocks`)
  }
  findByTitre(titre) {
    return http.get(`/stocks?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/stocks/transition/${id}/${etat}`)
  }
}
export default new StockDataService()
