import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SondageDataService from '../../services/sondage.service'
const EditSondage = (props) => {
  let { id } = useParams()
  const initialSondageState = {
    id: null,
    question: '',
    proposition1: '',
    proposition2: '',
    proposition3: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01',
  }
  const [currentSondage, setCurrentSondage] = useState(
    initialSondageState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getSondage(this.props.match.params.id)
  // }
  const getSondage = (id) => {
    SondageDataService.get(id)
      .then((response) => {
        setCurrentSondage(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getSondage(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentSondage({ ...currentSondage, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentSondage.id,
      question: currentSondage.question,
      proposition1: currentSondage.proposition1,
      proposition2: currentSondage.proposition2,
      proposition3: currentSondage.proposition3,
      retenu: currentSondage.retenu,
      etat: status,
      date_ins: currentSondage.date_ins,
    }
    SondageDataService.update(currentSondage.id, data)
      .then((response) => {
        setCurrentSondage({ ...currentSondage, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateSondage = () => {
    SondageDataService.update(
      currentSondage.id,
      currentSondage
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Sondage was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentSondage ? (
        <div className='edit-form'>
          <h4>Sondage </h4>
          <form>
            <div className='form-group'>
              <label htmlFor='question'>question</label>
              <input
                type='text'
                className='form-control'
                id='question'
                value={currentSondage.question}
                onChange={handleInputChange}
                name='question'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='proposition1'>proposition1</label>
              <input
                type='text'
                className='form-control'
                id='proposition1'
                value={currentSondage.proposition1}
                onChange={handleInputChange}
                name='proposition1'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='proposition2'>proposition2</label>
              <input
                type='text'
                className='form-control'
                id='proposition2'
                required
                value={currentSondage.proposition2}
                onChange={handleInputChange}
                name='proposition2'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='proposition3'>proposition3</label>
              <input
                type='text'
                className='form-control'
                id='proposition3'
                required
                onChange={handleInputChange}
                value={currentSondage.proposition3}
                name='proposition3'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='retenu'>Retenu</label>
              <input
                type='text'
                className='form-control'
                id='retenu'
                required
                value={currentSondage.retenu}
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
                value={currentSondage.etat}
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
                value={currentSondage.date_ins}
                onChange={handleInputChange}
                name='date_ins'
              />
            </div>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentSondage.etat === 1 ? 'Published' : 'Pending'}
            </div>
          </form>
          {currentSondage.etat === 1 ? (
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
            onClick={updateSondage}
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
export default EditSondage
