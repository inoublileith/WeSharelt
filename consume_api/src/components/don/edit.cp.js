import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DonDataService from '../../services/don.service'
const EditDon = (props) => {
  let { id } = useParams()
  const initialDonState = {
    id: null,
    type: '',
    qte: '',
    date_livraison: '',
    date_validation: '',
    etat: 0,
  }
  const [currentDon, setCurrentDon] = useState(
    initialDonState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getDon = (id) => {
    DonDataService.get(id)
      .then((response) => {
        setCurrentDon(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getDon(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentDon({ ...currentDon, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentDon.id,
      type: currentDon.type,
      qte: currentDon.qte,
      date_livraison: currentDon.date_livraison,
      date_validation: currentDon.date_validation,
      etat: status,
    }
    DonDataService.update(currentDon.id, data)
      .then((response) => {
        setCurrentDon({ ...currentDon, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateDon = () => {
    DonDataService.update(
      currentDon.id,
      currentDon
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Don was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentDon ? (
        <div className='edit-form'>
          <h4>Don</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='type'>Type</label>
              <input
                type='text'
                className='form-control'
                id='type'
                value={currentDon.type}
                onChange={handleInputChange}
                name='type'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='qte'>Quantite</label>
              <input
                type='text'
                className='form-control'
                id='qte'
                value={currentDon.qte}
                onChange={handleInputChange}
                name='qte'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date_livraison'>Date de livraison</label>
              <input
                type='text'
                className='form-control'
                id='date_livraison'
                required
                value={currentDon.date_livraison}
                onChange={handleInputChange}
                name='date_livraison'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date_validation'>Date de validation</label>
              <input
                type='text'
                className='form-control'
                id='date_validation'
                required
                onChange={handleInputChange}
                value={currentDon.date_validation}
                name='date_validation'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='etat'>Etat</label>
              <input
                type='text'
                className='form-control'
                id='etat'
                required
                value={currentDon.etat}
                onChange={handleInputChange}
                name='etat'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateDon}
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
export default EditDon
