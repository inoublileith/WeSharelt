import http from '../http-common'
import authHeader from './auth-header'
const getPublicContent = () => {
  return http.get('/namespace/public')
}
const getUserBoard = () => {
  return http.get('/namespace/user', { headers: authHeader() })
}
const getAnalysteBoard = () => {
  return http.get('/namespace/analyste', { headers: authHeader() })
}
const getAdminBoard = () => {
  return http.get('/namespace/admin', { headers: authHeader() })
}
const getStats = () => {
  return http.get('/analystes/stats/get', { headers: authHeader() })
}
const getDonsStats = async () => {
  const jan = await http.get('/dons/charte/01')
  const fev = await http.get('/dons/charte/02')
  const mar = await http.get('/dons/charte/03')
  const avr = await http.get('/dons/charte/04')
  const may = await http.get('/dons/charte/05')
  const jui = await http.get('/dons/charte/06')
  const juil = await http.get('/dons/charte/07')
  const aout = await http.get('/dons/charte/08')
  const sep = await http.get('/dons/charte/09')
  const oct = await http.get('/dons/charte/10')
  const nov = await http.get('/dons/charte/11')
  const dec = await http.get('/dons/charte/12')
  return { jan, fev, mar, avr, may, jui, juil, aout, sep, oct, nov, dec }
}

const getAll = () => {
  return http.get('/users/')
}
const get = (id) => {
  return http.get(`/users/${id}`)
}
const create = (data) => {
  return http.post('/users/', data)
}
const update = (id, data) => {
  return http.put(`/users/${id}`, data)
}
const remove = (id) => {
  return http.delete(`/users/${id}`)
}
const deleteAll = () => {
  return http.delete(`/users`)
}
const findByNom = (nom) => {
  return http.get(`/users?nom=${nom}`)
}

export default {
  getPublicContent,
  getUserBoard,
  getAnalysteBoard,
  getAdminBoard,
  getStats,
  getDonsStats,
  getAll,
  get,
  create,
  update,
  remove,
  deleteAll,
  findByNom,
}
