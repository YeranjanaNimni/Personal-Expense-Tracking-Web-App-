import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import ApiService from '../../Services/ApiService';
import { useHistory } from "react-router-dom";

const ExpensiveForm = (history) => {

      let historyRoute = useHistory();

      const [name, setName] = useState("");
      const [date, setDate] = useState("");
      const [amount, setAmount] = useState("");
      const [category, setCategory] = useState("");
      const [edit, setEdit] = useState(null);
      const [expenseId, setExpenseId] = useState("");
      const [subHeader, setSubHeader] = useState("")

      const routeChange = (path) => {
            historyRoute.push(path);
      }

      const onFormSubmit = e => {
            e.preventDefault();
            let formData = {
                  name: name,
                  date: date,
                  amount: amount,
                  category: category
            }

            if (edit) {
                  ApiService.put("updateOneExpense", expenseId, formData)
                        .then(data => console.log(data))
                        .catch(err => { throw err })
            } else {
                  ApiService.post("add-expense", formData)
                        .then(data => console.log(data))
                        .catch(err => { throw err })
            }

            routeChange("/data-list");
            setName(""); setDate(""); setAmount(""); setCategory("");

      }

      useEffect(() => {
            setExpenseId(history.location.id);

            //Check whether given request is add new or edit
            if (history.location.id === "0") {
                  setEdit(false);
                  setSubHeader("Add Expense")
            } else {
                  setSubHeader("Edit Expense")
                  ApiService.getOne("getOneExpense", history.location.id)
                        .then(data => {
                              let editExpenseData = data.data;
                              setName(editExpenseData.name);
                              setDate(editExpenseData.date);
                              setAmount(editExpenseData.amount);
                              setCategory(editExpenseData.category);

                        })
                        .catch(err => { throw err })
                  setEdit(true);
            }
      }, [])

      return (
            <div>
                  <Row>
                        <Col>
                              <div className="sub-heading">
                                    <h1> {subHeader} </h1>
                              </div>
                        </Col>
                  </Row>
                  <Row>
                        <Col>
                              <div className='form-wrapper'>
                                    <div className='form'>
                                          <Form onSubmit={onFormSubmit}>
                                                <Row>
                                                      <Col>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                  <Form.Label>Name</Form.Label>
                                                                  <Form.Control
                                                                        type="text"
                                                                        placeholder="Name"
                                                                        name="name"
                                                                        value={name}
                                                                        onChange={({ target: { value } }) => setName(value)}
                                                                  />
                                                            </Form.Group>
                                                      </Col>
                                                </Row>
                                                <Row>
                                                      <Col>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                  <Form.Label>Date</Form.Label>
                                                                  <Form.Control
                                                                        type="date"
                                                                        placeholder="Name"
                                                                        value={date}
                                                                        onChange={(e) => setDate(e.target.value)}
                                                                  />
                                                            </Form.Group>
                                                      </Col>
                                                </Row>
                                                <Row>
                                                      <Col>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                  <Form.Label>Amount</Form.Label>
                                                                  <Form.Control
                                                                        type="number"
                                                                        placeholder="Amount"
                                                                        value={amount}
                                                                        onChange={(e) => setAmount(e.target.value)}
                                                                  />
                                                            </Form.Group>
                                                      </Col>
                                                </Row>
                                                <Row>
                                                      <Col>
                                                            <Form.Label>Category</Form.Label>
                                                            <Form.Select
                                                                  aria-label="Type"
                                                                  onChange={(e) => setCategory(e.target.value)}
                                                                  value={category}
                                                            >
                                                                  <option>Select Category</option>
                                                                  <option value="food">Food</option>
                                                                  <option value="transport">Transport</option>
                                                                  <option value="housing">Housing</option>
                                                                  <option value="medical">Medical</option>
                                                                  <option value="personal">Personal Spendings</option>
                                                                  <option value="insurance">Insurance</option>
                                                            </Form.Select>
                                                      </Col>
                                                </Row>
                                                <Row>
                                                      <div className='submit-button'>
                                                            <Button variant="primary" type='submit'>
                                                                  Submit
                                                            </Button>
                                                      </div>
                                                </Row>
                                          </Form>
                                    </div>
                              </div>
                        </Col>
                  </Row>
            </div>
      )
}

export default ExpensiveForm;