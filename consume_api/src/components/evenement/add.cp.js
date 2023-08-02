import React, { useState } from 'react'
import EvenementDataService from '../../services/evenement.service'
const AddEvenement = () => {
  const initialEvenementState = {
    id: null,
    titre: '',
    date: '',
    adresse: '',
    description: '',
    public: '',
    image: '',
  }
  const [evenement, setEvenement] = useState(initialEvenementState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEvenement({ ...evenement, [name]: value })
  }

  const saveEvenement = () => {
    var data = {
      titre: evenement.titre,
      date: evenement.date,
      adresse: evenement.adresse,
      description: evenement.description,
      public: evenement.public,
      image: evenement.image,
    }
    EvenementDataService.create(data)
      .then((response) => {
        setEvenement({
          id: response.data.id,
          titre: response.data.titre,
          date: response.data.date,
          adresse: response.data.adresse,
          description: response.data.description,
          public: response.data.public,
          image: response.data.image,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  // newRecommandation() {
  //   this.setState({
  //     id: null,
  //     title: '',
  //     description: '',
  //     domaine: '',
  //     specification: '',
  //     retenu: 0,
  //     etat: 0,
  //     date_ins: '2022-01-01 00:00:00',
  //     submitted: false,
  //   })
  // }

  const newEvenement = () => {
    setEvenement(initialEvenementState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <div class='my-3 border-top'></div>
          <div class='alert border-0 bg-light-success alert-dismissible fade show py-2'>
            <div class='d-flex align-items-center'>
              <div class='fs-3 text-success'>
                <i class='bi bi-check-circle-fill'></i>
              </div>
              <div class='ms-3'>
                <div class='text-success'>You submitted successfully!!!</div>
              </div>
            </div>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
            ></button>
          </div>
          <h4></h4>
          <button className='btn btn-success' onClick={newEvenement}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group'>
            <label htmlFor='titre'>titre</label>
            <input
              type='text'
              className='form-control'
              id='titre'
              required
              value={evenement.titre}
              onChange={handleInputChange}
              name='titre'
              placeholder='titre'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='date'>date</label>
            <input
              type='date'
              className='form-control'
              id='date'
              required
              value={evenement.date}
              onChange={handleInputChange}
              name='date'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='adresse'>adresse</label>
            <input
              type='text'
              className='form-control'
              id='adesse'
              required
              value={evenement.adresse}
              onChange={handleInputChange}
              name='adresse'
              placeholder='adresse'
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
              value={evenement.description}
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
              value={evenement.public}
              name='pablic'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='image'>image</label>
            <input
              type='file'
              className='form-control'
              id='image'
              required
              onChange={handleInputChange}
              value={evenement.image}
              name='image'
            />
          </div>

          <button onClick={saveEvenement} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddEvenement
