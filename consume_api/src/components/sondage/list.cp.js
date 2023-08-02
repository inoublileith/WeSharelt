import React, { useState, useEffect, useMemo, useRef } from "react";
import SondageDataService from "../../services/sondage.service";
import { Link, useNavigate } from "react-router-dom";
import { useTable } from "react-table";
const ShowSondages = (props) => {
  const [sondages, setSondages] = useState([]);
  const [searchQuestion, setSearchQuestion] = useState("");
  const sondagesRef = useRef();
  sondagesRef.current = sondages;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "WeShareIt - Sondages";
  }, []);

  useEffect(() => {
    retrieveSondages();
  }, []);

  const onChangeSearchQuestion = (e) => {
    const searchQuestion = e.target.value;
    setSearchQuestion(searchQuestion);
  };

  const retrieveSondages = () => {
    SondageDataService.getAll()
      .then((response) => {
        setSondages(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveSondages();
  };

  const removeAllSondages = () => {
    SondageDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByQuestion = () => {
    SondageDataService.findByQuestion(searchQuestion)
      .then((response) => {
        setSondages(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteSondage = (rowIndex) => {
    const id = sondagesRef.current[rowIndex].id;
    SondageDataService.delete(id)
      .then((response) => {
        navigate("/sondages");
        let newSondages = [...sondagesRef.current];
        newSondages.splice(rowIndex, 1);
        setSondages(newSondages);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openSondage = (rowIndex) => {
    const id = sondagesRef.current[rowIndex].id;
    navigate("/editSondage/" + id);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Question",
        accessor: "question",
      },
      {
        Header: "Prposition1",
        accessor: "proposition1",
      },
      {
        Header: "Prposition2",
        accessor: "proposition2",
      },
      {
        Header: "Prposition3",
        accessor: "proposition3",
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
                onClick={() => openSondage(rowIdx)}
                className="bi bi-pencil-fill"
              ></button>

              <button
                onClick={() => deleteSondage(rowIdx)}
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
      data: sondages,
    });
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by question"
            value={searchQuestion}
            onChange={onChangeSearchQuestion}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByQuestion}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllSondages}
        >
          Remove All
        </button>
      </div>{" "}
      <div className="col-md-6">
        <Link to={"/addSondage"} className="m-3 btn btn-sm btn-primary">
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
export default ShowSondages;
