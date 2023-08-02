import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//css

import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/login'
import Register from './components/register'

import Profile from './components/profile'
import BoardUser from './components/boardUser'
import BoardAnalyste from './components/boardAnalyste'
import BoardAdmin from './components/boardAdmin'
import { logout } from './actions/auth'
import { clearMessage } from './actions/message'
import { history } from './helpers/history'
//components
import Home from './components/home.cp'
import AddRecommandation from './components/recommandation/add.cp'
import EditRecommandation from './components/recommandation/edit.cp'
import ShowRecommandations from './components/recommandation/list.cp'
import AddSondage from './components/sondage/add.cp'
import EditSondage from './components/sondage/edit.cp'
import ShowSondages from './components/sondage/list.cp'
import AddCompte from './components/utilisateur/add.cp'
import EditCompte from './components/utilisateur/edit.cp'
import ShowComptes from './components/utilisateur/list.cp'

import AddBenevole from './components/benevole/add.cp'
import EditBenevole from './components/benevole/edit.cp'
import ShowBenevoles from './components/benevole/list.cp'
import AddDemande from './components/demande/add.cp'
import EditDemande from './components/demande/edit.cp'
import ShowDemandes from './components/demande/list.cp'
import AddSdf from './components/sdf/add.cp'
import EditSdf from './components/sdf/edit.cp'
import ShowSdfs from './components/sdf/list.cp'
import AddEvenement from './components/evenement/add.cp'
import EditEvenement from './components/evenement/edit.cp'
import ShowEvenements from './components/evenement/list.cp'
import AddDon from './components/don/add.cp'
import EditDon from './components/don/edit.cp'
import ShowDons from './components/don/list.cp'

import AddStock from './components/stock/add.cp'
import EditStock from './components/stock/edit.cp'
import ShowStocks from './components/stock/list.cp'
import AddLivraison from './components/livraison/add.cp'
import EditLivraison from './components/livraison/edit.cp'
import ShowLivraisons from './components/livraison/list.cp'

const App = () => {
  const [showAnalysteBoard, setShowAnalysteBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [showAssociationBoard, setShowAssociationBoard] = useState(false)
  const [showOrganismeBoard, setShowOrganismeBoard] = useState(false)
  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()) // clear message when changing location
    })
  }, [dispatch])
  useEffect(() => {
    if (currentUser) {
      setShowAnalysteBoard(currentUser.roles.includes('ROLE_ANALYSTE'))
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'))
      setShowAssociationBoard(currentUser.roles.includes('ROLE_ASSOCIATION'))
      setShowOrganismeBoard(currentUser.roles.includes('ROLE_ORGANISME'))
    }
  }, [currentUser])
  const logOut = () => {
    dispatch(logout())
  }
  return (
    <>
      <div>
        <header className='top-header'>
          <nav className='navbar navbar-expand'>
            <div className='mobile-toggle-icon d-xl-none'>
              <i className='bi bi-list'></i>
            </div>
            <div className='top-navbar d-none d-xl-block'>
              <ul className='navbar-nav align-items-center'>
                {showAdminBoard && (
                  <>
                    <li className='nav-item'>
                      <Link to={'/stat'} className='nav-link'>
                        Statistiques
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={'/comptes'} className='nav-link'>
                        Comptes
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link to={'/demandes'} className='nav-link'>
                        Demandes
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={'/stocks'} className='nav-link'>
                        Stock
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={'/dons'} className='nav-link'>
                        Dons
                      </Link>
                    </li>
                  </>
                )}
                {showAssociationBoard && (
                  <>
                    <li className='nav-item'>
                      <Link to={'/sdfs'} className='nav-link'>
                        SDF
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={'/stocks'} className='nav-link'>
                        Stock
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={'/demandes'} className='nav-link'>
                        Mes Demandes
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={'/benevoles'} className='nav-link'>
                        Benevoles
                      </Link>
                    </li>
                    <li className='nav-item d-none d-xxl-block'>
                      <Link to={'/livraisons'} className='nav-link'>
                        Livraisons
                      </Link>
                    </li>
                  </>
                )}
                {showOrganismeBoard && (
                  <>
                    <li className='nav-item d-none d-xxl-block'>
                      <Link to={'/evenements'} className='nav-link'>
                        Evenements
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={'/stocks'} className='nav-link'>
                        Stock
                      </Link>
                    </li>
                  </>
                )}
                {showAnalysteBoard && (
                  <>
                    <li className='nav-item d-none d-xxl-block'>
                      <Link to={'/recommandations'} className='nav-link'>
                        Recommandations
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={'/stat'} className='nav-link'>
                        Statistiques
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className='searchbar d-none d-xl-flex ms-auto'></div>
            <div className='top-navbar-right ms-3'>
              <ul className='navbar-nav align-items-center'>
                <li className='nav-item dropdown dropdown-large'>
                  <a
                    className='nav-link dropdown-toggle-nocaret'
                    data-bs-toggle='dropdown'
                  >
                    <div className='user-setting d-flex align-items-center gap-1'>
                      <img
                        src='/assets/images/avatars/avatar-1.png'
                        className='user-img'
                        alt=''
                      />
                      <div className='user-name d-none d-sm-block'>
                        {currentUser.username}
                      </div>
                    </div>
                  </a>
                  <ul className='dropdown-menu dropdown-menu-end'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <div className='d-flex align-items-center'>
                          <img
                            src='/assets/images/avatars/avatar-1.png'
                            alt=''
                            className='rounded-circle'
                            width='60'
                            height='60'
                          />
                          <div className='ms-3'>
                            <h6 className='mb-0 dropdown-user-name'>
                              {currentUser.username}
                            </h6>
                            <small className='mb-0 dropdown-user-designation text-secondary'>
                              Admin
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a className='dropdown-item' href='/profile'>
                        <div className='d-flex align-items-center'>
                          <div className='setting-icon'>
                            <i className='bi bi-person-fill'></i>
                          </div>
                          <div className='setting-text ms-3'>
                            <span>Profil</span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <div className='dropdown-item'>
                        <div className='d-flex align-items-center'>
                          <div className='setting-icon'>
                            <i className='bi bi-lock-fill'></i>
                          </div>
                          <div className='setting-text ms-3'>
                            <a
                              href='/login'
                              className='dropdown-item'
                              onClick={logOut}
                            >
                              LogOut
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <aside className='sidebar-wrapper'>
          <img
            src='https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            width='100%'
            height='100%'
          />
        </aside>

        <main className='page-content'>
          <Routes>
            <Route exact path='/' element={<Home />} />

            <Route exact path='/comptes' element={<ShowComptes />} />
            <Route exact path='/addcomptes' element={<AddCompte />} />
            <Route exact path='/editcomptes/:id' element={<EditCompte />} />

            <Route
              exact
              path='/recommandations'
              element={<ShowRecommandations />}
            />
            <Route
              exact
              path='/addRecommandation'
              element={<AddRecommandation />}
            />
            <Route
              exact
              path='/editRecommandation/:id'
              element={<EditRecommandation />}
            />

            <Route exact path='/sondages' element={<ShowSondages />} />
            <Route exact path='/addSondage' element={<AddSondage />} />
            <Route path='/editSondage/:id' element={<EditSondage />} />

            <Route exact path='/sdfs' element={<ShowSdfs />} />
            <Route exact path='/addSdf' element={<AddSdf />} />
            <Route path='/editSdf/:id' element={<EditSdf />} />

            <Route exact path='/benevoles' element={<ShowBenevoles />} />
            <Route exact path='/addBenevole' element={<AddBenevole />} />
            <Route path='/editBenevole/:id' element={<EditBenevole />} />

            <Route exact path='/evenements' element={<ShowEvenements />} />
            <Route exact path='/addEvenement' element={<AddEvenement />} />
            <Route path='/editEvenement/:id' element={<EditEvenement />} />

            <Route exact path='/demandes' element={<ShowDemandes />} />
            <Route exact path='/addDemande' element={<AddDemande />} />
            <Route path='/editDemande/:id' element={<EditDemande />} />

            <Route exact path='/dons' element={<ShowDons />} />
            <Route exact path='/addDon' element={<AddDon />} />
            <Route path='/editDon/:id' element={<EditDon />} />
            
            <Route exact path='/stockAdmin' element={<ShowStocks />} />

            <Route exact path='/stocks' element={<ShowStocks />} />
            <Route exact path='/addStock' element={<AddStock />} />
            <Route path='/editStock/:id' element={<EditStock />} />

            <Route exact path='/livraisons' element={<ShowLivraisons />} />
            <Route exact path='/addLivraison' element={<AddLivraison />} />
            <Route path='/editLivraison/:id' element={<EditLivraison />} />

            <Route exact path='/home' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route path='/user' element={<BoardUser />} />
            <Route
              path='/stat'
              element={<BoardAnalyste />}
            />
            <Route path='/admin' element={<BoardAdmin />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
