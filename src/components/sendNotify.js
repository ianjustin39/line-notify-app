import React, { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap";



function SendNotify() {
  const [token, setToken] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = async (event) => {

    if (!status) {
      alert("請確認輸入資料正確並打勾");
      return;
    }


  };

  const getServiceList = () => {
    const array = []

    for (var i = 1; i <= 10; i++) {
      array.push(<option>{i}</option>)
    }
    return array
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">

        <Form.Row>
          <Form.Label column="lg" lg={2}>Notify 名稱</Form.Label>

          <Col>
            <Form.Control
              required
              as="select"
              placeholder="Enter Name"
              onChange={(event) => {
                setServiceName(event.target.value);
              }}>
              {getServiceList()}
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">

        <Form.Row>
          <Form.Label column="lg" lg={2}>Notify 內容</Form.Label>

          <Col>
            <Form.Control
              required
              as="textarea"
              placeholder="Enter Message"
              rows="8"
              onChange={(event) => {
                setToken(event.target.value);
              }} />

          </Col>

        </Form.Row>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          required
          type="checkbox"
          label="Check me out"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SendNotify