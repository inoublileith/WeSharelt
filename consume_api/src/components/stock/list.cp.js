import React, { useState, useEffect, useMemo, useRef } from 'react'
import StockDataService from '../../services/stock.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
const ShowStocks = (props) => {
  
  const [stocks, setStocks] = useState([])
  const [searchTitre, setSearchTitre] = useState('')
  const stocksRef = useRef()
  stocksRef.current = stocks
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "WeShareIt - Stocks";
  }, []);
  
  useEffect(() => {
    retrieveStocks()
  }, [])
  
  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value
    setSearchTitre(searchTitre)
  }
  
  const retrieveStocks = () => {
    StockDataService.getAll()
      .then((response) => {
        setStocks(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  
  const refreshList = () => {
    retrieveStocks()
    console.log(stocks)
  }
 
  const removeAllStocks = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            StockDataService.deleteAll()
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
    StockDataService.findByTitre(searchTitre)
      .then((response) => {
        setStocks(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
 
  const deleteStock = (rowIndex) => {
    const id = stocksRef.current[rowIndex].id
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            StockDataService.delete(id)
              .then((response) => {
                navigate('/stocks')
                let newStocks = [...stocksRef.current]
                newStocks.splice(rowIndex, 1)
                setStocks(newStocks)
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

  const openStock = (rowIndex) => {
    const id = stocksRef.current[rowIndex].id
    navigate('/editStock/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Titre',
        accessor: 'titre',
      },
    
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Quantite_total',
        accessor: 'quantite_total',
      },
      {
        Header: 'Public',
        accessor: 'public',
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
                onClick={() => openStock(rowIdx)}
                className='bi bi-pencil-fill'
              ></button>

              <button
                onClick={() => deleteStock(rowIdx)}
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
      data: stocks,
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
          onClick={removeAllStocks}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addStock'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowStocks
