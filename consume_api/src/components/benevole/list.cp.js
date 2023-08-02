import React, { useState, useEffect, useMemo, useRef } from 'react'
import BenevoleDataService from '../../services/benevole.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
const ShowBenevoles = (props) => {
  
  const [benevoles, setBenevoles] = useState([])
  const [searchNom, setSearchNom] = useState('')
  const benevolesRef = useRef()
  benevolesRef.current = benevoles
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "WeShareIt - Benevoles";
  }, []);

  useEffect(() => {
    retrieveBenevoles()
  }, [])

  
  const onChangeSearchNom = (e) => {
    const searchNom = e.target.value
    setSearchNom(searchNom)
  }
  
  const retrieveBenevoles = () => {
    BenevoleDataService.getAll()
      .then((response) => {
        setBenevoles(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  
  const refreshList = () => {
    retrieveBenevoles()
  }
  
  const removeAllBenevoles = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            BenevoleDataService.deleteAll()
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
    BenevoleDataService.findByNom(searchNom)
      .then((response) => {
        setBenevoles(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
 
 
  const deleteBenevole = (rowIndex) => {
    const id = benevolesRef.current[rowIndex].id
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            BenevoleDataService.delete(id)
              .then((response) => {
                navigate('/benevoles')
                let newBenevoles = [...benevolesRef.current]
                newBenevoles.splice(rowIndex, 1)
                setBenevoles(newBenevoles)
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

  const openBenevole = (rowIndex) => {
    const id = benevolesRef.current[rowIndex].id
    navigate('/editBenevole/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Nom',
        accessor: 'nom',
      },
      {
        Header: 'Prenom',
        accessor: 'prenom',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Facebook',
        accessor: 'facebook',
      },
      {
        Header: 'Linkedin',
        accessor: 'linkedin',
      },
      {
        Header: 'Context',
        accessor: 'context',
      },
      {
        Header: 'Tel',
        accessor: 'tel',
      },
      {
        Header: 'Retenu',
        accessor: 'retenu',
        Cell: (props) => {
          return props.value === 1 ? 'Retenu' : 'Rejetee'
        },
      },
      {
        Header: 'Etat',
        accessor: 'etat',
        Cell: (props) => {
          return props.value === 0 ? 'Private' : 'Public'
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
                onClick={() => openBenevole(rowIdx)}
                className='bi bi-pencil-fill'
              ></button>

              <button
                onClick={() => deleteBenevole(rowIdx)}
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
      data: benevoles,
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
        <button
          className='m-3 btn btn-sm btn-danger'
          onClick={removeAllBenevoles}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addBenevole'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowBenevoles
