import React, { useState, useEffect, PureComponent } from "react";
import UserService from "../services/user.service";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BoardUser = () => {
  const [content, setContent] = useState("");
  const [dons, setDons] = useState([]);

  useEffect(() => {
    document.title = "WeShareIt - Statistiques";
  }, []);

  useEffect(() => {
    UserService.getStats().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  const retrieveStats = () => {
    UserService.getDonsStats()
      .then(
        (response) => {
          setDons(response);
          setJanvier(response.jan.data.rows.length);
          setFevrier(response.fev.data.rows.length);
          setMars(response.mar.data.rows.length);
          setAvril(response.avr.data.rows.length);
          setMay(response.may.data.rows.length);
          setJuin(response.jui.data.rows.length);
          setJuillet(response.juil.data.rows.length);
          setAout(response.aout.data.rows.length);
          setSeptembre(response.sep.data.rows.length);
          setOctobre(response.oct.data.rows.length);
          setNovembre(response.nov.data.rows.length);
          setDecembre(response.dec.data.rows.length);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch(console.log("en cours..."));
  };

  const [janvier, setJanvier] = useState([]);
  const [fevrier, setFevrier] = useState([]);
  const [mars, setMars] = useState([]);
  const [avril, setAvril] = useState([]);
  const [may, setMay] = useState([]);
  const [juin, setJuin] = useState([]);
  const [juillet, setJuillet] = useState([]);
  const [aout, setAout] = useState([]);
  const [septembre, setSeptembre] = useState([]);
  const [octobre, setOctobre] = useState([]);
  const [novembre, setNovembre] = useState([]);
  const [decembre, setDecembre] = useState([]);

  useEffect(() => {
    retrieveStats(content);
  }, []);

  const data = [
    {
      name: "Jan",
      Dons: janvier,
    },
    {
      name: "Fev",
      Dons: fevrier,
    },
    {
      name: "Mars",
      Dons: mars,
    },
    {
      name: "Avr",
      Dons: avril,
    },
    {
      name: "Mai",
      Dons: may,
    },
    {
      name: "Juin",
      Dons: juin,
    },
    {
      name: "Juil",
      Dons: juillet,
    },
    {
      name: "Aout",
      Dons: aout,
    },
    {
      name: "Sept",
      Dons: septembre,
    },
    {
      name: "Oct",
      Dons: octobre,
    },
    {
      name: "Nov",
      Dons: novembre,
    },
    {
      name: "Dec",
      Dons: decembre,
    },
  ];

  return (
    <div className="container">
      <input type="hidden" id="jan" value={janvier.count || 0} />
      <input type="hidden" id="fev" value={fevrier.count || 0} />
      <input type="hidden" id="mars" value={mars.count || 0} />
      <input type="hidden" id="avr" value={avril.count || 0} />
      <input type="hidden" id="mai" value="" />
      <input type="hidden" id="juin" value={juin.count || 0} />
      <input type="hidden" id="juil" value={juillet.count || 0} />
      <input type="hidden" id="aout" value={aout.count || 0} />
      <input type="hidden" id="sep" value={septembre.count || 0} />
      <input type="hidden" id="oct" value={octobre.count || 0} />
      <input type="hidden" id="nov" value={novembre.count || 0} />
      <input type="hidden" id="dec" value={decembre.count || 0} />
      <header className="jumbotron">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Associations : </p>
                    <h4 className="mb-0 text-primary">
                      {content.associations}
                    </h4>
                  </div>
                  <div className="ms-auto fs-2 text-primary">
                    <i className="bx bx-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Benevoles : </p>
                    <h4 className="mb-0 text-primary">{content.benevoles}</h4>
                  </div>
                  <div className="ms-auto fs-2 text-primary">
                    <i className="bx bx-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Demandes : </p>
                    <h4 className="mb-0 text-primary">{content.demandes}</h4>
                  </div>
                  <div className="ms-auto fs-2 text-primary">
                    <i className="bx bx-list-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Dons : </p>
                    <h4 className="mb-0 text-primary">{content.dons}</h4>
                  </div>
                  <div className="ms-auto fs-2 text-primary">
                    <i className="bx bx-donate-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Evenements : </p>
                    <h4 className="mb-0 text-primary">{content.evenements}</h4>
                  </div>
                  <div className="ms-auto fs-2 text-primary">
                    <i className="bx bx-calendar-event"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Organismes : </p>
                    <h4 className="mb-0 text-primary">
                      {content.organisations}
                    </h4>
                  </div>
                  <div className="ms-auto fs-2 text-primary">
                    <i className="bx bx-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">SDFs : </p>
                    <h4 className="mb-0 text-primary">{content.sdfs}</h4>
                  </div>
                  <div className="ms-auto fs-2 text-primary">
                    <i className="bx bx-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Stocks : </p>
                    <h4 className="mb-0 text-primary">{content.stocks}</h4>
                  </div>
                  <div className="ms-auto fs-2 text-primary">
                    <i className="bx bx-archive"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <LineChart
            width={1250}
            height={350}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Dons"
              stroke="#2663e5"
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </div>
      </header>
    </div>
  );
};
export default BoardUser;
