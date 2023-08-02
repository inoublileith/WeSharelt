import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LivraisonDataService from '../../services/livraison.service'
const EditLivraison = (props) => {
  let { id } = useParams()
  const initialLivraisonState = {
    id: null,
    type: '',
    date_liv: '',
    etat_liv: '',
  }
  const [currentLivraison, setCurrentLivraison] = useState(initialLivraisonState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getSondage(this.props.match.params.id)
  // }
  const getLivraison = (id) => {
    LivraisonDataService.get(id)
      .then((response) => {
        setCurrentLivraison(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getLivraison(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentLivraison({ ...currentLivraison, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentLivraison.id,
      type: currentLivraison.type,
      date_liv: currentLivraison.date_liv,
      etat_liv: currentLivraison.etat_liv,
     
    }
    LivraisonDataService.update(currentLivraison.id, data)
      .then((response) => {
        setCurrentLivraison({ ...currentLivraison, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateLivraison = () => {
    LivraisonDataService.update(currentLivraison.id, currentLivraison)
      .then((response) => {
        console.log(response.data)
        setMessage('The livraison was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentLivraison ? (
        <div className='edit-form'>
          <h4>Livraison </h4>
          <form>
            <div className='form-group'>
              <label htmlFor='type'>type</label>
              <input
                type='text'
                className='form-control'
                id='type'
                value={currentLivraison.type}
                onChange={handleInputChange}
                name='type'
              />
            </div>
            
            <div className='form-group'>
              <label htmlFor='date_liv'>date_liv </label>
              <input
                type='date'
                className='form-control'
                id='date_liv'
                value={currentLivraison.date_liv}
                onChange={handleInputChange}
                name='date_liv'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='etat_liv'>etat_liv</label>
              <input
                type='text'
                className='form-control'
                id='etat_liv'
                required
                value={currentLivraison.etat_liv}
                onChange={handleInputChange}
                name='etat_liv'
              />
            </div>
            
          

         
          </form>
         

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateLivraison}
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
export default EditLivraison
