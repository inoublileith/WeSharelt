import React, { useState, useEffect, useMemo, useRef } from "react";
import RecommandationDataService from "../../services/recommandation.service";
import { Link, useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const ShowRecommandations = (props) => {
  const [recommandations, setRecommandations] = useState([]);
  const [searchTitre, setSearchTitre] = useState("");
  const recommandationsRef = useRef();
  recommandationsRef.current = recommandations;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "WeShareIt - Recommandations";
  }, []);

  useEffect(() => {
    retrieveRecommandations();
  }, []);

  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value;
    setSearchTitre(searchTitre);
  };

  const retrieveRecommandations = () => {
    RecommandationDataService.getAll()
      .then((response) => {
        setRecommandations(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveRecommandations();
  };

  const removeAllRecommandations = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            RecommandationDataService.deleteAll()
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
  const findByTitre = () => {
    RecommandationDataService.findByTitre(searchTitre)
      .then((response) => {
        setRecommandations(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteRecommandation = (rowIndex) => {
    const id = recommandationsRef.current[rowIndex].id;
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            RecommandationDataService.delete(id)
              .then((response) => {
                navigate("/recommandations");
                let newRecommandations = [...recommandationsRef.current];
                newRecommandations.splice(rowIndex, 1);
                setRecommandations(newRecommandations);
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

  const openRecommandation = (rowIndex) => {
    const id = recommandationsRef.current[rowIndex].id;
    navigate("/editRecommandation/" + id);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Titre",
        accessor: "titre",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Domaine",
        accessor: "domaine",
      },
      {
        Header: "specification",
        accessor: "specification",
      },
      {
        Header: "Retenu",
        accessor: "retenu",
        Cell: (props) => {
          return props.value === 1 ? "Retenu" : "Rejetee";
        },
      },
      {
        Header: "Etat",
        accessor: "etat",
        Cell: (props) => {
          return props.value === 0 ? "Private" : "Public";
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
                onClick={() => openRecommandation(rowIdx)}
                className="bi bi-pencil-fill"
              ></button>

              <button
                onClick={() => deleteRecommandation(rowIdx)}
                className="bi bi-trash-fill"
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
      data: recommandations,
    });
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by titre"
            value={searchTitre}
            onChange={onChangeSearchTitre}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitre}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllRecommandations}
        >
          Remove All
        </button>
      </div>{" "}
      <div className="col-md-6">
        <Link to={"/addRecommandation"} className="m-3 btn btn-sm btn-primary">
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
export default ShowRecommandations;
