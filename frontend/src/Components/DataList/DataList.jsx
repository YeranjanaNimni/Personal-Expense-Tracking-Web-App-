import React from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

const DataList = () => {

  let history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  }

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
                <div className='filter'><input type="date" /></div>
                <div className='filter'><input type="date" /></div>
                <div className='filter'> <button> Submit </button></div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='data-list-filter'>
              <div>Filter by Type </div>
              <div className='filters-cover'>
                <div className='filter'><input type="date" /></div>
                <div className='filter'><input type="date" /></div>
                <div className='filter filter-button'> <button> Submit </button></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => { routeChange("add-new") }}>
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
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    <div className='action-icons-wrapper'>
                      <div className='action-icon' >
                        <FontAwesomeIcon icon="pencil" color="blue" />
                      </div>
                      <div className='action-icon'>
                        <FontAwesomeIcon icon="trash-can" color="red" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DataList