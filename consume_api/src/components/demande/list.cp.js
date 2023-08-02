import React, { useState, useEffect, useMemo, useRef } from "react";
import DemandeDataService from "../../services/demande.service";
import { Link, useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const ShowDemandes = (props) => {
  const [demandes, setDemandes] = useState([]);
  const [searchType, setSearchType] = useState("");
  const demandesRef = useRef();
  demandesRef.current = demandes;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "WeShareIt - Demandes";
  }, []);

  useEffect(() => {
    retrieveDemandes();
  }, []);

  const onChangeSearchType = (e) => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };

  const retrieveDemandes = () => {
    DemandeDataService.getAll()
      .then((response) => {
        setDemandes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateDemande = (rowIdx) => {
    const id = demandesRef.current[rowIdx].id;
    DemandeDataService.updateDemande(id)
      .then((response) => {
        console.log(response.data);
        window.location.reload(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveDemandes();
  };

  const removeAllDemandes = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            DemandeDataService.deleteAll()
              .then((response) => {
                console.log(response.data);
                refreshList();
              })
              .catch((e) => {
                console.log(e);
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            return 0;
          },
        },
      ],
    });
  };

  const findByType = () => {
    DemandeDataService.findByType(searchType)
      .then((response) => {
        setDemandes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteDemande = (rowIndex) => {
    const id = demandesRef.current[rowIndex].id;
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            DemandeDataService.delete(id)
              .then((response) => {
                navigate("/demandes");
                let newDemandes = [...demandesRef.current];
                newDemandes.splice(rowIndex, 1);
                setDemandes(newDemandes);
              })
              .catch((e) => {
                console.log(e);
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            return 0;
          },
        },
      ],
    });
  };

  const openDemande = (rowIndex) => {
    const id = demandesRef.current[rowIndex].id;
    navigate("/editDemande/" + id);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Quantite",
        accessor: "qte",
      },
      {
        Header: "Nombre de personne",
        accessor: "nb_personne",
      },
      {
        Header: "Date de demande",
        accessor: "date_de",
      },

      {
        Header: "Etat",
        accessor: "etat",
        Cell: (props) => {
          return props.value == 0 ? "En attente" : "Validé";
        },
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <button
                onClick={() => openDemande(rowIdx)}
                className="bi bi-pencil-fill"
              ></button>

              <button
                onClick={() => deleteDemande(rowIdx)}
                className="bi bi-trash-fill"
              ></button>

              <button
                onClick={() => updateDemande(rowIdx)}
                className="fadeIn animated bx bx-check"
              ></button>
            </div>
          );
        },
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: demandes,
    });
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by type"
            value={searchType}
            onChange={onChangeSearchType}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByType}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllDemandes}
        >
          Remove All
        </button>
      </div>{" "}
      <div className="col-md-6">
        <Link to={"/addDemande"} className="m-3 btn btn-sm btn-primary">
          New
        </Link>
      </div>
      <div className="col-md-12 list">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table
                id="example2"
                className="table table-striped table-bordered"
                {...getTableProps()}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
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
  );
};
export default ShowDemandes;
