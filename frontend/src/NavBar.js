import React from "react";
import Title_logo from "./img/title.png";
import { Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';


import "./css/Navbar.scss"

const NavBars = () => {
  

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><img src={Title_logo} width="150px" class="d-inline-block align-text-top" alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <Nav.Link href="/dicerec">Dice-Rec</Nav.Link>
      <Nav.Link href="/timeLine/nationInfo?nation=South Korea&nationCode=kr">TimeLine</Nav.Link>
      <NavDropdown title="Data-Analysis" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/DataComparison">Data-Comparison</NavDropdown.Item>
        <NavDropdown.Item href="/GenreAnalysis/nationInfo?nation=South Korea&nationCode=kr">Genre-Analysis</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey={2} href="/makers">
        Makers
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBars;