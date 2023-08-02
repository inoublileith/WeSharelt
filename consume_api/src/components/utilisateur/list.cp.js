import React, { useState, useEffect, useMemo, useRef } from 'react'
import UserDataService from '../../services/user.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const ShowUsers = (props) => {
  const [users, setUsers] = useState([])
  const [searchNom, setSearchNom] = useState('')
  const usersRef = useRef()
  usersRef.current = users
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "WeShareIt - Comptes";
  }, []);

  useEffect(() => {
    retrieveUsers()
  }, [])

  const onChangeSearchNom = (e) => {
    const searchNom = e.target.value
    setSearchNom(searchNom)
  }

  const retrieveUsers = () => {
    UserDataService.getAll()
      .then((response) => {
        setUsers(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveUsers()
  }

  const removeAllUsers = () => {
      confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              UserDataService.deleteAll()
                .then((response) => {
                  console.log(response.data)
                  refreshList()
                })
                .catch((e) => {
                  console.log(e)
                })
            },
          },
          {
            label: 'No',
            onClick: () => {
              return 0
            },
          },
        ],
      })
   
  }

  const findByNom = () => {
    UserDataService.findByNom(searchNom)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteUser = (rowIndex) => {
    const id = usersRef.current[rowIndex].id
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            UserDataService.remove(id)
              .then((response) => {
                navigate('/comptes')
                let newUsers = [...usersRef.current]
                newUsers.splice(rowIndex, 1)
                setUsers(newUsers)
              })
              .catch((e) => {
                console.log(e)
              })
          },
        },
        {
          label: 'No',
          onClick: () => {
            return 0
          },
        },
      ],
    })
  }

  const openUser = (rowIndex) => {
    const id = usersRef.current[rowIndex].id
    navigate('/editcomptes/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Civil',
        accessor: 'civil',
      },
      {
        Header: 'Nom',
        accessor: 'nom',
      },
      {
        Header: 'Prenom',
        accessor: 'prenom',
      },

      {
        Header: 'Cin',
        accessor: 'cin',
      },
      {
        Header: 'Tel',
        accessor: 'tel',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },

      {
        Header: 'Login',
        accessor: 'login',
      },

      {
        Header: 'Profil',
        accessor: 'profil',
      },
      {
        Header: 'Avatar',
        accessor: 'avatar',
      },

      {
        Header: 'Etat',
        accessor: 'etat',
        Cell: (props) => {
          return props.value === 0 ? 'disActivated' : 'Activated'
        },
      },

      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openUser(rowIdx)}
                className='bi bi-pencil-fill'
              ></button>

              <button
                onClick={() => deleteUser(rowIdx)}
                className='bi bi-trash-fill'
              ></button>
            </div>
          )
        },
      },
    ],
    []
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: users,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchNom}
            onChange={onChangeSearchNom}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={findByNom}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <button className='m-3 btn btn-sm btn-danger' onClick={removeAllUsers}>
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addcomptes'} className='m-3 btn btn-sm btn-primary'>
          New
        </Link>
      </div>
      <div className='col-md-12 list'>
        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table
                id='example2'
                className='table table-striped table-bordered'
                {...getTableProps()}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowUsers
