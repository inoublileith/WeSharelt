import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OrganismeDataService from '../../services/organisme.service'
const EditOrganisme = (props) => {
  let { id } = useParams()
  const initialOrganismeState = {
    id: null,
    nom: '',
    description: '',
    domaine: '',
    mission: '',
    logo: '',
    date_fondation: '',
    president: '',
    contact: '',
    adresse: '',
    tel: '',
  }
  const [currentOrganisme, setCurrentOrganisme] = useState(
    initialOrganismeState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getOrganisme = (id) => {
    OrganismeDataService.get(id)
      .then((response) => {
        setCurrentOrganisme(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getOrganisme(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentOrganisme({ ...currentOrganisme, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentOrganisme.id,
      nom: currentOrganisme.nom,
      description: currentOrganisme.description,
      domaine: currentOrganisme.domaine,
      mission: currentOrganisme.mission,
      logo: currentOrganisme.logo,
      date_fondation: currentOrganisme.date_fondation,
      president: currentOrganisme.president,
      contact: currentOrganisme.contact,
      adresse: currentOrganisme.adresse,
      tel: currentOrganisme.tel,
    }
   OrganismeDataService.update(currentOrganisme.id, data)
     .then((response) => {
       setCurrentOrganisme({ ...currentOrganisme, etat: status })
       console.log(response.data)
     })
     .catch((e) => {
       console.log(e)
     })
  }
  const updateOrganisme = () => {
    OrganismeDataService.update(
      currentOrganisme.id,
      currentOrganisme
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The organisme was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentOrganisme ? (
        <div className='edit-form'>
          <h4>Organisme</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='nom'>nom</label>
              <input
                type='text'
                className='form-control'
                id='nom'
                required
                value={currentOrganisme.nom}
                onChange={handleInputChange}
                name='nom'
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
                value={currentOrganisme.description}
                name='description'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='domaine'>domaine</label>
              <input
                type='text'
                className='form-control'
                id='domaine'
                required
                value={currentOrganisme.domaine}
                onChange={handleInputChange}
                name='domaine'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='mission'>mission</label>
              <input
                type='text'
                className='form-control'
                id='mission'
                required
                value={currentOrganisme.mission}
                onChange={handleInputChange}
                name='mission'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='logo'>logo</label>
              <input
                type='text'
                className='form-control'
                id='logo'
                required
                value={currentOrganisme.logo}
                onChange={handleInputChange}
                name='logo'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date_fondation'>date_fondation</label>
              <input
                type='date'
                className='form-control'
                id='date_fondation'
                required
                value={currentOrganisme.date_fondation}
                onChange={handleInputChange}
                name='date_fondation '
              />
            </div>
            <div className='form-group'>
              <label htmlFor='president'>president</label>
              <input
                type='text'
                className='form-control'
                id='president'
                required
                value={currentOrganisme.president}
                onChange={handleInputChange}
                name='president '
              />
            </div>
            <div className='form-group'>
              <label htmlFor='contact'>contact</label>
              <input
                type='text'
                className='form-control'
                id='contact'
                required
                value={currentOrganisme.contact}
                onChange={handleInputChange}
                name='contact '
              />
            </div>
            <div className='form-group'>
              <label htmlFor='adresse'>adresse</label>
              <input
                type='text'
                className='form-control'
                id='adresse'
                required
                value={currentOrganisme.adresse}
                onChange={handleInputChange}
                name='adresse '
              />
            </div>
            <div className='form-group'>
              <label htmlFor='tel'>tel</label>
              <input
                type='text'
                className='form-control'
                id='tel'
                required
                value={currentOrganisme.tel}
                onChange={handleInputChange}
                name='tel '
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateOrganisme}
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
export default EditOrganisme
