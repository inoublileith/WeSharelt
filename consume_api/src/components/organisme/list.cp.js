import React, { useState, useEffect, useMemo, useRef } from "react";
import OrganismeDataService from "../../services/organisme.service";
import { Link, useNavigate } from "react-router-dom";
import { useTable } from "react-table";
const ShowOrganismes = (props) => {
  const [organismes, setOrganismes] = useState([]);
  const [searchNom, setSearchNom] = useState("");
  const organismesRef = useRef();
  organismesRef.current = organismes;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "WeShareIt - Organismes";
  }, []);

  useEffect(() => {
    retrieveOrganismes();
  }, []);

  const onChangeSearchNom = (e) => {
    const searchNom = e.target.value;
    setSearchNom(searchNom);
  };

  const retrieveOrganismes = () => {
    OrganismeDataService.getAll()
      .then((response) => {
        setOrganismes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveOrganismes();
  };

  const removeAllOrganismes = () => {
    OrganismeDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByNom = () => {
    OrganismeDataService.findByNom(searchNom)
      .then((response) => {
        setOrganismes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteOrganisme = (rowIndex) => {
    const id = organismesRef.current[rowIndex].id;
    OrganismeDataService.delete(id)
      .then((response) => {
        navigate("/organismes");
        let newOrganismes = [...organismesRef.current];
        newOrganismes.splice(rowIndex, 1);
        setOrganismes(newOrganismes);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openOrganisme = (rowIndex) => {
    const id = organismesRef.current[rowIndex].id;
    navigate("/editOrganisme/" + id);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Nom",
        accessor: "nom",
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
        Header: "Mission",
        accessor: "mission",
      },
      {
        Header: "Logo",
        accessor: "logo",
      },
      {
        Header: "Date_fondation",
        accessor: "date_fondation",
      },
      {
        Header: "President",
        accessor: "president",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Adresse",
        accessor: "adresse",
      },
      {
        Header: "Tel",
        accessor: "tel",
      },

      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <button
                onClick={() => openOrganisme(rowIdx)}
                className="bi bi-pencil-fill"
              ></button>

              <button
                onClick={() => deleteOrganisme(rowIdx)}
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
      data: organismes,
    });
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by nom"
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
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllOrganismes}
        >
          Remove All
        </button>
      </div>{" "}
      <div className="col-md-6">
        <Link to={"/addOrganisme"} className="m-3 btn btn-sm btn-primary">
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
export default ShowOrganismes;
