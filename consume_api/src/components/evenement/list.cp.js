import React, { useState, useEffect, useMemo, useRef } from 'react'
import EvenementDataService from '../../services/evenement.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
const ShowEvenements = (props) => {
 
  const [evenements, setEvenements] = useState([])
  const [searchTitre, setSearchTitre] = useState('')
  const evenementsRef = useRef()
  evenementsRef.current = evenements
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "WeShareIt - Evenements";
  }, []);
 
  useEffect(() => {
    retrieveEvenements()
  }, [])
  
  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value
    setSearchTitre(searchTitre)
  }
  
  const retrieveEvenements = () => {
    EvenementDataService.getAll()
      .then((response) => {
        setEvenements(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  
  const refreshList = () => {
    retrieveEvenements()
  }
  
  const removeAllEvenements = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            EvenementDataService.deleteAll()
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
  
  const findByTitre = () => {
    EvenementDataService.findByTitre(searchTitre)
      .then((response) => {
        setEvenements(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  
  const deleteEvenement = (rowIndex) => {
    const id = evenementsRef.current[rowIndex].id
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            EvenementDataService.delete(id)
              .then((response) => {
                navigate('/evenements')
                let newEvenements = [...evenementsRef.current]
                newEvenements.splice(rowIndex, 1)
                setEvenements(newEvenements)
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


  const openEvenement = (rowIndex) => {
    const id = evenementsRef.current[rowIndex].id
    navigate('/editEvenement/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Titre',
        accessor: 'titre',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Adresse',
        accessor: 'adresse',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Public',
        accessor: 'public',
      },
      {
        Header: 'Image',
        accessor: 'image',
      },
     
     
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openEvenement(rowIdx)}
                className='bi bi-pencil-fill'
              ></button>

              <button
                onClick={() => deleteEvenement(rowIdx)}
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
      data: evenements,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchTitre}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchTitre}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              // onClick={this.searchTitre}
              onClick={findByTitre}
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
          onClick={removeAllEvenements}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addEvenement'} className='m-3 btn btn-sm btn-primary'>
          New
        </Link>
      </div>
      <div className='col-md-12 list'>
        {/* <ul className='list-group'>
            {recommandations &&
              recommandations.map((recommandation, index) => (
                <li
                  className={
                    'list-group-item ' +
                    (index === currentIndex ? 'active' : '')
                  }
                  onClick={() =>
                    this.setActiveRecommandation(recommandation, index)
                  }
                  key={index}
                >
                  {recommandation.titre}
                </li>
              ))}
          </ul> */}
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
export default ShowEvenements
