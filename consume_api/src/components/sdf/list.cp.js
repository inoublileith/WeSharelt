import React, { useState, useEffect, useMemo, useRef } from "react";
import SdfDataService from "../../services/sdf.service";
import { Link, useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const ShowSdfs = (props) => {
  const [sdfs, setSdfs] = useState([]);
  const [searchNom, setSearchNom] = useState("");
  const sdfsRef = useRef();
  sdfsRef.current = sdfs;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "WeShareIt - SDFs";
  }, []);

  useEffect(() => {
    retrieveSdfs();
  }, []);

  const onChangeSearchNom = (e) => {
    const searchNom = e.target.value;
    setSearchNom(searchNom);
  };

  const retrieveSdfs = () => {
    SdfDataService.getAll()
      .then((response) => {
        setSdfs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveSdfs();
  };

  const removeAllSdfs = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            SdfDataService.deleteAll()
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

  const findByNom = () => {
    SdfDataService.findByNom(searchNom)
      .then((response) => {
        setSdfs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteSdf = (rowIndex) => {
    const id = sdfsRef.current[rowIndex].id;
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            SdfDataService.delete(id)
              .then((response) => {
                navigate("/sdfs");
                let newSdfs = [...sdfsRef.current];
                newSdfs.splice(rowIndex, 1);
                setSdfs(newSdfs);
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

  const openSdf = (rowIndex) => {
    const id = sdfsRef.current[rowIndex].id;
    navigate("/editSdf/" + id);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Nom",
        accessor: "nom",
      },
      {
        Header: "Prenom",
        accessor: "prenom",
      },
      {
        Header: "Genre",
        accessor: "genre",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Cas_social",
        accessor: "cas_social",
      },
      {
        Header: "Handicape",
        accessor: "handicape",
      },
      {
        Header: "Maladie",
        accessor: "maladie",
      },
      {
        Header: "Adresse",
        accessor: "adresse",
      },
      {
        Header: "Local",
        accessor: "local",
      },

      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <button
                onClick={() => openSdf(rowIdx)}
                className="bi bi-pencil-fill"
              ></button>

              <button
                onClick={() => deleteSdf(rowIdx)}
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
      data: sdfs,
    });
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by titre"
            value={searchNom}
            onChange={onChangeSearchNom}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByNom}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <button className="m-3 btn btn-sm btn-danger" onClick={removeAllSdfs}>
          Remove All
        </button>
      </div>{" "}
      <div className="col-md-6">
        <Link to={"/addSdf"} className="m-3 btn btn-sm btn-primary">
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
export default ShowSdfs;
