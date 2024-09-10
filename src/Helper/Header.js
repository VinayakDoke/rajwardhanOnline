import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
function Header() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary sticky-top custom-navbar-shadow">
      <Container>
        <Navbar.Brand  as={Link} to="/">RajwardhanOnline</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Courses" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">GEM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               PWD
              </NavDropdown.Item>
 
            </NavDropdown>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;