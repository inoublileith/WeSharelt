import React, { useState } from 'react'
import SondageDataService from '../../services/sondage.service'
const AddSondage = () => {
  const initialSondageState = {
    id: null,
    question: '',
    proposition1: '',
    proposition2: '',
    proposition3: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01',
  }
  const [sondage, setSondage] = useState(
    initialSondageState
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
    setSondage({ ...sondage, [name]: value })
  }

  // saveSondage() {
  //   var data = {
  //     titre: this.state.titre,
  //     description: this.state.description,
  //     domaine: this.state.domaine,
  //     specification: this.state.specification,
  //     retenu: this.state.retenu,
  //     etat: this.state.etat,
  //     date_ins: this.state.date_ins,
  //   }
  //   SondageDataService.create(data)
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
  const saveSondage = () => {
    var data = {
      question: sondage.question,
      proposition1: sondage.proposition1,
      proposition2: sondage.proposition2,
      proposition3: sondage.proposition3,
      retenu: sondage.retenu,
      etat: sondage.etat,
      date_ins: sondage.date_ins,
    }
    SondageDataService.create(data)
      .then((response) => {
        setSondage({
          id: response.data.id,
          question: response.data.question,
          proposition1: response.data.proposition1,
          proposition2: response.data.proposition2,
          proposition3: response.data.proposition3,
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

  // newSondage() {
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

  const newSondage = () => {
    setSondage(initialSondageState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newSondage}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group'>
            <label htmlFor='question'>question</label>
            <input
              type='text'
              className='form-control'
              id='question'
              required
              value={sondage.question}
              onChange={handleInputChange}
              name='question'
              placeholder='question'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='proposition1'>proposition1</label>
            <input
              type='text'
              className='form-control'
              id='proposition1'
              required
              value={sondage.proposition1}
              onChange={handleInputChange}
              name='proposition1'
              placeholder='proposition1'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='proposition2'>proposition2</label>
            <input
              type='text'
              className='form-control'
              id='proposition2'
              required
              onChange={handleInputChange}
              value={sondage.proposition2}
              name='proposition2'
              placeholder='proposition2'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='proposition3'>proposition3</label>
            <input
              type='text'
              className='form-control'
              id='proposition3'
              required
              onChange={handleInputChange}
              value={sondage.proposition3}
              name='proposition3'
              placeholder='proposition3'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='retenu'>Retenu</label>
            <input
              type='text'
              className='form-control'
              id='retenu'
              required
              value={sondage.retenu}
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
              value={sondage.etat}
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
              value={sondage.date_ins}
              onChange={handleInputChange}
              name='date_ins'
            />
          </div>
          <button onClick={saveSondage} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddSondage
