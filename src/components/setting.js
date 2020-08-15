import React, { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap";



function Setting() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    alert(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">

          <Form.Row>
            <Form.Label column="lg" lg={2}>Notify 名稱</Form.Label>

            <Col>
              <Form.Control type="text" placeholder="Enter Name" />

            </Col>

          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">

          <Form.Row>
            <Form.Label column="lg" lg={2}>Notify Token</Form.Label>

            <Col>
              <Form.Control type="password" placeholder="Enter Token" />

            </Col>

          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default Setting