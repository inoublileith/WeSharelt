import React, { useState } from 'react'
import StockDataService from '../../services/stock.service'
const AddStock = () => {
  const initialStockState = {
    id: null,
    titre: '',
    description: '',
    quantite_total: '',
    date_ins: '2022-01-01',
    public: 0,
  }
  const [stock, setStock] = useState(initialStockState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setStock({ ...stock, [name]: value })
    console.log(stock)
  }

  const saveStock = () => {
    StockDataService.create(stock)
      .then((response) => {
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newStock = () => {
    setStock(initialStockState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newStock}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group'>
            <label htmlFor='titre'>Titre</label>
            <input
              type='text'
              className='form-control'
              id='titre'
              required
              value={stock.titre}
              onChange={handleInputChange}
              name='titre'
              placeholder='titre'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              className='form-control'
              id='description'
              required
              value={stock.description}
              onChange={handleInputChange}
              name='description'
              placeholder='description'
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
              value={stock.quantite_total}
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
              value={stock.date_ins}
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
              value={stock.public}
              onChange={handleInputChange}
              name='public'
            />
          </div>
          <button onClick={saveStock} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

export default AddStock