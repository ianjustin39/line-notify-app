import React, { useState, useEffect } from 'react';
import { Form, Button, Col } from "react-bootstrap";

const fs = global.file;

function SendNotify() {
  const [token, setToken] = useState("");
  const [notify, setNotify] = useState("");
  const [services, setServices] = useState(<option>請點擊取得服務</option>);

  const handleSubmit = async (event) => {

    alert(token + " " + notify)

  };
  useEffect(() => {
    getServiceList();
  });

 const getServiceList = () => {
    const array = [];
    let dataArr = [];
    fs.readFile("./data/data.json", (err, data) => {
      if (err) alert(err);

      if (data.length > 0) {
        dataArr = JSON.parse(data);
      }

      for (var i = 1; i <= dataArr.length; i++) {
        array.push(<option>{dataArr[i]}</option>)
      }
      
      setServices(dataArr.map(data => <option value={data.token}>{data.serviceName}</option>))
      return array
    });
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
              onChange={(event) => {
                setToken(event.target.value);
              }}>
              {services}
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
                setNotify(event.target.value);
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