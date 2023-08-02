import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StockDataService from '../../services/stock.service'
const EditStock = (props) => {
  let { id } = useParams()
  const initialStockState = {
    id: null,
    titre: '',
    libile: '',
    description: '',
    quantite_total: '',
    date_ins: '2022-01-01',
    public: 0,
  }
  const [currentStock, setCurrentStock] = useState(
    initialStockState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getStock = (id) => {
    StockDataService.get(id)
      .then((response) => {
        setCurrentStock(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getStock(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentStock({ ...currentStock, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentStock.id,
      titre: currentStock.titre,
      libile: currentStock.libile,
      description: currentStock.description,
      quantite_total: currentStock.quantite_total,
      date_ins: currentStock.date_ins,
      public: status,
    }
    StockDataService.update(currentStock.id, data)
      .then((response) => {
        setCurrentStock({ ...currentStock, public: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateStock = () => {
    StockDataService.update(
      currentStock.id,
      currentStock
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The stock was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentStock ? (
        <div className='edit-form'>
          <h4>Stock</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='titre'>Titre</label>
              <input
                type='text'
                className='form-control'
                id='titre'
                value={currentStock.titre}
                onChange={handleInputChange}
                name='titre'
              />
            </div>
           
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                className='form-control'
                id='description'
                value={currentStock.description}
                onChange={handleInputChange}
                name='description'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='quantite_total'>Quantite_total</label>
              <input
                type='text'
                className='form-control'
                id='quantite_total'
                required
                onChange={handleInputChange}
                value={currentStock.quantite_total}
                name='quantite_total'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date_ins'>Date</label>
              <input
                type='date'
                className='form-control'
                id='date_ins'
                required
                value={currentStock.date_ins}
                onChange={handleInputChange}
                name='date_ins'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='public'>Public</label>
              <input
                type='text'
                className='form-control'
                id='public'
                required
                value={currentStock.public}
                onChange={handleInputChange}
                name='public'
              />
            </div>

            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentStock.public === 1 ? 'Published' : 'Pending'}
            </div>
          </form>
          {currentStock.public === 1 ? (
            <button
              className='m-3 btn btn-sm btn-danger'
              onClick={() => updatePublished(0)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className='m-3 btn btn-sm btn-warning'
              onClick={() => updatePublished(1)}
            >
              Publish
            </button>
          )}

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateStock}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  )
}
export default EditStock
