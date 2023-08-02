import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { processLogin } from '../actions/auth'

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const Login = (props) => {

  useEffect(() => {
    document.title = "WeShareIt - Se connecter";
  }, []);

  const navigate = useNavigate()
  const form = useRef()
  const checkBtn = useRef()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const onChangeLogin = (e) => {
    const login = e.target.value
    setLogin(login)
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    form.current.validateAll()
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(processLogin(login, password))
        .then(() => {
          navigate('/profile')
          window.location.reload()
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }
  useEffect((isLoggedIn) => {
    if (isLoggedIn) {
      return navigate('/profile')
    }
  }, [])
  // let path = window.location.pathname
  // const [intervalId, setIntervalId] = useState()

  // useEffect(() => {
  //   setIntervalId(() => window.location.reload(true), 1000)
  // }, [])
  // useEffect(() => {
  //   setIntervalId()
  // }, [])

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
                    <h5 className='card-title' style={{ fontWeight: 'bolder'}}>Se connecter</h5>
                   
                    <Form
                      className='form-body'
                      onSubmit={handleLogin}
                      ref={form}
                    >
                      
                      <div className='login-separater text-center mb-4'>
                        {' '}
                       
                        <hr />
                      </div>
                      <div className='row g-3'>
                        <div className='col-12'>
                          <label htmlFor='login' className='form-label'>
                            Nom d'utilisateur :
                          </label>
                          <div className='ms-auto position-relative'>
                            <div className='position-absolute top-50 translate-middle-y search-icon px-3'>
                              <i className='bi bi-person-fill'></i>
                            </div>
                            <Input
                              type='text'
                              className='form-control radius-30 ps-5'
                              name='login'
                              value={login}
                              onChange={onChangeLogin}
                              validations={[required]}
                            />
                          </div>
                        </div>
                        <div className='col-12'>
                          <label htmlFor='password' className='form-label'>
                            Mot de passe :
                          </label>
                          <div className='ms-auto position-relative'>
                            <div className='position-absolute top-50 translate-middle-y search-icon px-3'>
                              <i className='bi bi-lock-fill'></i>
                            </div>
                            <Input
                              type='password'
                              className='form-control radius-30 ps-5'
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
                              Connexion
                            </button>
                          </div>
                        </div>
                        {loading && (
                          <span className='spinner-border spinner-border-sm'></span>
                        )}
                        {message && (
                          <div className='form-group'>
                            <div className='alert alert-danger' role='alert'>
                              {message}
                            </div>
                          </div>
                        )}
                        <div className='col-12'>
                          <p className='mb-0'>
                            Vous n'avez pas un compte?{' '}
                            <a href='/register'>S'inscrire</a>
                          </p>
                        </div>
                      </div>
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
export default Login
