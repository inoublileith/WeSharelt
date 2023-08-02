import React, { useState, useEffect } from "react";
import DonDataService from "../../services/don.service";
import StockDataService from "../../services/stock.service";
import { useSelector } from "react-redux";
const AddDon = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
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

  const initialDonState = {
    id: null,
    type: "",
    qte: "",
    date_livraison: "",
    date_validation: "",
    etat: 0,
    idstock: 1,
    iduser: 1,
  };
  const [don, setDon] = useState(initialDonState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDon({ ...don, [name]: value });
    console.log(don);
  };

  const saveDon = () => {
    var data = {
      type: don.type,
      qte: don.qte,
      date_livraison: don.date_livraison,
      date_validation: don.date_validation,
      etat: don.etat,
      idstock: don.idstock,
      iduser: currentUser.id,
    };
    console.log(data);
    DonDataService.create(data)
      .then((response) => {
        setDon({
          id: response.data.id,
          type: response.data.type,
          qte: response.data.qte,
          date_livraison: response.data.date_livraison,
          date_validation: response.data.date_validation,
          etat: response.data.etat,
          idstock: response.data.idstock,
          iduser: response.data.iduser,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  };

  const newDon = () => {
    setDon(initialDonState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newDon}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className="form_group">
            <label htmlFor="type">Type </label>
            <input
              type="text"
              className="form-control"
              id="type"
              required
              value={don.type}
              onChange={handleInputChange}
              name="type"
              placeholder="type"
            />
          </div>
          <div className="form_group">
            <label htmlFor="qte">Quantite</label>
            <input
              type="text"
              className="form-control"
              id="qte"
              required
              onChange={handleInputChange}
              name="qte"
              placeholder="quantite"
              value={don.qte}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date_livraison">Date_livraison</label>
            <input
              type="date"
              className="form-control"
              id="date_livraison"
              required
              value={don.date_livraison}
              onChange={handleInputChange}
              name="date_livraison"
              placeholder="date_livraison"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date_validation">Date_validation</label>
            <input
              type="date"
              className="form-control"
              id="date_validation"
              required
              onChange={handleInputChange}
              value={don.date_validation}
              name="date_validation"
            />
          </div>
          <div className="form-group">
            <label htmlFor="etat">Etat</label>
            <input
              type="text"
              className="form-control"
              id="etat"
              required
              value={don.etat}
              onChange={handleInputChange}
              name="etat"
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
          <button onClick={saveDon} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddDon;
