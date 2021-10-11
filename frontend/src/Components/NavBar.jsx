import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const history = useHistory();

  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand
            onClick={() => {
              history.push({ pathname: "/" });
            }}
          >
            Covid-Mapflix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  history.push({ pathname: "/covid" });
                }}
              >
                IMPACT OF COVID-19
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  history.push({ pathname: "/genre" });
                }}
              >
                GENRE ANALYSIS
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  history.push({ pathname: "/dice" });
                }}
              >
                DICE REC
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  history.push({ pathname: "/makers" });
                }}
              >
                MAKERS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
