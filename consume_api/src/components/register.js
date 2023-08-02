import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import { register } from '../actions/auth'
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
const Register = () => {
  useEffect(() => {
    document.title = "WeShareIt - S'inscrire";
  }, []);

  const form = useRef()
  const checkBtn = useRef()
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successful, setSuccessful] = useState(false)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const onChangeLogin = (e) => {
    const login = e.target.value
    setLogin(login)
  }
  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const handleRegister = (e) => {
    e.preventDefault()
    setSuccessful(false)
    form.current.validateAll()
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(login, email, password))
        .then(() => {
          setSuccessful(true)
        })
        .catch(() => {
          setSuccessful(false)
        })
    }
  }

  return (
    <div className='wrapper'>
      <main className='authentication-content'>
        <div className='container-fluid'>
          <div className='authentication-card'>
            <div className='card shadow rounded-0 overflow-hidden'>
              <div className='row g-0'>
                <div className='col-lg-6 bg-login d-flex align-items-center justify-content-center'>
                  <img
                    src='assets/images/error/login-img.jpg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div className='col-lg-6'>
                  <div className='card-body p-4 p-sm-5'>
                    <h5 className='card-title' style={{ fontWeight: 'bolder' }}>S'inscrire</h5>
                   
                    <Form onSubmit={handleRegister} ref={form}>
                      {!successful && (
                        <>
                          
                          <div className='login-separater text-center mb-4'>
                            {' '}
                           
                            <hr />
                          </div>
                          <div className='row g-3'>
                            <div className='col-12 '>
                              <label for='login' className='form-label'>
                                Nom d'utilisateur :
                              </label>
                              <div className='ms-auto position-relative'>
                                <div className='position-absolute top-50 translate-middle-y search-icon px-3'>
                                  <i className='bi bi-person-circle'></i>
                                </div>
                                <Input
                                  type='text'
                                  className='form-control radius-30 ps-5'
                                  id='login'
                                  name='login'
                                  value={login}
                                  onChange={onChangeLogin}
                                  validations={[required]}
                                />
                              </div>
                            </div>
                            <div className='col-12'>
                              <label for='email' className='form-label'>
                                E-mail :
                              </label>
                              <div className='ms-auto position-relative'>
                                <div className='position-absolute top-50 translate-middle-y search-icon px-3'>
                                  <i className='bi bi-envelope-fill'></i>
                                </div>
                                <Input
                                  type='email'
                                  className='form-control radius-30 ps-5'
                                  id='email'
                                  name='email'
                                  value={email}
                                  onChange={onChangeEmail}
                                  validations={[required]}
                                />
                              </div>
                            </div>
                            <div className='col-12'>
                              <label for='Password' className='form-label'>
                                Mot de passe :
                              </label>
                              <div className='ms-auto position-relative'>
                                <div className='position-absolute top-50 translate-middle-y search-icon px-3'>
                                  <i className='bi bi-lock-fill'></i>
                                </div>
                                <Input
                                  type='password'
                                  className='form-control radius-30 ps-5'
                                  id='password'
                                  name='password'
                                  value={password}
                                  onChange={onChangePassword}
                                  validations={[required]}
                                />
                              </div>
                            </div>
                            
                            <div className='col-12'>
                              <div className='d-grid'>
                                <button
                                  type='submit'
                                  className='btn btn-primary radius-30'
                                >
                                  Inscription
                                </button>
                              </div>
                            </div>
                            <div className='col-12'>
                              <p className='mb-0'>
                               Vous avez un compte?{' '}
                                <a href='/login'>Se connecter</a>
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                      {message && (
                        <div className='form-group'>
                          <div
                            className={
                              successful
                                ? 'alert alert-success'
                                : 'alert alert-danger'
                            }
                            role='alert'
                          >
                            {message}{" "}
                            <a href='/login'>Se connecter</a>
                          </div>
                        </div>
                      )}
                      <CheckButton style={{ display: 'none' }} ref={checkBtn} />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Register
