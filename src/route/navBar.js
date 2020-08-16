import React, { useState } from "react";
import { Navbar, Nav} from "react-bootstrap";

function MyNavBar() {

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="#sendNotify">Send Notify</Nav.Link>
      <Nav.Link href="#setting">Setting</Nav.Link>
      <Nav.Link href="#description">Description</Nav.Link>
    </Nav>
  </Navbar>
  </>
  );
}

export default MyNavBar;