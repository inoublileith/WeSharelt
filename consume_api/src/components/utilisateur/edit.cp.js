import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserDataService from '../../services/user.service'
const EditUser = (props) => {
  let { id } = useParams()
  const initialUserState = {
    id: null,
    civil: '',
    nom: '',
    prenom: '',
    date_naissance: '',
    cin: '',
    tel: '',
    email: '',
    gouvernorat: '',
    adresse: '',
    cpostal: '',
    delegation: '',
    login: '',
    password: '',
    profil: '',
    permissions: '',
    avatar: '',
    etat: 0,
    retenu: 0,
    date_ins: '2022-01-01',
  }
  const [currentUser, setCurrentUser] = useState(
    initialUserState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getUser= (id) => {
    UserDataService.get(id)
      .then((response) => {
        setCurrentUser(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getUser(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentUser({ ...currentUser, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentUser.id,
      civil: currentUser.civil,
      nom: currentUser.nom,
      prenom: currentUser.prenom,
      date_naissance: currentUser.date_naissance,
      tel: currentUser.tel,
      email: currentUser.email,
      gouvernorat: currentUser.gouvernorat,
      adresse: currentUser.adresse,
      cpostal: currentUser.cpostal,
      delegation: currentUser.delegation,
      login: currentUser.login,
      password: currentUser.password,
      profil: currentUser.profil,
      permissions: currentUser.permissions,
      avatar: currentUser.avatar,
      retenu: currentUser.retenu,
      etat: status,

      date_ins: currentUser.date_ins,
    }
    UserDataService.update(currentUser.id, data)
      .then((response) => {
        setCurrentUser({ ...currentUser, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateUser= () => {
    UserDataService.update(currentUser.id, currentUser)
      .then((response) => {
        console.log(response.data)
        setMessage('The utilsateur was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentUser ? (
        <div className='edit-form'>
          <h4>User</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='civil'>civil</label>
              <input
                type='text'
                className='form-control'
                id='civil'
                value={currentUser.civil}
                onChange={handleInputChange}
                name='civil'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='nom'>nom</label>
              <input
                type='text'
                className='form-control'
                id='nom'
                value={currentUser.nom}
                onChange={handleInputChange}
                name='nom'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='prenom'>prenom</label>
              <input
                type='text'
                className='form-control'
                id='prenom'
                required
                value={currentUser.prenom}
                onChange={handleInputChange}
                name='prenom'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date_naissance'>date_naissance</label>
              <input
                type='text'
                className='form-control'
                id='date_naissance'
                required
                value={currentUser.date_naissance}
                onChange={handleInputChange}
                name='date_naissance'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='cin'>cin</label>
              <input
                type='text'
                className='form-control'
                id='cin'
                required
                onChange={handleInputChange}
                value={currentUser.cin}
                name='cin'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='tel'>tel</label>
              <input
                type='text'
                className='form-control'
                id='tel'
                required
                value={currentUser.tel}
                onChange={handleInputChange}
                name='tel'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>email</label>
              <input
                type='text'
                className='form-control'
                id='email'
                required
                value={currentUser.email}
                onChange={handleInputChange}
                name='email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='gouvernorat'>gouvernorat</label>
              <input
                type='text'
                className='form-control'
                id='gouvernorat'
                required
                value={currentUser.gouvernorat}
                onChange={handleInputChange}
                name='gouvernorat'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='adresse'>adresse</label>
              <input
                type='text'
                className='form-control'
                id='adresse'
                required
                value={currentUser.adresse}
                onChange={handleInputChange}
                name='adresse'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='delegation'>delegation</label>
              <input
                type='text'
                className='form-control'
                id='delegation'
                required
                value={currentUser.delegation}
                onChange={handleInputChange}
                name='delegation'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='login'>login</label>
              <input
                type='text'
                className='form-control'
                id='login'
                required
                value={currentUser.login}
                onChange={handleInputChange}
                name='login'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>password</label>
              <input
                type='text'
                className='form-control'
                id='password'
                required
                value={currentUser.password}
                onChange={handleInputChange}
                name='password'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='profil'>profil</label>
              <input
                type='text'
                className='form-control'
                id='profil'
                required
                value={currentUser.profil}
                onChange={handleInputChange}
                name='profil'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='permessions'>permissions</label>
              <input
                type='text'
                className='form-control'
                id='permissions'
                required
                value={currentUser.permissions}
                onChange={handleInputChange}
                name='permissions'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='avatar'>avatar</label>
              <input
                type='text'
                className='form-control'
                id='avatar'
                required
                value={currentUser.avatar}
                onChange={handleInputChange}
                name='avatar'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='retenu'>Retenu</label>
              <input
                type='text'
                className='form-control'
                id='retenu'
                required
                value={currentUser.retenu}
                onChange={handleInputChange}
                name='retenu'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='etat'>Etat</label>
              <input
                type='text'
                className='form-control'
                id='etat'
                required
                value={currentUser.etat}
                onChange={handleInputChange}
                name='etat'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='date_ins'>Date</label>
              <input
                type='date'
                className='form-control'
                id='date_ins'
                required
                value={currentUser.date_ins}
                onChange={handleInputChange}
                name='date_ins'
              />
            </div>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentUser.etat === 1 ? 'Published' : 'Pending'}
            </div>
          </form>
          {currentUser.etat === 1 ? (
            <button
              className='m-3 btn btn-sm btn-danger'
              onClick={() => updatePublished(0)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className='m-3 btn btn-sm btn-warning'
              onClick={() => updatePublished(1)}
            >
              Publish
            </button>
          )}

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateUser}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  )
}
export default EditUser
