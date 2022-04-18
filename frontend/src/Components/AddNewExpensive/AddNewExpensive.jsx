import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';


const AddNewExpensive = () => {

 const [name, setName] = useState("");
 const [type, setType] = useState("");
 const [date, setDate] = useState("");
 const [amount, setAmount] = useState("");
 const [category, setCategory] = useState("");

 const onFormSubmit = e => {
      e.preventDefault();
      let formData = {
            name: name,
            type: type,
            date: date,
            amount: amount,
            category: category
      }
      console.log(formData);
      setName("");; setType(""); setDate(""); setAmount(""); setCategory("");
    }

      return (
            <div>
                  <Row>
                        <Col>
                              <div className="sub-heading">
                                    <h1> Add Expensive </h1>
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
                                                                  onChange={({target:{value}}) => setName(value)} 
                                                                  />
                                                            </Form.Group>
                                                      </Col>
                                                </Row>
                                                <Row>
                                                      <Col>
                                                            <Form.Label>Type</Form.Label>
                                                            <Form.Select 
                                                                  aria-label="Type"
                                                                  onChange={(e) => setType(e.target.value) }
                                                            >
                                                                  <option>Select Type</option>
                                                                  <option value="income">Income</option>
                                                                  <option value="expensive">Expensive</option>
                                                            </Form.Select>
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
                                                                   onChange = {(e)=> setDate(e.target.value)}
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
                                                                        onChange = {(e)=> setAmount(e.target.value)}
                                                                  />
                                                            </Form.Group>
                                                      </Col>
                                                </Row>
                                                <Row>
                                                      <Col>
                                                      <Form.Label>Category</Form.Label>
                                                            <Form.Select aria-label="Type" onChange={(e) => setCategory(e.target.value) }>
                                                                  <option>Select Category</option>
                                                                  <option value="income">Income</option>
                                                                  <option value="expensive">Expensive</option>
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

export default AddNewExpensive