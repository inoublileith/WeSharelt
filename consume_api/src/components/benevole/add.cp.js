import React, { useState } from 'react'
import BenevoleDataService from '../../services/benevole.service'
const AddBenevole = () => {
  const initialBenevoleState = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    facebook: '',
    linkedin: '',
    context: '',
    tel: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01',
  }
  const [benevole, setBenevole] = useState(initialBenevoleState)
  const [submitted, setSubmitted] = useState(false)
  // onChangeTitre(e) {
  //   console.log(e)
  //   this.setState({
  //     titre: e.target.value,
  //   })
  // } .....attributs
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setBenevole({ ...benevole, [name]: value })
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
  const saveBenevole = () => {
    var data = {
      nom: benevole.nom,
      prenom: benevole.prenom,
      email: benevole.email,
      facebook: benevole.facebook,
      linkedin: benevole.linkedin,
      context: benevole.context,
      tel: benevole.tel,
      retenu: benevole.retenu,
      etat: benevole.etat,
      date_ins: benevole.date_ins,
    }
    BenevoleDataService.create(data)
      .then((response) => {
        setBenevole({
          id: response.data.id,
          nom: response.data.nom,
          prenom: response.data.prenom,
          email: response.data.email,
          facebook: response.data.facebook,
          linkedin: response.data.linkedin,
          context: response.data.context,
          tel: response.data.tel,
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

  const newBenevole = () => {
    setBenevole(initialBenevoleState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newBenevole}>
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
              value={benevole.nom}
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
              value={benevole.prenom}
              onChange={handleInputChange}
              name='prenom'
              placeholder='prenom'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>email</label>
            <input
              type='text'
              className='form-control'
              id='email'
              required
              value={benevole.email}
              onChange={handleInputChange}
              name='email'
              placeholder='email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='facebook'>facebook</label>
            <input
              type='text'
              className='form-control'
              id='facebook'
              required
              onChange={handleInputChange}
              value={benevole.facebook}
              name='facebook'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='linkedin'>linkedin</label>
            <input
              type='text'
              className='form-control'
              id='linkedin'
              required
              onChange={handleInputChange}
              value={benevole.linkedin}
              name='linkedin'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='context'>context</label>
            <input
              type='text'
              className='form-control'
              id='context'
              required
              onChange={handleInputChange}
              value={benevole.context}
              name='context'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='tel'>tel</label>
            <input
              type='text'
              className='form-control'
              id='tel'
              required
              onChange={handleInputChange}
              value={benevole.tel}
              name='tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='retenu'>Retenu</label>
            <input
              type='text'
              className='form-control'
              id='retenu'
              required
              value={benevole.retenu}
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
              value={benevole.etat}
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
              value={benevole.date_ins}
              onChange={handleInputChange}
              name='date_ins'
            />
          </div>
          <button onClick={saveBenevole} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddBenevole
