import React, { useState, useEffect, useMemo, useRef } from "react";
import DonDataService from "../../services/don.service";
import { Link, useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { confirmAlert } from "react-confirm-alert";

const ShowDons = (props) => {
  const [dons, setDons] = useState([]);
  const [searchType, setSearchType] = useState("");
  const donsRef = useRef();
  donsRef.current = dons;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "WeShareIt - Dons";
  }, []);

  useEffect(() => {
    retrieveDons();
  }, []);

  const onChangeSearchType = (e) => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };

  const retrieveDons = () => {
    DonDataService.getAll()
      .then((response) => {
        setDons(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveDons();
  };

  const removeAllDons = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            DonDataService.removeAll()
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
    DonDataService.findByType(searchType)
      .then((response) => {
        setDons(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteDon = (rowIndex) => {
    const id = donsRef.current[rowIndex].id;
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            DonDataService.delete(id)
              .then((response) => {
                navigate("/dons");
                let newDons = [...donsRef.current];
                newDons.splice(rowIndex, 1);
                setDons(newDons);
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

  const updateDon = (rowIndex) => {
    const id = donsRef.current[rowIndex].id;
    DonDataService.validerDon(id)
      .then((response) => {
        console.log(response.data);
        window.location.reload(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openDon = (rowIndex) => {
    const id = donsRef.current[rowIndex].id;
    navigate("/editDon/" + id);
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
        Header: "Date de livraison",
        accessor: "date_livraison",
      },
      {
        Header: "Date de validation",
        accessor: "date_validation",
      },
      {
        Header: "Etat",
        accessor: "etat",
        Cell: (props) => {
          return props.value === 0 ? "En attente" : "Validé";
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
                onClick={() => openDon(rowIdx)}
                className="bi bi-pencil-fill"
              ></button>

              <button
                onClick={() => deleteDon(rowIdx)}
                className="bi bi-trash-fill"
              ></button>

              <button
                onClick={() => updateDon(rowIdx)}
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
      data: dons,
    });
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by sujet"
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
        <button className="m-3 btn btn-sm btn-danger" onClick={removeAllDons}>
          Remove All
        </button>
      </div>{" "}
      <div className="col-md-6">
        <Link to={"/addDon"} className="m-3 btn btn-sm btn-primary">
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
export default ShowDons;
