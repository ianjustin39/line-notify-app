import React, { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap";



function Setting() {
  const [token, setToken] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [status, setStatus] = useState(false);

  const test = (event) => {
    const checkStatus = status ? false : true
    setStatus(checkStatus)

    console.log(checkStatus)
  }

  const handleSubmit = (event) => {

    if (!status) {
      alert("請確認輸入資料正確並打勾");
      return;
    }
    console.log('sss')

    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

  };


  return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">

          <Form.Row>
            <Form.Label column="lg" lg={2}>Notify 名稱</Form.Label>

            <Col>
              <Form.Control 
              type="text" 
              placeholder="Enter Name" 
              onChange={(event) => {
                setServiceName(event.target.value);
              }}/>
            </Col>

          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">

          <Form.Row>
            <Form.Label column="lg" lg={2}>Notify Token</Form.Label>

            <Col>
              <Form.Control 
              type="password" 
              placeholder="Enter Token" 
              onChange={(event) => {
                setToken(event.target.value);
              }}/>

            </Col>

          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check 
          required
          type="checkbox" 
          label="Check me out" 
          onChange={(event) => {
            test(event);
            // setStatus(event.target.value);
          }}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default Setting