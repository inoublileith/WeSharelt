import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RecommandationDataService from '../../services/recommandation.service'
const EditRecommandation = (props) => {
  let { id } = useParams()
  const initialRecommandationState = {
    id: null,
    titre: '',
    description: '',
    domaine: '',
    specification: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01',
  }
  const [currentRecommandation, setCurrentRecommandation] = useState(
    initialRecommandationState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getRecommandation = (id) => {
    RecommandationDataService.get(id)
      .then((response) => {
        setCurrentRecommandation(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getRecommandation(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentRecommandation({ ...currentRecommandation, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentRecommandation.id,
      title: currentRecommandation.titre,
      description: currentRecommandation.description,
      domaine: currentRecommandation.domaine,
      specification: currentRecommandation.specification,
      retenu: currentRecommandation.retenu,
      etat: status,
      date_ins: currentRecommandation.date_ins,
    }
    RecommandationDataService.update(currentRecommandation.id, data)
      .then((response) => {
        setCurrentRecommandation({ ...currentRecommandation, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateRecommandation = () => {
    RecommandationDataService.update(
      currentRecommandation.id,
      currentRecommandation
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Recommandation was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentRecommandation ? (
        <div className='edit-form'>
          <h4>Recommandation</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='titre'>Titre</label>
              <input
                type='text'
                className='form-control'
                id='titre'
                value={currentRecommandation.titre}
                onChange={handleInputChange}
                name='titre'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                className='form-control'
                id='description'
                value={currentRecommandation.description}
                onChange={handleInputChange}
                name='description'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='domaine'>Domaine</label>
              <input
                type='text'
                className='form-control'
                id='domaine'
                required
                value={currentRecommandation.domaine}
                onChange={handleInputChange}
                name='domaine'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='specification'>Specification</label>
              <input
                type='text'
                className='form-control'
                id='specification'
                required
                onChange={handleInputChange}
                value={currentRecommandation.specification}
                name='specification'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='retenu'>Retenu</label>
              <input
                type='text'
                className='form-control'
                id='retenu'
                required
                value={currentRecommandation.retenu}
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
                value={currentRecommandation.etat}
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
                value={currentRecommandation.date_ins}
                onChange={handleInputChange}
                name='date_ins'
              />
            </div>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentRecommandation.etat === 1 ? 'Published' : 'Pending'}
            </div>
          </form>
          {currentRecommandation.etat === 1 ? (
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
            onClick={updateRecommandation}
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
export default EditRecommandation
