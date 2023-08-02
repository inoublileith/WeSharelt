import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EvenementDataService from '../../services/evenement.service'
const EditEvenement= (props) => {
  let { id } = useParams()
  const initialEvenementState = {
    id: null,
    titre: '',
    date: '',
    adresse: '',
    description: '',
    public: '',
    image: '',
  }
  const [currentEvenement, setCurrentEvenement] = useState(initialEvenementState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getEvenement = (id) => {
    EvenementDataService.get(id)
      .then((response) => {
        setCurrentEvenement(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getEvenement(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentEvenement({ ...currentEvenement, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentEvenement.id,
      titre: currentEvenement.titre,
      date: currentEvenement.date,
      adresse: currentEvenement.adresse,
      description: currentEvenement.description,
      public: currentEvenement.public,
      image: currentEvenement.image,
      
    }
    EvenementDataService.update(currentEvenement.id, data)
      .then((response) => {
        setCurrentEvenement({ ...currentEvenement, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateEvenement = () => {
    EvenementDataService.update(currentEvenement.id, currentEvenement)
      .then((response) => {
        console.log(response.data)
        setMessage('The evenement was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentEvenement ? (
        <div className='edit-form'>
          <h4>evenement</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='titre'>titre</label>
              <input
                type='text'
                className='form-control'
                id='titre'
                value={currentEvenement.titre}
                onChange={handleInputChange}
                name='titre'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date'>date</label>
              <input
                type='date'
                className='form-control'
                id='date'
                value={currentEvenement.date}
                onChange={handleInputChange}
                name='date'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='adresse'>adresse</label>
              <input
                type='text'
                className='form-control'
                id='adresse'
                required
                value={currentEvenement.adresse}
                onChange={handleInputChange}
                name='adresse'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>description</label>
              <input
                type='text'
                className='form-control'
                id='description'
                required
                onChange={handleInputChange}
                value={currentEvenement.description}
                name='description'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='public'>public</label>
              <input
                type='text'
                className='form-control'
                id='public'
                required
                onChange={handleInputChange}
                value={currentEvenement.public}
                name='public'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='image'>image</label>
              <input
                type='text'
                className='form-control'
                id='image'
                required
                onChange={handleInputChange}
                value={currentEvenement.image}
                name='image'
              />
            </div>
          
         
          </form>
        
          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateEvenement}
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
export default EditEvenement
