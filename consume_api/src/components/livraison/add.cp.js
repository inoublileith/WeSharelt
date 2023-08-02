import React, { useState } from 'react'
import LivraisonDataService from '../../services/livraison.service'
const AddLivraison = () => {
  const initialLivraisonState = {
    id: null,
    type: '',
    date_ins: '2022-01-01',
    date_liv: '',
    etat_liv: '',
  }
  const [livraison, setLivraison] = useState(initialLivraisonState)
  const [submitted, setSubmitted] = useState(false)
 
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setLivraison({ ...livraison, [name]: value })
  }

  
  const saveLivraison = () => {
    var data = {
      type: livraison.type,
      date_liv: livraison.date_liv,
      etat_liv: livraison.etat_liv,
    }
    LivraisonDataService.create(data)
      .then((response) => {
        setLivraison({
          id: response.data.id,
          type: response.data.type,
          date_liv: response.data.date_liv,
          etat_liv: response.data.etat_liv,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }



  const newLivraison = () => {
    setLivraison(initialLivraisonState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newLivraison}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group'>
            <label htmlFor='type'>type</label>
            <input
              type='text'
              className='form-control'
              id='type'
              required
              value={livraison.type}
              onChange={handleInputChange}
              name='type'
              placeholder='type'
            />
          </div>
         
          <div className='form-group'>
            <label htmlFor='date_liv'>date_liv </label>
            <input
              type='date'
              className='form-control'
              id='date_liv'
              required
              value={livraison.date_liv}
              onChange={handleInputChange}
              name='date_liv'
              placeholder='date_liv'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='etat_liv'>Etat_liv</label>
            <input
              type='text'
              className='form-control'
              id='etat_liv'
              required
              onChange={handleInputChange}
              value={livraison.etat_liv}
              name='etat_liv'
              placeholder='etat_liv'
            />
          </div>

          <button onClick={saveLivraison} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddLivraison
