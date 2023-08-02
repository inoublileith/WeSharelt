import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SdfDataService from '../../services/sdf.service'
const EditSdf = (props) => {
  let { id } = useParams()
  const initialSdfState = {
    id: null,
    nom: '',
    prenom: '',
    genre: '',
    age: '',
    cas_social: '',
    handicape: '',
    maladie: '',
    adresse: '',
    local: '',
  }
  const [currentSdf, setCurrentSdf] = useState(initialSdfState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getSdf = (id) => {
    SdfDataService.get(id)
      .then((response) => {
        setCurrentSdf(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getSdf(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentSdf({ ...currentSdf, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentSdf.id,
      nom: currentSdf.nom,
      prenom: currentSdf.prenom,
      genre: currentSdf.genre,
      age: currentSdf.age,
      cas_social: currentSdf.cas_social,
      handicape: currentSdf.handicape,
      maladie: currentSdf.maladie,
      adresse: currentSdf.adresse,
      local: currentSdf.local,
    }
    SdfDataService.update(currentSdf.id, data)
      .then((response) => {
        setCurrentSdf({ ...currentSdf, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateSdf = () => {
    SdfDataService.update(currentSdf.id, currentSdf)
      .then((response) => {
        console.log(response.data)
        setMessage('The sdf was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentSdf ? (
        <div className='edit-form'>
          <h4>Sdf</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='nom'>nom</label>
              <input
                type='text'
                className='form-control'
                id='nom'
                value={currentSdf.nom}
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
                value={currentSdf.prenom}
                onChange={handleInputChange}
                name='prenom'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='genre'>genre</label>
              <input
                type='text'
                className='form-control'
                id='genre'
                required
                value={currentSdf.genre}
                onChange={handleInputChange}
                name='genre'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='age'>age</label>
              <input
                type='text'
                className='form-control'
                id='age'
                required
                onChange={handleInputChange}
                value={currentSdf.age}
                name='age'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='cas_social'>cas_social</label>
              <input
                type='text'
                className='form-control'
                id='cas_social'
                required
                onChange={handleInputChange}
                value={currentSdf.cas_social}
                name='cas_social'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='handicape'>handicape</label>
              <input
                type='text'
                className='form-control'
                id='handicape'
                required
                onChange={handleInputChange}
                value={currentSdf.handicape}
                name='handicape'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='maladie'>maladie</label>
              <input
                type='text'
                className='form-control'
                id='maladie'
                required
                onChange={handleInputChange}
                value={currentSdf.maladie}
                name='maladie'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='adresse'>adresse</label>
              <input
                type='text'
                className='form-control'
                id='adresse'
                required
                value={currentSdf.adresse}
                onChange={handleInputChange}
                name='adresse'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='local'>local</label>
              <input
                type='text'
                className='form-control'
                id='local'
                required
                value={currentSdf.local}
                onChange={handleInputChange}
                name='local'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateSdf}
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
export default EditSdf
