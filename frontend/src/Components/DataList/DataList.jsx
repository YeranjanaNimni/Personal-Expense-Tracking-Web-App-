import React, { useEffect, useState } from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiService from '../../Services/ApiService';
import Swal from "sweetalert2";

library.add(fas, fab);

const DataList = () => {

  let history = useHistory();

  const [expensesList, setExpensesList] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const routeChange = (path) => {
    history.push(path);
  }

  const onClickDelete = (id) => {
    Swal.fire({
      title: "",
      text: "Are you sure you want to delete?",
      showCancelButton: true,
      confirmButtonColor: "#de2222",
      cancelButtonColor: "#0d6efd",
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then(res => {
      if (res.value) {
        ApiService.delete("deleteOneExpense", id)
          .then(data => {
            console.log(data);
            window.location.reload(false);
          })
          .catch(err => console.log(err));
      }
    })
  }

  const onClickFilter = () => {
    let data = {startDate: startDate, endDate: endDate};
    ApiService.filter("getByDateRange", data)
    .then(data => setExpensesList(data.data))
    .catch(err => { throw err})
  }


  useEffect(() => {
    ApiService.get("getAllExpenses")
      .then(data => {
        setExpensesList(data.data);
      })
      .catch(err => console.log(err));

  }, [])

  return (
    <div>
      <div className='data-list-filters-cover'>
        <Row>
          <div className='sub-heading'>
            <h1>Listed Data</h1>
          </div>
        </Row>
        <Row>
          <Col>
            <div className='data-list-filter'>
              <div>Filter by Date </div>
              <div className='filters-cover'>
                <div className='filter'>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className='filter'>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <div className='filter'>
                  <button onClick={onClickFilter}> Filter </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='data-list-filter'>
              <div>Filter by Type </div>
              <div className='filters-cover'>
                <div className='filter'><input type="date" /></div>
                <div className='filter'><input type="date" /></div>
                <div className='filter filter-button'> <button> Filter </button></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => { routeChange({ pathname: "add-new", id: "0" }) }}>
            <FontAwesomeIcon icon="plus" color="white" />
            <label className='px-2'> Add New </label>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='table'>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(expensesList || []).map(item => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>{item.category}</td>
                    <td>
                      <div className='action-icons-wrapper'>
                        <div className='action-icon' onClick={() => { routeChange({ pathname: "add-new", id: item._id }) }}>
                          <FontAwesomeIcon icon="pencil" color="#0d6efd" />
                        </div>
                        <div className='action-icon' onClick={() => { onClickDelete(item._id) }}>
                          <FontAwesomeIcon icon="trash-can" color="red" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DataList