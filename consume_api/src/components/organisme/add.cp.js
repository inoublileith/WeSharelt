import React, { useState } from 'react'
import OrganismeDataService from '../../services/organisme.service'
const AddOrganisme = () => {
  const initialOrganismeState = {
    id: null,
    nom: '',
    description: '',
    mission: '',
    logo: '',
    date_fondation: '',
    president: '',
    contact: '',
    adresse: '',
    tel: '',
   
  }
  const [organisme, setOrganisme] = useState(initialOrganismeState)
  const [submitted, setSubmitted] = useState(false)
  // onChangeTitre(e) {
  //   console.log(e)
  //   this.setState({
  //     titre: e.target.value,
  //   })
  // } .....attributs
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setOrganisme({ ...organisme, [name]: value })
  }

  // saveRecommandation() {
  //   var data = {
  //     titre: this.state.titre,
  //     description: this.state.description,
  //     domaine: this.state.domaine,
  //     specification: this.state.specification,
  //     retenu: this.state.retenu,
  //     etat: this.state.etat,
  //     date_ins: this.state.date_ins,
  //   }
  //   RecommandationDataService.create(data)
  //     .then((response) => {
  //       this.setState({
  //         id: response.data.id,
  //         title: response.data.title,
  //         description: response.data.description,
  //         domaine: response.data.domaine,
  //         specification: response.data.specification,
  //         retenu: response.data.retenu,
  //         etat: response.data.etat,
  //         date_ins: response.data.date_ins,
  //         submitted: true,
  //       })
  //       console.log(response.data)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }
  const saveOrganisme = () => {
    var data = {
      nom: organisme.nom,
      description: organisme.description,
      domaine: organisme.domaine,
      mission: organisme.mission,
      logo: organisme.logo,
      date_fondation: organisme.date_fondation,
      president: organisme.president,
      contact: organisme.contact,
      adresse: organisme.adresse,
      tel: organisme.tel,
    }
    OrganismeDataService.create(data)
      .then((response) => {
        setOrganisme({
          id: response.data.id,
          nom: response.data.nom,
          description: response.data.description,
          domaine: response.data.domaine,
          mission: response.data.mission,
          logo: response.data.logo,
          date_fondation: response.data.date_fondation,
          president: response.data.president,
          contact: response.data.contact,
          adresse: response.data.adresse,
          tel: response.data.tel,
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

  const newOrganisme= () => {
    setOrganisme(initialOrganismeState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newOrganisme}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group'>
            <label htmlFor='nom'>nom</label>
            <input
              type='text'
              className='form-control'
              id='nom'
              required
              value={organisme.nom}
              onChange={handleInputChange}
              name='nom'
              placeholder='nom'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>description</label>
            <input
              type='text'
              className='form-control'
              id='description'
              required
              value={organisme.description}
              onChange={handleInputChange}
              name='description'
              placeholder='description'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='domaine'>domaine</label>
            <input
              type='text'
              className='form-control'
              id='domaine'
              required
              value={organisme.domaine}
              onChange={handleInputChange}
              name='domaine'
              placeholder='domaine'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='mission'>mission</label>
            <input
              type='text'
              className='form-control'
              id='mission'
              required
              onChange={handleInputChange}
              value={organisme.mission}
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
              onChange={handleInputChange}
              value={organisme.logo}
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
              onChange={handleInputChange}
              value={organisme.date_fondation}
              name='date_fondation'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='president'>president</label>
            <input
              type='text'
              className='form-control'
              id='president'
              required
              onChange={handleInputChange}
              value={organisme.president}
              name='president'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='contact'>contact</label>
            <input
              type='text'
              className='form-control'
              id='contact'
              required
              value={organisme.contact}
              onChange={handleInputChange}
              name='contact'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='adresse'>adresse</label>
            <input
              type='text'
              className='form-control'
              id='adresse'
              required
              value={organisme.adresse}
              onChange={handleInputChange}
              name='adresse'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='tel'>tel</label>
            <input
              type='text'
              className='form-control'
              id='tel'
              required
              value={organisme.tel}
              onChange={handleInputChange}
              name='tel'
            />
          </div>
          <button onClick={saveOrganisme} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddOrganisme
