import React, { useState } from 'react'
import RecommandationDataService from '../../services/recommandation.service'
const AddRecommandation = () => {
  const initialRecommandationState = {
    id: null,
    titre: '',
    description: '',
    domaine: '',
    specification: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01',
  }
  const [recommandation, setRecommandation] = useState(
    initialRecommandationState
  )
  const [submitted, setSubmitted] = useState(false)
  // onChangeTitre(e) {
  //   console.log(e)
  //   this.setState({
  //     titre: e.target.value,
  //   })
  // } .....attributs
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setRecommandation({ ...recommandation, [name]: value })
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
  const saveRecommandation = () => {
    var data = {
      titre: recommandation.titre,
      description: recommandation.description,
      domaine: recommandation.domaine,
      specification: recommandation.specification,
      retenu: recommandation.retenu,
      etat: recommandation.etat,
      date_ins: recommandation.date_ins,
    }
    RecommandationDataService.create(data)
      .then((response) => {
        setRecommandation({
          id: response.data.id,
          description: response.data.description,
          domaine: response.data.domaine,
          specification: response.data.specification,
          retenu: response.data.retenu,
          etat: response.data.etat,
          date_ins: response.data.date_ins,
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

  const newRecommandation = () => {
    setRecommandation(initialRecommandationState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newRecommandation}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='input-group mb-3'>
            <span htmlFor='titre' class='input-group-text' id='titre'>
              Titre
            </span>
            <input
              type='text'
              className='form-control'
              id='titre'
              required
              // value={this.state.titre}
              value={recommandation.titre}
              // onChange={this.onChangeTitre}
              onChange={handleInputChange}
              name='titre'
              aria-describedby='titre'
            />
          </div>
          <div className='input-group mb-3'>
            <span
              htmlFor='description'
              class='input-group-text'
              id='description'
            >
              Description
            </span>
            <input
              type='text'
              className='form-control'
              id='description'
              required
              onChange={handleInputChange}
              name='description'
              aria-describedby='titre'
              value={recommandation.description}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='domaine'>Domaine</label>
            <input
              type='text'
              className='form-control'
              id='domaine'
              required
              value={recommandation.domaine}
              onChange={handleInputChange}
              name='domaine'
              placeholder='domaine'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='specification'>Specification</label>
            <input
              type='text'
              className='form-control'
              id='specification'
              required
              onChange={handleInputChange}
              value={recommandation.specification}
              name='specification'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='retenu'>Retenu</label>
            <input
              type='text'
              className='form-control'
              id='retenu'
              required
              value={recommandation.retenu}
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
              value={recommandation.etat}
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
              value={recommandation.date_ins}
              onChange={handleInputChange}
              name='date_ins'
            />
          </div>
          <button onClick={saveRecommandation} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddRecommandation
