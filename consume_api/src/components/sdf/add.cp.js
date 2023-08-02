import React, { useState } from 'react'
import SdfDataService from '../../services/sdf.service'
const AddSdf = () => {
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
  const [sdf, setSdf] = useState(initialSdfState)
  const [submitted, setSubmitted] = useState(false)
  // onChangeTitre(e) {
  //   console.log(e)
  //   this.setState({
  //     titre: e.target.value,
  //   })
  // } .....attributs
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSdf({ ...sdf, [name]: value })
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
  const saveSdf = () => {
    var data = {
      nom: sdf.nom,
      prenom: sdf.prenom,
      genre: sdf.genre,
      age: sdf.age,
      cas_social: sdf.cas_social,
      handicape: sdf.handicape,
      maladie: sdf.maladie,
      adresse: sdf.adresse,
      local: sdf.local,
      
    }
    SdfDataService.create(data)
      .then((response) => {
        setSdf({
          id: response.data.id,
          nom: response.data.nom,
          prenom: response.data.prenom,
          genre: response.data.genre,
          age: response.data.age,
          cas_social: response.data.cas_social,
          handicape: response.data.handicape,
          maladie: response.data.maladie,
          adresse: response.data.adresse,
          local: response.data.local,
          
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

  const newSdf = () => {
    setSdf(initialSdfState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newSdf}>
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
              value={sdf.nom}
              onChange={handleInputChange}
              name='nom'
              placeholder='nom'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='prenom'>prenom</label>
            <input
              type='text'
              className='form-control'
              id='prenom'
              required
              value={sdf.prenom}
              onChange={handleInputChange}
              name='prenom'
              placeholder='prenom'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='genre'>genre</label>
            <input
              type='text'
              className='form-control'
              id='genre'
              required
              value={sdf.genre}
              onChange={handleInputChange}
              name='genre'
              placeholder='genre'
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
              value={sdf.age}
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
              value={sdf.cas_social}
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
              value={sdf.handicape}
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
              value={sdf.maladie}
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
              value={sdf.adresse}
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
              value={sdf.local}
              onChange={handleInputChange}
              name='local'
            />
          </div>
        
          <button onClick={saveSdf} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddSdf
