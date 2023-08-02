import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DemandeDataService from '../../services/demande.service'
const EditDemande = (props) => {
  let { id } = useParams()
  const initialDemandeState = {
    id: null,
    type: '',
    qte: '',
    nb_personne: '',
    date_de: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01',
  }
  const [currentDemande, setCurrentDemande] = useState(initialDemandeState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getDemande = (id) => {
    DemandeDataService.get(id)
      .then((response) => {
        setCurrentDemande(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getDemande(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentDemande({ ...currentDemande, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentDemande.id,
      type: currentDemande.type,
      qte: currentDemande.qte,
      nb_personne: currentDemande.nb_personne,
      date_de: currentDemande.date_de,
      retenu: currentDemande.retenu,
      etat: status,
      date_ins: currentDemande.date_ins,
    }
    DemandeDataService.update(currentDemande.id, data)
      .then((response) => {
        setCurrentDemande({ ...currentDemande, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateDemande = () => {
    DemandeDataService.update(currentDemande.id, currentDemande)
      .then((response) => {
        console.log(response.data)
        setMessage('The demande was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentDemande ? (
        <div className='edit-form'>
          <h4>Demande</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='type'>type</label>
              <input
                type='text'
                className='form-control'
                id='type'
                value={currentDemande.type}
                onChange={handleInputChange}
                name='type'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='qte'>quantite</label>
              <input
                type='text'
                className='form-control'
                id='qte'
                value={currentDemande.qte}
                onChange={handleInputChange}
                name='qte'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='nb_personne'>nombre de personne</label>
              <input
                type='text'
                className='form-control'
                id='nb_personne'
                required
                value={currentDemande.nb_personne}
                onChange={handleInputChange}
                name='nb_personne'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date_de'>date de demande </label>
              <input
                type='date'
                className='form-control'
                id='date_de'
                required
                onChange={handleInputChange}
                value={currentDemande.date_de}
                name='date_de'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='retenu'>Retenu</label>
              <input
                type='text'
                className='form-control'
                id='retenu'
                required
                value={currentDemande.retenu}
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
                value={currentDemande.etat}
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
                value={currentDemande.date_ins}
                onChange={handleInputChange}
                name='date_ins'
              />
            </div>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentDemande.etat === 1 ? 'Published' : 'Pending'}
            </div>
          </form>
          {currentDemande.etat === 1 ? (
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
            onClick={updateDemande}
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
export default EditDemande
