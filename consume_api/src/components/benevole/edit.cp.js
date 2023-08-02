import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BenevoleDataService from '../../services/benevole.service'
const EditBenevole = (props) => {
  let { id } = useParams()
  const initialBenevoleState = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    facebook: '',
    linkedin: '',
    context: '',
    tel: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01',
  }
  const [currentBenevole, setCurrentBenevole] = useState(initialBenevoleState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getBenevole = (id) => {
    BenevoleDataService.get(id)
      .then((response) => {
        setCurrentBenevole(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getBenevole(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentBenevole({ ...currentBenevole, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentBenevole.id,
      nom: currentBenevole.nom,
      prenom: currentBenevole.prenom,
      email: currentBenevole.email,
      facebook: currentBenevole.facebook,
      linkedin: currentBenevole.linkedin,
      context: currentBenevole.context,
      tel: currentBenevole.tel,
      retenu: currentBenevole.retenu,
      etat: status,
      date_ins: currentBenevole.date_ins,
    }
    BenevoleDataService.update(currentBenevole.id, data)
      .then((response) => {
        setCurrentBenevole({ ...currentBenevole, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateBenevole = () => {
    BenevoleDataService.update(currentBenevole.id, currentBenevole)
      .then((response) => {
        console.log(response.data)
        setMessage('The benevole was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentBenevole ? (
        <div className='edit-form'>
          <h4>Benevole</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='nom'>nom</label>
              <input
                type='text'
                className='form-control'
                id='nom'
                value={currentBenevole.nom}
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
                value={currentBenevole.prenom}
                onChange={handleInputChange}
                name='prenom'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>email</label>
              <input
                type='text'
                className='form-control'
                id='email'
                required
                value={currentBenevole.email}
                onChange={handleInputChange}
                name='email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='facebook'>facebook</label>
              <input
                type='text'
                className='form-control'
                id='facebook'
                required
                onChange={handleInputChange}
                value={currentBenevole.facebook}
                name='facebook'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='linkedin'>linkedin</label>
              <input
                type='text'
                className='form-control'
                id='linkedin'
                required
                onChange={handleInputChange}
                value={currentBenevole.linkedin}
                name='linkedin'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='context'>context</label>
              <input
                type='text'
                className='form-control'
                id='context'
                required
                onChange={handleInputChange}
                value={currentBenevole.context}
                name='context'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='tel'>tel</label>
              <input
                type='text'
                className='form-control'
                id='tel'
                required
                onChange={handleInputChange}
                value={currentBenevole.tel}
                name='tel'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='retenu'>Retenu</label>
              <input
                type='text'
                className='form-control'
                id='retenu'
                required
                value={currentBenevole.retenu}
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
                value={currentBenevole.etat}
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
                value={currentBenevole.date_ins}
                onChange={handleInputChange}
                name='date_ins'
              />
            </div>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentBenevole.etat === 1 ? 'Published' : 'Pending'}
            </div>
          </form>
          {currentBenevole.etat === 1 ? (
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
            onClick={updateBenevole}
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
export default EditBenevole
