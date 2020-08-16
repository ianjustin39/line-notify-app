import React, { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap";

const fs = global.file;

function Setting() {
  const [token, setToken] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [status, setStatus] = useState(false);

  const clickCheckbox = (event) => {
    const checkStatus = status ? false : true
    setStatus(checkStatus)

    console.log(checkStatus)
  }

  const handleSubmit = async () => {

    if (!status) {
      alert("請確認輸入資料正確並打勾");
      return;
    }

    if (token && serviceName) {

      const path = './data/data.json';
      const inputDataArr = [];
      let outputDataArr = [];

      const inputData = {
        serviceName: serviceName,
        token: token
      }

      inputDataArr.push(inputData)

      await fs.readFile(path, (err, data) => {
        if (err) alert(err);

        if (data.length > 0) {
          outputDataArr = JSON.parse(data);
        }

        const insertData = JSON.stringify(inputDataArr.concat(outputDataArr));
        
        fs.writeFile(path, insertData, (err) => {
          if (err) throw err;
          alert('Data written to file');
        });
      });
    }

  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">

        <Form.Row>
          <Form.Label column="lg" lg={2}>Notify 名稱</Form.Label>

          <Col>
            <Form.Control
              required
              type="text"
              placeholder="Enter Name"
              onChange={(event) => {
                setServiceName(event.target.value);
              }} />
          </Col>

        </Form.Row>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">

        <Form.Row>
          <Form.Label column="lg" lg={2}>Notify Token</Form.Label>

          <Col>
            <Form.Control
              required
              type="password"
              placeholder="Enter Token"
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
          onChange={(event) => {
            clickCheckbox(event);
            // setStatus(event.target.value);
          }} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
  );
}

export default Setting