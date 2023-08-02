import React, { useState, useEffect, useMemo, useRef } from 'react'
import LivraisonDataService from '../../services/livraison.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
const ShowLivraisons = (props) => {
  
  const [livraisons, setLivraisons] = useState([])
  const [searchType, setSearchType] = useState('')
  const livraisonsRef = useRef()
  livraisonsRef.current = livraisons
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "WeShareIt - Livraisons";
  }, []);
 
  useEffect(() => {
    retrieveLivraisons()
  }, [])
  
  const onChangeSearchType = (e) => {
    const searchType = e.target.value
    setSearchType(searchType)
  }
  
  const retrieveLivraisons = () => {
    LivraisonDataService.getAll()
      .then((response) => {
        setLivraisons(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  
 
  const refreshList = () => {
    retrieveLivraisons()
  }
  
  
  const removeAllLivraisons = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            LivraisonDataService.deleteAll()
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
 
  const findByType = () => {
    LivraisonDataService.findByType(searchType)
      .then((response) => {
        setLivraisons(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
 
  
  const deleteLivraison = (rowIndex) => {
    const id = livraisonsRef.current[rowIndex].id
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            LivraisonDataService.delete(id)
              .then((response) => {
                navigate('/livraisons')
                let newLivraisons = [...livraisonsRef.current]
                newLivraisons.splice(rowIndex, 1)
                setLivraisons(newLivraisons)
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


  const openLivraison = (rowIndex) => {
    const id = livraisonsRef.current[rowIndex].id
    navigate('/editLivraison/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Type',
        accessor: 'type',
      },
     
      {
        Header: 'Date_liv',
        accessor: 'date_liv',
      },
      {
        Header: 'Etat_liv',
        accessor: 'etat_liv',
      },

      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openLivraison(rowIdx)}
                className='bi bi-pencil-fill'
              ></button>

              <button
                onClick={() => deleteLivraison(rowIdx)}
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
      data: livraisons,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by type'
            value={searchType}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchType}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              // onClick={this.searchTitre}
              onClick={findByType}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* <div className='col-md-6'> */}
      <div className='col-md-6'>
        <button
          className='m-3 btn btn-sm btn-danger'
          onClick={removeAllLivraisons}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addLivraison'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowLivraisons
