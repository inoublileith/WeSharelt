import React, { useState, useEffect } from 'react'
import DemandeDataService from '../../services/demande.service'
import StockDataService from "../../services/stock.service";

const AddDemande = () => {
  const [stocks, setStocks] = useState([]);
  const retrieveStocks = () => {
    StockDataService.getAll()
      .then((response) => {
        setStocks(response.data);
        console.log(stocks);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveStocks();
  }, []);
  const initialDemandeState = {
    id: null,
    type: '',
    qte: '',
    nb_personne: '',
    date_de: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01',
    idstock: 1,
  }
  const [demande, setDemande] = useState(
    initialDemandeState
  )
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setDemande({ ...demande, [name]: value })
  }

  const saveDemande = () => {
    var data = {
      type: demande.type,
      qte: demande.qte,
      nb_personne: demande.nb_personne,
      date_de: demande.date_de,
      retenu: demande.retenu,
      etat: demande.etat,
      date_ins: demande.date_ins,
      idstock: demande.idstock,

    }
    DemandeDataService.create(data)
      .then((response) => {
        setDemande({
          id: response.data.id,
          type: response.data.type,
          qte: response.data.qte,
          nb_personne: response.data.nb_personne,
          retenu: response.data.retenu,
          etat: response.data.etat,
          date_ins: response.data.date_ins,
          idstock: response.data.idstock,

        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newDemande = () => {
    setDemande(initialDemandeState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newDemande}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='form_group'>
            <label htmlFor='type'>Type</label>
            <input
              type='text'
              className='form-control'
              id='type'
              required
              value={demande.type}
              onChange={handleInputChange}
              name='type'
              placeholder='type'
            />
          </div>
          <div className='form_group'>
            <label htmlFor='qte' >
              Quantite
            </label>
            <input
              type='text'
              className='form-control'
              id='qte'
              required
              onChange={handleInputChange}
              name='qte'
             placeholder='quantite'
              value={demande.qte}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='nb_personne'>nomber de personne</label>
            <input
              type='text'
              className='form-control'
              id='nb_personne'
              required
              value={demande.nb_personne}
              onChange={handleInputChange}
              name='nb_personne'
              placeholder='nombre de personne'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='date_de'>date de demande</label>
            <input
              type='date'
              className='form-control'
              id='date_de'
              required
              onChange={handleInputChange}
              value={demande.date_de}
              name='date_de'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='retenu'>Retenu</label>
            <input
              type='text'
              className='form-control'
              id='retenu'
              required
              value={demande.retenu}
              onChange={handleInputChange}
              name='retenu'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='date_ins'>Date d'insertion </label>
            <input
              type='date'
              className='form-control'
              id='date_ins'
              required
              value={demande.date_ins}
              onChange={handleInputChange}
              name='date_ins'
            />
          </div>
          <div className="form-group">
            <label htmlFor="etat">Stock</label>
            <select
              className="form-control"
              name="idstock"
              onChange={handleInputChange}
            >
              {stocks.map((row, i) => {
                return <option value={row.id}>{row.titre}</option>;
              })}
            </select>
          </div>
          <button onClick={saveDemande} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddDemande
