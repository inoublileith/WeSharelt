import React, { useState, useRef } from 'react'
import UserDataService from '../../services/user.service'
import { isEmail } from 'validator'
import Form from 'react-validation/build/form'
import CheckButton from 'react-validation/build/button'
import Input from 'react-validation/build/input'
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        This is not a valid email.
      </div>
    )
  }
}
const login = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='alert alert-danger' role='alert'>
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}
const password = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className='alert alert-danger' role='alert'>
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}

const AddUser = () => {
  const form = useRef()
  const checkBtn = useRef()
  const initialUserState = {
    id: null,
    civil: '',
    nom: '',
    prenom: '',
    cin: '',
    tel: '',
    email: '',
    login: '',
    password: '',
    profil: '',
  }
  const [user, setUser] = useState(initialUserState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const saveUser = () => {
    form.current.validateAll()
    if (!isEmail(user.email)) {
      return (
        <div className='alert alert-danger' role='alert'>
          This is not a valid email.
        </div>
      )
    }
    if (checkBtn.current.context._errors.length === 0) {
      var data = {
        civil: user.civil,
        nom: user.nom,
        prenom: user.prenom,
        cin: user.cin,
        tel: user.tel,
        email: user.email,
        login: user.login,
        password: user.password,
        profil: user.profil,
        permissions: user.permissions,
        avatar: user.avatar,
        retenu: user.retenu,
        etat: user.etat,
        date_ins: user.date_ins,
      }
      UserDataService.create(data)
        .then((response) => {
          setUser({
            id: response.data.id,
            civil: response.data.civil,
            nom: response.data.nom,
            prenom: response.data.prenom,

            cin: response.data.cin,
            tel: response.data.tel,
            email: response.data.email,

            login: response.data.login,
            password: response.data.password,
            profil: response.data.profil,
          })
          setSubmitted(true)
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }

  const newUser = () => {
    setUser(initialUserState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newUser}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <Form onSubmit={saveUser} ref={form}>
            <div className='input-group mb-3'>
              <span htmlFor='civil' class='input-group-text' id='civil'>
                Civil
              </span>
              <select name='civil' className='form-control'>
                <option value='Mr'>Mr</option>
                <option value='Mme'>Mme</option>
              </select>
            </div>
            <div className='input-group mb-3'>
              <span htmlFor='nom' class='input-group-text' id='nom'>
                Nom
              </span>
              <input
                type='text'
                className='form-control'
                id='nom'
                required
                onChange={handleInputChange}
                name='nom'
                aria-describedby='nom'
                value={user.nom}
              />
            </div>
            <div className='input-group mb-3'>
              <span htmlFor='prenom' class='input-group-text' id='prenom'>
                Prenom
              </span>
              <input
                type='text'
                className='form-control'
                id='prenom'
                required
                onChange={handleInputChange}
                name='prenom'
                aria-describedby='prenom'
                value={user.prenom}
              />
            </div>
            <div className='input-group mb-3'>
              <span htmlFor='cin' class='input-group-text' id='cin'>
                CIN
              </span>
              <input
                type='number'
                className='form-control'
                id='cin'
                required
                onChange={handleInputChange}
                name='cin'
                aria-describedby='cin'
                value={user.cin}
              />
            </div>
            <div className='input-group mb-3'>
              <span htmlFor='tel' class='input-group-text' id='tel'>
                Tel
              </span>
              <input
                type='number'
                className='form-control'
                id='tel'
                required
                onChange={handleInputChange}
                name='tel'
                aria-describedby='tel'
                value={user.tel}
              />
            </div>
            <div className='input-group mb-3'>
              <span htmlFor='email' class='input-group-text' id='email'>
                email
              </span>
              <input
                type='email'
                className='form-control'
                id='email'
                required
                onChange={handleInputChange}
                name='email'
                aria-describedby='email'
                value={user.email}
              />
            </div>
            <div className='input-group mb-3'>
              <span htmlFor='login' class='input-group-text' id='login'>
                Login
              </span>
              <input
                type='text'
                className='form-control'
                id='login'
                required
                onChange={handleInputChange}
                name='login'
                aria-describedby='login'
                value={user.login}
              />
            </div>
            <div className='input-group mb-3'>
              <span htmlFor='password' class='input-group-text' id='password'>
                Password
              </span>
              <input
                type='password'
                className='form-control'
                id='password'
                required
                onChange={handleInputChange}
                name='password'
                aria-describedby='password'
                value={user.password}
              />
            </div>
            <div className='input-group mb-3'>
              <span htmlFor='profil' class='input-group-text' id='profil'>
                Profil
              </span>

              <select name='profil' className='form-control'>
                <option value='1'>Adminirateur</option>
                <option value='2'>Analyste</option>
                <option value='3'>Association</option>
                <option value='4'>Organisme</option>
              </select>
            </div>
            <button onClick={saveUser} className='btn btn-success'>
              Submit
            </button>{' '}
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </div>
      )}
    </div>
  )
}
export default AddUser
